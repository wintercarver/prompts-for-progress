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
         All readgents have to be defined explicitly here as <Reagent> elements.
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
type, str, type of hardware (allowed values: reactor, filter, separator, rotavap, flask)
chemical, str, for cartridge and flask type only. For cartridge:Chemical packed in cartridge this name is used to refer to the cartridge in the procedure.

Examples:
<Component id="vessel1" type="reactor" />
<Component id="vessel2" type="rotavap" />
<Component id="vessel3" type="flask" chemical="chemical of the flask"/>
<Component id="vessel4" type="filter" />
<Component id="vessel5" type="separator" />
<Component id="vessel5" type="cartridge" chemical="MgSO4"/>
...
```

Component types:
reactor:
```
A vessel in which a chemical reaction is typically performed.
Can typically be heated, cooled, stirred, and purged, ....
If used to prepare a solution with a solid, the solution should be stirred for some time
to allow proper mixing.
Should NOT be used for evaporation, drying, washing, or separations.
```

rotavap:
```
A vessel in which a solvent is evaporated (this is the only component type that can be evaporated).
Typically used to remove solvent from a reaction mixture. Can be used to subsequently dry. 
The mixture has to be explicitly transferred to the rotavap vessel
before the evaporation step.
```

filter:
```
A vessel in which a mixture is filtered. Can also be used to wash a solid and 
subsequently dry it.
The mixture has to be explicitly transferred to the filter vessel
before the filtration step. This should correspond to the vessel attribute in a Filter step 
(Use with Filter step; not FilterThrough)
```

separator:
```
A vessel (typically separatory funnel) in which two phases are separated.
The mixture has to be explicitly transferred to the separator vessel
before the separation step. 
Note: It is important to always transfer the appropriate phase to the separator vessel in repeating washing/extractions.
The separation can only work if there are two phases in the vessel.
```

flask:
```
Can be used as a buffer flask for separations. Otherwise, it is a general purpose vessel.
No reactions can be performed in this vessel.
If used to prepare a solution with a solid, the solution should be stirred for some time
to allow proper mixing.
```

cartridge:
```
A vessel in which a solid is packed e.g. MgSO4 or Na2SO4. Usually used to filtrate through or to dry over this solid.
Can not be specified as a `from_vessel`, `to_vessel`, or `vessel` attribute. Should be used in the `through` attribute of the FilterThrough step.
The drying agent (MgSO4, Na2SO4) IS ALREADY PACKED in the cartridge and should be mentioned with the .
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
Liquid Handling: Add, Separate, Transfer,
Stirring: StartStir, Stir, StopStir,
Temperature Control: HeatChill, HeatChillToTemp, StartHeatChill, StopHeatChill
Inert Gas: EvacuateAndRefill, Purge, StartPurge, StopPurge
Filtration: Filter, FilterThrough, WashSolid
Special: Wait
Other: CleanVessel, Dissolve, Dry, Evaporate,
Precipitate, RunColumn
```

There is one special container tag that can be used in this language:
```
Repeat (<Repeat repeats="n"> ... </Repeat>)
```


NOTE: If a step is not noted down above, it is not part of the XDL language!

Version Migration:
```
This XDL documentation version 2.0. 
Occasionally, you might find steps called AddSolid, and PreperativeChromatography.
These steps are deprecated and should be replaced with Add and RunColumn respectively.
AddSolid -> Add
PreperativeChromatography -> RunColumn
```

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
Unless otherwise stated, mixtures should be stirred while adding reagents.
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

Separate (self closing tag):
```
Perform separation.
Typically used to separate two phases in a mixture in a Component of type separator. The mixture has to be explicitly transferred everytime to the separator vessel (<Transfer .../> step) before the separation
step unless the to_vessel attribute in a previous separation step is the same vessel again and contain the appropriate phase.
The waste_phase_to_vessel should always be defined.
If the waste phase is needed for subsequent steps (washing to extract any remaining product), define a vessel in waster_phase_to_vessel.
The product phase contains the `product` that is usually the desired product of the reaction dissolved in some solvent.
NOTE:
If previous step was also separate, the appropriate phase has to be transferred to the separator again!

