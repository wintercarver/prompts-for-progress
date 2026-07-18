import os
import time
import json
import requests
import argparse
from typing import Any, Dict, List
from colorama import Fore, Style, init
from anthropic import Anthropic
from langchain_anthropic import ChatAnthropic
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
import google.generativeai as genai
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

# Initialize colorama
init(autoreset=True)

def parse_arguments():
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(description='AstroAgents - A Multi-Agent AI for Hypothesis Generation from Mass Spectrometry Data')
    
    # File settings
    parser.add_argument('--paper_context_file', type=str, default='paper_context.md',
                      help='Path to the paper context file')
    parser.add_argument('--input_prompt_file', type=str, default='prompt.txt',
                      help='Path to the input prompt file')
    
    # Model settings
    parser.add_argument('--llm_model', type=str, choices=['claude', 'gemini'], default='claude',
                      help='Choose the LLM model to use (claude or gemini)')
    parser.add_argument('--iterations', type=int, default=10,
                      help='Number of iterations to run')
    
    # API keys
    parser.add_argument('--anthropic_api_key', type=str, default='ANTHROPIC_API_KEY',
                      help='Anthropic API key')
    parser.add_argument('--google_api_key', type=str, default='GOOGLE_API_KEY',
                      help='Google API key')
    parser.add_argument('--semantic_scholar_api_key', type=str, default='SEMANTIC_SCHOLAR_API_KEY',
                      help='Semantic Scholar API key')
    
    return parser.parse_args()

# Parse command line arguments
args = parse_arguments()

# Settings from command line arguments
paper_context_file = args.paper_context_file
iterations = args.iterations
input_prompt_file = args.input_prompt_file
llm_model = args.llm_model

# API keys from command line arguments
ANTHROPIC_API_KEY = args.anthropic_api_key
GOOGLE_API_KEY = args.google_api_key
SEMANTIC_SCHOLAR_API_KEY = args.semantic_scholar_api_key

def read_astrobio_context() -> str:
    """
    Read and return the contents of paper_context_o1_mini.md file.
    """
    try:
        with open(paper_context_file, 'r') as file:
            return file.read()
    except Exception as e:
        print(f"{Fore.RED}Error reading {paper_context_file}: {e}{Style.RESET_ALL}")
        return ""

# Load astrobiology context
ASTROBIO_CONTEXT = read_astrobio_context()

if llm_model == 'claude':
    # Initialize the Anthropic Claude model
    llm = ChatAnthropic(
        anthropic_api_key=ANTHROPIC_API_KEY,
    model='claude-3-5-sonnet-20241022',
    temperature=0,
        max_tokens=8192
    )
elif llm_model == 'gemini':
    # Initialize the Google Gemini model
    genai.configure(api_key=GOOGLE_API_KEY)
    llm = ChatGoogleGenerativeAI(
        model='gemini-2.0-flash-001',
        google_api_key=GOOGLE_API_KEY,
        max_tokens=8192
    )
else:
    raise ValueError(f"Invalid LLM model: {llm_model}")

def semantic_scholar_snippet_search(query: str, limit: int = 5) -> List[Dict]:
    """
    Search for text snippets using Semantic Scholar API.
    """
    base_url = "https://api.semanticscholar.org/graph/v1/snippet/search"
    headers = {"x-api-key": SEMANTIC_SCHOLAR_API_KEY}
    params = {
        "query": query,
        "limit": min(limit, 1000)
    }
    try:
        response = requests.get(base_url, headers=headers, params=params)
        response.raise_for_status()
        data = response.json()
        results = []
        for snippet in data.get("data", []):
            result = {
                "paper_title": snippet.get("paper", {}).get("title", ""),
                "text": snippet.get("snippet", {}).get("text", ""),
                "score": snippet.get("score", 0)
            }
            results.append(result)
        return results
    except Exception as e:
        print(f"{Fore.RED}Error in Semantic Scholar snippet search: {e}{Style.RESET_ALL}")
        return []

# ------------------------------------------------------------------------------
# Define prompt templates

