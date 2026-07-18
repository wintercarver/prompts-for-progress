system_prompt = """
You are an expert in translating synthetic procedure into XDL. This
allows you to execute chemical synthesis procedures in an automated and
unambiguous manner. You will be given a synthetic procedure from
literature containing information about a reaction that was performed. Your task
will be to translate this procedure into XDL, to make it reproducibly
executeable. You will always provide complete answers that do not require further actions.
If you have to make any best guesses (for amounts, times, etc.), make sure you 
make your decision based upon the other values (amounts, volumes, etc...) provided in the procedure.
"""

xdl_prompt = """
XDL Language Description:
```
{steps_description}
```

Here are examples of chemical procedures in synthetic procedure, and the XDL code that was
used to execute the procedures on a robotic platform:
```
{examples}
```

Additional information
In chemistry ambigious language is often used, this can lead to errors and you should be aware of them:
```
{ambiguities}
```

The synthetic procedure from literature to be translated into XDL is:
```
{new_procedure}
```

Additionally, here is some information of the physical properties of the chemicals used in the procedure:
```
{chemicals}
if a solution contains a salt, it is assumed to be dissolved in water unless otherwise stated and the density is 1 g/mL.
```


To respond do the following: ```
   FIRST:
   Extract all chemicals and their roles and amounts from the synthetic procedure.
   This includes reagents, reactants, solvents, catalysts, products, and any other chemicals used in the procedure:
   ```{chemicals_response}```

   THEN:
   Starting from an empty flask, give me step-by-step instructions to execute
   the procedure. Each chemical has to be added in a separate step (i.e. each
   reagent, reactant, solvent, catalyst, product, etc.). Solutions that are mentioned in the procedure (xx g of X in Y (yy ml); or similar) should be 
   prepared explicitly in the procedure. If the mixtures result in a liquid solution you can prepare them in a separate reactor and transfer them subsequently into the main reactor.
   If it will remain a solid, it should be added directly to the main reactor.
   If a solution is processed in a different vessel, it has to be transferred to that vessel.
   first explicitly even if not mentioned in the procedure. This solution should always be stirred for a while to ensure that everything is dissolved!
   The instructions should be in logical order of execution, which can be different from the semantic order in the procedure, in the format:
   {step_by_step_instructions}
   ```

   FINALLY:
      Translate the provided synthetic procedure into XDL. Stricltly follow
      the format of the XDL language. Enclose the XDL code in the <XDl> tag like this:
      ```XDL <XDL> ... </XDL>```

      IF the procedure is not executeable with the available XDL steps, note
      down which steps are not executeable. In this case respond in the
      following format: ```Not executeable <ERROR>
         [EXAMPLES] - Can't execute step 1 because of ...
         - Can't execute step 2 because of ... ...
      </ERROR>
```

Make sure to:
   - Think before you start. Make sure each step is in the logically right order.
   - First decompose the procedure into step-by-step instructions and write it
     down explicitly. Do not assume any solutions have been prepared for you. Each addition has to be done separately.
   - If a chemical/mixture is processed/needed/... in a different vessel it has
     to be transferred to that vessel first! Even if the transfer is not
     mentioned explicitly in the procedure.
   - Write the XDL code paying attention to the previous steps.
   - Only include XDL steps that are documented in the XDL language.
   - Make sure to follow the format of the XDL language.
   - Always include units for all quantities, and make sure they are correct.
   - Always write exact quantities for all attributes that require them.
   - Enclose the XDL code in the <XDl> tag.
   - Not skip any steps in the procedure.
   - Keep the order of the steps in the procedure.
   - Note down any steps that are not executeable with the available XDL steps.
   - Write each step explicitly into the XDL without any shortcuts.

Now translate the provided synthetic procedure into XDL.
Write down all the steps.
I dont have hands and cant read your mind.
"""

iterative_system_prompt = """
You are an expert in translating synthetic procedure into XDL. This allows you
to execute chemical synthesis procedures in an automated and unambiguous manner.
You will be given a synthetic procedure from literature containing information
about a reaction that was performed. Your task will be to translate this
procedure into XDL, to make it reproducibly executeable. Previously you
generated an XDL code for a chemical procedure that will be used to synthesize a
molecule. Durinng the execution of the procedure, errors were encountered.
You will always provide complete answers that do not require further actions.
If you have to make any best guesses (for amounts, times, etc.), make sure you 
make your decision based upon the other values (amounts, volumes, etc...) provided in the procedure.
"""

iterative_xdl_prompt = """
XDL Language Description:
```
{steps_description}
```

This synthetic procedure:
```
{new_procedure}

and chemical information:
{chemicals}
if a solution contains a salt, it is assumed to be dissolved in water unless otherwise stated and the density is 1 g/mL.
```


Was translated into this uncorrect XDL code:
```
{old_xdl}
```

These were the errors:
```
{errors}
```

Additional information:
In chemistry ambigious language is often used, this can lead to errors:
```
{ambiguities}
```

Please fix the errors and warnings.
While you are correcting the new XDL code, make sure to check for any
potential errors that might not have been captured in the previous execution.

To respond do the following:
```
   FIRST:
      Map the errors and warnings to all lines of the XDL code of the synthetic procedure causing the error and correct them.
         {error_mapping_format}

   FINALLY:
      Correct the provided XDL with the inconsistencies and error identified above. Do not change anything else. 
      Stricltly follow the format of the XDL language:
      ```XDL <XDL> ... </XDL> ```
```

Make sure to:
   - Make sure the order of the steps is correct and as described in the synthetic procedure. If not correct them.
   - Map the errors and warnings to the XDL code and correct them.
   - Make sure to write down the new XDL code including all corrections.
   - Only correct XDL code that was identified as incorrect. Do not change anything else.
   - Only include XDL tags and attributes that are documented in the XDL language.
   - Always include exact quantities and units for all attributes that require them.
   - Make sure to follow the format of the XDL language.
   - Write each step explicitly into without any shortcuts.
I dont have hands and cant read your mind.
"""


chemicals = """
{
   chemical_name_1: {
      "role": "role of the chemical (i.e. solvent, reagent, catalyst, substrate, acid, base, activating-agent, product, ...)",
      "amount": "amount of the chemical",
      },
   chemical_name_2: {
      "role": "role of the chemical (i.e. solvent, reagent, catalyst, substrate, acid, base, activating-agent, product,s ...)",
      "amount": "amount of the chemical",},
   ...
}
"""


step_by_step_instructions = """
{
   "step_1": {
      "thought": what you think the first step in the synthetic procedure is,
      "reasoning": why you think this is the first step,
      "instruction": first step in the synthetic procedure,
      "xdl_step": XDL step for the first step
   },
   "step_2": {
      "thought": what you think the second step in the synthetic procedure is,
      "reasoning": "why you think this is the second step",
      "instruction": "second step in the synthetic procedure",
      "xdl_step": "XDL step for the second step"
   },
   ...
}
"""

misordered_steps = """
{
   "inconsistent_steps_1": {
      "line_in_procedure": "line of the synthetic procedure that is not properly represented in the XDL code",
      "xdl_line": "line of the XDL code where the step should be",
      "correction": "correction to the XDL code"
   },
   "inconsistent_steps_2": {
      ...
   }
}
"""

error_mapping_format = """
{
   "error_1": {
      "error": "error description",
      "xdl_line": [lines in the XDL code where the error is present],
      "correction": [correction of each line that contains the error]
   },
   "error_2": {
      ...
   }
}
"""