EXAMPLES:
```
Example 1:
### if the product phase is the bottom phase (aqueous; higher density), the waste phase is the top phase (organic; lower density), and waste phase (organic phase) is needed for 3 steps subsequent washing with 20 mL of brine:
<Transfer from_vessel="reactor" to_vessel="separator" volume="all" />
<Separate purpose="extract" from_vessel="separator" separation_vessel="separator" to_vessel="flask_product" product_phase="bottom" waste_phase_to_vessel="separator"/> #  move contents of reactor (from_vessel), product will be stored in flask_product, waste stored in flask_waste
<Repeat repeats="3">
   <Transfer from_vessel="flask_waste" to_vessel="separator" volume="all" /> # move waste phase from_vessel="flask_waste" to separator for subsequent washing.
   <Separate purpose="wash" from_vessel="separator" separation_vessel="separator" to_vessel="flask_product" waste_phase_to_vessel="flask_waste" solvent="brine" solvent_volume="20 mL" product_phase="bottom" /> # from_vessel="separator" is set to itself because contents are already in the right component (transfer before), otherwise set to component were to transfer from wash waste phase with brine. Combined product stored in flask_product, waste stored in flask_waste
</Repeat>
<Transfer from_vessel="flask_product" to_vessel="..." volume="all"/> # Combined product phases is in flask_product and can be transferred/used for subsequent steps.
###

Example 2:
### if the product phase is the top phase (aqueous; lower density), the waste phase is the bottom phase (organic; higher density), and waste phase is needed for 3 steps subsequent washing with 20 mL of brine:
<Transfer from_vessel="reactor" to_vessel="separator" volume="all" />
<Separate purpose="extract" from_vessel="separator" separation_vessel="separator" to_vessel="flask_product" product_phase="top" waste_phase_to_vessel="flask_waste"/> #  move contents of reactor (from_vessel), product will be stored in flask_product, waste stored in flask_waste
<Repeat repeats="3">
   <Transfer from_vessel="flask_waste" to_vessel="separator" volume="all" /> # move waste phase from_vessel="flask_waste" to separator for subsequent washing.
   <Separate purpose="wash" from_vessel="separator" separation_vessel="separator" to_vessel="flask_product" waste_phase_to_vessel="flask_waste" solvent="brine" solvent_volume="20 mL" product_phase="top" /> # from_vessel="separator" is set to itself because contents are already in the right component (transfer before), otherwise set to component were to transfer from. wash waste phase with brine. Combined product stored in flask_product, waste stored in flask_waste
</Repeat>
<Transfer from_vessel="flask_product" to_vessel="..." volume="all"/># Combined product phases is in flask_product and can be transferred/used for subsequent steps.
###

Example 3:
### if the product phase is the top phase (organic; lower density), the waste phase is the bottom phase (aqueous; higher density), and product phase is needed for 3 steps subsequent washing with 20 mL of brine:
<Transfer from_vessel="reactor" to_vessel="separator" volume="all" />
<Separate purpose="extract" from_vessel="separator" separation_vessel="separator" to_vessel="flask_product" product_phase="top" waste_phase_to_vessel="flask_waste"/> # move contents of reactor (from_vessel), product will be stored in flask_product, waste stored in flask_waste
<Repeat repeats="3"> 
   <Transfer from_vessel="flask_product" to_vessel="separator" volume="all" /> # move product phase from_vessel="flask_product" to separator for subsequent washing
   <Separate purpose="wash" from_vessel="separator" separation_vessel="separator" to_vessel="flask_product" waste_phase_to_vessel="flask_waste" solvent="brine" solvent_volume="20 mL" product_phase="top" /> # from_vessel="separator" is set to itself because contents are already in the right component (transfer before), otherwise set to component were to transfer from wash product phase with brine. Combined product stored in flask_product, waste stored in flask_waste
</Repeat>
<Transfer from_vessel="flask_product" to_vessel="..." volume="all"/> # Combined product phases is in flask_product and can be transferred/used for subsequent steps.
###

Example 4:
### if the product phase is the bottom phase (organic; lower density), the waste phase is the bottom phase (aqueous; higher density), and product phase is needed for 3 steps subsequent washing with 20 mL of brine:
<Transfer from_vessel="reactor" to_vessel="separator" volume="all" />
<Separate purpose="extract" from_vessel="separator" separation_vessel="separator" to_vessel="flask_product" product_phase="bottom" waste_phase_to_vessel="flask_waste"/> # move contents of reactor (from_vessel), product will be stored in flask_product, waste stored in flask_waste
<Repeat repeats="3">
   <Transfer from_vessel="flask_product" to_vessel="separator" volume="all" /> # move product phase from_vessel="flask_product" to separator for subsequent washing.
   <Separate purpose="wash" from_vessel="separator" separation_vessel="separator" to_vessel="flask_product" waste_phase_to_vessel="flask_waste" solvent="brine" solvent_volume="20 mL" product_phase="bottom" /> # from_vessel="separator" is set to itself because contents are already in the right component (transfer before), otherwise set to component were to transfer from wash product phase with brine. Combined product stored in flask_product, waste stored in flask_waste
</Repeat>
<Transfer from_vessel="flask_product" to_vessel="..." volume="all"/> # Combined product phases is in flask_product and can be transferred/used for subsequent steps.
###

Example 5:
### extract the product phase (aqueous) 3 times with a 30 ml of acetone:
<Transfer from_vessel="reactor" to_vessel="separator" volume="all" />
<Separate purpose="extract" from_vessel="separator" separation_vessel="separator" to_vessel="flask_product" product_phase="top" waste_phase_to_vessel="flask_waste" solvent="acetone" solvent_volume="30 mL"/> # move from reactor to separator, product will be stored in flask_product, waste stored in flask_waste
<Repeat repeats="2">
   <Transfer from_vessel="flask_product" to_vessel="separator" volume="all" /> # move product phase from flask_product to separator for subsequent exracting.
   <Separate purpose="extract" from_vessel="separator" separation_vessel="separator" to_vessel="flask_product" product_phase="top" waste_phase_to_vessel="flask_waste" solvent="acetone" solvent_volume="30 mL"/> # from_vessel="separator" is set to itself because contents are already in the right component (transfer before), otherwise set to component were to transfer from
</Repeat>
<Transfer from_vessel="flask_product" to_vessel="..." volume="all"/> # Combined product phases is in flask_product and can be transferred/used for subsequent steps.
```

