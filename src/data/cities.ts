// 8 areas -> 8 pages at /areas/[slug]/

export interface City {
  slug: string;
  name: string;
  county: string;
  lat: number;           // city center, for the service-area map
  lng: number;
  short: string;         // card blurb
  h1: string;
  intro: string[];       // paragraphs with real local geography
  localRisks: { title: string; body: string }[];
  neighborhoods: string[]; // named places used in copy
}

export const CITIES: City[] = [
  {
    slug: 'stockton',
    name: 'Stockton',
    county: 'San Joaquin County',
    lat: 37.9577, lng: -121.2908,
    short: 'Delta waterfront, high water tables, and a lot of older raised-foundation housing stock.',
    h1: 'Water Damage Restoration in Stockton, CA',
    intro: [
      'Stockton is a water town. The Deep Water Channel runs right into downtown, Smith Canal and the Calaveras River thread through the north side, and much of the city sits at or near sea level behind levees. That geography means high water tables, storm drainage that gets overwhelmed in big atmospheric river years, and crawl spaces that collect water under the older homes around the Miracle Mile, Midtown, and Victory Park.',
      'Crews dispatched in Stockton know this housing stock: raised foundations near the channel, slab-built ranches in Lincoln Village and Sherwood Manor, and everything in between. From Weston Ranch to Spanos Park, response is local, 24/7, and fast.'
    ],
    localRisks: [
      { title: 'High water table near the Delta', body: 'Homes near the channel, Smith Canal, and Buckley Cove see crawl space water and slab moisture even without a visible leak.' },
      { title: 'Older plumbing in central Stockton', body: 'Galvanized supply lines and clay sewer laterals in pre-1960s neighborhoods fail with age, and root intrusion backups are routine.' },
      { title: 'Storm drainage overload', body: 'Big winter systems overwhelm street drainage in low spots, pushing water toward garages and doorways.' }
    ],
    neighborhoods: ['Miracle Mile', 'Lincoln Village', 'Weston Ranch', 'Spanos Park', 'Victory Park', 'Brookside', 'Sherwood Manor', 'Country Club']
  },
  {
    slug: 'modesto',
    name: 'Modesto',
    county: 'Stanislaus County',
    lat: 37.6391, lng: -120.9969,
    short: 'Tuolumne River and Dry Creek flooding, plus mid-century housing with aging supply lines.',
    h1: 'Water Damage Restoration in Modesto, CA',
    intro: [
      'Modesto grew up along the Tuolumne River, and the neighborhoods closest to it, the airport district and the areas around Tuolumne River Regional Park, know what high water years look like. Dry Creek cuts through the east side of town and has its own history of jumping its banks in big storm years, backing water into yards and crawl spaces around La Loma.',
      'Away from the rivers, Modesto\u2019s risk looks like the rest of the Valley: mid-century homes around the College area and downtown with original galvanized plumbing, hard water eating copper in the slab-built tracts off Pelandale and Sylvan, and water heaters failing in garages across Village One.'
    ],
    localRisks: [
      { title: 'River-adjacent flooding', body: 'The airport neighborhood and areas along the Tuolumne have flooded in major storm years, most recently during the 2023 atmospheric river sequence.' },
      { title: 'Dry Creek storm surges', body: 'East side neighborhoods near Dry Creek see fast-rising storm water that recedes quickly but leaves saturated crawl spaces behind.' },
      { title: 'Aging mid-century plumbing', body: 'Original supply lines in College area and downtown homes are past their design life.' }
    ],
    neighborhoods: ['La Loma', 'College area', 'Village One', 'Downtown', 'Airport district', 'Sylvan', 'Pelandale corridor', 'Enslen Park']
  },
  {
    slug: 'lodi',
    name: 'Lodi',
    county: 'San Joaquin County',
    lat: 38.1302, lng: -121.2724,
    short: 'Mokelumne River town with a historic east side and wine-country well water.',
    h1: 'Water Damage Restoration in Lodi, CA',
    intro: [
      'Lodi sits on the Mokelumne River, and the north edge of town around Lodi Lake and Woodbridge lives closest to it. Big release years on the Mokelumne raise water tables across the north side, and the older raised-foundation homes on the historic east side collect that moisture in crawl spaces long after the river drops.',
      'Lodi\u2019s housing skews older than its neighbors: Craftsman and postwar homes east of the tracks and around downtown carry original plumbing, while the newer west side tracts have the usual slab leak and water heater failure profile. Crews respond across all of it, 24 hours a day.'
    ],
    localRisks: [
      { title: 'Mokelumne high-water years', body: 'North side neighborhoods near Lodi Lake and Woodbridge see elevated groundwater and crawl space moisture when the river runs high.' },
      { title: 'Historic east side plumbing', body: 'Pre-war homes with original galvanized supply lines and clay laterals, where a small leak has often been running a long time.' },
      { title: 'Slab leaks in west side tracts', body: 'Hard water pinhole leaks under newer slab homes off Lower Sacramento Road.' }
    ],
    neighborhoods: ['Lodi Lake area', 'Historic east side', 'Downtown', 'Woodbridge', 'Sunwest', 'Lakewood', 'Century Meadows', 'Vinewood']
  },
  {
    slug: 'tracy',
    name: 'Tracy',
    county: 'San Joaquin County',
    lat: 37.7397, lng: -121.4252,
    short: 'Fast-growing slab-built city where hard water and builder-grade plumbing meet.',
    h1: 'Water Damage Restoration in Tracy, CA',
    intro: [
      'Tracy boomed in waves, the 90s tracts around Tracy Hills of the day, the 2000s growth off Corral Hollow, and the current wave around Ellis and Tracy Hills proper. Almost all of it is slab-on-grade construction, and slab homes hide their leaks: hard Valley water works on copper and builder-grade fittings until a warm spot on the floor or a water bill spike gives it away.',
      'Tracy also sits at the edge of Delta water country, with Old River and the aqueducts nearby and serious wind pushing winter storms sideways into flashing and vents. Crews cover the whole city, from the older downtown grid to the newest phases, plus Mountain House next door.'
    ],
    localRisks: [
      { title: 'Slab leaks in tract housing', body: 'Pinhole copper leaks under 90s and 2000s slabs are one of the most common Tracy calls, often running for weeks before discovery.' },
      { title: 'Builder-grade supply line failures', body: 'Washer hoses, angle stops, and water heater connections from original construction failing on schedule across same-age neighborhoods.' },
      { title: 'Wind-driven storm intrusion', body: 'Altamont wind pushes rain into roof penetrations and vents that never leak in calm weather.' }
    ],
    neighborhoods: ['Downtown Tracy', 'Corral Hollow corridor', 'Tracy Hills', 'Ellis', 'Sycamore Village', 'Edgewood', 'Mountain House', 'Redbridge']
  },
  {
    slug: 'manteca',
    name: 'Manteca',
    county: 'San Joaquin County',
    lat: 37.7974, lng: -121.2161,
    short: 'Bypass-corridor growth city with garage water heaters and same-age tract plumbing.',
    h1: 'Water Damage Restoration in Manteca, CA',
    intro: [
      'Manteca\u2019s growth runs along the 120 Bypass, and most of the city is tract construction from the last three decades: slab foundations, garage water heaters, and plumbing that ages in lockstep across entire neighborhoods. When one water heater on a street fails, its neighbors installed the same month are next.',
      'South Manteca builds toward the San Joaquin River, and big water years put that side of town closer to high groundwater. Crews respond citywide, from older central Manteca around Library Park to the newest phases off Atherton and out toward Lathrop.'
    ],
    localRisks: [
      { title: 'Garage water heater failures', body: 'Tank failures flood garages and wick under walls into hallways and bedrooms, often discovered hours later.' },
      { title: 'Same-age plumbing cohorts', body: 'Entire subdivisions built in the same year hit supply line and angle stop failure age together.' },
      { title: 'South-side high groundwater', body: 'Neighborhoods toward the river see crawl space and slab moisture in wet winters.' }
    ],
    neighborhoods: ['Central Manteca', 'Library Park area', 'Atherton corridor', 'Woodward Park area', 'Union Ranch', 'Del Webb', 'Sundance', 'South Manteca']
  },
  {
    slug: 'turlock',
    name: 'Turlock',
    county: 'Stanislaus County',
    lat: 37.4947, lng: -120.8466,
    short: 'College town on flat ground where storm water has nowhere to go but sideways.',
    h1: 'Water Damage Restoration in Turlock, CA',
    intro: [
      'Turlock is table-flat, and flat ground makes drainage a design problem. Big winter storms pond water in older neighborhoods around downtown and near Stanislaus State, and yard drainage that works fine most years pushes water toward foundations when back-to-back systems roll through.',
      'The housing mix runs from historic homes near downtown and Crane Park with original plumbing, to mid-century tracts, to the newer northeast growth. Rental housing around the university adds its own pattern: slow leaks nobody reports until the damage is visible. Crews cover Turlock, Denair, and Keyes around the clock.'
    ],
    localRisks: [
      { title: 'Flat-ground ponding', body: 'Storm water ponds against foundations and garage thresholds in older, flatter neighborhoods during multi-day storm events.' },
      { title: 'Historic core plumbing', body: 'Homes around downtown and Crane Park carry original supply and drain lines well past their service life.' },
      { title: 'Unreported rental leaks', body: 'University-area rentals where a slow leak ran for months before anyone called it in, usually with mold involved.' }
    ],
    neighborhoods: ['Downtown Turlock', 'Crane Park area', 'Stanislaus State area', 'Northeast Turlock', 'Countryside', 'Denair', 'Keyes', 'Monte Vista corridor']
  },
  {
    slug: 'lathrop',
    name: 'Lathrop',
    county: 'San Joaquin County',
    lat: 37.8227, lng: -121.2766,
    short: 'River Islands and levee-adjacent growth, the newest housing in the 209 next to the most water.',
    h1: 'Water Damage Restoration in Lathrop, CA',
    intro: [
      'Lathrop is the strange pairing of the newest construction in the region and the most water. River Islands is literally built on a Delta island behind engineered levees, with the San Joaquin River and Old River wrapping around it. The homes are new, but new construction has its own failure modes: builder-grade fittings, first-cycle water heaters, and punch-list plumbing issues that show up in year two.',
      'East of I-5, historic Lathrop and the Mossdale area carry the older-home risks, and the whole city shares Delta-country groundwater. Crews respond across Lathrop and River Islands 24/7.'
    ],
    localRisks: [
      { title: 'New-construction plumbing failures', body: 'Compression fittings, angle stops, and supply lines from initial construction failing inside the first decade across River Islands phases.' },
      { title: 'Delta groundwater', body: 'High water tables around Old River and the San Joaquin mean slab and landscape moisture issues even without a leak.' },
      { title: 'Mossdale and historic Lathrop', body: 'Older homes east of the interstate with aging supply and drain lines.' }
    ],
    neighborhoods: ['River Islands', 'Mossdale', 'Historic Lathrop', 'Stonebridge', 'Lathrop Station area', 'Crossroads', 'Towne Centre area', 'Sangalang']
  },
  {
    slug: 'ceres',
    name: 'Ceres',
    county: 'Stanislaus County',
    lat: 37.5949, lng: -120.9577,
    short: 'Hatch Road corridor ranch homes and the Tuolumne floodplain on the north edge.',
    h1: 'Water Damage Restoration in Ceres, CA',
    intro: [
      'Ceres runs from the Tuolumne River floodplain on its north edge down through decades of ranch-home tracts along the Hatch Road and Whitmore corridors. The river side of town shares Modesto\u2019s high-water history, while the ranch homes carry classic Valley risks: galvanized-to-copper transitions from old remodels, hard-water pinhole leaks, and water heaters tucked in garages and hall closets.',
      'Crews dispatched in Ceres also cover Keyes and the unincorporated pockets between Ceres and Modesto, around the clock.'
    ],
    localRisks: [
      { title: 'Tuolumne floodplain edge', body: 'North Ceres near the river sees elevated groundwater and crawl space moisture in big water years.' },
      { title: 'Remodel-era plumbing', body: 'Partial repipes in older ranch homes leave mixed-material plumbing that fails at the transitions.' },
      { title: 'Hall closet water heaters', body: 'Interior water heater failures do far more damage than garage failures, soaking hallways and bedrooms directly.' }
    ],
    neighborhoods: ['Hatch Road corridor', 'Whitmore corridor', 'Smyrna Park area', 'Eastgate', 'Westport', 'North Ceres', 'Mitchell Road corridor', 'Keyes']
  }
];
