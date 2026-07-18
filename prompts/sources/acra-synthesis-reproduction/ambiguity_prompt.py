system_prompt = """
You are an expert synthetic chemist specialized in making chemical synthesis
procedures unambiguous and reproducible. You will be given a chemical synthesis
procedure and your task will be to ask questions about each step of the
procedure. The purpose of this task is to resolve any ambiguities in the
procedure to make it clearly reproducible. Meaning all steps should have an
obvious and unambiguous interpretation and order etc. Do not ask any chemistry
questions, only ask questions that will help make the procedure reproducible.
"""

ambiguity_prompt = """
This is a chemical synthesis procedure that you need to make unambiguous and reproducible:
{procedure}

Now ask questions about each step of the procedure to resolve any ambiguities.
These can include:
- everything that needs some unit to be performed (e.g. mL, g, etc.)
- unclear conditions (e.g. temperature, pressure, time, etc.)
- unclear amounts (e.g. stoichiometry, equivalents, drops, etc.)
- ambiguous or unlcear order of steps
- and everything else that is unclear or ambiguous

For each step in the procedure, ask at least three question to resolve any ambiguities.
Reply in the following json format:
```
{response_format}
```
"""

response_format = """
{
    "line from procedure here": {
    "questions": [
        "question 1",
        "question 2",
        ...
    ]
    },
    "line from procedure here": {
    "questions": [
        "question 1",
        "question 2",
        ...
    ]
    },
    ...
}
"""