format(Attribute Type Description)
purpose	str	'wash' or 'extract'. 'wash' means that product phase will not be the added solvent phase, 'extract' means product phase will be the added solvent phase. If no solvent is added just use 'extract'.
product_phase	str	'top' or 'bottom'. Phase that product will be in. Depends on the density of the individual phases.
from_vessel	vessel	Contents of from_vessel are transferred to separation_vessel and separation is performed.
separation_vessel	vessel	Vessel in which separation of phases will be carried out.
waste_phase_to_vessel vessel  Vessel to send waste phase to. If waste phase will be washed or extracted, the waste phase has to be send to the waste_phase_to_vessel and the product phase to another vessel that is not to_vessel.
to_vessel	vessel	Vessel to send product phase to. If the product phase will be washed or extracted, the product phase has to be send to the to_vessel. 
solvent reagent Optional. Solvent to add to separation vessel after contents of  from_vessel has been transferred to create two phases.
solvent_volume  float Volume of solvent to add.
through reagent Optional. Solid chemical to send product phase through on way to to_vessel, e.g. 'celite'.
repeats int Optional. Number of separations to perform.
stir_time float Optional. Time stir for after adding solvent, before separation of phases.
stir_speed  float Optional. Speed to stir at after adding solvent, before separation of phases.
settling_time float Optional. Time to allow phases to settle after stopping stirring, before separation of phases.
```

Transfer (self closing tag):
```
Transfer liquid from one vessel to another.
The quantity to transfer can be specified using either volume (liquid units) or amount (all accepted units e.g. ‘g’, ‘mL’, ‘eq’, ‘mmol’).
If in the previous step a solid was added to the vessel, the mixture should be stirred after the solid was added to ensure proper mixing.
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


Inert Gas:
The following steps are used to maintain an inert atmosphere in a vessel with
nitrogen (N2) or argon.
EvacuateAndRefill (self closing tag):
```
Evacuate (meaning pull vacuum) and refill vessel with inert gas.
format(Attribute	Type	Description)
vessel	vessel	Vessel to evacuate and refill.
gas	str	Optional.	Gas to refill vessel with. If not given use any available inert gas.
repeats	int	Optional. Number of evacuation/refill cycles to perform.
```

