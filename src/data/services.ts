// 12 services -> 12 pages at /services/[slug]/
// icon = key into the SVG icon set in src/components/ServiceIcon.astro

export interface Service {
  slug: string;
  name: string;
  short: string;        // card blurb
  icon: string;
  h1: string;
  intro: string[];      // paragraphs
  bullets: { title: string; body: string }[];
  faq: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: 'emergency-water-removal',
    name: 'Emergency Water Removal',
    short: 'Truck-mounted extraction gets standing water out fast, before it soaks into subfloor and drywall.',
    icon: 'extract',
    h1: 'Emergency Water Removal in the 209',
    intro: [
      'Standing water does its worst damage in the first 24 hours. Drywall wicks it up like a sponge, laminate swells, and the pad under your carpet turns into a reservoir that never dries on its own. The single most important thing you can do is get the water out fast, and that is a pump-and-extractor job, not a shop vac job.',
      'Call and a dispatcher connects you with a local crew running truck-mounted extraction. They pull standing water from floors, carpet, and pad, then map the moisture that you cannot see with meters and thermal imaging so nothing wet gets sealed up behind a wall.'
    ],
    bullets: [
      { title: 'Truck-mounted extraction', body: 'Hundreds of gallons per hour, far beyond what rental equipment or a wet vac can move.' },
      { title: 'Moisture mapping', body: 'Meters and thermal cameras find water inside walls, under cabinets, and below flooring.' },
      { title: 'Immediate mitigation', body: 'Crews set drying equipment on the first visit so damage stops getting worse tonight.' },
      { title: 'Documentation for your claim', body: 'Photos, moisture readings, and a scope of work your insurance adjuster can use.' }
    ],
    faq: [
      { q: 'How fast can someone get here?', a: 'Dispatch is 24/7 and crews are local to San Joaquin and Stanislaus Counties. Typical emergency response in Stockton, Modesto, Lodi, Tracy, and Manteca is a matter of hours, not next-day.' },
      { q: 'Should I try to remove the water myself first?', a: 'If it is safe, remove small items and mop what you can, but do not delay the call. Consumer equipment cannot extract water from pad, subfloor, or wall cavities, and that is where mold starts.' },
      { q: 'Is the water dangerous?', a: 'It depends on the source. Clean supply-line water is category 1, but water from drains, appliances, or outside flooding can carry contamination and should be handled with protective equipment.' }
    ]
  },
  {
    slug: 'flood-damage-cleanup',
    name: 'Flood Damage Cleanup',
    short: 'Storm and levee-country flooding cleanup for Delta-adjacent homes and Central Valley low spots.',
    icon: 'flood',
    h1: 'Flood Damage Cleanup in the Central Valley',
    intro: [
      'This is levee country. Between the Delta, the San Joaquin, the Calaveras, the Mokelumne, and the Tuolumne, homes across the 209 sit closer to water than most of California, and the atmospheric river storms of recent winters proved how fast a low spot, a failed sump, or an overwhelmed storm drain can put inches of water in a living room.',
      'Flood water counts as category 3, which means it can carry silt, sewage, fuel, and bacteria. Cleanup is more than drying: affected porous materials get removed, the structure gets cleaned and disinfected, and everything gets dried and verified with meter readings before rebuild starts.'
    ],
    bullets: [
      { title: 'Category 3 protocols', body: 'Outside flood water is treated as contaminated. Crews wear PPE, remove unsalvageable porous materials, and disinfect the structure.' },
      { title: 'Silt and debris removal', body: 'Valley flood water leaves sediment behind. It gets shoveled, extracted, and hauled out, not just dried in place.' },
      { title: 'Structural drying', body: 'Commercial air movers and dehumidifiers run until wood framing and slab hit dry-standard readings.' },
      { title: 'Rebuild coordination', body: 'Once dry, the same network can handle drywall, insulation, flooring, and paint.' }
    ],
    faq: [
      { q: 'My street floods every big storm. Can you help before it happens?', a: 'The crews we dispatch handle response, not levee work, but if water has entered your home even once, a call is worth it. Prior intrusions often leave hidden moisture and mold that shows up later.' },
      { q: 'Does insurance cover flood damage?', a: 'Standard homeowners policies usually exclude rising water from outside; that is separate flood insurance (NFIP or private). Water from a burst pipe or roof leak is typically covered. Crews document everything either way so you can pursue whatever coverage applies.' },
      { q: 'How long does flood cleanup take?', a: 'Extraction and demo of wet materials usually happens in the first day or two. Structural drying typically runs 3 to 5 days, verified daily with moisture readings.' }
    ]
  },
  {
    slug: 'sewage-cleanup',
    name: 'Sewage & Black Water Cleanup',
    short: 'Backed-up mains, overflowed toilets, and failed lines cleaned to biohazard standards.',
    icon: 'sewage',
    h1: 'Sewage Cleanup in Stockton, Modesto & the 209',
    intro: [
      'A sewage backup is not a mess, it is a biohazard. Black water carries bacteria, viruses, and parasites, and anything porous it touches, carpet, pad, drywall, particleboard cabinets, generally cannot be saved. Older neighborhoods across Stockton, Lodi, and Modesto run on aging clay and Orangeburg laterals, and root intrusion backups are one of the most common emergency calls in the Valley.',
      'Dispatched crews contain the affected area, extract sewage, remove contaminated materials, then clean, disinfect, and deodorize before drying the structure. Kids and pets stay out of the area until clearance.'
    ],
    bullets: [
      { title: 'Containment first', body: 'The affected area gets sealed off so contamination does not track through the rest of the house.' },
      { title: 'Safe removal and disposal', body: 'Contaminated porous materials are bagged and disposed of properly, not aired out and reinstalled.' },
      { title: 'Hospital-grade disinfection', body: 'Hard surfaces are cleaned and treated with antimicrobial products rated for category 3 water.' },
      { title: 'Odor elimination', body: 'HEPA air scrubbing and deodorization, because a house that smells like sewage is not done.' }
    ],
    faq: [
      { q: 'The toilet overflowed but it looks like mostly water. Is that still sewage?', a: 'Any water that has passed a toilet trap or come up a drain is treated as contaminated. Category 2 at best, category 3 if it contains waste. It is not a mop-and-forget situation.' },
      { q: 'Who fixes the actual pipe?', a: 'A plumber clears or repairs the line; restoration crews handle everything the sewage touched. Many callers need both, and dispatch can point you in the right direction.' },
      { q: 'Is sewage damage covered by insurance?', a: 'Many policies exclude sewer backup unless you carry a specific rider. Check for "water backup" coverage on your declarations page. Crews document the loss thoroughly either way.' }
    ]
  },
  {
    slug: 'burst-pipe-cleanup',
    name: 'Burst & Leaking Pipe Cleanup',
    short: 'Supply line failures, slab leaks, and pinhole leaks: extraction, drying, and damage repair.',
    icon: 'pipe',
    h1: 'Burst Pipe & Slab Leak Cleanup',
    intro: [
      'Central Valley water is hard, and hard water eats copper. Pinhole leaks in slab-built homes across Tracy, Manteca, and Lathrop can run for weeks before a warm spot on the floor or a spiking water bill gives them away. When a supply line lets go outright, a 1/2-inch pipe can put 50 gallons a minute into your house.',
      'First move: shut off water at the main. Then call. Crews extract, open up what has to be opened, and dry the structure. If the leak is under slab, they work alongside your plumber so leak detection, repair, and drying happen in the right order.'
    ],
    bullets: [
      { title: 'Fast extraction', body: 'Supply line water is clean but relentless. Getting it out fast is what saves floors and drywall.' },
      { title: 'Slab leak experience', body: 'Moisture mapping tells you how far water traveled under flooring before anyone starts cutting.' },
      { title: 'Targeted demolition', body: 'Only what is wet comes out. Flood cuts at the right height, not walls torn open on a guess.' },
      { title: 'Works with your plumber', body: 'Restoration and repair sequenced correctly so nothing gets sealed up wet.' }
    ],
    faq: [
      { q: 'Where is my water shutoff?', a: 'Usually at the front hose bib area, in the garage, or at the meter box near the sidewalk. Every adult in the house should know where it is. If you cannot find it, dispatch can talk you through it while a crew heads over.' },
      { q: 'The leak was small. Do I really need drying equipment?', a: 'Small leaks that ran for a long time are often worse than big dramatic ones, because water spread slowly through materials. A moisture reading costs you nothing to be sure.' },
      { q: 'Will insurance cover a burst pipe?', a: 'Sudden and accidental discharge is one of the most commonly covered water losses. Long-term leaks can be trickier, which is why crew documentation of the source and timeline matters.' }
    ]
  },
  {
    slug: 'structural-drying',
    name: 'Structural Drying & Dehumidification',
    short: 'Commercial air movers, LGR dehumidifiers, and daily meter readings until dry-standard is verified.',
    icon: 'drying',
    h1: 'Structural Drying & Dehumidification',
    intro: [
      'Extraction gets the water you can see. Drying gets the water you cannot: moisture inside framing, subfloor, drywall, and insulation. Skip it or shortcut it and the Valley\u2019s hot summers turn a wet wall cavity into a mold farm behind fresh paint.',
      'Crews set commercial air movers and low-grain refrigerant dehumidifiers sized to the space, then return daily to take meter readings and adjust equipment. Drying is done when the numbers say it is done, not when the carpet feels dry.'
    ],
    bullets: [
      { title: 'Engineered drying plans', body: 'Equipment counts calculated from affected square footage and materials, not guesswork.' },
      { title: 'LGR dehumidification', body: 'Low-grain refrigerant units pull moisture out of dense materials that household dehumidifiers cannot touch.' },
      { title: 'Daily monitoring', body: 'Moisture readings logged every visit until materials hit dry standard.' },
      { title: 'Documentation', body: 'A drying log your insurance company and your future buyer\u2019s inspector will both appreciate.' }
    ],
    faq: [
      { q: 'How long does structural drying take?', a: 'Typically 3 to 5 days for common losses. Dense materials like hardwood and plaster can take longer. Daily readings tell you exactly where things stand.' },
      { q: 'Can I just run fans and open windows?', a: 'Airflow without dehumidification often just moves moisture around, and Valley summer air conditions can slow evaporation. Wall cavities and subfloor need directed airflow plus dehumidification.' },
      { q: 'The equipment is loud. Can it be turned off at night?', a: 'Every hour off extends the dry time and the window for mold growth. Crews will place equipment to minimize disruption, but continuous operation is what gets you done in days instead of weeks.' }
    ]
  },
  {
    slug: 'mold-remediation',
    name: 'Mold Removal & Remediation',
    short: 'Mold removal with containment, HEPA filtration, and treatment when water damage was found too late.',
    icon: 'mold',
    h1: 'Mold Removal and Remediation in the 209',
    intro: [
      'Mold needs about 48 hours of moisture to get started, which is why it shows up after slow leaks, old flood damage, and drying jobs that never really finished. Musty smell, dark spotting on drywall, or allergy symptoms that clear up when you leave the house are the usual tells. Black mold removal is the request that comes in most often, and it starts with finding the water that fed it.',
      'Proper remediation is not spraying bleach on a wall. Crews build containment with negative air pressure so spores do not spread, remove affected materials under HEPA filtration, treat the structure, and fix the moisture source, because mold always comes back if the water problem stays.'
    ],
    bullets: [
      { title: 'Containment and negative air', body: 'Plastic containment and HEPA-filtered negative air machines keep spores out of the rest of the house.' },
      { title: 'Source correction', body: 'Remediation includes finding and addressing the moisture source, or the mold returns.' },
      { title: 'Safe removal', body: 'Affected porous materials removed and bagged inside containment, not carried through the hallway.' },
      { title: 'Verification', body: 'Post-remediation the area is HEPA vacuumed, treated, and can be cleared with third-party testing if desired.' }
    ],
    faq: [
      { q: 'Is bleach enough for mold on drywall?', a: 'No. Bleach does not penetrate porous materials, so it kills surface growth while roots survive inside the material. Moldy drywall generally needs to be removed.' },
      { q: 'Is the mold in my house dangerous?', a: 'Reactions vary by person and species. People with asthma, allergies, or immune issues are most affected. Regardless of species, indoor mold growth means a moisture problem that needs fixing.' },
      { q: 'Does insurance pay for mold remediation?', a: 'Often only when the mold resulted from a covered water loss, and many policies cap mold coverage. Fast response to water damage is the best way to keep mold out of the claim entirely.' }
    ]
  },
  {
    slug: 'storm-damage-repair',
    name: 'Storm & Roof Leak Response',
    short: 'Emergency tarping, roof leak intrusion drying, and wind damage cleanup during Valley storm season.',
    icon: 'storm',
    h1: 'Storm Damage & Roof Leak Response',
    intro: [
      'When an atmospheric river parks over the Valley, dispatch boards light up: roof leaks over bedroom ceilings, wind-lifted shingles, fences into windows, and water finding every unsealed penetration. The 2023 storm runs showed how much damage back-to-back systems can do to housing stock that mostly sees dry weather.',
      'Crews respond with emergency tarping and board-up to stop active intrusion, then extract and dry what got wet inside. Ceiling drywall that has taken on water gets opened before it comes down on its own.'
    ],
    bullets: [
      { title: 'Emergency tarping', body: 'Roof tarps installed to stop active leaks until permanent roof repair can happen in dry weather.' },
      { title: 'Ceiling and attic drying', body: 'Insulation and ceiling drywall assessed and dried or removed before sagging and collapse.' },
      { title: 'Board-up service', body: 'Broken windows and openings secured against the next band of weather.' },
      { title: 'Storm-season capacity', body: 'A dispatch network means multiple crews during peak demand, when single shops stop answering.' }
    ],
    faq: [
      { q: 'Water is dripping through a light fixture. What do I do?', a: 'Kill the breaker to that circuit before anything else, then place containers and call. Water in electrical fixtures is a shock and fire risk.' },
      { q: 'Should I poke a hole in my bulging ceiling?', a: 'A small relief hole into a bucket can prevent a larger collapse, but only if you are confident about what is above it. Crews would rather you wait the short time it takes them to arrive.' },
      { q: 'Do you repair the roof too?', a: 'Emergency tarping is part of the response. Permanent roof repair is a roofing contractor job, and crews can hand off with photos and documentation of the damage.' }
    ]
  },
  {
    slug: 'crawl-space-water-removal',
    name: 'Crawl Space & Under-Home Water',
    short: 'Standing water, saturated soil, and wet insulation under raised-foundation Valley homes.',
    icon: 'crawl',
    h1: 'Crawl Space Water Removal',
    intro: [
      'Older homes across central Stockton, Lodi, and Modesto sit on raised foundations, and the crawl space under them is where water problems hide. High water tables near the Delta, broken supply lines, and failed drainage all end up in the same place: standing water under your floor that you might not find for months.',
      'The tell is usually a musty smell, cupping hardwood, or a sagging floor. Crews pump out standing water, remove soaked insulation, dry the framing, and can install vapor barriers so the space stays dry.'
    ],
    bullets: [
      { title: 'Pump-out and extraction', body: 'Standing water removed from crawl spaces, even tight ones under older Valley homes.' },
      { title: 'Wet insulation removal', body: 'Saturated fiberglass under your floor never dries in place. It comes out.' },
      { title: 'Framing and subfloor drying', body: 'Directed airflow and dehumidification under the house until wood hits safe moisture content.' },
      { title: 'Vapor barrier installation', body: 'Ground moisture sealed off so the space stays dry after the emergency is over.' }
    ],
    faq: [
      { q: 'How do I know if there is water under my house?', a: 'Musty odors, cupped or buckling wood floors, cold damp-feeling floors, and increased pest activity are common signs. A crew can inspect and take moisture readings quickly.' },
      { q: 'Is crawl space water really an emergency?', a: 'It is rarely as dramatic as a burst pipe, but standing water under a home rots framing, feeds mold, and attracts pests. The bill grows the longer it sits.' },
      { q: 'Where does the water come from?', a: 'Common sources in the 209: supply or drain line leaks under the house, poor exterior drainage during storms, irrigation, and seasonal high water tables near rivers and the Delta.' }
    ]
  },
  {
    slug: 'appliance-leak-cleanup',
    name: 'Appliance & Water Heater Leaks',
    short: 'Failed water heaters, washer hoses, dishwasher lines, and fridge lines, cleaned up and dried.',
    icon: 'appliance',
    h1: 'Appliance & Water Heater Leak Cleanup',
    intro: [
      'The most common water loss in the Valley is not a flood, it is a $12 part. Washing machine supply hoses, dishwasher lines, ice maker lines, and water heaters all fail on a schedule, and most of them fail while nobody is home. A water heater in a Manteca garage lets go and the first sign is water running under the wall into the hallway carpet.',
      'Crews extract, pull back flooring where needed, dry cabinets and walls, and document the failed component for your insurance claim.'
    ],
    bullets: [
      { title: 'Kitchen and laundry losses', body: 'Cabinet toe-kicks, under-sink cavities, and adjacent rooms checked with meters, since water travels farther than it looks.' },
      { title: 'Water heater failures', body: 'Garage and closet water heater floods extracted and dried, including drywall behind the unit.' },
      { title: 'Hidden slow leaks', body: 'Fridge and dishwasher lines that dripped for months, with the floor damage and mold that comes with them.' },
      { title: 'Evidence preservation', body: 'The failed part and photos preserved, which insurers ask about more than people expect.' }
    ],
    faq: [
      { q: 'The dishwasher leaked but the floor looks fine now. Should I worry?', a: 'Water under flooring and inside toe-kicks does not evaporate on its own. A quick moisture check now is much cheaper than a warped floor and moldy cabinet later.' },
      { q: 'My water heater is 12 years old. Is that a problem?', a: 'Tank water heaters commonly fail between 8 and 12 years, and Valley hard water shortens that. If yours is in that range, know where your shutoff is and consider proactive replacement.' },
      { q: 'Does insurance cover appliance leaks?', a: 'Sudden failures usually yes, for the resulting damage (not the appliance itself). Long-term slow leaks can be disputed as maintenance, which is why documentation matters.' }
    ]
  },
  {
    slug: 'fire-smoke-damage',
    name: 'Fire & Smoke Damage Restoration',
    short: 'Smoke, soot, and the water damage firefighting leaves behind, restored together.',
    icon: 'fire',
    h1: 'Fire & Smoke Damage Restoration',
    intro: [
      'After a fire, you are dealing with three problems at once: burned materials, smoke and soot through the whole structure, and everything the fire hoses soaked. Kitchen fires are the most common call, and even a small one can push soot through the HVAC into every room in the house.',
      'Crews board up and secure the structure, extract firefighting water, remove burned materials, clean soot from surfaces and contents, and run air scrubbing and deodorization so the house stops smelling like the worst day you had in it.'
    ],
    bullets: [
      { title: 'Board-up and securing', body: 'Openings secured immediately, which most insurance policies require you to do to prevent further loss.' },
      { title: 'Water extraction', body: 'Firefighting water is a full water-damage loss on top of the fire and gets treated like one.' },
      { title: 'Soot and smoke cleaning', body: 'Different soot types need different cleaning methods. Wrong method sets the stain permanently.' },
      { title: 'Odor removal', body: 'HEPA scrubbing, deodorization, and HVAC attention, because smoke odor hides everywhere air moves.' }
    ],
    faq: [
      { q: 'The fire was small. Do I really need professional cleaning?', a: 'Soot is acidic and keeps damaging finishes for days after the fire. Small fire, small job, but the clock is the same.' },
      { q: 'Can we stay in the house?', a: 'Depends on the extent of smoke, soot, and water. Crews can assess air quality concerns and containment options honestly on arrival.' },
      { q: 'What should I do before the crew arrives?', a: 'Do not wipe soot off walls (wrong technique smears it in), do not run the HVAC, and start a list of damaged items for your claim.' }
    ]
  },
  {
    slug: 'commercial-water-damage',
    name: 'Commercial Water Damage',
    short: 'Restaurants, offices, retail, and warehouses along the 99 corridor, dried with downtime in mind.',
    icon: 'commercial',
    h1: 'Commercial Water Damage in the 209',
    intro: [
      'For a business, water damage has a second bill attached: every day closed. A sprinkler head failure in a Stockton warehouse or a supply line break above a Modesto restaurant kitchen is a race against lost revenue, spoiled inventory, and employees you still have to pay.',
      'Commercial crews scale up: more extraction, more drying equipment, after-hours work, and phased plans that keep parts of the operation running while affected areas dry. Documentation supports both your property claim and business interruption claim.'
    ],
    bullets: [
      { title: 'Priority commercial dispatch', body: 'Losses measured in revenue per day get treated with that urgency.' },
      { title: 'Scaled equipment', body: 'Desiccant and LGR dehumidification and enough air movement for warehouse and open-plan spaces.' },
      { title: 'After-hours work', body: 'Crews can work nights and weekends to keep your doors open during business hours.' },
      { title: 'Claim-grade documentation', body: 'Moisture logs, photos, and scope suitable for property and business interruption claims.' }
    ],
    faq: [
      { q: 'Can you work around our business hours?', a: 'Yes. Phased and after-hours drying plans are standard for retail, restaurants, and offices that cannot fully close.' },
      { q: 'We rent our space. Who calls, us or the landlord?', a: 'Whoever discovers the loss should call first, then sort out the lease responsibilities. Delay costs both parties. Crews are used to coordinating between tenants, landlords, and both insurers.' },
      { q: 'How big a loss can you handle?', a: 'The dispatch network covers everything from a single office suite to warehouse-scale losses. Large losses just mean more crews and equipment on site.' }
    ]
  },
  {
    slug: 'insurance-claim-help',
    name: 'Insurance Claim Assistance',
    short: 'Documentation, scope, and direct billing so your water damage claim actually gets paid.',
    icon: 'claim',
    h1: 'Water Damage Insurance Claim Help',
    intro: [
      'The difference between a smooth claim and a nightmare claim is usually documentation from day one. Adjusters want to see the source of the loss, moisture readings, photos before demo, and a scope of work in the format they use. Homeowners guessing at this alone leave money on the table or get delayed for months.',
      'The crews dispatched through this line document to insurance standards as they work: cause of loss, moisture maps, drying logs, and itemized scope. Many can bill your insurer directly so you are only out your deductible.'
    ],
    bullets: [
      { title: 'Day-one documentation', body: 'Photos and readings captured before anything is moved or removed, which is exactly when adjusters want them.' },
      { title: 'Industry-standard scope', body: 'Estimates written in the same format insurance adjusters use, which shortens the negotiation.' },
      { title: 'Direct insurance billing', body: 'Many crews bill the carrier directly. You handle your deductible, not the whole invoice.' },
      { title: 'Straight answers', body: 'If a loss is unlikely to be covered, you hear that early, not after the work is done.' }
    ],
    faq: [
      { q: 'Should I call insurance or the restoration crew first?', a: 'Stop the water, then call here. Mitigation cannot wait for an adjuster, and policies actually require you to prevent further damage. Then report the claim; crews will coordinate with the adjuster from there.' },
      { q: 'Will filing a claim raise my rates?', a: 'Possibly, and that is a real consideration for small losses close to your deductible. Crews can give you a scope first so you can decide whether to file with real numbers in hand.' },
      { q: 'The adjuster offered less than the damage costs. Now what?', a: 'A documented scope with moisture logs and photos is your negotiating position. Supplements are a normal part of the process when the initial estimate missed damage.' }
    ]
  },
  {
    slug: 'emergency-board-up',
    name: '24 Hour Board Up',
    short: 'Emergency board up and tarping to secure a building after fire, storm, or break-in damage, day or night.',
    icon: 'boardup',
    h1: '24 Hour Emergency Board Up Service',
    intro: [
      'An opening in your building is a clock running against you. A roof torn back by Valley wind, a window lost to a storm or a break-in, a wall opened up by fire crews doing their job: until it is closed, weather and anyone walking past have an invitation. Insurance policies also expect you to secure the property, and a delay there can complicate the claim.',
      'Dispatch runs 24 hours a day, and board up is the kind of call that does not wait for morning. Crews arrive with plywood, fasteners, and shrink wrap or tarp, close the openings, and document the damage with photos before anything is covered so the claim still shows what happened.'
    ],
    bullets: [
      { title: 'Openings closed the same night', body: 'Windows, doors, and torn-open walls boarded so weather, animals, and trespassers stay outside.' },
      { title: 'Roof tarping', body: 'Storm-damaged and fire-damaged roofs covered before the next system rolls through the Valley.' },
      { title: 'Photographed before covering', body: 'Damage documented first, so boarding up does not hide what your adjuster needs to see.' },
      { title: 'Secured against liability', body: 'An open building is an attractive nuisance. Closing it protects you from more than weather.' }
    ],
    faq: [
      { q: 'How fast can a crew board up my property?', a: 'Board up is treated as an emergency call. Dispatch answers 24/7 and crews are local to San Joaquin and Stanislaus Counties, so response across Stockton, Turlock, Manteca, Tracy, and Lodi is typically a matter of hours, including nights and weekends.' },
      { q: 'Does insurance pay for emergency board up?', a: 'Usually yes. Most policies require you to take reasonable steps to prevent further damage, and emergency board up is a textbook example. Keep the documentation and invoice for the claim.' },
      { q: 'Can you board up after a fire?', a: 'Yes, and it is common. Fire crews open roofs and walls to reach hot spots, which leaves a building wide open. Board up, tarping, and the smoke and soot work can be handled by the same dispatched crew.' }
    ]
  },
  {
    slug: 'contents-restoration',
    name: 'Contents Restoration',
    short: 'Cleaning, drying, and salvaging the belongings inside the loss, not just the building around them.',
    icon: 'contents',
    h1: 'Contents Restoration and Pack Out',
    intro: [
      'Structure gets the attention, but what people actually grieve is the contents: furniture, photographs, documents, clothing, tools, the things that make a house yours. A lot of it is salvageable if it is handled in the first days rather than left sitting wet in a closed-up room.',
      'Crews dispatched through this line inventory affected contents, decide honestly what can be restored and what cannot, and either treat items on site or pack them out for cleaning and storage while the structure dries and rebuilds. Everything is logged, because a contents claim is settled from that inventory.'
    ],
    bullets: [
      { title: 'Inventoried, not guessed', body: 'A documented list of affected items with photos, which is exactly what a contents claim is paid from.' },
      { title: 'Pack out and storage', body: 'Belongings moved off site so they are out of the wet zone while drying and repairs happen.' },
      { title: 'Document and photo recovery', body: 'Wet paper and photographs handled quickly, when the window to save them is still open.' },
      { title: 'Straight answers on salvage', body: 'If something is not worth restoring, you hear that early so it goes on the claim instead of into storage.' }
    ],
    faq: [
      { q: 'Can wet photos and documents really be saved?', a: 'Often, if they are dealt with fast. Paper and photographs degrade and stick together within days, and mold follows moisture, so this is one of the most time-sensitive parts of any loss.' },
      { q: 'Does my policy cover contents?', a: 'Most homeowners policies cover personal property under a separate limit from the structure. That is why the inventory matters: the contents portion of your claim is paid from documentation, not from memory.' },
      { q: 'What happens to my belongings during a pack out?', a: 'Items are inventoried, moved to storage, cleaned where appropriate, and returned when the structure is ready. You get the inventory list, so nothing depends on trust alone.' }
    ]
  }
];
