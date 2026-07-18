system_prompt = """
You are an expert synthetic chemist specialized in writing chemical synthesis procedures. 
You will have to write a synthesis procedure for a new reaction that you want to perform.

The reaction has not been performed before, but you know that both reagents in the binary reaction
have performed the specific reaction previously with a second different reagent. As a starting point,
you will have the procedures for these previous reactions.

You will have to write a procedure for the new reaction based on the procedures of the previous reactions, 
taking into account the specific reagents and conditions to have the highest chance of succesfully performing
the new reaction.
"""


clean_procedure_prompt = """
You are an expert synthetic chemist specialized in writing chemical synthesis procedures. 
You will have to write a synthesis procedure for a new reaction that you want to perform.

The reaction has not been performed before, but you know that both reagents in the binary reaction
have performed the specific reaction previously with a second different reagent. As a starting point,
you will have the procedures for these previous reactions.

You will have to write a procedure for the new reaction based on the procedures of the previous reactions, 
taking into account the specific reagents and conditions to have the highest chance of succesfully performing
the new reaction.


You want to perform a BuchwaldHartwig reaction. With the following reagent:
```
reagent one:
tert-butyl 2-chloropyrimidine-4-carboxylate 

reagent two:
1-(4-aminophenyl)-3-[3-(trifluoromethyl)phenyl]urea
```


Previously the reagents were reported to perform BuchwaldHartwig under the following conditions:
```
reagents one was recorded to react under following conditions:
```
Synthesis of 2-(( R )-4-benzyl-2-methylpiperazin-1-yl)- N -(( E
)-5-hydroxyadamantan-2-yl)pyrimidine-4-carboxamide [604] [605] Step 1: Synthesis
of ( R )-tert-butyl 2-(4-benzyl-2-methylpiperazin-1-yl)pyrimidine-4-carboxylate
[606] Tert-butyl 2-chloropyrimidine-4-carboxylate (4.12 g, 19.2 mmol) and
(R)-1-benzyl-3-methylpiperazine (1.83 g, 9.6mmol) were suspended in acetonitrile
(50 ml), followed by addition of N,N-diisopropylethylamine (3.34 ml, 19.2 mmol),
and then the resulting liquid was heated at reflux under nitrogen stream for 15
hours. The resulting reaction liquid was concentrated, followed by addition of
distilled water (50 ml), and then extracted with MC (100 ml x 2). The organic
layer was dried over anhydrous sodium sulfate, followed by filtration and
concentration, and then the residue thus obtained was subjected to MPLC (1%
MeOH/MC), to obtain 3.34 g of yellow solid (94%).
```

reagents two was recorded to react under following conditions:
```
In ethyl acetate; N,N-dimethyl-formamide at 20℃;
```
```

To resolve the ambiguities feel free to use this knowledge if helpful.
Ambiguities that are typically found in chemical synthesis procedures are:
```
solution of strong acid in water: first add water to vessel, then add acid to vessel
reflux/ was refluxed/ ...: mixture should be heated to boiling point of the solvent while stirring,
A was dissolved in solvent B/a solution of x in y was prepared: Add A to vessel, then add B to vessel while stirring. Stir for some time afterwards before proceeding,
chemical was dissolved in solvent/ was dissolved/ ...: mixture should always be stirred for some time (so stir= True) after adding solvent,
pressure identical: in vacuo == under vacuum == under reduced pressure == solvent was evaporated == evcuated,
stirred vigorously: 1000 rpm,
stirred rapidly: 1000 rpm,
stirred: 300 rpm,
added rapidly == added,
added over X minutes == added dropwise,
temperature range (i.e. 80-90°C): one exact temperature should be given,
ambient temperature: 25°C,
room temperature: 25°C,
1 drop is equivalent to 0.05 mL,
overnight: 12 hours,
all times, temperature, pressure, and speed conditions should exactly quantified,
solution of A (solid) in B (solvent)/ dissolved in solvent: add solvent to vessel and stir for some time to allow for dissolution,
recrystallization/recrystallize: add solvent to vessel containing the solid and heat to boiling point of solvent, after strring for some time to allow for dissolution, cool to room temperature (unless otherwise stated). Subsequently evaporate to remove solvent (This means it should always be executed in a vessel that can be evaporated/dryed),
extracting or washing: There always needs to be a phase separation. This means that usually a aqueous and organic solvent are used.
```

Please do the following:
    1. Make sure everything is in english
    2. Write a synthesis procedure for the reaction you want to perform.
       - take into account all the information provided in the previous procedures.
       - make sure to include all the necessary steps to perform the reaction.
       - some reagents are sensitive to the exact conditions being used, ensure to take this into account.
    3. Replace all ambiguities with exact conditions, amounts, and times (where you know or can infer them).
       - it is extremely important that you can map out the
              procedure and give physical exactness to the procedure.
       - use the amount specified in the chemicals section to replace any ambiguous amounts if possible
    4. Make sure that amounts of chemicals are in the right format:
        - Amounts of  liquids are specified in a volume unit! 
        - Amounts of solids are specified in a mass unit!

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
{
    "procedure": "Rewritten procedure",
    "chemicals": [list of chemicals used in the procedure],
}
```
"""