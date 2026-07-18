steps = """
XDL files will follow XML syntax and consist of three mandatory sections:
Hardware, where virtual vessels that the reaction mixture can reside in are
declared. Reagents, where all reagents that are used in the procedure are
declared, and Procedure, where the synthetic actions involved in the procedure
are linearly declared.

XDL File Stub:
<XDL>
   <Synthesis>
      <Hardware>
         All hardware has to be defined explicitly here as <Component> elements.
         Can not be left out.
      </Hardware>

      <Reagents>
         All reagents have to be defined explicitly here as <Reagent> elements.
         Can not be left out.
      </Reagents>
      <Procedure>
         All steps have to be defined explicitly here.
         Can not be left out.
         Can refer to hardware and reagents by their id.
      </Procedure>
   </Synthesis>
</XDL>

Hardware:
```
All hardware has to be defined explicitly here as <Component .../> elements.
In general the <Transfer .../> (see below for definition) has to be used
to move the reaction mixture from one vessel to another. Often times
these transfers are implicit in the procedure, but they have to be
explicitly defined in the XDL file!
```

Component:
```
Each individual reagent, should be contained within their own vessels. Self closing tag.
Each Component used in the procedure has to be defined as a <Component .../> element.
format(Attribute, Type, Description)
id, str, Name of hardware
name, str, Name of hardware
type, str, type of hardware (allowed values: reactor, flask)
chemical, str, for flask type only.

Examples:
<Component id="vessel1" type="reactor" />
<Component id="vessel3" type="flask" chemical="chemical of the flask"/>
...
```

Component types:
reactor:
```
A vessel in which a chemical reaction is typically performed.
Can typically be heated, cooled, stirred, and purged, ....
```

flask:
```
Can be used as a buffer flask for separations. Otherwise, it is a general purpose vessel.
No reactions can be performed in this vessel.
```


Reagents:
```
The Reagents section contains Reagent elements with the props below.
Any reagents which were combined before the experiment should be combined as one
reagent before the procedure. (i.e. 'methanol acetone' = <Reagent
name='methanol acetone')
If the amount of a reagent in the procedure is given in grams (g) or similar, assume
that it is solid. If the amount is given a volume unit (mL or similar), assume that it is a
liquid.
```

Reagent:
```
Reagent used by procedure. Self closing tag.
format(Attribute, Type, Description)
name, str, Name of reagent
role str, Role of reagent (allowed values: solvent, reagent, catalyst, substrate, acid, base, activating-agent)
solid bool, Optional. If True, reagent is solid. Default False. (Should be True if amount is given in grams in the procedure)
```

Procedure:
```
All steps included in the Full Steps Specification may be given within the
Procedure block of a XDL file. Additionally, the Procedure block may be, but
does not have to be, divided up into Prep, Reaction, Workup and Purification
blocks, each of which can contain any of the steps in the specification.
```

Here is a list of self closing tags that can be used in this language:
```
Liquid Handling: Add, Transfer,
Stirring: StartStir, Stir, StopStir,
Temperature Control: HeatChill, HeatChillToTemp, StartHeatChill, StopHeatChill
Special: Wait
```

NOTE: If a step is not noted down above, it is not part of the XDL language!


Unit limits:
```
mass units: g|gram|grams|kg|kilogram|kilograms|mg|milligram|milligrams|ug|microgram|micrograms
liquid units: l|L|litre|litres|liter|liters|ml|mL|cm3|cc|milliltre|millilitres|milliliter|milliliters|cl|cL|centiltre|centilitres|centiliter|centiliters|dl|dL|deciltre|decilitres|deciliter|deciliters|ul|uL|microlitre|microlitres|microliter|microliters
amount units: g|gram|grams|kg|kilogram|kilograms|mg|milligram|milligrams|ug|microgram|micrograms
time units: days|day|h|hr|hrs|hour|hours|m|min|mins|minute|minutes|s|sec|secs|second|seconds
stir: boolean
stir_speed untis: rpm (float)
pressure units: mbar|bar|torr|Torr|mmhg|mmHg|atm|Pa|pa (limits are hardware dependent, typically down to 0 mbar)
temperature units: °C|F|K (limits are hardware dependent, typically -80°C to 250°C)
```

Format for all
```
All steps in the XDL language have the following format:
format(Attribute	Type	Description)
Attribute values should always be surrounded by double quotes.
```


Steps:
Liquid Handling:
Add (self closing tag):
```
Adds a single solid or liquid reagent to a vessel. Each reagent should be added in a separate step.
Reagent identity (ie liquid or solid) is determined by the solid Attribute of a reagent in the Reagent section.
The quantity of the reagent can be specified using either volume (liquid units) or amount (a mass unit).

In case a solid reagent is added, the mixture should be stirred after adding the
reagent to ensure proper mixing using the Stir step.

format(Attribute	Type	Description)
vessel	vessel	Vessel to add reagent to.
reagent	reagent	Reagent to add.
volume  float	Optional. Volume of reagent to add.
amount  str  Should always be given for solid materials. Amount of reagent to add in grams. In this case the solid attribute in the Reagent section should be true. 
dropwise    bool	Optional. Only for addition of liquid reagents, i.e. if a volume is given and not a mass. If True, add reagent dropwise. If False, add all at once.
time  float Optional. Time to add reagent over.
stir   bool	If True, stir the vessel after adding reagent. Will stop stirring at end of step. Use StartStir and StopStir for more control.
stir_speed  float	Optional. Speed in RPM at which to stir after adding reagent.
viscous bool   Optional. If True, add reagent dropwise and stir at the same time. If False, add all at once and stir.
purpose  str   Optional. Purpose of addition. If None assume that simply a reagent is being added. Roles of reagents can be specified in <Reagent> tag. Possible values: \"precipitate\", \"neutralize\", \"basify\", \"acidify\" or \"dissolve\".
```


Transfer (self closing tag):
```
Transfer liquid from one vessel to another.
The quantity to transfer can be specified using either volume (liquid units) or amount (all accepted units e.g. ‘g’, ‘mL’, ‘eq’, ‘mmol’).
Only use Transfer to move liquid from one vessel to another! 
Try to avoid using Transfer to move solid from one vessel to another and add them directly to the component where they are required.

format(Attribute	Type	Description)
from_vessel	vessel	Vessel to transfer liquid from.
to_vessel	vessel	Vessel to transfer liquid to.
volume float  Volume of liquid to transfer from from_vessel to to_vessel. If everything is to be transferred, set volume to 'all'.
amount str Optional. amount of reagent to add in grams.
time float Optional. Time over which to transfer liquid. May be used to transfer a liquid approximately dropwise.
viscous bool Optional. If True, adapt process to handle viscous liquid, e.g. use
   slower move speed.
rinsing_solvent reagent Optional. Solvent to rinse from_vessel with, and
   transfer rinsings to to_vessel.
rinsing_volume float Optional. Volume of rinsing_solvent to rinse from_vessel with.
rinsing_repeats int Optional. Number of rinses to perform.
solid bool Optional. Behaves like AddSolid if true. Default False.
```


Stirring:
StartStir (self closing tag):
```
Start stirring vessel. Executing this step will start stirring the vessel at the given speed.
Will continue stirring until StopStir is called.
For example to start stirring before adding reagents, or to start stirring after adding reagents.

format(Attribute	Type	Description)
vessel	vessel	Vessel to start stirring.
stir_speed float Optional. Speed in RPM at which to stir at.
```

Stir (self closing tag):
```
Stir vessel for defined time. Usefull for stirring after adding reagents, or creating a solution with a solid. 
In that case the mixture should be stirred for some time to ensure proper solution.
Should be used to fully solute a solid in a solvent before proceeding.
If stirring is relevant for subsequent steps use StartStir and StopStir.

format(Attribute	Type	Description)
vessel	vessel	Vessel to stir.
time	float	Time to stir vessel for.
stir_speed float Optional. Speed in RPM at which to stir at.
continue_stirring bool Optional. If True, leave stirring on at end of step.
   Otherwise stop stirring at end of step.
```

StopStir (self closing tag):
```
Stop stirring given vessel.

format(Attribute	Type	Description)
vessel	vessel	Vessel to stop stirring.
```


Temperature Control:
HeatChill (self closing tag):
```
Heat or chill a vessel to a given temp for a time. (Use this when continuation of heating or chilling is required for further steps or a time for heating or chilling
is defined in your procedure).
format(Attribute	Type	Description)
vessel	vessel	Vessel to heat or chill.
temp	float	Temperature to heat or chill vessel to.
time	float	Time to heat or chill vessel for.
stir bool Optional. If True, stir while heating or chilling. Will stop stirring at end of step. Use StartStir and StopStir for more control.
stir_speed float Optional. Speed in RPM at which to stir at if stir is True.
```

HeatChillToTemp (self closing tag):
```
Heat or chill vessel to a temperature and stop heating or chilling afterwards unless continue_heatchill is True. 
If you want to Heat or Chill for a specific time, use HeatChill or a combination of StartHeatChill and StopHeatChill.
format(Property	Type	Description)
vessel	vessel	Vessel to heat or chill.
temp	float	Temperature to heat or chill vessel to.
active	bool	Optional. If True, actively heat or chill to temp. If False, allow vessel to warm or cool to temp.
continue_heatchill	bool	Optional. If True, leave heating or chilling on after steps finishes. If False, stop heating/chilling at end of step.
stir	bool Optional.	If True, stir while heating or chilling. Will stop stirring at end of step. Use StartStir and StopStir for more control.
stir_speed	float Optional.	Speed in RPM at which to stir at if stir is True.
```

StartHeatChill (self closing tag):
```
Start heating/chilling vessel. Will keep temperature until StopHeatChill is performed.
format(Property Type  Description)
vessel	vessel	Vessel to start heating/chilling.
temp	float	Temperature to heat or chill vessel to.
```

StopHeatChill (self closing tag):
```
Heat or chill vessel.
format(Property	Type	Description)
vessel	vessel	Vessel to stop heating/chilling.
```

Special:
Wait  (self closing tag)
```
Wait for given time.
If stirring is relevant for subsequent steps use StartStir and StopStir (or heating -> StartHeatChill ... StopHeatChill), before and after Wait.

format(Attribute	Type	Description)
time	float	Time to wait for.
```

There are NO other steps in the XDL language. If a step is not noted down above, it is not part of the XDL language!
"""