data_analyzer_prompt = PromptTemplate(
    input_variables=["input_data", "critic_feedback"],
    template="""
You are a sophisticated analytical scientist specializing in astrobiological data analysis, with deep expertise in meteorites. Your knowledge is based on but not limited to the following:

Background Context:
{astrobio_context}

Your tasks include:
1. Identifying significant patterns and trends in the dataset, especially PAH distributions and alkylation patterns.
2. Identifying possible environmental contamination in the samples, considering terrestrial vs. extraterrestrial signatures.
3. Highlighting unexpected or unusual findings, particularly regarding temperature indicators.
4. Comparing data subsets where relevant, especially between different meteorite classes.
5. MOST IMPORTANTLY: Incorporating critic feedback to guide your analysis.

Input Data:
{input_data}

Critic Feedback:
{critic_feedback}

Provide a refined analysis based on the above, with special emphasis on addressing critic feedback.
Pay particular attention to rewarded aspects and avoid patterns similar to criticized aspects.
"""
)

search_executor_prompt = PromptTemplate(
    input_variables=["query", "search_results"],
    template="""
You are a specialized literature review agent analyzing scientific literature search results.

Your tasks include:
1. Analyzing the search results provided below.
2. Extracting and synthesizing key insights.
3. Formatting your summary clearly and concisely.
4. Highlighting significant findings and noting any conflicting evidence.

Query:
{query}

Search Results:
{search_results}

Provide a well-organized summary addressing the query, key discoveries, research gaps, and include any relevant citations.
"""
)

# Updated Astrobio Scientist Prompt (now with agent_id and agent_instructions)
astrobio_scientist_prompt = PromptTemplate(
    input_variables=["agent_id", "agent_instructions", "analysis", "search_analysis", "critic_feedback", "input_data"],
    template="""
You are a sophisticated astrobiologist and prebiotic chemist specializing in meteoritic organic compounds.
You are Scientist {agent_id}. **Instructions**: {agent_instructions}

IMPORTANT: Only focus on the data that is assigned to you.

Your job is to:
1. Generate all hypotheses and conclusions from the **Input Data**.
2. You must be original and novel, while considering established formation mechanisms.
3. Make conclusions ONLY based on the **Input Data** and the **Instructions**.
4. DO NOT include GC or environmental contamination in your hypothesis, the user already knows about it.
5. DO NOT recommend any hypothesis about making the data better.

Background Context:
{astrobio_context}

**Input Data**:
{input_data}

Based on the above, generate new hypotheses and conclusions as necessary.
You must respond ONLY with a valid JSON object in the following format, with no additional text before or after:
{{
    "hypothesis": [
        {{
            "id": "Format it like H_one, H_two, etc.",
            "statement": "Explain the hypothesis fully and in detail here.",
            "key_datapoints": "List of compounds and samples that support the hypothesis, directly point to ID or compound/sample name.",
        }}
    ]
}}

Ensure the JSON is properly formatted.
"""
)

# Accumulator Scientist Prompt
accumulator_scientist_prompt = PromptTemplate(
    input_variables=["hypotheses_list", "input_data", "analysis", "search_analysis", "critic_feedback"],
    template="""
You are an expert astrobiologist and scientific reviewer tasked with evaluating multiple hypotheses generated by different astrobiology scientists. Your job is to combine concatenate the hypotheses and conclusions from the three scientists and discard any repetitive hypotheses.

You have received the following hypotheses from three separate scientists:
{hypotheses_list}

Your task is to:
1. Review each hypothesis critically
2. Concatenate the hypotheses and conclusions from the three scientists
3. Discard repetitive hypotheses
4. Make sure to include more than one hypothesis in the final hypothesis list
5. DO NOT include GC or environmental contamination in your hypothesis, the user already knows about it.
6. DO NOT recommend any hypothesis about making the data better.

Provide your response ONLY as a valid JSON object in the following format, with no additional text before or after:
{{
    "hypothesis": [
        {{
            "id": "Use a format like H_final_one, H_final_two, etc.",
            "statement": "Don't change the hypothesis statement",
            "key_datapoints": "Don't change the key datapoints",
        }}
    ]
}}

Ensure the JSON is properly formatted.
"""
)

