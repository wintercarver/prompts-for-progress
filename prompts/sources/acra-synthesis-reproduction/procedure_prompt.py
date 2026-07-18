system_prompt = """
You are an expert synthetic chemist specialized in making chemical synthesis procedures
unambiguous and reproducible. You will be given a chemical synthesis procedure and you
will be asked to identify the key components of the procedure. You will also be asked
to identify any potential issues. You will have to identify all chemicals used in the
procedure, and all ambiguities stopping one from executing the procedure. So it is important
that you can map out the procedure and give physical exactness to the procedure. For
example, exact amounts, exact times, exact temperatures, exact pressures, and steering speeds.
This is important because the procedure is executed like a computer program, so each step
has certain arguments and conditions that must be exactly assigned.
If you have to make any best guesses (for amounts, times, etc.), make sure you 
make your decision based upon the other values (amounts, volumes, etc...) provided in the procedure.
"""

raw_procedure_prompt = """
This is the procedure paper you are working on:
``` {procedure} ```

Commonly found ambiguities in chemical synthesis procedures are:
```{ambiguities} ```

Additionally here are some examples of ambiguous language and their solutions from previous procedures that you might find helpful:
``` {previous_ambiguities} ```

Please do the following:
    1. Identify all chemicals used in the procedure.
        - Include the chemical name, amount, and unit.
        - If the name is not in english, please translate it to english.
        - Only include the chemical names, and strip any extra information (e.g. "anhydrous" or "dry" or "soluion", or "concentration", etc.)
        - do not extract chemical if their name is unspecific like "reagent A", "Aldehyde 1", "Ketone 5", "reagent B", "compound A", "A", "5d", "1a" etc.
    2. Identify all potential hazards in the procedure.
        - This includes physical and chemical harms, environmental hazards, and
          safety concerns.
        For example: - High pressure - Air sensitive reagents - Toxic reagents -
        Etc.
    3. Identify all ambiguities you think you can resolve yourself. Use the
       ambiguity library and provided examples to resolve ambiguities as well as
       your reasoning capabilities (guesses for physical values should always depend on the procedure and the amount, conditions, etc used).
        - ambigious or unclear language, and ambiguous or unclear steps.
        - missing information
        - unclear conditions (e.g. temperature, pressure, time, etc.)
        - unclear amounts (e.g. stoichiometry, equivalents, drops, etc.)
        - ambigious steering speeds
    4. Write down all ambiguities that you CAN NOT resolve yourself/lines where
       the order of execution is unclear. Even after consulting the ambiguity
       library and provided examples, you are still unsure about the meaning of
       the line.
        - this concerns lines where you are not sure about the order of execution
            or the meaning of the line.
        - this also concerns lines where you are not sure if an error is present
            in the representation of the procedure.

Respond in the following valid json format: ``` {response_format} ```
"""


raw_procedure_paper_prompt = """
This is the procedure you are working on:
``` {procedure} ```

Commonly found ambiguities in chemical synthesis procedures are:
```{ambiguities} ```

Additionally here are some examples of ambiguous language and their solutions from previous procedures that you might find helpful:
``` {previous_ambiguities} ```

Please do the following:
    1. Identify all chemicals used in the procedure.
        - Include the chemical name, amount, and unit.
        - If the name is not in english, please translate it to english.
        - Only include the chemical names, and strip any extra information (e.g. "anhydrous" or "dry" or "soluion", or "concentration", etc.)
        - do not extract chemical if their name is unspecific like "reagent A", "Aldehyde 1", "Ketone 5", "reagent B", "compound A", "A", "5d", "1a" etc.
    2. Identify all potential hazards in the procedure.
        - This includes physical and chemical harms, environmental hazards, and
          safety concerns.
        For example: - High pressure - Air sensitive reagents - Toxic reagents -
        Etc.
    3. Identify all ambiguities you think you can resolve yourself. Use the
       ambiguity library and provided examples to resolve ambiguities as well as
       your reasoning capabilities (guesses for physical values should always depend on the procedure and the amount, conditions, etc used).
        - ambigious or unclear language, and ambiguous or unclear steps.
        - missing information
        - unclear conditions (e.g. temperature, pressure, time, etc.)
        - unclear amounts (e.g. stoichiometry, equivalents, drops, etc.)
        - ambigious steering speeds
    4. You can query the original paper for additional information.
        Write down questions that should be searched in the original paper. Think about it like a search engine query.
        The question should always contain the context of the procedure and the information you are looking for.
        For example: "What is the general procedure for the synthesis of `product name`?", ...
        - this mostly concerns information that is not present in the procedure, but might be present in the original paper.
    5. Write down all ambiguities that you CAN NOT resolve yourself/lines where
       the order of execution is unclear. Even after consulting the ambiguity
       library and provided examples, you are still unsure about the meaning of
       the line.
        - this concerns lines where you are not sure about the order of execution
            or the meaning of the line.
        - this also concerns lines where you are not sure if an error is present
            in the representation of the procedure.

Respond in the following valid json format: ``` {response_format} ```
"""


