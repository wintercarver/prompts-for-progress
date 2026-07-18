common_ambiguities = """
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
"""


common_ambiguities_procedure = """
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
"""