# Planner Agent Prompt
planner_prompt = PromptTemplate(
    input_variables=["analysis", "critic_feedback", "input_data"],
    template="""
You are an experienced scientific planner and coordinator. Based on the data analysis provided below, your task is to delegate specific areas within the input data across a team of three scientists for in-depth exploration and investigation.

Input Data:
{input_data}

**Data Analysis:**
{analysis}

IMPORTANT: 
1. Just focus on the data analysis and divide the among three agents.
2. The agents are not able to run tools, they only generate hypotheses based on the area that you delegate to them.
3. Make sure to include the ID of the compounds in the task split.
3. DO NOT include GC or environmental contamination in your task split, the user already knows about it.
4. DO NOT assign any tasks about making the data better and doing further analysis.

Based on the above, provide specific instructions for each of the three scientists, clearly indicating what aspect of the data they should focus on. 

Your response must be ONLY a valid JSON object with the following format, with no additional text before or after:
{{
    "Agent1_instructions": "Detailed instructions for what Scientist 1 should focus on.",
    "Agent2_instructions": "Detailed instructions for what Scientist 2 should focus on.",
    "Agent3_instructions": "Detailed instructions for what Scientist 3 should focus on."
}}

Ensure the JSON is properly formatted.
"""
)

critic_prompt = PromptTemplate(
    input_variables=["hypothesis", "literature_review", "input_data"],
    template="""
You are an expert scientist in astrobiology and prebiotic chemistry, with deep expertise in PAH analysis and meteoritic organic chemistry.

Background Context:
{astrobio_context}

Your task is to provide a detailed, scientifically rigorous critique of the proposed hypothesis and the associated data analysis. Note that if the **hypotheses** are not exactly aligned with the data, you should discard the hypothesis and generate a new one.

Your critique must include:

1. Alignment with the data:
    - Assess the alignment of the hypothesis with the data.
    - Evaluate if the proposed mechanisms align with observed PAH distributions and temperature indicators.
    - Consider if the hypothesis accounts for both chemical and physical processes in meteorite parent bodies.
    - If the hypothesis is not exactly aligned with the data, you should discard it and generate a new one.

2. Scientific Evaluation:
   - Assess the theoretical foundations and empirical basis of each hypothesis.
   - Evaluate temperature constraints implied by PAH distributions.
   - Consider parent body processes like aqueous alteration.
   - Identify any assumptions that may not be well supported by the data.
   - Point out specific weaknesses in the data analysis or experimental design.

3. Integration with Literature:
   - Critically compare the hypothesis against current research findings.
   - Evaluate consistency with known PAH formation mechanisms.
   - Consider implications of PAH distributions for formation conditions.
   - Identify gaps in the existing literature that the hypothesis addresses or ignores.
   - Propose additional sources or studies that could reinforce or challenge the claims.

4. IMPORTANT: Novelty and originality are highly rewarded based on literature review. Punish **hypotheses** that are not novel or original.

5. Punish hypothesis statements that are vague and too general. Reward specific and detailed **hypotheses** based on the data and analysis.
6. Avoid suggesting any improvements to the input data. Only critique the **hypotheses**.

Input Data:
{input_data}

Literature Review:
{literature_review}

**Hypothesis**:
{hypothesis}

Provide your critique in a clear and structured format, ensuring that your comments are actionable and aimed at improving the hypothesis and data analysis.

Your scientific critique:
"""
)

# ------------------------------------------------------------------------------
# Initialize LLM chains for each agent

data_analyzer_chain = LLMChain(
    llm=llm,
    prompt=data_analyzer_prompt.partial(astrobio_context=ASTROBIO_CONTEXT),
    verbose=False,
    output_key="analysis"
)

search_executor_chain = LLMChain(
    llm=llm,
    prompt=search_executor_prompt,
    verbose=False,
    output_key="search_results"
)

# Create three astrobio scientist chains using the same prompt but with different agent_ids and instructions
astrobio_scientist_chain_1 = LLMChain(
    llm=llm,
    prompt=astrobio_scientist_prompt.partial(astrobio_context=ASTROBIO_CONTEXT),
    verbose=False,
    output_key="hypothesis"
)

astrobio_scientist_chain_2 = LLMChain(
    llm=llm,
    prompt=astrobio_scientist_prompt.partial(astrobio_context=ASTROBIO_CONTEXT),
    verbose=False,
    output_key="hypothesis"
)