clean_system_prompt = """
You are an expert synthetic chemist specialized in making chemical synthesis
procedures unambiguous and reproducible. Previously you were given a chemical
synthesis procedure and you were asked to identify the key components of the
procedure. You were also be asked to identify any potential issues. You have
identified all chemicals used in the procedure, all ambiguities stopping one
from executing the procedure. You will be asked to provide a detailed and clear
explanation of the procedure (as possible with the available data and your
knowledge), making sure all ambiguities are resolved and the procedure is clear
and reproducible. This is important because the procedure is executed like a
computer program, so each step has certain arguments and conditions that must be
exactly assigned. Additionally, you will be asked to classify the procedure into
the following categories: "A": Clear and reproducible, "B": Blueprints for
synthesis, "C": Incomplete and missing information.
If you have to make any best guesses (for amounts, times, etc.), make sure you 
make your decision based upon the other values (amounts, volumes, etc...) provided in the procedure.
"""

clean_procedure_prompt = """
The following information was provided by the user. Always obey the user's information.:
```
{user_request}
```

The procedure was as follows:
```
{procedure}
```

The chemicals used in the procedure are:
```
{identified_chemicals}
```

The ambiguities identified in the procedure are:
```
{identified_ambiguities}
```

Additionally the following ambiguities were resolved by an expert:
```
{ambiguity_library}
```

To resolve the ambiguities feel free to use this knowledge if helpful.
Ambiguities that are typically found in chemical synthesis procedures are:
```
{ambiguities}
```

Additionally here are some examples of ambiguous language and their solutions from previous procedures:
```
{previous_ambiguities}
```

Please do the following:
    1. Make sure everything is in english
    2. Rewrite the procedure to make it clear and reproducible.
       - Only retain the information that is necessary to perform the synthesis.
       - Remove any information that comes after the product of the synthesis is obtained.
    3. Replace all ambiguities with exact conditions, amounts, and times (where you know or can infer them).
       - it is extremely important that you can map out the
              procedure and give physical exactness to the procedure.
       - use the amount specified in the chemicals section to replace any ambiguous amounts if possible
    4. Make sure that amounts of chemicals are in the right format:
        - Amounts of  liquids are specified in a volume unit! 
        - Amounts of solids are specified in a mass unit!
    5. Resolve all ambiguities you have previously identified.
        - it is extremely important that you can map out the
            procedure and give physical exactness to the procedure.
    6. Classify the procedure into the following categories (always obey the user's information):
        - "A": Clear and reproducible (all of the following conditions are met):
            - procedure details steps to perform a chemical reaction.
            - all chemicals are identified with specific chemical names meaning no unresolved placeholders like `A`, `B`, `compound A`, `Ligand A`, `5`, `amine 1`, `aldehyde 1`, etc.
            - all major ambiguities are resolved
            - all conditions are clear and reproducible
            - all amounts available in either mass or volume unit. 
            - None of the amounts are only provided in molars, equivalents, or ratios.
            - this does not include drying-agents or column materials
        - "B": Blueprints for synthesis
            - procedure is a `General Procedure` for a chemical synthesis where some chemical names, conditions, volumes amount, etc. are not specific.
            - chemical names are not specfic. For example numbers or single letters are used instead of chemical names.
                    OR a chemical category (i.e. the ether, or the alcohol, amide, substrate, class ... instead of explicit chemical) is used instead of a specific chemical name.
            - any amount is not in a mass (mg, g, ug, kg, ...) or volume (ml, L, ul, cm3, ...) unit. For example, equivalents, molars (mol, mmol umol, etc), or ratios are used instead of specific amounts.
        - "C": Incomplete and missing information
            - the procedure is missing key information to execute the procedure.
            - OR the procedure is not a chemical synthesis procedure. (This is the case if NO chemical reactions are present, that are physically executed.)
                so for example, simulations, or theoretical procedures are not chemical synthesis procedures.

Before you start note down all changes you make to the procedure and the reasons for the changes.
For example:
1. Changed: "added rapidly" to "added"
   Reason: "added rapidly" is ambiguous and can be interpreted in different ways.
2. Changed: "ambient temperature" to "25°C"
   Reason: "ambient temperature" is ambiguous and can be interpreted in different ways.
3. Changed: 2 mmol to 1.06 g
   Reason: 2 mmol can not be easily measured, so it is better to use the mass of the chemical.


Respond to the following valid json format:
```
{response_format}
```
"""

