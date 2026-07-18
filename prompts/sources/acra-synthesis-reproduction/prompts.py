system_prompt = """
You are an expert synthetic chemist specialized extracting procedures from
scientific papers. You will be given a scientific paper and your task is to
extract all synthesis procedures. Only extract procedures that contain detailed
instructions to synthesize a molecule, do not include procedures or protocols
that do not detail the steps to synthesize a molecule (No simulation procedures
etc). Additionally you will have to fill in all abbreviations (especially
chemical names) in the procedure if possible from the context of the paper.
Never repeat the same information twice. Ignore any information that is not
related to chemical synthesis.
"""

procedure_scraper_prompt = """
This is a scientific paper that might contain procedures for synthesizing new compounds:
```
{paper}
```

To respond do the following:
    1. Extract chemical procedures with instructions to synthesize a molecule from the paper and fill in all abbreviations with their full names.
    2. Extract all chemical names (this includes, reagents, reactants, solvents, catalysts and products and every other chemical used in a procedures) and abbreviations from the paper and map them to their full names (only include each abrreviation once).
    3. Extract all analysis methods and data from the paper. This includes all methods used to analyse the synthesized compounds. (for example: NMR, IR, UV-Vis, Mass-Spec, etc.)
    4. Include all analysis data for the extracted methods. For example, NMR shifts if available, IR peaks, Mass-Spec peaks, etc.
    5. Extract any additional information that is relevant to the procedures. For example, any special or cirtical steps or sensitive conditions.
    6. Do not repeat yourself!
    
There might be no procedures in the paper.
Before you respond make sure to carefully read the paper, extract all relevant information, and carefully read the instructions.
Respond with the full procedure with all abbreviations filled in.
Use the following json format:
```
{response_format}
```

Only extract synthetic procedures for which a detaild procedure is given (i.e. the synthetic steps are given).
Never repeat the same information twice.
Do not abbreviate anything, I dont have hands and cannot look up the paper.
"""

# used when procedure is too long to fit in one prompt/SI is given
iterative_procedure_scraper_prompt = """
Previously you have extracted the following information for the following procedures:
```
{previous_response}
```

The next section of the paper is the following:
```
{paper}
```

Try to extract any information from the paper associated with the procedures:
    1. Extract chemical procedures with instructions to synthesize a molecule from the paper and fill in all abbreviations with their full names.
    2. Extract all not yet extracted chemical names (this includes, reagents, reactants, solvents, catalysts and products and every other chemical used in a procedures) and abbreviations from the paper and map them to their full names (only include each abrreviation once).
    3. Extract all not yet extracted analysis methods and data from the paper. This includes all methods used to characterize the synthesized compounds. (for example: NMR, IR, UV-Vis, Mass-Spec, etc.)
    4. Include all analysis data for the extracted methods. For example, NMR shifts if available, IR peaks, Mass-Spec peaks, etc.
    5. Extract all not yet extracted  any additional information that is relevant to the procedures. For example, any special or cirtical steps or sensitive conditions.
    6. Do not repeat yourself!

There might be no procedures in the paper.
Before you respond make sure to carefully read the paper, extract all relevant information, and carefully read the instructions.
Respond in the json following format:
```
{response_format}
```

Only extract synthetic procedures for which a detaild procedure is given (i.e. the synthetic steps are given).
Never repeat the same information twice.
Do not abbreviate anything, I dont have hands and cannot look up the paper.
"""

response_format = """
{
    ""
    "chemicals": {
        chemical_name: [abbreviation/synonym, abbreviation2/synonym2, ...,],
        chemical_name: [abbreviation/synonym, abbreviation2/synonym2, ...,],
        ...
    },
    "procedure_titles": [list of all chemical procedure titles in the paper],
    "procedure_texts": {
        "procedure_title": {"full_procedure_text": ..., "product": ..., "chemicals": [...], "purification": {purification_method: [purification_data], purification_method: [purification_data], ...} "yield": percentage_yield, "analysis": {analysis_method_name: [analysis_data], analysis_method_name: [analysis_data], ...}, "additional_info": [all relevant additional info]},
        "procedure_title": {"full_procedure_text": ..., "product": ..., "chemicals": [...], "purification": {purification_method: [purification_data], purification_method: [purification_data], ...} "yield": percentage_yield, "analysis": {analysis_method_name: [analysis_data], analysis_method_name: [analysis_data], ...}, "additional_info": [all relevant additional info]},
        ...
    },
}
"""

response_format_iterative = """
{
    ""
    "chemicals": {
        chemical_name: [abbreviation/synonym, abbreviation2/synonym2, ...,],
        chemical_name: [abbreviation/synonym, abbreviation2/synonym2, ...,],
        ...
    },
    "procedure_titles": [list of all chemical procedure titles in the paper],
    "procedure_texts": {
        "procedure_title": {"full_procedure_text": ..., "product": ..., "chemicals": [...], "purification": {purification_method: [purification_data], purification_method: [purification_data], ...} "yield": percentage_yield, "analysis": {analysis_method_name: [analysis_data], analysis_method_name: [analysis_data], ...}, "additional_info": [all relevant additional info]},
        "procedure_title": {"full_procedure_text": ..., "product": ..., "chemicals": [...], "purification": {purification_method: [purification_data], purification_method: [purification_data], ...} "yield": percentage_yield, "analysis": {analysis_method_name: [analysis_data], analysis_method_name: [analysis_data], ...}, "additional_info": [all relevant additional info]},
        ...
    },
}
"""