Purge (self closing tag):
```
Purge liquid by bubbling gas through it.
For example to remove oxygen from a reaction mixture. 
format(Attribute	Type	Description)
vessel	vessel	Vessel containing liquid to purge with gas.
gas	str	Optional. Gas to purge vessel with. If not given use any available inert gas.
time	float	Optional. Optional. Time to bubble gas through vessel.
pressure	float	Optional. Optional. Pressure of gas.
flow_rate	float	Optional. Optional. Flow rate of gas in mL / min.
```

StartPurge (self closing tag):
```
Used to maintain inert atmosphere in a vessel with nitrogen (N2) or argon.
For permanent purging, until StopPurge is exectued.
Start purging liquid or the entire component (reactor) by bubbling gas through it. Will continue until StopPurge is performed.
format(Attribute	Type	Description)
vessel	vessel	Vessel containing liquid to purge with gas.
gas	str	Optional. Gas to purge vessel with. If not given use any available inert gas.
pressure	float	Optional. Pressure of gas.
flow_rate	float	Optional. Flow rate of gas in mL / min.
```

StopPurge (self closing tag):
Should always be executed after StartPurge once inert atmosphere is no longer needed.
```
Stop purging liquid by bubbling gas through it.
format(Attribute	Type	Description)
vessel	vessel	Vessel to stop bubbling gas through.
```

Filteration:
Filter (self closing tag):
```
Filter mixture to remove solid, or remove liquid depending on synthesis. 
Different from FilterThrough, this step is used to filter a mixture in a Component of type filter.
The mixture has to be explicitly transferred to the Component filter (<Transfer from_vessel=... to_vessel=filter_vessel .../> step) before the filtration step.
format(Attribute	Type	Description)
vessel vessel Vessel (Component of type filter) containing mixture to filter.
filtrate_vessel vessel Optional. Vessel to send filtrate to. If not given,
   filtrate is sent to waste. This os the vessel where the liquid phase will be transferred to. The solid phase will remain in the filter vessel.
stir bool Optional. Stir vessel while adding reagent. Will stop stirring at end of step. Use StartStir and StopStir for more control.e
stir_speed float Optional. Speed in RPM at which to stir at if stir is True.
temp float Optional. Temperature to perform filtration at. Defaults to RT.
continue_heatchill bool Optional. Only applies if temp is given. If True
   continue temperature control after step has finished. Otherwise stop temperature
   control at end of step.
volume float Optional. Volume of liquid to withdraw. If not given, volume should
   be calculated internally in the step.
```

FilterThrough (self closing tag):
```
Filter liquid through solid, for example filtering reaction mixture through celite.
Typically used to filter a mixture in a Component of type filter.
This step transfers the liquid from one vessel to another vessel while filtering through a drying agent (e.g. celite, NaSO4, or MgSO4) in a cartridge.
It is also used to remove water from a reaction mixture by filtering through a drying agent like MgSO4 (magnesium sulfat) or Na2SO4 (natrium sulfate).
This is typically done to dry a reaction mixture with a drying agent.
format(Attribute	Type	Description)
from_vessel vessel Vessel containing liquid to be filtered through solid chemical.
to_vessel vessel Vessel to send liquid to after it has been filtered through the solid chemical.
through reagent Solid chemical to filter liquid through (Should usually correspond to the chemical attribute of a cartridge).
eluting_solvent reagent Optional. Solvent to elute with.
eluting_volume float Optional. Volume of eluting_solvent to use.
eluting_repeats int Optional. Number of elutions to perform.
residence_time float Optional. Residence time of liquid in cartridge containing solid. If not given, default move speed is used.
```

WashSolid (self closing tag):
```
Usually used to wash a solid in a Component of type filter after a Filter step in which a solid remains in the filter component.

vessel vessel Vessel containing solid to wash.
solvent reagent Solvent to wash solid with.
volume float Volume of solvent to use.
filtrate_vessel vessel Optional. Vessel to send filtrate to. If None, filtrate is sent to waste.
temp float Optional. Temperature to apply to vessel during washing.
stir Union[bool, str] Optional. If True, start stirring before solvent is added and stop stirring after solvent is removed. If 'solvent', start stirring after solvent is added and stop stirring before solvent is removed. If False, do not stir at all.
stir_speed float Optional. Speed at which to stir at.
time float Optional. Time to wait for between adding solvent and removing solvent.
repeats int Optional. Number of washes to perform.
```