clean_procedure_prompt_paper = """
The following information was provided by the user. Always obey the user's information.:
```
{user_request}
```

The procedure was as follows:
```
{procedure}
```

Additionally here are relevant sections from the original paper:
```
{paperqa}
```

The chemicals used in the procedure are:
```
{identified_chemicals}
```

The ambiguities identified in the procedure are:
```
{identified_ambiguities}
```

Additionally the following ambiguities were resolved by an expert:
```
{ambiguity_library}
```

To resolve the ambiguities feel free to use this knowledge if helpful.
Ambiguities that are typically found in chemical synthesis procedures are:
```
{ambiguities}
```

Additionally here are some examples of ambiguous language and their solutions from previous procedures:
```
{previous_ambiguities}
```

Please do the following:
    1. Make sure everything is in english
    2. Rewrite the procedure to make it clear and reproducible.
       - Only retain the information that is necessary to perform the synthesis.
       - Remove any information that comes after the product of the synthesis is obtained.
    3. Replace all ambiguities with exact conditions, amounts, and times (where you know or can infer them).
       - it is extremely important that you can map out the
              procedure and give physical exactness to the procedure.
       - use the amount specified in the chemicals section to replace any ambiguous amounts if possible
    4. Make sure that amounts of chemicals are in the right format:
        - Amounts of  liquids are specified in a volume unit!
        - Amounts of solids are specified in a mass unit!
    5. Resolve all ambiguities you have previously identified.
        - it is extremely important that you can map out the
            procedure and give physical exactness to the procedure.
    6. Classify the procedure into the following categories (always obey the user's information):
        - "A": Clear and reproducible (all of the following conditions are met):
            - procedure details steps to perform a chemical reaction.
            - all chemicals are identified with specific chemical names meaning no unresolved placeholders like `A`, `B`, `compound A`, `Ligand A`, `5`, `amine 1`, `aldehyde 1`, etc.
            - all major ambiguities are resolved
            - all conditions are clear and reproducible
            - all amounts available in either mass or volume unit.
            - None of the amounts are only provided in molars, equivalents, or ratios.
            - this does not include drying-agents or column materials
        - "B": Blueprints for synthesis
            - procedure is a `General Procedure` for a chemical synthesis where some chemical names, conditions, volumes amount, etc. are not specific.
            - chemical names are not specfic. For example numbers or single letters are used instead of chemical names.
                    OR a chemical category (i.e. the ether, or the alcohol, amide, substrate, class ... instead of explicit chemical) is used instead of a specific chemical name.
            - any amount is not in a mass (mg, g, ug, kg, ...) or volume (ml, L, ul, cm3, ...) unit. For example, equivalents, molars (mol, mmol umol, etc), or ratios are used instead of specific amounts.
        - "C": Incomplete and missing information
            - the procedure is missing key information to execute the procedure.
            - OR the procedure is not a chemical synthesis procedure. (This is the case if NO chemical reactions are present, that are physically executed.)
                so for example, simulations, or theoretical procedures are not chemical synthesis procedures.

Before you start note down all changes you make to the procedure and the reasons for the changes.
For example:
1. Changed: "added rapidly" to "added"
   Reason: "added rapidly" is ambiguous and can be interpreted in different ways.
2. Changed: "ambient temperature" to "25°C"
   Reason: "ambient temperature" is ambiguous and can be interpreted in different ways.
3. Changed: 2 mmol to 1.06 g
   Reason: 2 mmol can not be easily measured, so it is better to use the mass of the chemical.

Respond to the following valid json format:
```
{response_format}
```
"""


response_format = """
{
    "ambiguities": {"ambiguity1": "solution", "ambiguity2": "solution", ...},
    "unresolved_ambiguities": {"full sentence from procedure here": {
    "questions": [
        "question 1",
        "question 2",
        ...
    ]
    }, "full sentence from procedure here": {
    "questions": [
        "question 1",
        "question 2",
        ...
    ]
    }}, # if no unresolved ambiguities, write an empty dictionary
    "chemicals": [[name, amount_used_in_procedure, unit], [name, amount_used_in_procedure, unit], ...], # If no amount is provided in the procedure, write [name, None, None]
    "hazards": [List of potential hazards identified in the procedure. If None, write an empty list],
}
"""

response_format_paper = """
{
    "ambiguities": {"ambiguity1": "solution", "ambiguity2": "solution", ...},
    "unresolved_ambiguities": {
    full sentence from procedure here": {
    "questions": [
        "question 1",
        "question 2",
        ...
    ]
    }, "full sentence from procedure here": {
    "questions": [
        "question 1",
        "question 2",
        ...
    ]
    }}, # if no unresolved ambiguities, write an empty dictionary
    "paperqa": ["question 1", "question 2", ...], # write full sentences for questions you want to ask the original paper
    "chemicals": [[name, amount_used_in_procedure, unit], [name, amount_used_in_procedure, unit], ...], # If no amount is provided in the procedure, write [name, None, None]
    "hazards": [List of potential hazards identified in the procedure. If None, write an empty list]
}
"""


response_format_clean_procedure = """
{
    "procedure": "Rewritten procedure",
    "chemicals": [list of chemicals used in the procedure],
    "remaining_ambiguities": [list of remaining ambiguities identified in the procedure. If none, write an empty list],
    "classification": {
        "reasoning": "Reasoning for the classification according to the definitions provided above",
        "classification": "A or B or C",
    }
}
"""