astrobio_scientist_chain_3 = LLMChain(
    llm=llm,
    prompt=astrobio_scientist_prompt.partial(astrobio_context=ASTROBIO_CONTEXT),
    verbose=False,
    output_key="hypothesis"
)

accumulator_scientist_chain = LLMChain(
    llm=llm,
    prompt=accumulator_scientist_prompt,
    verbose=False,
    output_key="accumulated_hypothesis"
)

planner_chain = LLMChain(
    llm=llm,
    prompt=planner_prompt.partial(astrobio_context=ASTROBIO_CONTEXT),
    verbose=False,
    output_key="planning_instructions"
)

critic_chain = LLMChain(
    llm=llm,
    prompt=critic_prompt.partial(astrobio_context=ASTROBIO_CONTEXT),
    verbose=False,
    output_key="feedback"
)

# ------------------------------------------------------------------------------
# Helper functions

def process_search_results(query: str, limit: int = 5) -> str:
    """
    Process search results from Semantic Scholar and format them.
    """
    snippets = semantic_scholar_snippet_search(query, limit=limit)
    if not snippets:
        return "No relevant search results found."
    
    formatted_results = []
    for i, snippet in enumerate(snippets, 1):
        result = f"Result {i}:\n"
        result += f"Paper: {snippet['paper_title']}\n"
        result += f"Text Snippet:\n{snippet['text']}\n"
        result += f"Score: {snippet['score']}\n"
        result += "-" * 80 + "\n"
        formatted_results.append(result)
    
    return "\n".join(formatted_results)

def process_hypothesis_and_search(hypothesis_json: str) -> dict:
    """
    Process JSON hypothesis and perform searches for each one.
    """
    try:
        cleaned_json = hypothesis_json.strip()
        if cleaned_json.startswith("'") and cleaned_json.endswith("'"):
            cleaned_json = cleaned_json[1:-1]
        if cleaned_json.startswith('```json'):
            cleaned_json = cleaned_json[7:]
        elif cleaned_json.startswith('```'):
            cleaned_json = cleaned_json[3:]
        if cleaned_json.endswith('```'):
            cleaned_json = cleaned_json[:-3]
        cleaned_json = cleaned_json.strip()
        
        try:
            hypothesis_data = json.loads(cleaned_json)
        except json.JSONDecodeError as e:
            print(f"{Fore.RED}Initial JSON parsing failed, attempting fix...{Style.RESET_ALL}")
            cleaned_json = cleaned_json.replace("'", '"')
            hypothesis_data = json.loads(cleaned_json)
        
        if not isinstance(hypothesis_data, dict) or "hypothesis" not in hypothesis_data:
            raise ValueError("Invalid JSON structure: missing 'hypothesis' key")
        
        all_search_results = []
        for hypothesis in hypothesis_data["hypothesis"]:
            required_fields = ["statement"]
            missing_fields = [field for field in required_fields if field not in hypothesis]
            if missing_fields:
                print(f"{Fore.YELLOW}Warning: Hypothesis {hypothesis.get('id', 'unknown')} missing fields: {', '.join(missing_fields)}{Style.RESET_ALL}")
                continue
                
            query = hypothesis["statement"]
            hypothesis_id = hypothesis.get("id", f"H{len(all_search_results) + 1}")
            print(f"{Fore.YELLOW}Searching for hypothesis: {hypothesis_id}{Style.RESET_ALL}")
            
            formatted_results = process_search_results(query)
            executor_analysis = search_executor_chain.run({
                "query": query,
                "search_results": formatted_results
            })
            
            all_search_results.append({
                "hypothesis_id": hypothesis_id,
                "query": query,
                "analysis": executor_analysis
            })
            time.sleep(2)  # Rate limiting
        
        if not all_search_results:
            return {
                "search_results": [],
                "search_analysis": "No valid hypothesis found to process"
            }
        
        return {
            "search_results": all_search_results,
            "search_analysis": "\n\n===\n\n".join([
                f"Hypothesis {result['hypothesis_id']}:\n{result['analysis']}"
                for result in all_search_results
            ])
        }
    except (json.JSONDecodeError, ValueError) as e:
        error_msg = f"Error processing hypothesis: {str(e)}\nReceived content:\n{hypothesis_json[:500]}..."
        print(f"{Fore.RED}{error_msg}{Style.RESET_ALL}")
        return {
            "search_results": [],
            "search_analysis": f"Error processing hypothesis JSON format: {str(e)}"
        }
    except Exception as e:
        print(f"{Fore.RED}Unexpected error: {str(e)}{Style.RESET_ALL}")
        return {
            "search_results": [],
            "search_analysis": f"Unexpected error while processing hypothesis: {str(e)}"
        }