Special:
Wait  (self closing tag)
```
Wait for given time.
If stirring is relevant for subsequent steps use StartStir and StopStir, before and after Wait.
format(Attribute	Type	Description)
time	float	Time to wait for.
```

Repeat
```
Repeat children of this step repeats times.
format(Attribute	Type	Description)
repeats	int	Number of times to repeat children of this step.
Example:
<Repeat repeats="2">
    <Add vessel="vessel1" reagent="reagent1" volume="10 ml" />
    <HeatChill vessel="vessel1" temp="50 C" time="10 min" />
</Repeat>
```

Other:
CleanVessel (self closing tag):
```
Clean a vessel
format(Attribute	Type	Description)
vessel   vessel   Vessel to clean.
solvent  reagent  Solvent to clean vessel with.
volume   float    Optional. Volume of solvent to clean vessel with.
temp     float    Optional. Temperature to heat vessel to while cleaning.
repeats  int      Optional. Number of cleaning cycles to perform.
```


Dissolve (self closing tag):
```
Dissolve solid in solvent.
Other than in different steps, only stir_speed has to be set for stirring. The stir attribute does not exist.
format(Attribute	Type	Description)
vessel   vessel   Vessel containing solid to dissolve.
solvent  reagent  Solvent to dissolve solid in.
volume   float    Optional. Volume of solvent to use.
amount   str      Optional. amount of reagent to add in grams.
temp     float    Optional. Temperature to heat vessel to while dissolving solid.
time     float    Optional. Time to stir/heat for in order to dissolve solid. (Default 20 min)
stir_speed  float Optional. Speed in RPM at which to stir while dissolving solid.
```

Dry (self closing tag):
```
Dry solid.
Typically used to remove solvent from a solid in a Component of type rotavap or reactor. The solid has to be explicitly transferred to the rotavap vessel (<Transfer .../> step) before the drying step.
format(Attribute	Type	Description)
vessel   vessel   Vessel containing solid to dry.
time     float    Time to apply vacuum for. (Default: 1 hours)
pressure float    Optional. Vacuum pressure to use for drying.
temp     float    Optional. Temp to heat vessel to while drying.
continue_heatchill   bool    Optional. If True, continue heating after step has finished. If False, stop heating at end of step.
```

Evaporate (self closing tag):
```
Evaporate solvent.
Used to remove solvent from a mixture in a Component of type rotavap. The mixture has to be explicitly transferred to the rotavap vessel (<Transfer .../> step) before the evaporation step.
If exact temperature and pressure are unkown mode='auto' should always be used.
format(Attribute	Type	Description)
vessel   vessel     Vessel to evaporate solvent from. This should be a vessel of type rotavap.
mode     str        auto or manual. auto should always be used. If auto, automatic pressure/time evaluation built into the rotavap are used - no pressure or temperature should be given. If manual, given time/temp/pressure are used.
pressure float      Optional. Vacuum pressure to use for evaporation.
temp     float      Optional. Temperature to heat contents of vessel to for evaporation.
time     float      Optional. Time to evaporate for. (Default: 1 hours)
stir_speed  float   Optional. Speed at which to stir mixture during evaporation. If using traditional rotavap, speed in RPM at which to rotate evaporation flask.
```

Precipitate (self closing tag):
```
Cause precipitation by optionally adding a reagent, then changing temperature and stirring.
format(Attribute	Type	Description)
vessel   vessel   Vessel to heat/chill and stir to cause precipitation.
temp     float    Optional. Temperature to heat/chill vessel to.
time     float    Optional. Time to stir vessel for at given temp.
stir_speed  float Optional. Speed in RPM at which to stir.
reagent  str      Optional. Optional reagent to add to trigger precipitation.
volume   float    Optional. Volume of reagent to add to trigger precipitation.
amount   str      Optional. amount of reagent to add in grams to trigger precipitation.
add_time float    Optional. Time to add reagent over.
```

RunColumn (self closing tag):
```
Run column chromatography.
The exact column type does not have to be specified.

format(Attribute	Type	Description)
from_vessel vessel   Vessel to take sample from.
to_vessel   vessel   Time to elute to.
column      str      Name of the column.
```

There are NO other steps in the XDL language. If a step is not noted down above, it is not part of the XDL language!
"""