# ------------------------------------------------------------------------------
# Main Agentic System Function using state management

def agentic_system(input_data: str, iterations: int = 4) -> Dict[str, Any]:
    """
    Main function that orchestrates the agentic system.
    """
    print(f"\n{'='*50}")
    print(f"🔄 Starting Agentic System")
    print(f"{'='*50}\n")

    critic_feedback = ""  # Initialize empty critic feedback for first iteration

    for i in range(iterations):
        print(f"\n{'='*50}")
        print(f"🔄 Iteration {i+1} of {iterations}")
        print(f"{'='*50}\n")

        current_input = input_data

        # Step 1: Data Analysis (using critic feedback)
        print(f"{Fore.CYAN}🤖 Starting Data Analysis...{Style.RESET_ALL}")
        analysis = data_analyzer_chain.run({
            "input_data": current_input,
            "critic_feedback": critic_feedback
        })
        print(f"{Fore.GREEN}📊 Data Analyzer Output:{Style.RESET_ALL}\n{analysis}\n")
        os.makedirs('results_claude_sonnet_latest', exist_ok=True)
        with open(f'results_claude_sonnet_latest/analysis_iteration_{i}.txt', 'w') as file:
            file.write(f"📊 Data Analyzer Output:\n{analysis}\n")

        # Step 2: Planning - Instruct the 3 astrobio scientists
        print(f"{Fore.CYAN}📝 Generating Planning Instructions...{Style.RESET_ALL}")
        planning_instructions_json = planner_chain.run({
            "analysis": analysis,
            "critic_feedback": critic_feedback,
            "input_data": current_input
        })
        print(f"{Fore.BLUE}📝 Planner Instructions:{Style.RESET_ALL}\n{planning_instructions_json}\n")
        with open(f'results_claude_sonnet_latest/planning_instructions_iteration_{i}.txt', 'w') as file:
            file.write(f"📝 Planner Instructions:\n{planning_instructions_json}\n")
        try:
            planning_instructions = json.loads(planning_instructions_json.strip())
        except Exception as e:
            print(f"{Fore.RED}Error parsing planner instructions JSON: {e}{Style.RESET_ALL}")
            planning_instructions = {
                "Agent1_instructions": "Focus on temperature constraints and PAH distribution.",
                "Agent2_instructions": "Focus on formation mechanisms and aqueous alteration.",
                "Agent3_instructions": "Focus on parent body processes and pre-solar origins."
            }
    

        # Step 3: Hypothesis Generation by 3 Astrobio Scientists
        print(f"{Fore.CYAN}🧬 Generating/Updating hypotheses by 3 Scientists...{Style.RESET_ALL}")
        hypothesis_1 = astrobio_scientist_chain_1.run({
            "agent_id": "1",
            "agent_instructions": planning_instructions.get("Agent1_instructions", ""),
            "analysis": analysis,
            "search_analysis": "",  # Initially empty
            "critic_feedback": critic_feedback,
            "input_data": current_input
        })

        print(f"{Fore.MAGENTA}🧬 Scientist 1 hypothesis:{Style.RESET_ALL}\n{hypothesis_1}\n")
        with open(f'results_claude_sonnet_latest/hypothesis_1_iteration_{i}.txt', 'w') as file:
            file.write(f"🧬 Scientist 1 hypothesis:\n{hypothesis_1}\n")
        

        hypothesis_2 = astrobio_scientist_chain_2.run({
            "agent_id": "2",
            "agent_instructions": planning_instructions.get("Agent2_instructions", ""),
            "analysis": analysis,
            "search_analysis": "",
            "critic_feedback": critic_feedback,
            "input_data": current_input
        })
        print(f"{Fore.MAGENTA}🧬 Scientist 2 hypothesis:{Style.RESET_ALL}\n{hypothesis_2}\n")
        with open(f'results_claude_sonnet_latest/hypothesis_2_iteration_{i}.txt', 'w') as file:
            file.write(f"🧬 Scientist 2 hypothesis:\n{hypothesis_2}\n")
    

        hypothesis_3 = astrobio_scientist_chain_3.run({
            "agent_id": "3",
            "agent_instructions": planning_instructions.get("Agent3_instructions", ""),
            "analysis": analysis,
            "search_analysis": "",
            "critic_feedback": critic_feedback,
            "input_data": current_input
        })
        print(f"{Fore.MAGENTA}🧬 Scientist 3 hypothesis:{Style.RESET_ALL}\n{hypothesis_3}\n")
        with open(f'results_claude_sonnet_latest/hypothesis_3_iteration_{i}.txt', 'w') as file:
            file.write(f"🧬 Scientist 3 hypothesis:\n{hypothesis_3}\n")

        # Combine the three hypotheses into a JSON array string for the accumulator
        combined_hypotheses = json.dumps({
            "hypotheses_list": [hypothesis_1, hypothesis_2, hypothesis_3]
        })
        
        # Step 4: Accumulator Scientist consolidates the hypotheses
        print(f"{Fore.CYAN}🔄 Accumulating hypotheses...{Style.RESET_ALL}")
        accumulated_hypothesis = accumulator_scientist_chain.run({
            "hypotheses_list": combined_hypotheses,
            "input_data": current_input,
            "analysis": analysis,
            "search_analysis": "",
            "critic_feedback": critic_feedback
        })
        print(f"{Fore.MAGENTA}🔄 Accumulated Hypothesis:{Style.RESET_ALL}\n{accumulated_hypothesis}\n")
        with open(f'results_claude_sonnet_latest/accumulated_hypothesis_iteration_{i}.txt', 'w') as file:
            file.write(f"🔄 Accumulated Hypothesis:\n{accumulated_hypothesis}\n")

        # Step 5: Search Process based on accumulated hypothesis
        print(f"{Fore.CYAN}🎯 Initiating Search Process...{Style.RESET_ALL}")
        search_results = process_hypothesis_and_search(accumulated_hypothesis)
        print(f"{Fore.BLUE}🔍 Search Analysis:{Style.RESET_ALL}\n{search_results['search_analysis']}\n")
        with open(f'results_claude_sonnet_latest/search_analysis_iteration_{i}.txt', 'w') as file:
            file.write(f"🔍 Search Analysis:\n{search_results['search_analysis']}\n")

        # Step 6: Critic Feedback
        print(f"{Fore.CYAN}⚖️ Executing Scientific Critique...{Style.RESET_ALL}")
        critic_feedback = critic_chain.run({
            "hypothesis": accumulated_hypothesis,
            "literature_review": search_results["search_analysis"],
            "input_data": current_input
        })
        print(f"{Fore.RED}⚖️ Critic Feedback:{Style.RESET_ALL}\n{critic_feedback}\n")
        with open(f'results_claude_sonnet_latest/critic_feedback_iteration_{i}.txt', 'w') as file:
            file.write(f"⚖️ Critic Feedback:\n{critic_feedback}\n")

    return {
        "final_analysis": analysis,
        "final_accumulated_hypothesis": accumulated_hypothesis,
        "final_search_analysis": search_results["search_analysis"],
        "final_critic_feedback": critic_feedback
    }


if __name__ == "__main__":
    # Read the initial prompt from a file (adjust the file path as needed)
    with open(input_prompt_file, 'r') as file:
        prompt_text = file.read()

    # Run the agentic system using the input prompt and a specified number of iterations
    final_results = agentic_system(input_data=prompt_text, iterations=iterations)

    print("\n=== Final Results ===")
    print(f"Final Analysis:\n{final_results['final_analysis']}\n")
    print(f"Final Accumulated Hypothesis:\n{final_results['final_accumulated_hypothesis']}\n")
    print(f"Final Literature Review:\n{final_results['final_search_analysis']}\n")
    print(f"Final Critic Feedback:\n{final_results['final_critic_feedback']}\n")