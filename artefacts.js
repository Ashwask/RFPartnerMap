var ORG_ARTEFACT_ALIASES = {
  'Vidhi Centre (Delhi)': 'Vidhi Centre',
  'Vidhi Centre (Bengaluru)': 'Vidhi Centre',
  'Akshayakalpa / Akshayakalpa Foundation': 'Akshayakalpa',
  'A Rocha India': 'A ROCHA INDIA',
  'Fields of View': 'Fields Of View',
  'IndusTree': 'IndusTree Crafts',
  'PARI': 'Countermedia / PARI',
  'Platform for Commons': 'Platform Commons',
  'ReapBenefit': 'Reap Benefit',
  'Shakti Sustainable Energy Foundation': 'Shakti Sustainable Energy',
  'B.PAC': 'BPAC'
};

var ORG_ARTEFACT_OVERRIDES = {
  'Akshayakalpa': {
    status: 'researched',
    summary: 'Akshayakalpa turns organic dairy into a farmer-entrepreneurship system spanning farm training, closed-loop production, processing infrastructure, and direct-to-consumer products.',
    tangible: [
      {
        name: 'Organic product suite',
        kind: 'Consumer products',
        desc: 'Akshayakalpa publicly catalogs organic milk, ghee, cheese, butter, paneer, curd, bread, honey, eggs, UHT milk, and related staples as its market-facing output.'
      , url: 'https://akshayakalpa.org/products/milk/'},
      {
        name: 'Akshayakalpa mobile app',
        kind: 'Consumer platform',
        desc: 'The brand directs customers to order subscriptions and samples through its mobile app, making the app a key distribution artefact.'
      , url: 'https://akshayakalpa.org/'},
      {
        name: 'Processing and manufacturing infrastructure',
        kind: 'Physical infrastructure',
        desc: 'Its manufacturing and packaging system underpins farm-level chilling, hygienic handling, and shelf-stable UHT distribution.'
      , url: 'https://akshayakalpa.org/manufaturing-units/'}
    ],
    intangible: [
      {
        name: 'Farmer-entrepreneurship model',
        kind: 'Livelihood model',
        desc: 'Akshayakalpa trains and monitors farmers for 12 to 18 months and frames the business as a rural entrepreneurship pathway rather than simple milk procurement.'
      , url: 'https://akshayakalpa.org/company/'},
      {
        name: 'Co-existence farming system',
        kind: 'Farm operating philosophy',
        desc: 'Its public sustainability narrative centers on self-sustaining farms, methane generation from dung, and closed-loop soil and fodder systems.'
      , url: 'https://akshayakalpa.org/company/'},
      {
        name: 'Extension ecosystem',
        kind: 'Farmer support system',
        desc: 'The farm extension team combines technological, financial, and academic support so farmers can maintain quality and stable incomes.'
      , url: 'https://akshayakalpa.org/faq/'}
    ],
    sources: [
      {label: 'Company', url: 'https://akshayakalpa.org/company/'},
      {label: 'Home', url: 'https://akshayakalpa.org/'},
      {label: 'Product catalogue', url: 'https://akshayakalpa.org/manufaturing-units/'},
      {label: 'Organic milk', url: 'https://akshayakalpa.org/products/milk/'},
      {label: 'FAQ', url: 'https://akshayakalpa.org/faq/'},
      {label: 'Social impact', url: 'https://shop.akshayakalpa.org/pages/our-story'}
    ]
  },
  'ATREE': {
    status: 'researched',
    summary: 'ATREE publishes a mix of field stations, labs, biodiversity platforms, training programmes, and community-linked conservation infrastructure.',
    tangible: [
      {
        name: 'India Biodiversity Portal',
        kind: 'Citizen-science platform',
        desc: 'ATREE lists the India Biodiversity Portal as a participatory biodiversity informatics repository and notes that it led the platform launch.'
      , url: 'https://indiabiodiversity.org/'},
      {
        name: 'Ecoinformatics Lab',
        kind: 'Research lab',
        desc: 'The lab assembles ecological and socioeconomic spatial data and builds knowledge commons, decision-support systems, and geospatial tools.'
      , url: 'https://www.atree.org/ecoinformatics-lab'},
      {
        name: 'Community Conservation Centres',
        kind: 'Field infrastructure',
        desc: 'ATREE\'s Community Conservation Centres in landscapes such as BR Hills, Darjeeling, MM Hills, and Vembanad anchor place-based research and long-term monitoring.'
      , url: 'https://www.atree.org/community-conservation-centres'},
      {
        name: 'Lantana Craft Centre',
        kind: 'Livelihood and design centre',
        desc: 'The centre converts invasive lantana into furniture and utility products while generating rural livelihoods and supporting restoration work.'
      , url: 'https://www.atree.org/lantana-craft'}
    ],
    intangible: [
      {
        name: 'Academy for Conservation Science and Sustainability Studies',
        kind: 'Learning programme',
        desc: 'ATREE\'s Academy brings together PhD, MSc, and certificate offerings to train interdisciplinary researchers and practitioners.'
      , url: 'https://www.atree.org/academy'},
      {
        name: 'Environment education programme',
        kind: 'Public engagement model',
        desc: 'ATREE frames environment education as a structured programme for land, water, and forests across diverse stakeholders.'
      , url: 'https://www.atree.org/environment-education'},
      {
        name: 'Knowledge commons and decision-support approach',
        kind: 'Research framework',
        desc: 'Its labs and centres consistently translate ecological research into usable planning frameworks, local knowledge exchange, and conservation support systems.'
      , url: 'https://www.atree.org/ecoinformatics-lab'}
    ],
    sources: [
      {label: 'Resources', url: 'https://www.atree.org/resources/'},
      {label: 'Academy', url: 'https://www.atree.org/academy/'},
      {label: 'Community Conservation Centre', url: 'https://www.atree.org/community-conservation-centre/'},
      {label: 'Ecoinformatics Lab', url: 'https://www.atree.org/ecoinformatics-lab/'},
      {label: 'MM Hills', url: 'https://www.atree.org/mm-hills/'},
      {label: 'About timeline', url: 'https://www.atree.org/about-us/'}
    ]
  },
  'CEEW': {
    status: 'researched',
    summary: 'CEEW packages policy research into public dashboards, calculators, decision-support tools, and sectoral data products.',
    tangible: [
      {
        name: 'ValueSTAC',
        kind: 'Techno-economic tool',
        desc: 'An open-access solar-plus-storage calculator for sizing battery systems and comparing storage-backed systems against diesel backup.'
      , url: 'https://www.ceew.in/data-sets/optimise-your-solar-plus-storage-solutions'},
      {
        name: 'Electric Mobility Dashboard',
        kind: 'Dashboard',
        desc: 'A frequently updated EV market dashboard with national, state, and RTO-level views plus calculators and policy comparisons.'
      , url: 'https://www.ceew.in/gfc/tools_and_dashboards/electric-mobility/home'},
      {
        name: 'India Renewables Dashboard',
        kind: 'Dashboard',
        desc: 'Built with CEA, this dashboard automates renewable generation monitoring and makes plant- and system-level data easier to use.'
      , url: 'https://www.ceew.in/data/dashboards-and-tools'},
      {
        name: 'Industrial Energy and GHG Emissions Dashboard',
        kind: 'Database and visual analytics',
        desc: 'A bottom-up industrial energy and emissions database built from more than two lakh enterprises and exposed through interactive visuals.'
      , url: 'https://www.ceew.in/data/dashboards-and-tools'},
      {
        name: 'Solar Pumps Tool',
        kind: 'Decision-support tool',
        desc: 'A map-based tool that classifies districts for solar irrigation potential and helps prioritize policy design and deployment strategies.'
      , url: 'https://www.ceew.in/data/dashboards-and-tools'},
      {
        name: 'Open Access Tool',
        kind: 'Policy and savings tool',
        desc: 'CEEW-GFC\'s open access toolkit estimates renewable open access charges, state waivers, and savings for commercial and industrial consumers.'
      , url: 'https://www.ceew.in/data/dashboards-and-tools'}
    ],
    intangible: [
      {
        name: 'Enhanced Transparency Framework capacity-building tool',
        kind: 'Capacity building artefact',
        desc: 'CEEW publicly lists a dedicated tool for helping users work on the Enhanced Transparency Framework.'
      , url: 'https://www.ceew.in/'},
      {
        name: 'Data-to-policy approach',
        kind: 'Operating model',
        desc: 'Its dashboards and tools portfolio shows a consistent method of converting sectoral research into operational public infrastructure for policymakers and markets.'
      , url: 'https://www.ceew.in/'}
    ],
    sources: [
      {label: 'Dashboards and tools', url: 'https://www.ceew.in/data/dashboards-and-tools'},
      {label: 'ValueSTAC tool', url: 'https://www.ceew.in/valuestac-tool'},
      {label: 'ValueSTAC overview', url: 'https://www.ceew.in/sites/default/files/ceew-valuestac-tool-overview.pdf'},
      {label: 'Electric mobility dashboard', url: 'https://www.ceew.in/gfc/tools_and_dashboards/electric-mobility/home'},
      {label: 'India Renewables Dashboard', url: 'https://www.ceew.in/press-releases/cea-ceew-cef-shakti-sustainable-energy-foundation-launch-india-renewables-dashboard'},
      {label: 'Industrial emissions dashboard', url: 'https://www.ceew.in/data/industrial-energy-emissions-dashboard'},
      {label: 'Solar Pumps Tool', url: 'https://ceew.in/portal/solar-pumps/about/'},
      {label: 'Open Access Tool', url: 'https://www.ceew.in/gfc/tools_and_dashboards/open-access/home'}
    ]
  },
  'CSTEP': {
    status: 'researched',
    summary: 'CSTEP has one of the most explicit public tool stacks in the portfolio, ranging from scenario models and emissions portals to mobility and climate-planning tools.',
    tangible: [
      {
        name: 'SAFARI',
        kind: 'Systems model',
        desc: 'A model for exploring energy, emissions, resource, and macroeconomic implications of meeting development goals through a desired-quality-of-life lens.'
      , url: 'https://safari.cstep.in/safari/'},
      {
        name: 'PAVITRA Dashboard and InMAP platform',
        kind: 'Air-quality modelling platform',
        desc: 'A computationally lighter modelling platform and dashboard intended to estimate pollution-control impacts and associated health outcomes.'
      , url: 'https://cstep.in/projects-details.php?id=1099'},
      {
        name: 'E-DEPOT',
        kind: 'Mobility planning tool',
        desc: 'An e-bus depot electrification planning tool for state transport undertakings and DISCOMs to test charging, scheduling, and cost scenarios.'
      , url: 'https://cstep.in/'},
      {
        name: 'EI 76 portal',
        kind: 'Open dataset and visualisation portal',
        desc: 'An emissions-inventory portal for 76 non-attainment cities with city-level visualisations, reports, mitigation estimates, and downloadable material.'
      , url: 'https://cstep.in/'},
      {
        name: 'DEFT',
        kind: 'Decision-support tool',
        desc: 'The Ecosystem-based Adaptation Feasibility Tool is being built for Bengaluru to help assess urban EbA options through geospatial analysis.'
      , url: 'https://cstep.in/'},
      {
        name: 'DARPAN',
        kind: 'Decision analysis platform',
        desc: 'CSTEP describes DARPAN as the integration layer used to showcase simulations and planning choices to policymakers.'
      , url: 'https://cstep.in/'}
    ],
    intangible: [
      {
        name: 'Digital transformation practice',
        kind: 'Institutional capability',
        desc: 'CSTEP\'s digital transformation vertical frames tool-building, digital applications, and AI/ML as a policy support capability rather than isolated products.'
      , url: 'https://cstep.in/'},
      {
        name: 'Systems-thinking development modelling',
        kind: 'Analytical framework',
        desc: 'Its public work repeatedly emphasizes systems-based planning, India-specific modelling, and decision support for policy trade-offs.'
      , url: 'https://cstep.in/'}
    ],
    sources: [
      {label: 'Home', url: 'https://cstep.in/'},
      {label: 'Tools', url: 'https://cstep.in/tools/'},
      {label: 'Mapping Sustainable Futures', url: 'https://cstep.in/real_world/mapping-sustainable-futures/'},
      {label: 'PAVITRA project', url: 'https://cstep.in/projects/pavitra-an-air-pollution-intervention-tool-for-india/'},
      {label: 'Charging Ahead', url: 'https://cstep.in/real_world/charging-ahead/'},
      {label: 'EI portal', url: 'https://ei.cstep.in/about/'},
      {label: 'DEFT project', url: 'https://cstep.in/projects/developing-an-ecosystem-based-adaptation-feasibility-tool-deft/'},
      {label: 'Research tools', url: 'https://cstep.in/drupal/node/151'}
    ]
  },
  'Dakshin Foundation': {
    status: 'researched',
    summary: 'Dakshin\'s public artefacts combine field stations, marine monitoring initiatives, conservation philosophy, and community-centred programme models.',
    tangible: [
      {
        name: 'Andaman Nicobar Environment Team (ANET)',
        kind: 'Research and education centre',
        desc: 'ANET functions as a multidisciplinary research hub and conservation centre for the islands through a Dakshin-MCBT partnership.'
      , url: 'https://www.dakshin.org/'},
      {
        name: 'ReefLog and LTEO',
        kind: 'Monitoring infrastructure',
        desc: 'Dakshin lists reef monitoring and long-term ecological observatories as ongoing marine-flagship outputs.'
      , url: 'https://www.dakshin.org/'},
      {
        name: 'Lagoon Fest',
        kind: 'Community event format',
        desc: 'Lagoon Fest in Lakshadweep is a designed public engagement format around nature, culture, and local knowledge.'
      , url: 'https://www.dakshin.org/'}
    ],
    intangible: [
      {
        name: 'SeaChange',
        kind: 'Systems-change model',
        desc: 'SeaChange is Dakshin\'s intersectoral model for tackling socio-ecological crises across coastal landscapes through systems thinking and collective action.'
      , url: 'https://www.dakshin.org/'},
      {
        name: '#KhaneKeLiyeBachao',
        kind: 'Conservation philosophy',
        desc: 'Dakshin presents KKLB as a rights-based conservation philosophy tying food, livelihoods, and ecological sustainability together.'
      , url: 'https://www.dakshin.org/'},
      {
        name: 'Sustainable Fisheries',
        kind: 'Programme model',
        desc: 'This programme decentralises knowledge and brings fishers into governance and decision-making on marine resources.'
      , url: 'https://www.dakshin.org/'},
      {
        name: 'Community Wellbeing and Environment',
        kind: 'Programme model',
        desc: 'CWE links community health, livelihoods, governance, and environmental outcomes in fishing settlements.'
      , url: 'https://www.dakshin.org/'},
      {
        name: 'Marine Flagships',
        kind: 'Programme model',
        desc: 'The Marine Flagships programme uses iconic species and long-term monitoring to address broader coastal-development and conservation questions.'
      , url: 'https://www.dakshin.org/'}
    ],
    sources: [
      {label: 'Home', url: 'https://dakshin.org/'},
      {label: 'About', url: 'https://dakshin.org/about-us/'},
      {label: 'SeaChange', url: 'https://dakshin.org/seachange/'},
      {label: 'KhaneKeLiyeBachao', url: 'https://dakshin.org/kklb/'},
      {label: 'ANET', url: 'https://dakshin.org/anet/'},
      {label: 'Marine Flagships', url: 'https://dakshin.org/home/marine-flagships/'},
      {label: 'Community Wellbeing and Environment', url: 'https://dakshin.org/home/community-wellbeing-and-environment/'},
      {label: 'Biodiversity and Resource Monitoring', url: 'https://dakshin.org/home/biodiversity-and-resource-monitoring/'}
    ]
  },
  'Fields Of View': {
    status: 'researched',
    summary: 'Fields of View is unusually explicit about its artefact stack: games, simulations, workshops, and policy pedagogy built around vulnerability and resilience.',
    tangible: [
      {
        name: 'E-QLT',
        kind: 'Simulation tool',
        desc: 'A household-vulnerability simulation platform that computes a Social Protection Score and tests shocks, schemes, and resilience measures.'
      , url: 'https://fieldsofview.in/'},
      {
        name: 'Jee-van',
        kind: 'Data-collection game',
        desc: 'A game that captures how communities prioritise spending and social protection under ordinary and crisis scenarios.'
      , url: 'https://fieldsofview.in/'},
      {
        name: 'Weather Wane',
        kind: 'Capacity-building game',
        desc: 'The tools suite lists Weather Wane as a climate-risk and adaptation game for building shared understanding.'
      , url: 'https://fieldsofview.in/'},
      {
        name: 'The Waymaker',
        kind: 'Storytelling game',
        desc: 'An interactive narrative game used to understand overlapping vulnerabilities and more responsive support systems.'
      , url: 'https://fieldsofview.in/'}
    ],
    intangible: [
      {
        name: 'Reimagining Resilience',
        kind: 'Workshop format',
        desc: 'A participatory workshop that convenes CSOs, funders, researchers, journalists, and policymakers around social protection and resilience design.'
      , url: 'https://fieldsofview.in/'},
      {
        name: 'PolicyLab',
        kind: 'Research thread',
        desc: 'Fields of View defines PolicyLab as the arm that researches and designs games and simulations at the intersection of art, social sciences, and technology.'
      , url: 'https://fieldsofview.in/'},
      {
        name: 'School of Policy',
        kind: 'Training thread',
        desc: 'School of Policy trains policymakers and civil-society groups to use FoV\'s tools in practice.'
      , url: 'https://fieldsofview.in/'},
      {
        name: 'Policy in Play',
        kind: 'Public pedagogy thread',
        desc: 'Policy in Play creates graphic novels, games, and similar artefacts to make policy more accessible.'
      , url: 'https://fieldsofview.in/'}
    ],
    sources: [
      {label: 'Home', url: 'https://fieldsofview.in/'},
      {label: 'Tools', url: 'https://fieldsofview.in/tools/'},
      {label: 'E-QLT', url: 'https://fieldsofview.in/tools/e-qlt/'},
      {label: 'Jee-van', url: 'https://fieldsofview.in/tools/jee-van/'},
      {label: 'The Waymaker', url: 'https://fieldsofview.in/tools/the-waymaker/'},
      {label: 'Reimagining Resilience', url: 'https://fieldsofview.in/tools/reimagining-resilience/'},
      {label: 'Projects', url: 'https://fieldsofview.in/projects/'},
      {label: 'Resources', url: 'https://fieldsofview.in/resources/'}
    ]
  },
  'GOONJ': {
    status: 'researched',
    summary: 'GOONJ\'s strongest artefacts are programme formats that convert urban surplus material into development, education, menstrual-health, and relief infrastructure.',
    tangible: [
      {
        name: 'MY Pad',
        kind: 'Physical product',
        desc: 'A cloth-based sanitary pad system made from sorted and processed cotton cloth, bundled with hygiene guidance and optional waterproof pouches.'
      , url: 'https://goonj.org/my-pad/'},
      {
        name: 'School to School',
        kind: 'Education transfer programme',
        desc: 'An award-winning material channel that moves underused resources from urban schools into under-resourced schools while shaping behaviour change.'
      , url: 'https://goonj.org/school-to-school/'},
      {
        name: 'Green by Goonj stalls and carnivals',
        kind: 'Circular-economy retail and awareness format',
        desc: 'Goonj publicly encourages institutions to host Green by Goonj stalls and carnivals to raise funds and move surplus material.'
      , url: 'https://goonj.org/'}
    ],
    intangible: [
      {
        name: 'Cloth for Work',
        kind: 'Community development model',
        desc: 'GOONJ\'s signature model rewards locally led development work with dignified material support instead of treating money as the only development input.'
      , url: 'https://goonj.org/cloth-for-work/'},
      {
        name: 'Not Just a Piece of Cloth',
        kind: 'Menstrual-health initiative',
        desc: 'NJPC combines access, awareness, and affordability while using cloth as a trigger for conversations about menstruation with last-mile women.'
      , url: 'https://goonj.org/njpc/'},
      {
        name: 'Rahat',
        kind: 'Disaster response model',
        desc: 'Rahat is GOONJ\'s community-first approach to relief, rehabilitation, and resilience after disasters.'
      , url: 'https://goonj.org/rahat/'},
      {
        name: 'Goonj It!',
        kind: 'Circularity initiative',
        desc: 'The public site positions Goonj It! as an ongoing reuse-and-repurpose effort around surplus and waste material.'
      , url: 'https://goonj.org/'}
    ],
    sources: [
      {label: 'Home', url: 'https://goonj.org/'},
      {label: 'Our initiatives', url: 'https://goonj.org/our-initiatives/'},
      {label: 'Not Just A Piece of Cloth', url: 'https://goonj.org/njpc/'},
      {label: 'Journey to MY Pad', url: 'https://goonj.org/health/the-journey-from-just-a-piece-of-cloth-to-my-pad/'},
      {label: 'Why it is not just a piece of cloth', url: 'https://goonj.org/health/why-its-not-just-a-piece-of-cloth/'}
    ]
  },
  'IIHS': {
    status: 'researched',
    summary: 'IIHS produces knowledge infrastructure, media archives, spatial labs, and practice-linked learning programmes as core artefacts.',
    tangible: [
      {
        name: 'Urban Atlas for India',
        kind: 'Geospatial dataset',
        desc: 'IIHS describes Urban Atlas for India as a comparative land-use and land-cover dataset for the hundred most populous Indian cities.'
      , url: 'https://iihs.co.in/knowledge-gateway/'},
      {
        name: 'Knowledge Gateway',
        kind: 'Publication repository',
        desc: 'An open repository for IIHS research, cases, policy briefs, reports, and pedagogical materials.'
      , url: 'https://iihs.co.in/knowledge-gateway/'},
      {
        name: 'Media Lab',
        kind: 'Audio-visual repository',
        desc: 'The Media Lab hosts an audio-visual archive and live-streaming practice around urban issues.'
      , url: 'https://iihs.co.in/'},
      {
        name: 'Geospatial Lab',
        kind: 'Research lab',
        desc: 'A centre for spatial research, consulting, remote sensing, GIS, and web services inside IIHS.'
      , url: 'https://iihs.co.in/'}
    ],
    intangible: [
      {
        name: 'Urban Fellows Programme',
        kind: 'Pedagogy programme',
        desc: 'IIHS frames the Urban Fellows Programme as a route into a new urban practice grounded in interdisciplinary teaching and practice.'
      , url: 'https://urbanfellows.iihs.co.in/'},
      {
        name: 'Word Lab',
        kind: 'Editorial and knowledge practice',
        desc: 'The Word Lab anchors IIHS editorial systems, publication flow, open-access cases, and the flagship journal Urbanisation.'
      , url: 'https://iihs.co.in/'},
      {
        name: 'Campus as living lab',
        kind: 'Institutional model',
        desc: 'The Kengeri campus is presented as an archetype and living lab for climate-resilient, eco-friendly built environment work.'
      , url: 'https://iihs.co.in/'}
    ],
    sources: [
      {label: 'Geospatial Lab', url: 'https://iihs.co.in/research/labs/geospatial-lab/'},
      {label: 'Knowledge Gateway', url: 'https://iihs.co.in/knowledge-gateway/'},
      {label: 'Media Lab', url: 'https://iihs.co.in/research/labs/media-lab/'},
      {label: 'Word Lab', url: 'https://iihs.co.in/research/labs/word-lab/'},
      {label: 'Urban Fellows Programme reflection', url: 'https://iihs.co.in/knowledge-gateway/towards-a-new-urban-practice-the-urban-fellows-programme-2016-2022/'},
      {label: 'Built Environment in IIHS Campus', url: 'https://iihs.co.in/knowledge-gateway/built-environment-in-iihs-campus-kengeri/'}
    ]
  },
  'Janaagraha': {
    status: 'researched',
    summary: 'Janaagraha\'s artefacts are civic-finance platforms, accounting manuals, grant-management systems, and reform playbooks paired with city-finance operating models.',
    tangible: [
      {
        name: 'CityFinance.in',
        kind: 'National portal',
        desc: 'A national municipal-finance portal conceived by Janaagraha for city financial statements, benchmarking, and peer learning.'
      , url: 'https://cityfinance.in/'},
      {
        name: '15th Finance Commission online grant management system',
        kind: 'Government workflow platform',
        desc: 'An online system to digitise city-grant eligibility, compliance, disbursal, and utilisation monitoring.'
      , url: 'https://www.janaagraha.org/works/municipal-finance/'},
      {
        name: 'Odisha Municipal Accounting Manual 2.0',
        kind: 'Accounting manual',
        desc: 'OMAM 2.0 was developed for Odisha to improve reporting, accountability, and service-line cost tracking.'
      , url: 'https://www.janaagraha.org/works/municipal-finance/'},
      {
        name: 'Property Tax Reform Toolkit',
        kind: 'Toolkit',
        desc: 'A reform guide that maps best practices and recommends improvements across the full property-tax lifecycle.'
      , url: 'https://www.janaagraha.org/works/municipal-finance/'}
    ],
    intangible: [
      {
        name: 'Own Revenue Augmentation',
        kind: 'City-finance programme',
        desc: 'A policy reform programme built around whole-of-systems transformation of property-tax and user-charge systems.'
      , url: 'https://www.janaagraha.org/works/municipal-finance/'},
      {
        name: 'Municipal Premier League',
        kind: 'Behavioural reform format',
        desc: 'A competition format used with cities to improve revenue collection and data-driven municipal leadership.'
      , url: 'https://www.janaagraha.org/'},
      {
        name: 'Whole-of-systems municipal finance lens',
        kind: 'Institutional approach',
        desc: 'Janaagraha repeatedly frames reform not as piecemeal fixes but as end-to-end redesign of city finance systems.'
      , url: 'https://www.janaagraha.org/works/municipal-finance/'}
    ],
    sources: [
      {label: 'Municipal finance', url: 'https://www.janaagraha.org/what-we-do/municipal-finance/'},
      {label: 'CityFinance.in', url: 'https://www.janaagraha.org/work/city-finance-in/'},
      {label: 'Own revenue augmentation', url: 'https://www.janaagraha.org/work/own-revenue-augmentation/'},
      {label: 'Property Tax Reform Toolkit', url: 'https://www.janaagraha.org/resources/a-toolkit-for-property-tax-reforms/'}
    ]
  },
  'Nature Conservation Foundation': {
    status: 'researched',
    summary: 'NCF\'s artefacts mix citizen-science programmes, public learning formats, field centres, handbooks, and research platforms.',
    tangible: [
      {
        name: 'Hornbill Watch',
        kind: 'Citizen-science initiative',
        desc: 'A citizen-science initiative inviting people to document hornbill sightings across India.'
      , url: 'https://www.ncf-india.org/eastern-himalaya/hornbill-watch'},
      {
        name: 'Biodiversity Basics',
        kind: 'Online course',
        desc: 'An online natural-history course for beginners focused on the Western Ghats and field-observation practice.'
      , url: 'https://www.ncf-india.org/'},
      {
        name: 'Handbook for Nature Guides',
        kind: 'Handbook',
        desc: 'NCF publishes a guidebook alongside its nature-guide training programme.'
      , url: 'https://www.ncf-india.org/'},
      {
        name: 'EcoQuest, Mysore',
        kind: 'Discovery centre',
        desc: 'EcoQuest functioned as an interactive nature-discovery centre linking urban audiences to conservation and livelihood issues.'
      , url: 'https://www.ncf-india.org/'}
    ],
    intangible: [
      {
        name: 'CEROS',
        kind: 'Research platform',
        desc: 'CEROS brings together community ecology and restoration work across multiple biodiversity hotspots.'
      , url: 'https://www.ncf-india.org/'},
      {
        name: 'Online Nature Guide Training Course',
        kind: 'Capacity-building programme',
        desc: 'A structured course for people exploring ethical nature guiding as a livelihood and public-engagement pathway.'
      , url: 'https://www.ncf-india.org/'},
      {
        name: 'Nature on Campus',
        kind: 'Engagement programme',
        desc: 'NCF works with colleges to create nature clubs, expert interactions, and campus-based engagement formats.'
      , url: 'https://www.ncf-india.org/'}
    ],
    sources: [
      {label: 'Hornbill Watch', url: 'https://www.ncf-india.org/eastern-himalaya/hornbill-watch'},
      {label: 'Biodiversity Basics', url: 'https://www.ncf-india.org/western-ghats/biodiversity-basics-natural-history-of-the-western-ghats'},
      {label: 'EcoQuest', url: 'https://www.ncf-india.org/education-and-public-engagement/ecoquest'},
      {label: 'CEROS', url: 'https://www.ncf-india.org/ceros'},
      {label: 'Online Nature Guide Training Course', url: 'https://www.ncf-india.org/conservation-leadership/online-nature-guide-training-course'},
      {label: 'Nature on Campus', url: 'https://www.ncf-india.org/education-and-public-engagement/nature-on-campus'}
    ]
  },
  'Oorvani Foundation': {
    status: 'researched',
    summary: 'Oorvani blends civic media, open urban data, and civic-learning programmes into a portfolio of reusable public resources and community formats.',
    tangible: [
      {
        name: 'Citizen Matters',
        kind: 'Civic media platform',
        desc: 'Oorvani presents Citizen Matters as a knowledge platform carrying civic reporting, issue explainers, and public-interest journalism.'
      , url: 'https://citizenmatters.in/'},
      {
        name: 'Open City',
        kind: 'Urban data commons',
        desc: 'Open City is positioned as a civic-tech and urban data commons containing datasets, maps, and public documents.'
      , url: 'https://opencity.in/'},
      {
        name: 'Civic Learning Hub',
        kind: 'Learning platform',
        desc: 'The Civic Learning Hub houses workshops, datajams, hackathons, cohort courses, and conferences for civic action.'
      , url: 'https://citizenmatters.in/'}
    ],
    intangible: [
      {
        name: 'Three-step changemaking process',
        kind: 'Theory of change',
        desc: 'Oorvani explicitly describes its changemaking arc as sensemaking, strengthening agency, and problem solving.'
      , url: 'https://citizenmatters.in/about-us/'},
      {
        name: 'Datajam and design-jam format',
        kind: 'Participation format',
        desc: 'Its public calendar shows recurring datajams, design jams, workshops, and citizen journalism sessions as a repeatable engagement artefact.'
      , url: 'https://citizenmatters.in/'},
      {
        name: 'Civic knowledge-to-action model',
        kind: 'Institutional model',
        desc: 'The organisation consistently links information, data, resources, and networks so citizens can move from understanding to action.'
      , url: 'https://citizenmatters.in/about-us/'}
    ],
    sources: [
      {label: 'Home', url: 'https://oorvani.org/'},
      {label: 'About', url: 'https://oorvani.org/about'},
      {label: 'Civic Learning Hub', url: 'https://oorvani.org/learning'},
      {label: 'Get involved', url: 'https://oorvani.org/engage'}
    ]
  },
  'PRADAN': {
    status: 'researched',
    summary: 'PRADAN turns livelihoods work into named programmes, women-led producer institutions, and scalable rural-development operating models.',
    tangible: [
      {
        name: 'LEAP',
        kind: 'Livelihood programme',
        desc: 'LEAP supports women farmers through market access, capacity building, and value-chain strengthening in eastern India.'
      , url: 'https://www.pradan.net/'},
      {
        name: 'PROWFIT',
        kind: 'FPO-strengthening programme',
        desc: 'PROWFIT focuses on turning women-led farmer producer organisations into stronger independent institutions.'
      , url: 'https://www.pradan.net/'},
      {
        name: 'START',
        kind: 'Rural transformation programme',
        desc: 'START develops women-centric socio-technical and value-chain models for tribal and rural transformation.'
      , url: 'https://www.pradan.net/'},
      {
        name: 'SAFALTA',
        kind: 'Jharkhand livelihoods programme',
        desc: 'SAFALTA is a multi-year initiative to strengthen SHG-led women\'s institutions and agriculture ecosystems in Jharkhand.'
      , url: 'https://www.pradan.net/'}
    ],
    intangible: [
      {
        name: 'Women-led FPO strategy',
        kind: 'Institution-building model',
        desc: 'Across LEAP and PROWFIT, PRADAN frames women-led producer organisations as an institutional vehicle for durable livelihood gains.'
      , url: 'https://www.pradan.net/'},
      {
        name: 'Tribal and marginal livelihoods framework',
        kind: 'Operating model',
        desc: 'Its programmes combine livelihoods with gender, governance, health, climate, and skilling instead of treating farming as a silo.'
      , url: 'https://www.pradan.net/'}
    ],
    sources: [
      {label: 'LEAP', url: 'https://www.pradan.net/leap/'},
      {label: 'About PROWFIT', url: 'https://www.pradan.net/about-prowfit/'},
      {label: 'START', url: 'https://www.pradan.net/stimulating-tribal-and-rural-transformation-start/'},
      {label: 'SAFALTA', url: 'https://www.pradan.net/safalta/'}
    ]
  },
  'Vidhi Centre': {
    status: 'researched',
    summary: 'Vidhi\'s clearest artefacts are legal-design manuals, practical toolkits, model documents, and public-facing legal accessibility infrastructure.',
    tangible: [
      {
        name: 'The SARAL Manual',
        kind: 'Manual',
        desc: 'A principle-based plain-language drafting manual for better laws and clearer legislative writing.'
      , url: 'https://vidhilegalpolicy.in/'},
      {
        name: 'SARAL Tools',
        kind: 'Drafting toolkit',
        desc: 'The SARAL platform offers principles, a checklist, and related tools to help drafters build simpler legal instruments.'
      , url: 'https://vidhilegalpolicy.in/'},
      {
        name: 'End-of-Life Care Toolkit',
        kind: 'Toolkit',
        desc: 'A practical legal toolkit with ready reckoners, FAQs, model directives, and state-implementation material around end-of-life care.'
      , url: 'https://vidhilegalpolicy.in/'},
      {
        name: 'SARAL Survey Findings',
        kind: 'Evidence booklet',
        desc: 'Vidhi published survey findings to quantify demand for simpler and more accessible legal documents in India.'
      , url: 'https://vidhilegalpolicy.in/'}
    ],
    intangible: [
      {
        name: 'SARAL Initiative',
        kind: 'Legal-design initiative',
        desc: 'SARAL is Vidhi\'s larger initiative to make laws simple, accessible, rational, and actionable.'
      , url: 'https://vidhilegalpolicy.in/'},
      {
        name: 'SARAL Collective',
        kind: 'Coordination platform',
        desc: 'The SARAL Collective is designed as a stewardship hub connecting government, universities, lawyers, and students around legal accessibility.'
      , url: 'https://vidhilegalpolicy.in/'},
      {
        name: 'Legal accessibility movement-building',
        kind: 'Institutional approach',
        desc: 'Vidhi explicitly frames simplification of law as a movement requiring evidence, manuals, toolkits, and coordinated action.'
      , url: 'https://vidhilegalpolicy.in/'}
    ],
    sources: [
      {label: 'About Vidhi', url: 'https://vidhilegalpolicy.in/about/'},
      {label: 'SARAL Manual', url: 'https://vidhilegalpolicy.in/research/the-saral-manual/'},
      {label: 'SARAL platform', url: 'https://saral.vidhilegalpolicy.in/index'},
      {label: 'SARAL survey findings', url: 'https://vidhilegalpolicy.in/research/saral-survey-findings/'},
      {label: 'End-of-Life Care Toolkit', url: 'https://vidhilegalpolicy.in/eolctoolkit/'},
      {label: 'Mission statement archive', url: 'https://vidhilegalpolicy.in/topics/mission-statement/'}
    ]
  },
  'WRI India': {
    status: 'researched',
    summary: 'WRI India\'s public artefacts are platforms, challenge formats, and convenings that turn urban and climate research into reusable public infrastructure.',
    tangible: [
      {
        name: 'The Hub',
        kind: 'Capacity-building platform',
        desc: 'A free-access portal for transport and urban-development publications, datasets, videos, training material, toolkits, and peer exchange.'
      , url: 'https://wri-india.org/'},
      {
        name: 'Stories from Nurturing Neighbourhoods Challenge',
        kind: 'Compendium',
        desc: 'The challenge compendium distills city experiments and approaches for child- and caregiver-friendly public space.'
      , url: 'https://wri-india.org/our-work/project/nurturing-neighbourhoods'}
    ],
    intangible: [
      {
        name: 'Nurturing Neighbourhoods',
        kind: 'Urban programme',
        desc: 'A city-network initiative that embeds a young-child and caregiver lens into urban development.'
      , url: 'https://wri-india.org/our-work/project/nurturing-neighbourhoods'},
      {
        name: 'Connect Karo',
        kind: 'Knowledge convening',
        desc: 'WRI India\'s flagship annual event functions as a recurring dialogue and coalition-building artefact across climate and development themes.'
      , url: 'https://connectkaro.org/'},
      {
        name: 'Urban Water and Climate Resilience',
        kind: 'Programme architecture',
        desc: 'A public programme umbrella for climate action plans, nature-based solutions, finance pathways, and governance support in cities.'
      , url: 'https://wri-india.org/'}
    ],
    sources: [
      {label: 'The Hub', url: 'https://wri-india.org/initiatives/hub'},
      {label: 'Nurturing Neighbourhoods', url: 'https://wri-india.org/initiatives/shaping-nurturing-neighbourhoods'},
      {label: 'Nurturing Neighbourhoods 2.0', url: 'https://wri-india.org/news/nurturing-neighbourhoods-20-launched-step-towards-child-and-caregiver-friendly-urban-spaces'},
      {label: 'Connect Karo 2025', url: 'https://wri-india.org/events/2025/9/connect-karo-2025-people-nature-climate'},
      {label: 'A Decade of Connect Karo', url: 'https://wri-india.org/perspectives/decade-connect-karo-advancing-urban-development-food-security-climate-resilience-and'},
      {label: 'Urban Water and Climate Resilience', url: 'https://wri-india.org/initiatives/urban-water-and-climate-resilience'}
    ]
  },
  'Wildlife Conservation Society India': {
    status: 'researched',
    summary: 'WCS-India turns field science into landscape programmes, training modules, outreach resources, and species-focused conservation roadmaps.',
    tangible: [
      {
        name: 'Counter Wildlife Trafficking training modules',
        kind: 'Training package',
        desc: 'WCS-India publishes sample training schedules for forest departments, security forces, and judiciary actors working on wildlife crime.'
      , url: 'https://www.wcsindia.org/'},
      {
        name: 'Counter Wildlife Trafficking helpline support',
        kind: 'Operational support',
        desc: 'Its crime-prevention work in the Northeast explicitly includes expert biological and legal support through a helpline.'
      , url: 'https://www.wcsindia.org/'},
      {
        name: 'Agroforest Biodiversity Resources',
        kind: 'Outreach materials',
        desc: 'WCS-India publishes amphibian awareness posters and similar outreach material tied to agroforest biodiversity.'
      , url: 'https://www.wcsindia.org/'}
    ],
    intangible: [
      {
        name: 'Western Ghats landscape programme',
        kind: 'Landscape conservation programme',
        desc: 'The Western Ghats programme anchors species and habitat work across central and southern sections of the hotspot.'
      , url: 'https://www.wcsindia.org/'},
      {
        name: 'Crime Prevention NER',
        kind: 'Counter-trafficking programme',
        desc: 'This programme combines open-source analysis, stakeholder consultation, training, and implementable site-specific strategies.'
      , url: 'https://www.wcsindia.org/'},
      {
        name: 'Dhole conservation roadmap',
        kind: 'Species-conservation strategy',
        desc: 'WCS-India describes its dhole work as generating a strategic roadmap that combines ecological, social, and political attributes.'
      , url: 'https://www.wcsindia.org/'},
      {
        name: 'Rights and communities work in the Central Western Ghats',
        kind: 'Community-linked conservation model',
        desc: 'Its landscape work includes collaboration with local communities and partners for long-term conservation and socio-economic outcomes.'
      , url: 'https://www.wcsindia.org/'}
    ],
    sources: [
      {label: 'Western Ghats', url: 'https://india.wcs.org/Western-Ghats'},
      {label: 'Counter wildlife trafficking training schedules', url: 'https://india.wcs.org/Counter-Wildlife-Trafficking-Training-Schedules'},
      {label: 'Crime Prevention NER', url: 'https://india.wcs.org/Programmes/Focal/Counter-Wildlife-Trafficking/Crime-Prevention-NER'},
      {label: 'Agroforest Biodiversity Resources', url: 'https://india.wcs.org/Resources/Outreach-Materials/Infographics/Agroforest-Biodiversity-Resources'},
      {label: 'Dhole', url: 'https://india.wcs.org/Programmes/Focal/Western-Ghats/Dhole'},
      {label: 'Central Western Ghats', url: 'https://india.wcs.org/Programmes/Cross-Functional/Rights-and-Communities/Central-Western-Ghats'}
    ]
  },
  'A ROCHA INDIA': {
    status: 'researched',
    summary: 'A Rocha India turns conservation work into conflict-response systems, community programmes, environmental education, and health-linked support for forest-fringe settlements.',
    tangible: [
      {
        name: 'Primary Response Team',
        kind: 'Conflict response system',
        desc: 'The PRT is a structured first-response arrangement with forest authorities to reduce human-elephant conflict through proactive reporting and field action.'
      , url: 'https://www.arochaindia.org/'},
      {
        name: 'Environmental education programme',
        kind: 'Education programme',
        desc: 'A Rocha India runs environmental education for rural and urban children, combining wildlife literacy, skill-building workshops, and awareness exercises.'
      , url: 'https://www.arochaindia.org/'},
      {
        name: 'Health and hygiene camps',
        kind: 'Community service package',
        desc: 'Its health and hygiene work includes medical camps, local PHC support, medicines, oxygen concentrators, and awareness programmes for conflict-prone communities.'
      , url: 'https://www.arochaindia.org/'}
    ],
    intangible: [
      {
        name: 'Human-wildlife conflict resolution model',
        kind: 'Programme architecture',
        desc: 'The organisation explicitly frames its core mission around conflict resolution, capacity building, and resilience for wildlife habitats and local communities.'
      , url: 'https://www.arochaindia.org/'},
      {
        name: 'Community-based conservation',
        kind: 'Operating model',
        desc: 'A Rocha India builds conservation support by treating forest-edge communities and frontline staff as essential stakeholders in long-term biodiversity stewardship.'
      , url: 'https://www.arochaindia.org/'}
    ],
    sources: [
      {label: 'Home', url: 'https://www.arocha.in/'},
      {label: 'Our Goal', url: 'https://www.arocha.in/about-a-rocha-india/our-goal/'},
      {label: 'Education', url: 'https://www.arocha.in/education/'},
      {label: 'Community', url: 'https://www.arocha.in/community/'},
      {label: 'Health and Hygiene', url: 'https://www.arocha.in/community/health-and-hygiene/'},
      {label: 'Current Projects', url: 'https://www.arocha.in/home/current-projects/'}
    ]
  },
  'BPAC': {
    status: 'researched',
    summary: 'BPAC\'s public artefacts are civic-governance campaigns, capacity-building tracks, safety audits, and youth-facing democracy programmes built around Bengaluru reform.',
    tangible: [
      {
        name: 'B.CLIP',
        kind: 'Leadership and capacity-building platform',
        desc: 'B.CLIP appears in BPAC newsletters as a recurring civic leadership and capacity-building stream connected to ward and constituency work.'
      , url: 'https://bfriendsofbangalore.org/'},
      {
        name: 'B.SAFE Constituency',
        kind: 'Safety audit programme',
        desc: 'B.SAFE runs public-place safety audits, ambassador networks, and constituency-level interventions around women\'s safety and public space.'
      , url: 'https://bfriendsofbangalore.org/'},
      {
        name: 'IRR Street - Standstill to Active',
        kind: 'Mobility and street-design initiative',
        desc: 'BPAC positions this as a flagship project to improve bus connectivity, walkability, and street activation along the Inner Ring Road.'
      , url: 'https://bfriendsofbangalore.org/'}
    ],
    intangible: [
      {
        name: 'Participatory Democracy Fellowship Program',
        kind: 'Public policy fellowship',
        desc: 'The fellowship takes students into real governance settings through audits, field visits, constituency work, and evidence-based civic learning.'
      , url: 'https://bfriendsofbangalore.org/'},
      {
        name: 'Agenda for Bangalore',
        kind: 'Civic reform framework',
        desc: 'Agenda for Bangalore operates as a durable advocacy and public-outreach frame, including Friends of BPAC and regular citizen co-advocacy.'
      , url: 'https://bfriendsofbangalore.org/'}
    ],
    sources: [
      {label: 'Home', url: 'https://bpac.in/'},
      {label: 'Agenda for Bangalore', url: 'https://bpac.in/wp-content/uploads/2017/04/Agenda-for-Bangalore-En.pdf'},
      {label: 'B.PAC Times Vol 62', url: 'https://bpac.in/BPAC-TIMES-VOL-62-Newsletter-Q2-july-sept-2025.pdf'},
      {label: 'B.PAC Times Vol 59', url: 'https://bpac.in/wp-content/uploads/2025/05/Newsletter-BPAC-Times-Vol-59.pdf'},
      {label: 'B.PAC Times Vol 53', url: 'https://bpac.in/wp-content/uploads/2024/10/VOL-53-The-B.PAC-Times_-July-2024.pdf'}
    ]
  },
  'Biome Environmental Trust': {
    status: 'researched',
    summary: 'Biome packages its water work into campaigns, school installations, murals, comics, and open-source practice-to-policy knowledge.',
    tangible: [
      {
        name: 'Million Wells for Bengaluru',
        kind: 'Campaign',
        desc: 'A city-scale campaign to revive groundwater through open wells while also supporting well diggers\' livelihoods.'
      , url: 'https://biometrust.org/million-wells-for-bengaluru-campaign/'},
      {
        name: 'School rainwater harvesting systems',
        kind: 'Demonstration infrastructure',
        desc: 'Biome installs rooftop rainwater harvesting systems in government schools and uses them as water-literacy learning assets.'
      , url: 'https://biometrust.org/our-work/'},
      {
        name: 'Bengaluru water story mural and comic materials',
        kind: 'Public communication artefacts',
        desc: 'Its public-facing work includes a Cubbon Park metro mural and illustrated communication material around community water transitions.'
      , url: 'https://biometrust.org/'}
    ],
    intangible: [
      {
        name: 'Practice-to-policy bridge',
        kind: 'Institutional method',
        desc: 'Biome explicitly describes itself as a thoughtful do tank and practice-to-policy bridge connecting field practice to system change.'
      , url: 'https://biometrust.org/'},
      {
        name: 'Open-source water knowledge approach',
        kind: 'Knowledge model',
        desc: 'The trust says it open-sources relevant knowledge and works through communities, well diggers, plumbers, schools, and state systems.'
      , url: 'https://biometrust.org/resources/'}
    ],
    sources: [
      {label: 'Home', url: 'https://biometrust.org/'},
      {label: 'About Us', url: 'https://biometrust.org/about-us/'},
      {label: 'Schools water literacy project', url: 'https://biometrust.org/rainwater-harvesting-and-water-literacy-in-meghalaya-and-tripura-schools/'}
    ]
  },
  'Centre for Wildlife Studies': {
    status: 'researched',
    summary: 'CWS turns coexistence research into flagship field programmes, education curricula, public-health training, and advanced wildlife learning pipelines.',
    tangible: [
      {
        name: 'Wild Seve',
        kind: 'Conflict-response service',
        desc: 'Wild Seve provides a toll-free response system and compensation-claim support for communities affected by human-wildlife conflict.'
      , url: 'https://cwsindia.org/wild-seve/'},
      {
        name: 'Wild Shaale',
        kind: 'Environmental education curriculum',
        desc: 'Wild Shaale is a locally specific wildlife curriculum for school children living near wildlife reserves.'
      , url: 'https://cwsindia.org/'},
      {
        name: 'Wild Surakshe',
        kind: 'Public health and safety programme',
        desc: 'Wild Surakshe delivers workshops on zoonotic disease, human-wildlife conflict, and emergency preparedness across wildlife landscapes.'
      , url: 'https://cwsindia.org/'}
    ],
    intangible: [
      {
        name: 'Human-wildlife coexistence model',
        kind: 'Research-to-action framework',
        desc: 'CWS uses long-term conflict research to create applied programmes that improve coexistence rather than staying at the level of academic study.'
      , url: 'https://cwsindia.org/'},
      {
        name: 'Wild Incubator and advanced learning pipeline',
        kind: 'Institution-building model',
        desc: 'The organisation pairs applied field programmes with doctoral, master\'s, study-abroad, and incubator pathways to grow conservation capacity.'
      , url: 'https://cwsindia.org/'}
    ],
    sources: [
      {label: 'Home', url: 'https://cwsindia.org/'},
      {label: 'Wild Seve', url: 'https://cwsindia.org/wild-seve/'},
      {label: 'Wild Shaale', url: 'https://cwsindia.org/wild-shaale/'},
      {label: 'Wild Surakshe', url: 'https://cwsindia.org/wild-surakshe/'},
      {label: 'Human Wildlife Interaction research', url: 'https://cwsindia.org/research/human-wildlife-interaction/'},
      {label: 'Support Wildlife', url: 'https://cwsindia.org/donate-for-wildlife/'}
    ]
  },
  'Gram Vikas': {
    status: 'researched',
    summary: 'Gram Vikas turns rural development into a named community-governance methodology, village water systems, and habitat-technology demonstration projects.',
    tangible: [
      {
        name: 'Participatory and Community-Led Swajaldhara Rural Drinking Water Project',
        kind: 'Water infrastructure programme',
        desc: 'Gram Vikas built decentralised village water systems with household connections, storage reservoirs, pump houses, and village committees.'
      , url: 'https://gramvikas.org/'},
      {
        name: 'Project Vibha',
        kind: 'Rural electrification project',
        desc: 'Within its Habitat and Technology work, Project Vibha advances community-led rural electrification and lighting in off-grid areas.'
      , url: 'https://gramvikas.org/'},
      {
        name: 'Solar Micro-Grid Renewal for Rural Lives & Livelihoods',
        kind: 'Energy infrastructure project',
        desc: 'The organisation publicly lists a solar micro-grid renewal initiative as part of its habitat-technology project portfolio.'
      , url: 'https://gramvikas.org/'}
    ],
    intangible: [
      {
        name: 'MANTRA',
        kind: 'Holistic development framework',
        desc: 'The Movement and Action Network for Transformation of Rural Areas is Gram Vikas\' all-or-none model for inclusion, equity, cost-sharing, and long-term village institutions.'
      , url: 'https://gramvikas.org/'},
      {
        name: 'Integrated habitat development',
        kind: 'Operating model',
        desc: 'Water and sanitation act as an entry point for wider work on livelihoods, governance, health, education, and village institutions.'
      , url: 'https://gramvikas.org/'}
    ],
    sources: [
      {label: 'Vision and Approach', url: 'https://www.gramvikas.org/vision-and-approach/'},
      {label: 'Swajaldhara Rural Drinking Water Project', url: 'https://www.gramvikas.org/project/participatory-and-community-led-swajaldhara-rural-drinking-water-project/'},
      {label: 'Habitat & Technology', url: 'https://www.gramvikas.org/focus_area/habitat-technologies/'},
      {label: 'Work Overview', url: 'https://www.gramvikas.org/overview/'},
      {label: 'Decade Five', url: 'https://www.gramvikas.org/decade-five/'}
    ]
  },
  'Kalpavriksh': {
    status: 'researched',
    summary: 'Kalpavriksh produces alternative-development frameworks, knowledge platforms, newsletters, environmental education resources, and children\'s books.',
    tangible: [
      {
        name: 'Vikalp Sangam',
        kind: 'Alternatives platform',
        desc: 'A long-running website and networking process documenting stories, case studies, videos, interviews, and exchanges on grassroots alternatives.'
      , url: 'https://vikalpsangam.org/'},
      {
        name: 'People in Conservation Newsletter',
        kind: 'Publication',
        desc: 'Kalpavriksh features the People in Conservation newsletter as a recurring public knowledge artefact.'
      , url: 'https://kalpavriksh.org/'},
      {
        name: 'Environment education materials and children\'s books',
        kind: 'Learning resources',
        desc: 'Its environment education vertical produces locale-specific educational programmes, resource packs, and children\'s nature books.', url: 'https://kalpavriksh.org/'
      }
    ],
    intangible: [
      {
        name: 'Radical Ecological Democracy',
        kind: 'Governance framework',
        desc: 'RED is Kalpavriksh\'s broad socio-ecological framework for justice, sustainability, and participatory decision-making.'
      , url: 'https://kalpavriksh.org/our-work/alternatives/'},
      {
        name: 'Alternatives and eco-swaraj process',
        kind: 'Movement-building process',
        desc: 'The organisation links Vikalp Sangam and RED into a wider process of building bridges across ecological and social alternatives.'
      , url: 'https://kalpavriksh.org/our-work/alternatives/'}
    ],
    sources: [
      {label: 'Home', url: 'https://kalpavriksh.org/'},
      {label: 'Vikalp Sangam', url: 'https://kalpavriksh.org/our-work/alternatives/vikalp-sangam/'},
      {label: 'Radical Ecological Democracy', url: 'https://kalpavriksh.org/our-work/alternatives/radical-ecological-democracy/'},
      {label: 'Environment Education', url: 'https://kalpavriksh.org/our-work/environment-education/'}
    ]
  },
  'Keystone Foundation': {
    status: 'researched',
    summary: 'Keystone has built a cluster of sister enterprises, biodiversity tools, learning centres, and indigenous producer institutions around the Nilgiri Biosphere.',
    tangible: [
      {
        name: 'Aadhimalai Pazhangudiyinar Producer Company',
        kind: 'Producer collective',
        desc: 'Aadhimalai is Keystone\'s indigenous producers company for collecting, processing, and marketing forest and agricultural produce.'
      , url: 'https://keystonefoundation.org/'},
      {
        name: 'Last Forest Enterprise',
        kind: 'Social enterprise',
        desc: 'Last Forest markets wild honey and other biodiversity-linked products while supporting indigenous livelihoods.'
      , url: 'https://lastforest.in/'},
      {
        name: 'Nilgiri Field Learning Centre',
        kind: 'Learning centre',
        desc: 'The field learning centre hosts exchange and learning programmes rooted in the Nilgiri landscape.'
      , url: 'https://keystonefoundation.org/'},
      {
        name: 'Radio Kotagiri and Honey Portal',
        kind: 'Communication and knowledge tools',
        desc: 'Keystone\'s ecosystem includes community media and a dedicated honey knowledge portal documenting species, methods, and biodiversity relationships.'
      , url: 'https://keystonefoundation.org/'}
    ],
    intangible: [
      {
        name: 'Biodiversity conservation through bees and restoration',
        kind: 'Conservation model',
        desc: 'Its biodiversity work combines bee ecology, indigenous knowledge, restoration, and wildlife interactions as an integrated landscape approach.'
      , url: 'https://keystonefoundation.org/'},
      {
        name: 'Indigenous producer and enterprise ecosystem',
        kind: 'Institutional model',
        desc: 'Keystone incubates producer companies, enterprises, and community institutions rather than limiting itself to short-cycle projects.'
      , url: 'https://lastforest.in/pages/our-story'}
    ],
    sources: [
      {label: 'Our Story', url: 'https://keystone-foundation.org/our-story/'},
      {label: 'Biodiversity Conservation', url: 'https://keystone-foundation.org/biodiversity/'},
      {label: 'Bees, people and markets', url: 'https://keystone-foundation.org/intertwined-relationship-between-bees-people-food-and-markets/'},
      {label: 'Aadhimalai production centre', url: 'https://keystone-foundation.org/aadhimalai-opens-new-production-centre-in-banagudi/'},
      {label: 'Honey Portal', url: 'https://honeyportal.keystone-foundation.org/'}
    ]
  },
  'IndusTree Crafts': {
    status: 'researched',
    summary: 'Industree has translated women-led creative manufacturing into producer companies, market brands, value-chain infrastructure, and a named ecosystem framework.',
    tangible: [
      {
        name: 'GreenKraft Producer Company',
        kind: 'Producer-owned enterprise',
        desc: 'GreenKraft is a women-owned producer company creating natural-fibre home and lifestyle products from banana bark, bamboo, and forest materials.'
      , url: 'https://www.industree.org.in/'},
      {
        name: 'Ektha Apparel Producer Company',
        kind: 'Producer-owned enterprise',
        desc: 'Ektha is Industree\'s apparel-oriented producer company linking rural women to formal supply chains and buyers.'
      , url: 'https://www.industree.org.in/'},
      {
        name: 'Creative Million',
        kind: 'Sector initiative',
        desc: 'Creative Million is a movement and public-facing intervention aimed at impacting one million creative producers.'
      , url: 'https://www.industree.org.in/'},
      {
        name: 'Value-chain enterprises in bamboo, sal, and banana',
        kind: 'Production infrastructure',
        desc: 'Industree publicly lists end-to-end value-chain systems across bamboo, sal leaves, and banana fibre with enterprises, leadership layers, and product lines.'
      , url: 'https://www.industree.org.in/'}
    ],
    intangible: [
      {
        name: '6C framework',
        kind: 'Enterprise ecosystem model',
        desc: 'The 6C framework is Industree\'s named model for combining capacity, capital, create, construct, channels, and connect around producer-led enterprises.'
      , url: 'https://www.industree.org.in/'},
      {
        name: 'Regenerative economic transformation',
        kind: 'Institutional approach',
        desc: 'Industree explicitly frames its work as regenerative economic transformation linking women\'s ownership, climate-positive value chains, and market access.'
      , url: 'https://www.industree.org.in/'},
      {
        name: 'Creative Dignity and Regenearth',
        kind: 'Sector-building architecture',
        desc: 'These initiatives extend Industree\'s work from enterprise incubation into broader ecosystem activation, capacity building, and sector communication.'
      , url: 'https://www.industree.org.in/'}
    ],
    sources: [
      {label: 'Home', url: 'https://www.industree.org.in/'},
      {label: 'About Us', url: 'https://www.industree.org.in/about-us/'},
      {label: 'Our Work', url: 'https://www.industree.org.in/ourwork'},
      {label: 'Value Chains', url: 'https://www.industree.org.in/valuechains'},
      {label: 'GreenKraft', url: 'https://www.industree.org.in/portfolio/greenkraft/'}
    ]
  },
  'M.S.Swaminathan Research': {
    status: 'researched',
    summary: 'MSSRF expresses its work through field centres, village knowledge systems, biodiversity gardens, and training infrastructure linked to food, nutrition, and climate resilience.',
    tangible: [
      {
        name: 'Village Resource Centres and Village Knowledge Centres',
        kind: 'Knowledge infrastructure',
        desc: 'MSSRF\'s VRC and VKC system delivers demand-driven local advisories, teleconferencing, digital clinics, and village-level knowledge services.'
      , url: 'https://www.mssrf.org/'},
      {
        name: 'Fish for All Research and Training Centre',
        kind: 'Training and demonstration centre',
        desc: 'A coastal livelihoods centre with fish processing, training halls, dormitories, ICT-enabled information services, and demonstration facilities.'
      , url: 'https://www.mssrf.org/'},
      {
        name: 'Community Agrobiodiversity Centre and MSSBG',
        kind: 'Conservation campus',
        desc: 'The Wayanad centre and botanical garden conserve rare and threatened species while functioning as research, education, and community conservation infrastructure.'
      , url: 'https://www.mssrf.org/'},
      {
        name: 'Biju Patnaik Tribal Agrobiodiversity Centre',
        kind: 'Regional centre',
        desc: 'The Jeypore centre combines landrace conservation, village knowledge centres, and low-cost agro-biodiversity demonstrations.'
      , url: 'https://www.mssrf.org/'}
    ],
    intangible: [
      {
        name: 'Participatory agro-biodiversity conservation',
        kind: 'Institutional model',
        desc: 'MSSRF repeatedly frames its work as conservation linked to nutrition, women\'s empowerment, institution-building, and sustainable livelihoods.'
      , url: 'https://www.mssrf.org/'},
      {
        name: 'Community-centred science for resilience',
        kind: 'Operating model',
        desc: 'Across regional centres, MSSRF positions science as a grassroots capability for resilient ecosystems, food security, and climate adaptation.'
      , url: 'https://www.mssrf.org/'}
    ],
    sources: [
      {label: 'Regional Centres and Field Sites', url: 'https://development.mssrf.org/regional-centres-field-sites'},
      {label: 'Village Knowledge Centres story', url: 'https://old.mssrf.org/our-stories/village-knowledge-centres-as-lifeline-for-local-famers/'},
      {label: 'Fish for All Research and Training Centre', url: 'https://old.mssrf.org/regional-centres/fish-for-all-research-and-training-centre-poompuhar/'},
      {label: 'MSSBG', url: 'https://mssbg.mssrf.org/'},
      {label: 'BPTABC mission and vision', url: 'https://bptabc.mssrf.org/about-us/mission-and-vision/'}
    ]
  },
  'RangDe': {
    status: 'researched',
    summary: 'Rang De\'s artefacts revolve around a regulated social-investing platform, investor-facing impact interfaces, and a formal impact-partner credit model.',
    tangible: [
      {
        name: 'Social investing platform',
        kind: 'Fintech platform',
        desc: 'Rang De runs an RBI-regulated NBFC-P2P platform where individuals invest in borrowers from underserved communities.'
      , url: 'https://rangde.in/'},
      {
        name: 'Live social investment opportunities',
        kind: 'Marketplace interface',
        desc: 'The public site foregrounds live social investment opportunities and impact categories as a reusable product interface.'
      , url: 'https://rangde.in/invest/'},
      {
        name: 'Social Impact Trips and events',
        kind: 'Investor engagement format',
        desc: 'Rang De now organises curated field visits so investors can see businesses and livelihoods enabled through their investments.'
      , url: 'https://rangde.in/'}
    ],
    intangible: [
      {
        name: 'Impact partner model',
        kind: 'Lending architecture',
        desc: 'The platform depends on a network of impact partners to identify borrowers, support them, and improve credit access for excluded groups.'
      , url: 'https://rangde.in/'},
      {
        name: 'Social investing thesis',
        kind: 'Financial inclusion model',
        desc: 'Rang De frames investing as a poverty-alleviation and empowerment mechanism rather than only a lending transaction.'
      , url: 'https://rangde.in/'}
    ],
    sources: [
      {label: 'Home', url: 'https://rangde.in/'},
      {label: 'Business model', url: 'https://rangde.in/business-model'},
      {label: 'Social impact trip', url: 'https://rangde.in/blog/social-impact-trip'}
    ]
  },
  'Reap Benefit': {
    status: 'researched',
    summary: 'Reap Benefit\'s portfolio is unusually productised, with open tech tools, youth portfolios, data platforms, forums, and a movement architecture around hyper-local action.',
    tangible: [
      {
        name: 'Solve Ninja Bot',
        kind: 'WhatsApp tool',
        desc: 'A behaviour-nudging and knowledge-access bot used by Solve Ninjas to navigate local problem-solving journeys.'
      , url: 'https://www.reapbenefit.org/tech'},
      {
        name: 'SamaajData',
        kind: 'Crowdsourced data repository',
        desc: 'A dynamic store of hyper-local civic and climate data positioned as a communal public asset.'
      , url: 'https://www.reapbenefit.org/tech'},
      {
        name: 'Samaaja',
        kind: 'Open-source software',
        desc: 'An open-source location-based citizen-engagement software stack built to let organisations deploy civic services quickly.'
      , url: 'https://www.reapbenefit.org/tech'},
      {
        name: 'Changemaker Portfolio and Solve Ninja Forum',
        kind: 'Community platforms',
        desc: 'These products let participants document their journeys, share solutions, and take part in public discussions and AMAs.'
      , url: 'https://www.reapbenefit.org/what'}
    ],
    intangible: [
      {
        name: 'Solve Ninja Movement',
        kind: 'Movement-building model',
        desc: 'Reap Benefit explicitly describes itself as building a nationwide movement of first-mile changemakers through hyper-local civic and climate action.'
      , url: 'https://www.reapbenefit.org/what'},
      {
        name: 'DISS journey and Secret Sauce',
        kind: 'Problem-solving framework',
        desc: 'Its operating model combines Discover-Investigate-Solve-Share with five levers: mentors, peer community, toolkits, data, and behavioural nudges.'
      , url: 'https://www.reapbenefit.org/how'}
    ],
    sources: [
      {label: 'Home', url: 'https://www.reapbenefit.org/'},
      {label: 'Meet the Solve Ninja', url: 'https://www.reapbenefit.org/what'},
      {label: 'Tech platform', url: 'https://www.reapbenefit.org/tech'},
      {label: 'How We Work', url: 'https://www.reapbenefit.org/how'},
      {label: 'SolveCon 2026', url: 'https://www.reapbenefit.org/solvecon2026'}
    ]
  },
  'Saahas': {
    status: 'researched',
    summary: 'Saahas has made knowledge artefacts and campaigns central to its waste work, especially around source segregation, circular economy, and citizen-facing behaviour change.',
    tangible: [
      {
        name: 'Source Segregation knowledge centre',
        kind: 'Knowledge portal',
        desc: 'Saahas publishes a structured knowledge centre explaining waste streams, segregation practices, storage, and recovery pathways.'
      , url: 'https://saahas.org/'},
      {
        name: 'Alag Karo / 2bin1bag',
        kind: 'Behaviour-change campaign',
        desc: 'Alag Karo packages source segregation into a dedicated public website and campaign layer for households and communities.'
      , url: 'https://saahas.org/'},
      {
        name: 'Aviral',
        kind: 'Waste initiative',
        desc: 'Saahas references Aviral as one of the linked public tools or campaigns in its source-segregation stack.'
      , url: 'https://saahas.org/'}
    ],
    intangible: [
      {
        name: 'Circular economy framework',
        kind: 'Conceptual model',
        desc: 'The organisation situates waste work inside a circular-economy model focused on keeping materials in circulation and regenerating nature.'
      , url: 'https://saahas.org/'},
      {
        name: 'Dignified livelihood lens for waste workers',
        kind: 'Social model',
        desc: 'Its source-segregation and circularity framing repeatedly highlights dignity, recovery, and better working conditions for waste workers.'
      , url: 'https://saahas.org/'}
    ],
    sources: [
      {label: 'Source Segregation', url: 'https://saahas.org/knowledge_center/source-segregation/'},
      {label: 'Circular Economy', url: 'https://saahas.org/knowledge_center/circular-economy/'},
      {label: 'Alag Karo', url: 'https://wp.saahas.org/index.php'}
    ]
  },
  'Sahjeevan': {
    status: 'researched',
    summary: 'Sahjeevan builds its artefacts through pastoral livelihoods, biodiversity governance, institution incubation, and market systems around commons-based communities.',
    tangible: [
      {
        name: 'Milk and dairy value-chain interventions',
        kind: 'Livelihood infrastructure',
        desc: 'Sahjeevan has built procurement, value-addition, and market pathways for cow, buffalo, camel, sheep, and goat milk products.'
      , url: 'https://sahjeevan.org/'},
      {
        name: 'Community institutions and producer organisations',
        kind: 'Institutional infrastructure',
        desc: 'Its work has enabled associations, milk cooperatives, and sector-specific community institutions across pastoral landscapes.'
      , url: 'https://sahjeevan.org/'},
      {
        name: 'Biological Management Committees and People\'s Biodiversity Registers',
        kind: 'Governance tools',
        desc: 'The biodiversity programme helps villages establish BMCs, prepare PBRs, and create management plans for ecologically sensitive habitats.', url: 'https://sahjeevan.org/'
      }
    ],
    intangible: [
      {
        name: 'Communities-Institutions-Advocacy framework',
        kind: 'Theory of action',
        desc: 'Sahjeevan explicitly organises its work through community empowerment, institution-building, and multi-agency advocacy.'
      , url: 'https://sahjeevan.org/'},
      {
        name: 'Pastoralism and commons governance model',
        kind: 'Ecology-linked development model',
        desc: 'Its core thesis is that communities living in symbiosis with ecology are best suited to conserve biodiversity and govern commons.'
      , url: 'https://sahjeevan.org/'}
    ],
    sources: [
      {label: 'Home', url: 'https://sahjeevan.org/'},
      {label: 'About', url: 'https://sahjeevan.org/about/'},
      {label: 'Livelihoods', url: 'https://sahjeevan.org/livelihoods/'},
      {label: 'Milk', url: 'https://sahjeevan.org/livelihoods/livelihoods-milk/'},
      {label: 'Institutions', url: 'https://sahjeevan.org/institutions/'},
      {label: 'Biodiversity Governance', url: 'https://sahjeevan.org/biodiversity-governance/'}
    ]
  },
  'SayTrees': {
    status: 'researched',
    summary: 'SayTrees packages restoration into large-scale urban forests, lake projects, agroforestry systems, and citizen-volunteering formats.',
    tangible: [
      {
        name: 'Urban Forestry',
        kind: 'Restoration programme',
        desc: 'SayTrees builds dense Miyawaki and other native urban forests across cities as a flagship public-facing intervention.'
      , url: 'https://saytrees.org/'},
      {
        name: 'Lake Restoration and Water Conservation',
        kind: 'Water restoration programme',
        desc: 'Its lake and water work restores urban lakes, improves recharge, and adds measurable water-holding capacity.'
      , url: 'https://saytrees.org/'},
      {
        name: 'Agroforestry',
        kind: 'Farmer livelihood programme',
        desc: 'The agroforestry portfolio integrates trees into farms to improve income, resilience, biodiversity, and soil health.'
      , url: 'https://saytrees.org/'},
      {
        name: 'Clean Energy and Waste Management',
        kind: 'Rural systems intervention',
        desc: 'SayTrees publicly includes biogas and circular-economy infrastructure under its clean-energy work.'
      , url: 'https://saytrees.org/'}
    ],
    intangible: [
      {
        name: 'Miyawaki-led urban resilience model',
        kind: 'Ecological method',
        desc: 'The organisation popularises dense-forest approaches as a repeatable strategy for urban cooling, biodiversity, and air quality.'
      , url: 'https://saytrees.org/'},
      {
        name: 'Volunteer and corporate participation engine',
        kind: 'Engagement model',
        desc: 'SayTrees has built participation formats that convert corporate and citizen volunteering into restoration labour and long-term stewardship.'
      , url: 'https://saytrees.org/'}
    ],
    sources: [
      {label: 'Home', url: 'https://www.saytrees.org/'},
      {label: 'About Us', url: 'https://www.saytrees.org/about-us'},
      {label: 'Urban Forestry', url: 'https://www.saytrees.org/urban-forestry'},
      {label: 'Agroforestry', url: 'https://www.saytrees.org/agroforestry'},
      {label: 'Our Work', url: 'https://www.saytrees.org/our-work'}
    ]
  },
  'Shakti Sustainable Energy': {
    status: 'researched',
    summary: 'Shakti\'s artefacts are policy-enabling initiatives, labs, roadmaps, and toolkits built to push India\'s clean energy and climate transitions.',
    tangible: [
      {
        name: 'India Cooling Action Plan support stack',
        kind: 'Policy-enabling initiative',
        desc: 'Shakti helped build the analytical base, coalition, and implementation work that fed into the India Cooling Action Plan.'
      , url: 'https://shaktifoundation.in/'},
      {
        name: 'Electric Mobility Initiative',
        kind: 'Multi-funder initiative',
        desc: 'The Electric Mobility Initiative supports policy makers, STUs, fleet operators, and discoms on EV manufacturing, freight, and charging ecosystems.'
      , url: 'https://shaktifoundation.in/'},
      {
        name: 'Guiding Framework and Toolkits for Clean Air Action Plans',
        kind: 'Toolkit',
        desc: 'Shakti-supported clean-air work includes formal frameworks and toolkits for cities preparing science-based action plans.'
      , url: 'https://shaktifoundation.in/'},
      {
        name: 'Shakti-ISB Clean Energy Lab',
        kind: 'Institutional platform',
        desc: 'Shakti highlights the conception and launch of the Shakti-ISB Clean Energy Lab as a durable public-facing initiative.'
      , url: 'https://shaktifoundation.in/'}
    ],
    intangible: [
      {
        name: 'Catalytic philanthropy for transition pathways',
        kind: 'Institutional approach',
        desc: 'Its model is to build coalitions, evidence, and partner capacity so major public-policy shifts become possible.'
      , url: 'https://shaktifoundation.in/'},
      {
        name: 'Cross-sector transition architecture',
        kind: 'Operating model',
        desc: 'Shakti structures work across cooling, mobility, air quality, freight, climate finance, and city action rather than treating energy as a silo.'
      , url: 'https://shaktifoundation.in/'}
    ],
    sources: [
      {label: 'About Us', url: 'https://shaktifoundation.in/about-us/'},
      {label: 'Work Areas', url: 'https://shaktifoundation.in/work-areas/'},
      {label: 'Cooling Action Plan', url: 'https://shaktifoundation.in/cooling-action-plan/'},
      {label: 'Electric Mobility', url: 'https://shaktifoundation.in/electric-mobility/'},
      {label: 'Guiding Framework and Toolkits for Clean Air Action Plans', url: 'https://shaktifoundation.in/initiatives/guiding-framework-and-toolkits-for-clean-air-action-plans/'}
    ]
  },
  'Udhyam Learning': {
    status: 'researched',
    summary: 'Udhyam turns entrepreneurial learning into two large public programmes, cohort models, practical experiments, and a clear behavioural philosophy.',
    tangible: [
      {
        name: 'Udhyam Shiksha',
        kind: 'School programme',
        desc: 'A large-scale entrepreneurial mindset curriculum for government school students built around real-world projects and teacher mentorship.'
      , url: 'https://udhyam.org/shiksha/'},
      {
        name: 'Udhyam Vyapaar',
        kind: 'Nano-entrepreneurship programme',
        desc: 'Udhyam Vyapaar supports nano-entrepreneurs through 1-on-1 mentoring, field insight, and tailored business problem-solving.'
      , url: 'https://udhyam.org/'},
      {
        name: 'Istri Project',
        kind: 'Scalable intervention',
        desc: 'Udhyam identifies the Istri project as a scalable success model helping ironing vendors switch from coal to LPG systems.'
      , url: 'https://udhyam.org/'},
      {
        name: 'Udhyam Saathi Program',
        kind: 'Field engagement model',
        desc: 'A bridge programme that brings motivated individuals close to vyapaaris and helps co-create interventions from field realities.'
      , url: 'https://udhyam.org/shiksha/'}
    ],
    intangible: [
      {
        name: 'Bet On Yourself',
        kind: 'Institutional philosophy',
        desc: 'Udhyam\'s public narrative consistently uses Bet On Yourself as a motivational and organisational philosophy.'
      , url: 'https://udhyam.org/'},
      {
        name: 'Entrepreneurial mindset framework',
        kind: 'Behavioural framework',
        desc: 'The organisation explicitly works on grit, self-awareness, independence, trying new things, and practical problem-solving as core mindsets.'
      , url: 'https://udhyam.org/about-us/'}
    ],
    sources: [
      {label: 'Home', url: 'https://udhyam.org/'},
      {label: 'About Us', url: 'https://udhyam.org/about-us/'},
      {label: 'Udhyam Shiksha', url: 'https://udhyam.org/shiksha/'},
      {label: 'Udhyam Vyapaar', url: 'https://udhyam.org/vyapar/'},
      {label: 'Udhyam Saathi Program', url: 'https://udhyam.org/2020/01/27/the-udhyam-saathi-program/'}
    ]
  },
  'WASSAN': {
    status: 'researched',
    summary: 'WASSAN turns rainfed-agroecology work into named missions, network hubs, government PMUs, and food systems programmes.',
    tangible: [
      {
        name: 'Odisha Millet Mission',
        kind: 'Flagship programme',
        desc: 'WASSAN acts as programme secretariat for Odisha Millet Mission, supporting design, IEC, capacity building, documentation, pilots, and MIS.'
      , url: 'https://wassan.org/'},
      {
        name: 'Revitalising Rainfed Agriculture Network',
        kind: 'Network hub',
        desc: 'WASSAN anchors the national hub of the Revitalising Rainfed Agriculture network.'
      , url: 'https://wassan.org/'},
      {
        name: 'National Coalition on Natural Farming',
        kind: 'Coalition secretariat',
        desc: 'It anchors the coalition secretariat to mainstream natural farming across civil society, research, and policy actors.'
      , url: 'https://wassan.org/'},
      {
        name: 'Forgotten Foods and millet-processing programmes',
        kind: 'Food systems initiatives',
        desc: 'Thematic programmes on forgotten foods, millet processing, seed systems, and participatory machinery are publicly listed as ongoing work.'
      , url: 'https://wassan.org/'}
    ],
    intangible: [
      {
        name: 'Practice, Research and Policy',
        kind: 'Core approach',
        desc: 'WASSAN describes its distinctive approach as linking practice, research, and policy from rainfed landscapes to public systems.'
      , url: 'https://wassan.org/'},
      {
        name: 'Agroecological rainfed livelihoods framework',
        kind: 'Operating model',
        desc: 'Its philosophy centres on diversified natural-resource management, multiple livelihoods, and ecological security for rainfed communities.'
      , url: 'https://wassan.org/'}
    ],
    sources: [
      {label: 'Home', url: 'https://wassan.org/'},
      {label: 'What We Do', url: 'https://wassan.org/what-we-do/'},
      {label: 'Who We Are', url: 'https://www.wassan.org/who-we-are/'}
    ]
  },
  'Waste Warriors': {
    status: 'researched',
    summary: 'Waste Warriors has built a clearly legible stack of zero-waste programmes, river-plastic initiatives, education formats, and livelihood verticals.',
    tangible: [
      {
        name: 'Zero Waste Program',
        kind: 'Governance support programme',
        desc: 'A structured urban and rural programme helping governments build collection systems, processing infrastructure, waste banks, and MRFs.'
      , url: 'https://wastewarriors.org/'},
      {
        name: 'Aviral',
        kind: 'River-plastic initiative',
        desc: 'Aviral is framed as an initiative to reduce plastic waste in the Ganga corridor.', url: 'https://wastewarriors.org/'
      },
      {
        name: 'Create to Inspire',
        kind: 'School education programme',
        desc: 'Create to Inspire is Waste Warriors\' environmental education track for schools, teachers, and students.'
      , url: 'https://wastewarriors.org/'}
    ],
    intangible: [
      {
        name: 'Dignified Livelihoods',
        kind: 'Livelihood vertical',
        desc: 'The organisation uses self-help groups, alternatives to disposables, and upcycling to create dignified income opportunities.'
      , url: 'https://wastewarriors.org/'},
      {
        name: 'Community Activation and Research & Advocacy',
        kind: 'Movement and policy layer',
        desc: 'Waste Warriors complements operations with community action formats and an advocacy wing for the eco-sensitive Himalayan region.'
      , url: 'https://wastewarriors.org/'}
    ],
    sources: [
      {label: 'About Us', url: 'https://www.wastewarriors.org/about-us/'},
      {label: 'Zero Waste Program', url: 'https://wastewarriors.org/our-work/zero-waste-program/'},
      {label: 'Dignified Livelihoods', url: 'https://www.wastewarriors.org/our-work/dignified-livelihoods/'}
    ]
  },
  'Wetlands International': {
    status: 'researched',
    summary: 'Wetlands International South Asia has built public artefacts around wetland censuses, management manuals, inventories, and integrated planning systems.',
    tangible: [
      {
        name: 'Asian Waterbird Census',
        kind: 'Citizen-science programme',
        desc: 'AWC is a long-running regional waterbird monitoring programme coordinated as part of the global International Waterbird Census.'
      , url: 'https://south-asia.wetlands.org/'},
      {
        name: 'IWC portal and AWC site network map',
        kind: 'Monitoring infrastructure',
        desc: 'The AWC programme exposes count totals, maps, and site-boundary-linked reporting through the broader IWC data system.'
      , url: 'https://south-asia.wetlands.org/'},
      {
        name: 'Wetland Management Planning manual',
        kind: 'Methodology manual',
        desc: 'The organisation publishes a stepwise manual for managers developing integrated wetland management plans.'
      , url: 'https://south-asia.wetlands.org/'},
      {
        name: 'WIAMS framework',
        kind: 'Assessment framework',
        desc: 'The Inventory, Assessment and Monitoring framework for Indian Wetlands is presented as a decision-support tool for ecosystem-based management.'
      , url: 'https://south-asia.wetlands.org/'}
    ],
    intangible: [
      {
        name: 'Integrated management planning',
        kind: 'Management model',
        desc: 'This is Wetlands International South Asia\'s core management approach for diagnosing ecological, hydrological, social, and institutional conditions.'
      , url: 'https://south-asia.wetlands.org/'},
      {
        name: 'Wise use framework',
        kind: 'Conservation philosophy',
        desc: 'Its work repeatedly centres the Ramsar concept of wise use as the guiding philosophy for wetland conservation and livelihood compatibility.'
      , url: 'https://south-asia.wetlands.org/'}
    ],
    sources: [
      {label: 'Home', url: 'https://south-asia.wetlands.org/'},
      {label: 'About Us', url: 'https://south-asia.wetlands.org/about-us/'},
      {label: 'Asian Waterbird Census', url: 'https://south-asia.wetlands.org/our-approach/healthy-wetland-nature/asian-waterbird-census/'},
      {label: 'Integrated Management Planning', url: 'https://south-asia.wetlands.org/our-approach/healthy-wetland-nature/integrated-management-planning/'},
      {label: 'Wetland Management Planning Manual', url: 'https://south-asia.wetlands.org/publication/wetland-management-planning-methodology-manual-managers/'},
      {label: 'WIAMS framework launch', url: 'https://south-asia.wetlands.org/an-inventory-assessment-and-monitoring-framework-for-indian-wetlands-wiams-launched-at-cms-cop-13/'}
    ]
  },
  'Commutiny': {
    status: 'researched',
    summary: 'ComMutiny has built a youth-development ecosystem with named public products, games, collectives, and coalition formats around the idea of the Jagrik.',
    tangible: [
      {
        name: 'Be a Jagrik - Samvidhan LIVE',
        kind: 'Board game and public initiative',
        desc: 'A public initiative that combines constitutional literacy, SDGs, and experiential tasks through a game-based leadership journey.'
      , url: 'https://commutiny.in/'},
      {
        name: 'Togetherness Table',
        kind: 'Dialogue product',
        desc: 'ComMutiny lists Togetherness Table as one of its core public products in the youth-learning stack.'
      , url: 'https://commutiny.in/'},
      {
        name: 'Films and books',
        kind: 'Media resources',
        desc: 'The organisation publicly classifies films and books as reusable products within its youth-centric ecosystem.'
      , url: 'https://commutiny.in/'}
    ],
    intangible: [
      {
        name: 'Jagrik Jahan',
        kind: 'Ecosystem model',
        desc: 'ComMutiny describes Jagrik Jahan as an ecosystem of strategies and initiatives that introduce youth to self and social transformation.'
      , url: 'https://commutiny.in/'},
      {
        name: 'vartaLeap coalition',
        kind: 'Coalition platform',
        desc: 'A cross-sector coalition incubated by ComMutiny to mainstream youth-centric development and narrative change.'
      , url: 'https://commutiny.in/'},
      {
        name: 'Aggregate-Accelerate-Amplify strategy',
        kind: 'Operating framework',
        desc: 'Its work is explicitly structured around building ecosystems, designing youth-centric experiences, and amplifying norm-shifting narratives.'
      , url: 'https://commutiny.in/'}
    ],
    sources: [
      {label: 'About Us', url: 'https://commutiny.in/about-us'},
      {label: 'What We Do', url: 'https://commutiny.in/what-we-do'},
      {label: 'Be a Jagrik', url: 'https://commutiny.in/project/be-jagrik'}
    ]
  },
  'Countermedia / PARI': {
    status: 'researched',
    summary: 'PARI is both a journalism platform and a long-term public archive, with educational, documentary, library, and cultural-preservation artefacts at its core.',
    tangible: [
      {
        name: 'People\'s Archive of Rural India',
        kind: 'Living journal and archive',
        desc: 'PARI explicitly defines itself as a free-access living journal and archive of rural India with text, video, audio, and photographic records.', url: 'https://ruralindiaonline.org/'
      },
      {
        name: 'PARI Education',
        kind: 'Learning platform',
        desc: 'The education vertical hosts student reporting, classroom resources, workshops, lectures, and curriculum-linked material for schools and colleges.'
      , url: 'https://ruralindiaonline.org/en/categories/'},
      {
        name: 'PARI Library',
        kind: 'Public resource library',
        desc: 'PARI has built a library of official and credible reports, surveys, and documents related to rural India and justice issues.'
      , url: 'https://ruralindiaonline.org/'},
      {
        name: 'Grindmill Songs Project and Archive of Adivasi Children\'s Art',
        kind: 'Cultural archive',
        desc: 'These are distinctive cultural-preservation artefacts within the wider PARI archive.', url: 'https://ruralindiaonline.org/'
      }
    ],
    intangible: [
      {
        name: 'Rural journalism by rural people',
        kind: 'Editorial philosophy',
        desc: 'PARI treats everyday rural people as narrators and owners of their own stories, not just subjects of external reporting.'
      , url: 'https://ruralindiaonline.org/en/articles/p-sainath-introduces-pari/'},
      {
        name: 'Creative Commons public-resource model',
        kind: 'Access model',
        desc: 'Its public-access, Creative Commons framing makes PARI a reusable civic knowledge commons rather than a closed publication.'
      , url: 'https://ruralindiaonline.org/'}
    ],
    sources: [
      {label: 'The story of PARI', url: 'https://wagtail.ruralindiaonline.org/en/pages/about/'},
      {label: 'PARI - the precious decade', url: 'https://wagtail.ruralindiaonline.org/en/articles/pari---the-precious-decade/'},
      {label: 'Whose story is it?', url: 'https://wagtail.ruralindiaonline.org/en/articles/whose-story-is-it/'},
      {label: 'PARI Library: more than just data', url: 'https://ruralindiaonline.org/bn/article/the-pari-library-more-than-just-data'}
    ]
  },
  'Platform Commons': {
    status: 'researched',
    summary: 'Platform Commons has built a coherent stack of shared digital infrastructure, public-interest products, and a governance philosophy for software as a commons resource.',
    tangible: [
      {
        name: 'The Commons Platform',
        kind: 'Digital infrastructure',
        desc: 'A base platform with multi-tenant, multilingual, offline-first, open-API, and interoperable constructs for social-sector deployments.'
      , url: 'https://platformcommons.org/'},
      {
        name: 'Better Together',
        kind: 'Civic engagement platform',
        desc: 'A volunteer and community-engagement operating system used by nonprofits, corporates, and governments.'
      , url: 'https://platformcommons.org/'},
      {
        name: 'Commons Shiksha',
        kind: 'Education technology platform',
        desc: 'An ed-tech platform with Campus Cloud, Journeys of Change, and Circle In for learning ecosystems.'
      , url: 'https://platformcommons.org/'},
      {
        name: 'Commons Academy',
        kind: 'Experiential learning school',
        desc: 'A practice-based academy with technology, business, and design tracks linked to real-world problem solving.'
      , url: 'https://platformcommons.org/'}
    ],
    intangible: [
      {
        name: 'Platform Commons License',
        kind: 'Governance artefact',
        desc: 'A copyfair, source-available license articulating equitability, community ownership, collaboration, and self-determination as platform principles.'
      , url: 'https://platformcommons.org/'},
      {
        name: 'Systems Change Leaders model',
        kind: 'Change architecture',
        desc: 'Platform Commons explicitly packages its offer around scaling systems change leaders through digital infrastructure, consulting, and data networks.'
      , url: 'https://platformcommons.org/'},
      {
        name: 'Commons resource philosophy',
        kind: 'Institutional philosophy',
        desc: 'The organisation frames software, data, and digital infrastructure as community-preserved commons rather than purely proprietary assets.'
      , url: 'https://platformcommons.org/'}
    ],
    sources: [
      {label: 'Home', url: 'https://platformcommons.org/'},
      {label: 'The Commons Platform', url: 'https://platformcommons.org/platform/'},
      {label: 'Platforms', url: 'https://platformcommons.org/platforms'},
      {label: 'Better Together', url: 'https://platformcommons.org/product/better-together-volunteer-management-system/'},
      {label: 'Commons Shiksha', url: 'https://platformcommons.org/commons-shiksha/'},
      {label: 'Commons Academy', url: 'https://platformcommons.org/commons-academy/'},
      {label: 'Platform Commons License', url: 'https://platformcommons.org/platform-commons-license/'}
    ]
  },
  'Veditum India': {
    status: 'researched',
    summary: 'Veditum has built river-walk research programmes, open environmental records, documentaries, fellowships, and participatory media artefacts around India\'s freshwater systems.',
    tangible: [
      {
        name: 'Moving Upstream',
        kind: 'Research and documentation series',
        desc: 'Veditum\'s flagship series walks along rivers to build public records, documentaries, articles, data archives, and field-based evidence.'
      , url: 'https://veditum.org/moving-upstream/'},
      {
        name: 'India Sand Watch',
        kind: 'Environmental accountability project',
        desc: 'A public accountability project focused on sand mining, documentation, and environmental governance.'
      , url: 'https://veditum.org/'},
      {
        name: 'Moving Upstream documentary films and archives',
        kind: 'Media outputs',
        desc: 'The Ganga and other river walks produce films, articles, photo stories, publications, and open archives.'
      , url: 'https://veditum.org/movingupstreamfilm/'},
      {
        name: 'Life along River Ken colouring series',
        kind: 'Public engagement resource',
        desc: 'A downloadable colouring and interpretation series built from field documentation along River Ken.'
      , url: 'https://veditum.org/moving-upstream/ken/'}
    ],
    intangible: [
      {
        name: 'Moving Upstream Fellowship',
        kind: 'Fellowship model',
        desc: 'A fellowship with Out of Eden Walk that supports young people to walk rivers, document them, and produce layered narratives.'
      , url: 'https://veditum.org/moving-upstream-fellowship/'},
      {
        name: 'Research-media-action method',
        kind: 'Institutional model',
        desc: 'Veditum explicitly works at the intersection of environment, culture, society, and media to create evidence, empathy, and action.'
      , url: 'https://veditum.org/about/'}
    ],
    sources: [
      {label: 'Home', url: 'https://veditum.org/'},
      {label: 'About', url: 'https://veditum.org/about/'},
      {label: 'Moving Upstream', url: 'https://veditum.org/moving-upstream/'},
      {label: 'Moving Upstream Ganga', url: 'https://veditum.org/moving-upstream/ganga/'},
      {label: 'Life along River Ken colouring series', url: 'https://veditum.org/lark/'}
    ]
  },
  'India Climate Collaborative': {
    status: 'researched',
    summary: 'India Climate Collaborative packages climate-philanthropy work into convenings, public programmes, and a shared platform for ecosystem coordination.',
    tangible: [
      {
        name: 'India Climate Collaborative platform',
        kind: 'Collaborative platform',
        desc: 'Its public-facing platform aggregates events, ecosystem signals, and ways for climate actors to participate in a shared field-building effort.'
      , url: 'https://indiaclimatecollaborative.org/'},
      {
        name: 'COP and ecosystem convenings',
        kind: 'Convening series',
        desc: 'ICC publicly curates climate convenings and side-events, including COP-linked programming that surfaces emerging-economy perspectives.'
      , url: 'https://indiaclimatecollaborative.org/'}
    ],
    intangible: [
      {
        name: 'Climate philanthropy coordination model',
        kind: 'Field-building model',
        desc: 'ICC frames itself as connective infrastructure for climate philanthropy, helping funders align priorities, partnerships, and public narratives.'
      , url: 'https://indiaclimatecollaborative.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'},
      {label: 'ICC event page', url: 'https://www.indiaclimatecollaborative.org/event/unfccc-s-cop29'}
    ]
  },
  'India Development Review': {
    status: 'researched',
    summary: 'India Development Review turns sector learning into public editorial infrastructure, practical explainers, and service products for the social-impact ecosystem.',
    tangible: [
      {
        name: 'India Development Review',
        kind: 'Knowledge platform',
        desc: 'IDR is a public publication platform for essays, explainers, interviews, and insights written for India\'s social sector.'
      , url: 'https://idronline.org/'},
      {
        name: 'Orvador',
        kind: 'Service vertical',
        desc: 'IDR publicly presents Orvador as a digital marketing and growth service for NGOs and sustainable brands.'
      , url: 'https://idronline.org/'}
    ],
    intangible: [
      {
        name: 'Editorial knowledge commons model',
        kind: 'Public-learning model',
        desc: 'IDR translates sector experience into accessible public knowledge so practitioners can reuse ideas, lessons, and frameworks.'
      , url: 'https://idronline.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'},
      {label: 'IDR home', url: 'https://idronline.org/'},
      {label: 'Orvador', url: 'https://idronline.org/services/orvador/'}
    ]
  },
  'Civis': {
    status: 'researched',
    summary: 'Civis turns public consultations into a usable civic workflow, with a digital submission platform and repeatable citizen-participation infrastructure.',
    tangible: [
      {
        name: 'Civis consultation platform',
        kind: 'Civic-tech platform',
        desc: 'Civis provides a public digital interface for tracking consultations and submitting citizen feedback on policy and legal changes.'
      , url: 'https://www.civis.vote/'}
    ],
    intangible: [
      {
        name: 'Participatory lawmaking model',
        kind: 'Governance model',
        desc: 'Its core value lies in making regulatory and policy participation legible, repeatable, and actionable for ordinary citizens.'
      , url: 'https://www.civis.vote/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'},
      {label: 'Civis', url: 'https://civis.vote/'}
    ]
  },
  'CoRE Stack (CommonsTech Foundation)': {
    status: 'researched',
    summary: 'CoRE Stack bundles geospatial tools, commons-oriented datasets, and community-practice infrastructure for climate resilience and natural-resource governance.',
    tangible: [
      {
        name: 'Commons Connect',
        kind: 'Decision-support tool',
        desc: 'CoRE Stack positions Commons Connect as a flagship tool for landscape stewards to analyse social-ecological stress in micro-watersheds.'
      , url: 'https://commonstech.org/'},
      {
        name: 'Know Your Landscape',
        kind: 'Geospatial intelligence layer',
        desc: 'Its public materials describe Know Your Landscape as a shared geospatial layer for context-aware planning and stewardship.'
      , url: 'https://commonstech.org/'},
      {
        name: 'Community of Practice',
        kind: 'Peer-learning infrastructure',
        desc: 'The monthly CoP sessions are a concrete shared learning artefact for practitioners using CoRE Stack tools and datasets.'
      , url: 'https://commonstech.org/'}
    ],
    intangible: [
      {
        name: 'Commons-first digital public infrastructure',
        kind: 'Institutional model',
        desc: 'CoRE Stack treats data, workflows, and stewardship infrastructure as shared commons rather than isolated project assets.'
      , url: 'https://commonstech.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'},
      {label: 'CoRE Stack', url: 'https://core-stack.org/'},
      {label: 'Water governance story', url: 'https://core-stack.org/towards-data-driven-and-community-centered-water-governance/'},
      {label: 'Community of Practice', url: 'https://core-stack.org/core-stack-community-of-practice/'}
    ]
  },
  'Gramvaani': {
    status: 'researched',
    summary: 'Gramvaani has built participatory media infrastructure that lets underserved communities surface problems, access information, and organise through voice and digital tools.',
    tangible: [
      {
        name: 'Mobile Vaani',
        kind: 'Voice-tech platform',
        desc: 'Mobile Vaani is Gramvaani\'s best-known participatory media artefact, designed to collect, publish, and circulate community voices at scale.'
      , url: 'https://gramvaani.org/the-mobilevaani-manifesto/'}
    ],
    intangible: [
      {
        name: 'Participatory communication model',
        kind: 'Community-engagement model',
        desc: 'Gramvaani treats communication as civic infrastructure, enabling low-income communities to report issues, share evidence, and build collective agency.'
      , url: 'https://gramvaani.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'},
      {label: 'Gramvaani', url: 'https://gramvaani.org/'}
    ]
  },
  'Paani Foundation': {
    status: 'researched',
    summary: 'Paani Foundation has turned watershed development into a public campaign architecture built around village mobilisation, training, and measurable drought action.',
    tangible: [
      {
        name: 'Satyamev Jayate Water Cup',
        kind: 'Campaign programme',
        desc: 'The Water Cup is Paani Foundation\'s flagship public mobilisation artefact for drought-proofing villages through collective action.'
      , url: 'https://www.paanifoundation.in/satyamev-jayate-water-cup/'}
    ],
    intangible: [
      {
        name: 'Community-led watershed model',
        kind: 'Rural resilience model',
        desc: 'Paani frames drought response as a community capability problem, combining local participation, competition, and practical conservation methods.'
      , url: 'https://www.paanifoundation.in/our-work/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'},
      {label: 'Mission and approach', url: 'https://www.paanifoundation.in/mission/'}
    ]
  },
  'Praja': {
    status: 'researched',
    summary: 'Praja turns civic accountability into data products, report cards, and public evidence that citizens and media can use to evaluate urban governance.',
    tangible: [
      {
        name: 'Praja civic report cards',
        kind: 'Public accountability reports',
        desc: 'Praja is widely known for public scorecards and performance reports that make civic representation and urban services more legible.'
      , url: 'https://praja.org/'}
    ],
    intangible: [
      {
        name: 'Citizen accountability model',
        kind: 'Governance model',
        desc: 'Its core institutional contribution is translating municipal complexity into data-backed public accountability and informed citizen action.'
      , url: 'https://praja.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'},
      {label: 'Praja', url: 'https://praja.org/'}
    ]
  },
  'Bridgespan India': {
    status: 'researched',
    summary: 'Bridgespan India contributes strategic advisory capacity, public frameworks, and field-building knowledge products for philanthropy and social change.',
    tangible: [
      {
        name: 'Global Reach and India practice',
        kind: 'Advisory platform',
        desc: 'Bridgespan presents its India presence as a dedicated regional practice serving philanthropists, nonprofits, and impact leaders.'
      , url: 'https://www.bridgespan.org/'}
    ],
    intangible: [
      {
        name: 'Strategic philanthropy advisory model',
        kind: 'Institutional model',
        desc: 'Its value lies in converting strategic planning, research, and operating frameworks into reusable infrastructure for donors and social-impact organisations.'
      , url: 'https://www.bridgespan.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'},
      {label: 'Global reach', url: 'https://www.bridgespan.org/our-global-reach'}
    ]
  },
  'Climate RISE Alliance': {
    status: 'researched',
    summary: 'Climate RISE Alliance operates as a coalition artefact in itself, linking vulnerable communities, practitioners, and resilience actors through a shared adaptation agenda.',
    tangible: [
      {
        name: 'Climate RISE Alliance',
        kind: 'Coalition platform',
        desc: 'The alliance is a public coalition artefact that gathers collaborators working on resilience, inclusion, and climate adaptation.'
      , url: 'https://climaterisealliance.org/'}
    ],
    intangible: [
      {
        name: 'Vulnerability-centred resilience model',
        kind: 'Coalition approach',
        desc: 'Its public framing emphasises climate resilience through cross-sector collaboration around people and places most exposed to risk.'
      , url: 'https://climaterisealliance.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'},
      {label: 'Climate RISE Alliance', url: 'https://climaterise.in/'}
    ]
  },
  'Himalaya Unnati Mission': {
    status: 'researched',
    summary: 'Himalaya Unnati Mission packages mountain stewardship into a public mission format, combining secretariat infrastructure, regional convenings, and Himalayan advocacy.',
    tangible: [
      {
        name: 'HUM Secretariat',
        kind: 'Institutional platform',
        desc: 'The secretariat structure is a concrete organisational artefact coordinating leadership, expertise, and public-facing mountain work.'
      , url: 'https://himalayaunnati.org/'},
      {
        name: 'Himalaya Day convenings',
        kind: 'Convening platform',
        desc: 'Its public convenings turn Himalayan conservation into a recurring civic and policy forum rather than a one-off campaign.'
      , url: 'https://himalayaunnati.org/'}
    ],
    intangible: [
      {
        name: 'Mountain stewardship model',
        kind: 'Regional model',
        desc: 'HUM frames conservation, livelihoods, and cultural rootedness as inseparable parts of a Himalayan development pathway.'
      , url: 'https://himalayaunnati.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'},
      {label: 'Save Himalayas', url: 'https://savehimalayas.org/'},
      {label: 'HUM Secretariat', url: 'https://savehimalayas.org/about-us/hum-secretariat/rajan-kotru/'}
    ]
  },
  'RCRC': {
    status: 'researched',
    summary: 'RCRC builds rural resilience through rights-based natural-resource governance, community institutions, and programmes spanning agriculture, water, and climate justice.',
    tangible: [
      {
        name: 'RCDC programme platform',
        kind: 'Rural development platform',
        desc: 'Its public profile presents an integrated programme stack around agriculture, water, tribal rights, disaster response, and environmental governance.'
      , url: 'https://rfrcindia.org/'}
    ],
    intangible: [
      {
        name: 'Rights-based resilience approach',
        kind: 'Development model',
        desc: 'RCRC links natural-resource work with community rights, local institutions, and long-horizon resilience rather than isolated project delivery.'
      , url: 'https://rfrcindia.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'},
      {label: 'RCDC India', url: 'http://www.rcdcindia.org/'}
    ]
  },
  'The Timbaktu Collective': {
    status: 'researched',
    summary: 'The Timbaktu Collective combines place-based institutions, producer-facing systems, and commons restoration into a long-lived rural transformation ecosystem.',
    tangible: [
      {
        name: 'Timbaktu campus and local institutions',
        kind: 'Place-based infrastructure',
        desc: 'The collective\'s Andhra campus anchors a larger ecosystem of local institutions, producer groups, and community infrastructure.'
      , url: 'https://timbaktu.org/'}
    ],
    intangible: [
      {
        name: 'Commons regeneration model',
        kind: 'Rural systems model',
        desc: 'Its work ties dryland regeneration, livelihoods, local democracy, and ecological restoration into a single place-based development logic.'
      , url: 'https://timbaktu.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'},
      {label: 'Timbaktu', url: 'https://timbaktu.org/'},
      {label: 'Contact', url: 'https://timbaktu.org/contact-us/'}
    ]
  },
  'ACT Capital Foundation': {
    status: 'researched',
    summary: 'ACT Capital Foundation provides venture philanthropy and early-stage funding to social entrepreneurs working on systemic change in India.',
    tangible: [
      {name: 'ACT grants programme', kind: 'Funding mechanism', desc: 'Early-stage grants and capacity support for social enterprises.', url: 'https://actcapitalfoundation.org/'}
    ],
    intangible: [
      {name: 'Venture philanthropy model', kind: 'Funding approach', desc: 'Combines grant capital with mentorship and strategic support for social entrepreneurs.', url: 'https://actcapitalfoundation.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://actcapitalfoundation.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'ALT EFF': {
    status: 'researched',
    summary: 'ALT EFF (All Living Things Environmental Film Festival) uses cinema to drive climate action and environmental awareness.',
    tangible: [
      {name: 'All Living Things Environmental Film Festival', kind: 'Annual festival', desc: 'India\'s dedicated environmental film festival screening climate and nature films.', url: 'https://alteff.in/'}
    ],
    intangible: [
      {name: 'Climate storytelling through cinema', kind: 'Cultural model', desc: 'Uses the emotive power of film to build public engagement with climate issues.', url: 'https://alteff.in/'}
    ],
    sources: [
      {label: 'Website', url: 'https://alteff.in/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Aga Khan Rural Support Programme India': {
    status: 'researched',
    summary: 'AKRSPI delivers participatory rural development programmes spanning livelihoods, natural resource management, and institutional strengthening.',
    tangible: [
      {name: 'Village institutions and federations', kind: 'Community infrastructure', desc: 'Establishes village-level organisations and federations for participatory governance.', url: 'https://akrspi.org/'},
      {name: 'Natural resource management programmes', kind: 'Field programme', desc: 'Watershed development, water harvesting, and soil conservation across Gujarat, MP, and Bihar.', url: 'https://akrspi.org/'}
    ],
    intangible: [
      {name: 'Participatory development model', kind: 'Development approach', desc: 'Bottom-up community engagement for ecological regeneration and livelihood security.', url: 'https://akrspi.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://akrspi.org/'},
      {label: 'Aga Khan Development Network', url: 'https://www.akdn.org/our-agencies/aga-khan-foundation/our-work/civil-society/india'}
    ]
  },
  'Arthan Foundation': {
    status: 'researched',
    summary: 'Arthan Foundation works on systems change initiatives to achieve the Sustainable Development Goals, connecting talent with social impact organisations.',
    tangible: [
      {name: 'Arthan Careers platform', kind: 'Jobs platform', desc: 'Talent marketplace connecting professionals with social sector organisations.', url: 'https://arthancareers.com/'}
    ],
    intangible: [
      {name: 'SDG systems change approach', kind: 'Strategic framework', desc: 'Aligns programme design with specific SDG targets for measurable impact.', url: 'https://arthan.in/'}
    ],
    sources: [
      {label: 'Website', url: 'https://arthan.in/'},
      {label: 'Arthan Careers', url: 'https://arthancareers.com/'}
    ]
  },
  'Bharat Design Labs': {
    status: 'researched',
    summary: 'Bharat Design Labs bridges capability gaps in government, civil society, and the private sector through human-centred design.',
    tangible: [
      {name: 'Design-led capacity building programmes', kind: 'Training programme', desc: 'Workshops and projects applying design thinking to governance and public services.', url: 'https://bharatdesignlabs.com/'}
    ],
    intangible: [
      {name: 'Human-centred design for public systems', kind: 'Design methodology', desc: 'Applies design thinking to bridge implementation gaps in government and civil society.', url: 'https://bharatdesignlabs.com/'}
    ],
    sources: [
      {label: 'Website', url: 'https://bharatdesignlabs.com/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Bharathiya Vikas Trust': {
    status: 'researched',
    summary: 'Bharathiya Vikas Trust works on capacity building and knowledge sharing for vulnerable rural communities across Karnataka, TN, and AP.',
    tangible: [
      {name: 'Rural capacity building programmes', kind: 'Field programme', desc: 'Training and knowledge-sharing initiatives for rural and tribal communities.', url: 'https://bvtrust.org/'}
    ],
    intangible: [
      {name: 'Community knowledge sharing model', kind: 'Development approach', desc: 'Peer learning and local institution strengthening for sustainable development.', url: 'https://bvtrust.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://bvtrust.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Biodiversity Collaborative': {
    status: 'researched',
    summary: 'The Biodiversity Collaborative generates interdisciplinary biodiversity knowledge, dialogue, and public learning across ecological systems in India.',
    tangible: [
      {name: 'Biodiversity Atlas India', kind: 'Data platform', desc: 'Collaborative spatial biodiversity mapping and knowledge platform.', url: 'https://biodiversityatlas.org/'},
      {name: 'Fellowships and training', kind: 'Learning programme', desc: 'Interdisciplinary fellowships for biodiversity research and conservation practice.', url: 'https://biodiversitycollaborative.org/'}
    ],
    intangible: [
      {name: 'Collaborative knowledge model', kind: 'Research network', desc: 'Multi-institutional approach to biodiversity documentation and public engagement.', url: 'https://biodiversitycollaborative.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://biodiversitycollaborative.org/'},
      {label: 'Biodiversity Atlas', url: 'https://biodiversityatlas.org/'}
    ]
  },
  'Buzz Women': {
    status: 'researched',
    summary: 'Buzz Women empowers underserved women through knowledge, skills, and livelihood tools to build economic independence.',
    tangible: [
      {name: 'Buzz Women app and platform', kind: 'Digital platform', desc: 'Mobile-first platform delivering financial literacy and livelihood content to rural women.', url: 'https://buzzwomen.org/'},
      {name: 'Women entrepreneurship programmes', kind: 'Training programme', desc: 'Structured livelihood and micro-enterprise training for women in rural Karnataka.', url: 'https://buzzwomen.org/'}
    ],
    intangible: [
      {name: 'Women-led economic empowerment model', kind: 'Livelihood model', desc: 'Combines digital tools with community networks for sustainable women-led enterprises.', url: 'https://buzzwomen.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://buzzwomen.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Centre for Environment Concerns': {
    status: 'researched',
    summary: 'CEC works on water-soil-climate innovations and resilient farming systems for drought-prone regions in Telangana and AP.',
    tangible: [
      {name: 'Tank and watershed restoration', kind: 'Field programme', desc: 'Restoring traditional water bodies and watersheds for agricultural resilience.', url: 'https://cecenvis.nic.in/'}
    ],
    intangible: [
      {name: 'Dryland farming systems approach', kind: 'Agricultural model', desc: 'Integrates water conservation, soil health, and climate-resilient cropping for semi-arid regions.', url: 'https://cecenvis.nic.in/'}
    ],
    sources: [
      {label: 'Website', url: 'https://cecenvis.nic.in/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Deloitte India': {
    status: 'researched',
    summary: 'Deloitte India partners with philanthropies and social sector organisations on sustainability, climate, and systems-change initiatives.',
    tangible: [
      {name: 'WorldClimate programme', kind: 'Sustainability initiative', desc: 'Deloitte\'s global climate and sustainability strategy applied to Indian operations and client advisory.', url: 'https://www2.deloitte.com/in/en/pages/about-deloitte/articles/world-climate.html'}
    ],
    intangible: [
      {name: 'Cross-sector partnership model', kind: 'Advisory approach', desc: 'Advisory, research, and capacity building spanning business, philanthropy, and public problem-solving.', url: 'https://www2.deloitte.com/in/en.html'}
    ],
    sources: [
      {label: 'Website', url: 'https://www2.deloitte.com/in/en.html'},
      {label: 'Sustainability', url: 'https://www2.deloitte.com/in/en/pages/about-deloitte/articles/world-climate.html'}
    ]
  },
  'Ecological Restoration Alliance': {
    status: 'researched',
    summary: 'ERA is a collaborative network for ecological restoration practice, learning, and open knowledge across Indian ecoregions.',
    tangible: [
      {name: 'Restoration practice network', kind: 'Practitioner network', desc: 'Connects restoration practitioners across India for knowledge exchange and shared protocols.', url: 'https://www.eraindiaalliance.org/'}
    ],
    intangible: [
      {name: 'Open knowledge for restoration', kind: 'Knowledge framework', desc: 'Builds shared learning and practice standards for ecological restoration across diverse landscapes.', url: 'https://www.eraindiaalliance.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://www.eraindiaalliance.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Edelgive Foundation': {
    status: 'researched',
    summary: 'EdelGive Foundation is a grant-making organisation that supports grassroots NGOs with funding, capacity building, and sector collaboration.',
    tangible: [
      {name: 'GROW Fund', kind: 'Pooled funding vehicle', desc: 'Multi-donor fund channelling philanthropic capital to vetted grassroots organisations.', url: 'https://edelgivefoundation.org/grow-fund/'},
      {name: 'EdelGive Hurun India Philanthropy List', kind: 'Research publication', desc: 'Annual ranking of India\'s most generous philanthropists.', url: 'https://edelgivefoundation.org/'}
    ],
    intangible: [
      {name: 'NGO capacity building model', kind: 'Philanthropy approach', desc: 'Combines unrestricted grants with organisational development support for grassroots partners.', url: 'https://edelgivefoundation.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://edelgivefoundation.org/'},
      {label: 'GROW Fund', url: 'https://edelgivefoundation.org/grow-fund/'}
    ]
  },
  'Education For Employability': {
    status: 'researched',
    summary: 'EFE provides support services for disadvantaged youth and rural entrepreneurs to access education and livelihood pathways.',
    tangible: [
      {name: 'Skills training programmes', kind: 'Training programme', desc: 'Employability and enterprise training for youth and rural communities.', url: 'https://efeindia.org/'}
    ],
    intangible: [
      {name: 'Education-to-livelihood pipeline', kind: 'Development model', desc: 'Bridges education, skill-building, and employment for underserved populations.', url: 'https://efeindia.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://efeindia.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Efficient Ecosystem Protection': {
    status: 'researched',
    summary: 'Efficient Ecosystem Protection is an education-focused organisation working in Pune on environmental awareness.',
    tangible: [
      {name: 'Environmental education programmes', kind: 'Education programme', desc: 'Structured environmental education and awareness activities in Pune.', url: 'https://rainmatter.org/partners'}
    ],
    intangible: [
      {name: 'Ecosystem awareness model', kind: 'Education approach', desc: 'Community and school-level engagement for ecological awareness.', url: 'https://rainmatter.org/partners'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Ethos Foundation': {
    status: 'researched',
    summary: 'Ethos Foundation strengthens design education around architecture and sustainability in India through Arcause and ACEDGE.',
    tangible: [
      {name: 'ACEDGE e-learning platform', kind: 'Education platform', desc: 'E-learning for architecture, construction, engineering and design professionals in South Asia.', url: 'https://www.acedge.in/'},
      {name: 'Arcause initiative', kind: 'Social action programme', desc: 'Galvanises architecture and design professionals towards social responsibility and nation-building.', url: 'https://ethosfoundation.in/'}
    ],
    intangible: [
      {name: 'Sustainable design pedagogy', kind: 'Education model', desc: 'Integrates sustainability principles into architecture and design curricula.', url: 'https://ethosfoundation.in/'}
    ],
    sources: [
      {label: 'Website', url: 'https://ethosfoundation.in/'},
      {label: 'ACEDGE', url: 'https://www.acedge.in/'}
    ]
  },
  'FISE': {
    status: 'researched',
    summary: 'FISE supports social entrepreneurs to develop and scale impact-driven businesses in Telangana and Andhra Pradesh.',
    tangible: [
      {name: 'Social enterprise incubation', kind: 'Incubation programme', desc: 'Incubation and acceleration support for early-stage social enterprises.', url: 'https://fise.in/'}
    ],
    intangible: [
      {name: 'Impact enterprise model', kind: 'Incubation approach', desc: 'Combines business mentoring with social mission alignment for scalable impact.', url: 'https://fise.in/'}
    ],
    sources: [
      {label: 'Website', url: 'https://fise.in/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Farm 2 Food Foundation': {
    status: 'researched',
    summary: 'Farm2Food Foundation enables communities in northeast India to become farm and food entrepreneurs for a prosperous and peaceful region.',
    tangible: [
      {name: 'Rural women entrepreneur programme', kind: 'Livelihood programme', desc: 'Builds cadres of solar sakhi, krishi sakhi, and pashu sakhi for women-led enterprises.', url: 'https://farm2food.org/'},
      {name: 'Community training programmes', kind: 'Training programme', desc: 'Agricultural training and livelihood development for communities in Assam.', url: 'https://farm2food.org/'}
    ],
    intangible: [
      {name: 'Community-led development model', kind: 'Development approach', desc: 'Builds local capacity for self-directed agricultural and livelihood improvement.', url: 'https://farm2food.org/about-us/'}
    ],
    sources: [
      {label: 'Website', url: 'https://farm2food.org/'},
      {label: 'About', url: 'https://farm2food.org/about-us/'}
    ]
  },
  'Farmers for Forests': {
    status: 'researched',
    summary: 'Farmers for Forests combines carbon-financed agroforestry with biodiversity restoration alongside smallholder farmers in Maharashtra.',
    tangible: [
      {name: 'Agroforestry carbon projects', kind: 'Carbon programme', desc: 'Tree planting and agroforestry on smallholder farms with carbon credit financing.', url: 'https://farmersforforests.org/'}
    ],
    intangible: [
      {name: 'Carbon-financed restoration model', kind: 'Finance model', desc: 'Uses carbon markets to fund farmer-led agroforestry and biodiversity restoration.', url: 'https://farmersforforests.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://farmersforforests.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Forum For the Future India': {
    status: 'researched',
    summary: 'Forum for the Future works to accelerate the shift towards a just and regenerative future through systems change.',
    tangible: [
      {name: 'Systems change labs', kind: 'Innovation programme', desc: 'Collaborative labs applying futures thinking and systems change to sustainability challenges.', url: 'https://www.forumforthefuture.org/india'}
    ],
    intangible: [
      {name: 'Futures and systems change methodology', kind: 'Strategic framework', desc: 'Scenario planning and systems thinking applied to climate and sustainability transitions.', url: 'https://www.forumforthefuture.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://www.forumforthefuture.org/'},
      {label: 'India work', url: 'https://www.forumforthefuture.org/india'}
    ]
  },
  'Foundation For MSME Clusters': {
    status: 'researched',
    summary: 'FMC promotes and develops MSMEs through cluster-based approaches, policy advocacy, and technical support.',
    tangible: [
      {name: 'Cluster development programmes', kind: 'Development programme', desc: 'Technical assistance and capacity building for MSME clusters across India.', url: 'https://www.fmc.org.in/'},
      {name: 'Policy research and publications', kind: 'Research', desc: 'Studies and policy briefs on MSME development and cluster approaches.', url: 'https://www.fmc.org.in/'}
    ],
    intangible: [
      {name: 'Cluster-based MSME development model', kind: 'Economic model', desc: 'Uses geographic and sectoral clustering to build MSME competitiveness and linkages.', url: 'https://www.fmc.org.in/'}
    ],
    sources: [
      {label: 'Website', url: 'https://www.fmc.org.in/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Gurukula Botanical Sanctuary': {
    status: 'researched',
    summary: 'Gurukula Botanical Sanctuary is a community-based plant conservation and habitat restoration centre in the Western Ghats of Kerala.',
    tangible: [
      {name: 'Living plant collections', kind: 'Conservation infrastructure', desc: 'Over 1,800 species of plants conserved and propagated in a restored rainforest setting.', url: 'https://gbsanctuary.org/'},
      {name: 'Seed bank and nursery', kind: 'Conservation facility', desc: 'Endemic and threatened plant species maintained for restoration and research.', url: 'https://gbsanctuary.org/'}
    ],
    intangible: [
      {name: 'Ecological learning model', kind: 'Education approach', desc: 'Residency-based ecological learning combining conservation practice with community living.', url: 'https://gbsanctuary.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://gbsanctuary.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Habitat for Humanity India': {
    status: 'researched',
    summary: 'Habitat for Humanity India works on affordable housing, urban green spaces, and community resilience across seven states.',
    tangible: [
      {name: 'Housing construction programmes', kind: 'Housing programme', desc: 'Builds and repairs homes for vulnerable families across India.', url: 'https://habitatindia.org/'},
      {name: 'Disaster response shelter', kind: 'Emergency programme', desc: 'Rapid shelter construction and rehabilitation following natural disasters.', url: 'https://habitatindia.org/'}
    ],
    intangible: [
      {name: 'Affordable housing model', kind: 'Development approach', desc: 'Community-driven housing solutions combining volunteer labour, microfinance, and technical support.', url: 'https://habitatindia.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://habitatindia.org/'},
      {label: 'Habitat International', url: 'https://www.habitat.org/where-we-build/india'}
    ]
  },
  'Hume Centre for Ecology and Wildlife Biology': {
    status: 'researched',
    summary: 'Hume Centre provides community-led, science-based solutions for climate resilience and ecological stewardship in Kerala.',
    tangible: [
      {name: 'Field research stations', kind: 'Research infrastructure', desc: 'Ecology and wildlife research facilities in the Wayanad landscape.', url: 'https://humecentre.org/'}
    ],
    intangible: [
      {name: 'Community conservation science', kind: 'Research model', desc: 'Integrates community knowledge with scientific research for climate adaptation and biodiversity conservation.', url: 'https://humecentre.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://humecentre.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Impact Foundation': {
    status: 'researched',
    summary: 'Impact Foundation India is a catalyst for mass health programmes of national priority including immunisation and disease elimination.',
    tangible: [
      {name: 'Mass health campaigns', kind: 'Health programme', desc: 'National-scale immunisation drives and disease elimination programmes.', url: 'https://impactfoundationindia.org/'}
    ],
    intangible: [
      {name: 'Public health partnership model', kind: 'Health systems approach', desc: 'Bridges government health systems with philanthropic and technical resources for scale.', url: 'https://impactfoundationindia.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://impactfoundationindia.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'India Resources Trust': {
    status: 'researched',
    summary: 'India Resources Trust develops practical proposals for environmentally sound development in Delhi and beyond.',
    tangible: [
      {name: 'Policy research and proposals', kind: 'Research', desc: 'Evidence-based proposals on environment, resources, and sustainable development.', url: 'https://wri-india.org/'}
    ],
    intangible: [
      {name: 'Environment-development integration', kind: 'Policy approach', desc: 'Bridges environmental science with practical development policy recommendations.', url: 'https://wri-india.org/about'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Jagriti Seva Sansthan': {
    status: 'researched',
    summary: 'Jagriti builds India through enterprise in Middle India, running the Jagriti Yatra rail journey and the Purvanchal Enterprise Hub.',
    tangible: [
      {name: 'Jagriti Yatra', kind: 'Learning journey', desc: 'Annual 8,000 km train journey connecting young entrepreneurs with grassroots enterprises across India.', url: 'https://www.jagritiyatra.com/'},
      {name: 'Jagriti Enterprise Centre', kind: 'Enterprise hub', desc: 'Physical incubation and enterprise support infrastructure in eastern UP.', url: 'https://www.jagritienterprise.com/'}
    ],
    intangible: [
      {name: 'Enterprise-led development model', kind: 'Development philosophy', desc: 'Uses entrepreneurship as the vehicle for equitable development in underserved regions.', url: 'https://www.jagritiyatra.com/'}
    ],
    sources: [
      {label: 'Jagriti Yatra', url: 'https://www.jagritiyatra.com/'},
      {label: 'Jagriti Enterprise Centre', url: 'https://www.jagritienterprise.com/'}
    ]
  },
  'Jana Urban Space': {
    status: 'researched',
    summary: 'Jana Urban Space fixes spatial dimensions of Indian cities through policy, planning, and design interventions.',
    tangible: [
      {name: 'Urban planning and design projects', kind: 'Consulting deliverables', desc: 'City-level spatial planning, zoning reform, and public realm design across multiple states.', url: 'https://janausp.org/'}
    ],
    intangible: [
      {name: 'Spatial planning reform approach', kind: 'Urban methodology', desc: 'Applies spatial analytics and planning science to fix dysfunctional urban layouts.', url: 'https://janausp.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://janausp.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Kritia Development Research': {
    status: 'researched',
    summary: 'Kritia provides knowledge and networking resources for social change in Delhi.',
    tangible: [
      {name: 'Knowledge and research outputs', kind: 'Research', desc: 'Development research and networking resources for the social sector.', url: 'https://krititeam.blogspot.com/'}
    ],
    intangible: [
      {name: 'Social change knowledge network', kind: 'Knowledge approach', desc: 'Facilitates connections and knowledge sharing across social change organisations.', url: 'https://krititeam.blogspot.com/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Lipok Social Foundation': {
    status: 'researched',
    summary: 'Lipok Social Foundation improves farmer livelihoods in Marathwada and Vidarbha, Maharashtra\'s drought-prone regions.',
    tangible: [
      {name: 'Farmer livelihood programmes', kind: 'Field programme', desc: 'Training and support for smallholder farmers in drought-prone Marathwada and Vidarbha.', url: 'https://lipok.org/'}
    ],
    intangible: [
      {name: 'Dryland farmer support model', kind: 'Livelihood approach', desc: 'Targeted interventions for farmers in Maharashtra\'s most climate-stressed regions.', url: 'https://lipok.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'MLI Foundation': {
    status: 'researched',
    summary: 'MLI Foundation works on animal welfare and environmental awareness from Noida, Uttar Pradesh.',
    tangible: [
      {name: 'Animal welfare campaigns', kind: 'Awareness programme', desc: 'Campaigns and programmes promoting animal welfare and environmental consciousness.', url: 'https://rainmatter.org/partners'}
    ],
    intangible: [
      {name: 'Animal-environment awareness model', kind: 'Advocacy approach', desc: 'Links animal welfare with broader environmental awareness and action.', url: 'https://rainmatter.org/partners'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Malabar Wildlife Rescue': {
    status: 'researched',
    summary: 'Malabar Wildlife Rescue provides wildlife education, rescue, and rehabilitation services in Kerala.',
    tangible: [
      {name: 'Wildlife rescue and rehabilitation centre', kind: 'Rescue facility', desc: 'Active rescue, treatment, and rehabilitation of injured and orphaned wildlife in Kerala.', url: 'https://www.facebook.com/marcforwildlife/'}
    ],
    intangible: [
      {name: 'Community wildlife education', kind: 'Education model', desc: 'Public education programmes building awareness and coexistence with local wildlife.', url: 'https://www.facebook.com/marcforwildlife/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Munnarakkunnu Trust': {
    status: 'researched',
    summary: 'Munnarakkunnu Trust works on plant conservation, rainforest regeneration, and nature education in Karnataka.',
    tangible: [
      {name: 'Rainforest regeneration sites', kind: 'Restoration project', desc: 'Active rainforest restoration and native plant conservation in Karnataka.', url: 'https://gbsanctuary.org/munnarakkunnu/'}
    ],
    intangible: [
      {name: 'Nature education model', kind: 'Education approach', desc: 'Combines hands-on conservation with ecological learning programmes.', url: 'https://gbsanctuary.org/munnarakkunnu/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Narrative Hub / The Climate Narrative Hub': {
    status: 'researched',
    summary: 'The Climate Narrative Hub connects communicators, creators, funders, and civil society to shift climate storytelling in India.',
    tangible: [
      {name: 'Climate narrative network', kind: 'Practitioner network', desc: 'Network connecting climate communicators, media creators, and civil society organisations.', url: 'https://www.theclimatenarrative.org/'}
    ],
    intangible: [
      {name: 'Narrative change framework', kind: 'Communications model', desc: 'Strategic approach to shifting public climate narratives through coordinated storytelling.', url: 'https://www.theclimatenarrative.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://www.theclimatenarrative.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Nrityagram': {
    status: 'researched',
    summary: 'Nrityagram is a dance village near Bengaluru dedicated to Odissi and Indian classical dance, with a Food Forest initiative.',
    tangible: [
      {name: 'Nrityagram dance village', kind: 'Cultural institution', desc: 'Residential dance campus and performing arts centre for classical Indian dance.', url: 'https://nrityagram.org/'},
      {name: 'Food Forest', kind: 'Agroforestry project', desc: 'On-campus food forest integrating native species and sustainable food production.', url: 'https://nrityagram.org/'}
    ],
    intangible: [
      {name: 'Arts and ecology integration', kind: 'Cultural model', desc: 'Weaves ecological stewardship into the fabric of a living arts institution.', url: 'https://nrityagram.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://nrityagram.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Organic Mandya': {
    status: 'researched',
    summary: 'Organic Mandya empowers rural communities towards self-sufficiency through organic farming and farmer-consumer networks.',
    tangible: [
      {name: 'Organic Mandya retail and farm stores', kind: 'Retail infrastructure', desc: 'Farm-to-fork retail outlets connecting organic farmers directly with urban consumers.', url: 'https://www.organicmandya.com/'},
      {name: 'Organic farming training', kind: 'Training programme', desc: 'Farmer training in organic cultivation, composting, and sustainable agriculture.', url: 'https://www.organicmandya.com/'}
    ],
    intangible: [
      {name: 'Farmer-consumer direct model', kind: 'Market model', desc: 'Eliminates middlemen to ensure fair prices for farmers and fresh organic produce for consumers.', url: 'https://www.organicmandya.com/'}
    ],
    sources: [
      {label: 'Website', url: 'https://www.organicmandya.com/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Paadhai Trust': {
    status: 'researched',
    summary: 'Paadhai Trust connects donors with impoverished groups, focusing on education and community welfare in Tamil Nadu.',
    tangible: [
      {name: 'Education support programmes', kind: 'Education programme', desc: 'Direct education support and community welfare interventions in Tamil Nadu.', url: 'https://paadhai.org/'}
    ],
    intangible: [
      {name: 'Donor-community bridge model', kind: 'Philanthropy approach', desc: 'Facilitates direct connections between donors and underserved communities.', url: 'https://paadhai.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Padraka Foundation': {
    status: 'researched',
    summary: 'Padraka Foundation works on systems entrepreneurship in environmental governance in Telangana.',
    tangible: [
      {name: 'Environmental governance tools', kind: 'Governance tools', desc: 'Systems and tools for improving environmental governance and compliance.', url: 'https://livinglandscapes.in/'}
    ],
    intangible: [
      {name: 'Systems entrepreneurship approach', kind: 'Governance model', desc: 'Applies entrepreneurial methods to fix systemic gaps in environmental governance.', url: 'https://livinglandscapes.in/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Palluyir Trust': {
    status: 'researched',
    summary: 'Palluyir Trust runs nature-based outdoor education programmes in Chennai schools.',
    tangible: [
      {name: 'Nature education programmes for schools', kind: 'Education programme', desc: 'Structured outdoor and nature-based learning for Chennai school students.', url: 'https://palluyir.org/'}
    ],
    intangible: [
      {name: 'Nature-based pedagogy', kind: 'Education model', desc: 'Uses outdoor experiences and natural settings to build ecological literacy in children.', url: 'https://palluyir.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://palluyir.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Punarchith': {
    status: 'researched',
    summary: 'Punarchith explores alternative perspectives on education, environment, and democracy in Karnataka.',
    tangible: [
      {name: 'Alternative education programmes', kind: 'Education programme', desc: 'Community-based education and environmental learning in Chamarajanagar.', url: 'https://www.punarchith.org/'}
    ],
    intangible: [
      {name: 'Alternative development perspective', kind: 'Development philosophy', desc: 'Questions mainstream development through localised education, ecology, and democratic practice.', url: 'https://www.punarchith.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'SSRDP': {
    status: 'researched',
    summary: 'SSRDP creates benchmark sustainable development models across 14 states in India.',
    tangible: [
      {name: 'Sustainable development programmes', kind: 'Field programme', desc: 'Multi-state development programmes spanning livelihoods, health, and environment.', url: 'https://skills.ssrdp.org/'}
    ],
    intangible: [
      {name: 'Replicable development model', kind: 'Development approach', desc: 'Designs benchmark models that can be adopted across diverse state contexts.', url: 'https://ssrdp.artofliving.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://ssrdp.in/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'SWMRT': {
    status: 'researched',
    summary: 'SWMRT works on sustainable waste management for public health in Bengaluru.',
    tangible: [
      {name: 'Ward-level waste management systems', kind: 'Waste infrastructure', desc: 'Decentralised waste processing and management systems at the ward level in Bengaluru.', url: 'https://swmrt.com/'}
    ],
    intangible: [
      {name: 'Citizen-led waste governance', kind: 'Governance model', desc: 'Community participation model for ward-level waste management and public health.', url: 'https://www.swachagraha.in/'}
    ],
    sources: [
      {label: 'Website', url: 'https://swmrt.com/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Saath Charitable Trust': {
    status: 'researched',
    summary: 'Saath empowers marginalised communities in thriving cities through housing, livelihoods, and governance programmes.',
    tangible: [
      {name: 'Slum upgrading and housing programmes', kind: 'Housing programme', desc: 'In-situ slum rehabilitation and affordable housing support in Gujarat cities.', url: 'https://saath.org/'},
      {name: 'Livelihood and skills centres', kind: 'Training centre', desc: 'Urban livelihood training centres for marginalised community members.', url: 'https://saath.org/'}
    ],
    intangible: [
      {name: 'Inclusive urbanisation model', kind: 'Urban development approach', desc: 'Integrates housing, livelihoods, and governance for marginalised urban populations.', url: 'https://saath.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://saath.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Samagata Foundation': {
    status: 'researched',
    summary: 'Samagata Foundation supports projects that bring value to society in Karnataka.',
    tangible: [
      {name: 'Social project support', kind: 'Grant programme', desc: 'Funding and support for projects delivering social value in Karnataka.', url: 'https://rainmatter.org/partners'}
    ],
    intangible: [
      {name: 'Social value creation approach', kind: 'Philanthropy model', desc: 'Identifies and supports initiatives with demonstrable community benefit.', url: 'https://rainmatter.org/partners'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Sarjapura Curries': {
    status: 'researched',
    summary: 'Sarjapura Curries documents food biodiversity, local greens, and community stories rooted in regional food systems around Sarjapura, Karnataka.',
    tangible: [
      {name: 'Food biodiversity documentation', kind: 'Knowledge project', desc: 'Cataloguing local greens, traditional recipes, and food biodiversity in peri-urban Karnataka.', url: 'https://www.sarjapuracurries.com/'}
    ],
    intangible: [
      {name: 'Regional food culture storytelling', kind: 'Cultural narrative', desc: 'Uses food as a lens for community identity, ecology, and local knowledge systems.', url: 'https://www.sarjapuracurries.com/about/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Sauramandala Foundation': {
    status: 'researched',
    summary: 'Sauramandala Foundation drives social and economic change for remote and inaccessible communities in Meghalaya.',
    tangible: [
      {name: 'Community development programmes', kind: 'Field programme', desc: 'Livelihood and social development interventions in remote Meghalaya communities.', url: 'https://www.sauramandala.org/projects'}
    ],
    intangible: [
      {name: 'Remote community action model', kind: 'Development approach', desc: 'Collaborative approaches to reaching and supporting geographically isolated communities.', url: 'https://www.sauramandala.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'School of Ecological Nurturance (SEN)': {
    status: 'researched',
    summary: 'SEN offers apprenticeship-based ecological learning emerging from Gurukula Botanical Sanctuary and allied landscape organisations in the Western Ghats.',
    tangible: [
      {name: 'Ecological apprenticeship programme', kind: 'Learning programme', desc: 'Hands-on apprenticeships in conservation, restoration, and ecological practice.', url: 'https://gbsanctuary.org/'}
    ],
    intangible: [
      {name: 'Place-based ecological pedagogy', kind: 'Education model', desc: 'Learning through direct participation in conservation and landscape stewardship.', url: 'https://gbsanctuary.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Shivganga Gram Vikas': {
    status: 'researched',
    summary: 'Shivganga works on rural development in tribal areas of Madhya Pradesh through water conservation and community action.',
    tangible: [
      {name: 'Water conservation structures', kind: 'Water infrastructure', desc: 'Check dams, ponds, and watershed structures for tribal area water security.', url: 'https://shivganga.org/'}
    ],
    intangible: [
      {name: 'Tribal water governance model', kind: 'Community model', desc: 'Community-managed water conservation integrating traditional knowledge with modern techniques.', url: 'https://shivganga.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://shivganga.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Slam Out Loud': {
    status: 'researched',
    summary: 'Slam Out Loud brings arts education and socio-emotional learning to children from underserved communities.',
    tangible: [
      {name: 'Arts-based learning curriculum', kind: 'Education programme', desc: 'Structured poetry, storytelling, and visual arts curriculum for underserved schools.', url: 'https://slamoutloud.com/'},
      {name: 'Digital content library', kind: 'Digital platform', desc: 'Online library of arts-based learning resources for educators and students.', url: 'https://slamoutloud.com/'}
    ],
    intangible: [
      {name: 'Arts for socio-emotional development', kind: 'Education model', desc: 'Uses creative expression to build confidence, voice, and emotional resilience in children.', url: 'https://slamoutloud.com/'}
    ],
    sources: [
      {label: 'Website', url: 'https://slamoutloud.com/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Slowform Media': {
    status: 'researched',
    summary: 'Slowform Media produces independent climate and environment journalism in India.',
    tangible: [
      {name: 'Climate journalism platform', kind: 'Media platform', desc: 'Independent longform reporting on climate, environment, and sustainability.', url: 'https://rainmatter.org/partners'}
    ],
    intangible: [
      {name: 'Slow journalism model for climate', kind: 'Media approach', desc: 'Prioritises depth, nuance, and investigation over speed in climate reporting.', url: 'https://rainmatter.org/partners'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Socratus': {
    status: 'researched',
    summary: 'Socratus facilitates collective wisdom through participatory methods, dialogue, and community process design.',
    tangible: [
      {name: 'Participatory process design', kind: 'Facilitation service', desc: 'Designs and facilitates deliberative and participatory processes for organisations and communities.', url: 'https://socratus.in/'}
    ],
    intangible: [
      {name: 'Dialogue-based collective intelligence', kind: 'Process methodology', desc: 'Uses structured dialogue and deliberation to surface collective wisdom for complex decisions.', url: 'https://socratus.in/'}
    ],
    sources: [
      {label: 'Website', url: 'https://socratus.in/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Sustainable Futures Collective': {
    status: 'researched',
    summary: 'Sustainable Futures Collective works on climate strategy, energy transition, and public-interest systems change for a just future.',
    tangible: [
      {name: 'Climate strategy research', kind: 'Research', desc: 'Policy research and strategy on energy transition and climate action.', url: 'https://sustainablefuturescollective.org/'}
    ],
    intangible: [
      {name: 'Just transition framework', kind: 'Strategic approach', desc: 'Centres equity and justice in climate strategy and energy transition planning.', url: 'https://sustainablefuturescollective.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://sustainablefuturescollective.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Tech4Good Community / T4G Labs': {
    status: 'researched',
    summary: 'Tech4Good Community builds open-source technology, data systems, and digital support for nonprofits and social-impact organisations.',
    tangible: [
      {name: 'Open-source tools for nonprofits', kind: 'Software tools', desc: 'Technology tools and platforms built specifically for social sector organisations.', url: 'https://www.tech4goodcommunity.com/'},
      {name: 'T4G Labs', kind: 'Tech lab', desc: 'Applied technology lab building digital infrastructure for social impact.', url: 'https://www.tech4goodcommunity.com/'}
    ],
    intangible: [
      {name: 'Tech-for-good community model', kind: 'Community model', desc: 'Volunteer and professional community channelling tech skills into nonprofit digital capacity.', url: 'https://www.tech4goodcommunity.com/about-1'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Technology for Wildlife Foundation': {
    status: 'researched',
    summary: 'Technology for Wildlife Foundation delivers conservation impact through appropriate technology solutions across India.',
    tangible: [
      {name: 'Conservation technology tools', kind: 'Technology products', desc: 'Hardware and software tools for wildlife monitoring, anti-poaching, and habitat assessment.', url: 'https://techforwildlife.com/'}
    ],
    intangible: [
      {name: 'Appropriate technology for conservation', kind: 'Technology philosophy', desc: 'Designs technology solutions matched to field conditions and conservation practitioner needs.', url: 'https://techforwildlife.com/'}
    ],
    sources: [
      {label: 'Website', url: 'https://techforwildlife.com/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'The Local Food Project (Locavore)': {
    status: 'researched',
    summary: 'Locavore connects food-systems storytelling, local producer networks, and community-led action for regional food cultures.',
    tangible: [
      {name: 'Local food events and markets', kind: 'Community events', desc: 'Pop-up markets, food walks, and producer showcases connecting local food systems.', url: 'https://thelocavore.in/localfoodclub/'},
      {name: 'Food storytelling content', kind: 'Media content', desc: 'Stories and content documenting regional food cultures and local producers.', url: 'https://thelocavore.in/'}
    ],
    intangible: [
      {name: 'Regional food systems movement', kind: 'Cultural model', desc: 'Builds consumer awareness and producer connections for local and seasonal food cultures.', url: 'https://thelocavore.in/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'The Shola Trust': {
    status: 'researched',
    summary: 'The Shola Trust works on nature conservation in the Nilgiri region across Tamil Nadu, Kerala, and Karnataka.',
    tangible: [
      {name: 'Nilgiri conservation programmes', kind: 'Conservation programme', desc: 'Habitat protection, species monitoring, and community conservation in the Nilgiri Biosphere Reserve.', url: 'https://thesholatrust.org/'}
    ],
    intangible: [
      {name: 'Landscape-level conservation approach', kind: 'Conservation model', desc: 'Integrates indigenous community engagement with scientific conservation in the Nilgiri landscape.', url: 'https://thesholatrust.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://thesholatrust.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Trust for Environmental Education': {
    status: 'researched',
    summary: 'Trust for Environmental Education delivers experiential learning and environmental education for children and communities across India.',
    tangible: [
      {name: 'Environmental education programmes', kind: 'Education programme', desc: 'Hands-on nature and environment learning programmes for schools and communities.', url: 'https://rainmatter.org/partners'}
    ],
    intangible: [
      {name: 'Experiential environmental pedagogy', kind: 'Education model', desc: 'Learning through direct engagement with nature and environmental systems.', url: 'https://rainmatter.org/partners'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Uttarayan': {
    status: 'researched',
    summary: 'Uttarayan works on ecological restoration and wildlife corridors in South Bengal and the eastern Himalayas.',
    tangible: [
      {name: 'Wildlife corridor restoration', kind: 'Restoration project', desc: 'Habitat connectivity and corridor restoration for wildlife in eastern India.', url: 'https://uttarayanwildlife.org/south-bengal/'},
      {name: 'Community conservation zones', kind: 'Conservation infrastructure', desc: 'Community-managed conservation areas linking fragmented habitats.', url: 'https://uttarayanwildlife.org/'}
    ],
    intangible: [
      {name: 'Corridor ecology approach', kind: 'Conservation model', desc: 'Prioritises landscape connectivity and wildlife movement corridors in conservation planning.', url: 'https://uttarayanwildlife.org/'}
    ],
    sources: [
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Vaagdhara': {
    status: 'researched',
    summary: 'Vaagdhara works on farming sovereignty, child protection, and democracy in tribal regions of southern Rajasthan, MP, and Gujarat.',
    tangible: [
      {name: 'Tribal farming programmes', kind: 'Agricultural programme', desc: 'Organic farming, seed sovereignty, and food security programmes for Bhil tribal communities.', url: 'https://vaagdhara.org/'},
      {name: 'Child rights and education', kind: 'Protection programme', desc: 'Child protection and education initiatives in tribal areas of Banswara.', url: 'https://vaagdhara.org/'}
    ],
    intangible: [
      {name: 'Tribal self-governance model', kind: 'Governance approach', desc: 'Strengthens traditional governance systems and community decision-making in tribal regions.', url: 'https://vaagdhara.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://vaagdhara.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'WELL Labs': {
    status: 'researched',
    summary: 'WELL Labs produces interdisciplinary knowledge and applied research for water, environment, and social systems.',
    tangible: [
      {name: 'Water and environment research', kind: 'Research', desc: 'Applied research on water resources, environmental systems, and climate adaptation.', url: 'https://welllabs.org/'},
      {name: 'Data dashboards and tools', kind: 'Digital tools', desc: 'Open data platforms and visualisation tools for water and environmental decision-making.', url: 'https://welllabs.org/'}
    ],
    intangible: [
      {name: 'Interdisciplinary water-environment research', kind: 'Research framework', desc: 'Combines hydrology, social science, and policy analysis for integrated environmental solutions.', url: 'https://welllabs.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://welllabs.org/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Youth Conservation Action Network (YouCAN)': {
    status: 'researched',
    summary: 'YouCAN builds a new generation of community-rooted environmental educators through fellowships and nature education.',
    tangible: [
      {name: 'YouCAN Fellowship', kind: 'Fellowship programme', desc: 'Fellowships placing young educators in communities for nature-based education work.', url: 'https://youcanunite.com/'}
    ],
    intangible: [
      {name: 'Youth conservation leadership model', kind: 'Education model', desc: 'Nurtures young conservation leaders through field-based mentorship and community embedding.', url: 'https://youcanunite.com/'}
    ],
    sources: [
      {label: 'Website', url: 'https://youcanunite.com/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Transform Rural India Foundation': {
    status: 'researched',
    summary: 'TRIF drives community-first rural development through its Thoughtful Tarakki model, working across health, nutrition, education, farm prosperity, water, governance, and gender equality in eight states.',
    tangible: [
      {name: 'Tarakki Blueprint', kind: 'Development framework', desc: 'A tri-focal design solution engaging state, market, and communities across six dimensions of rural wellbeing.', url: 'https://www.trif.in/'},
      {name: 'India Rural Colloquy', kind: 'Knowledge platform', desc: 'Annual convening and knowledge exchange platform for rural development practitioners and policymakers.', url: 'https://irc.trif.in/'},
      {name: 'Knowledge Centre', kind: 'Research repository', desc: 'Published research, annual reports, and field narratives from rural development work across 42 districts.', url: 'https://www.trif.in/'}
    ],
    intangible: [
      {name: 'Thoughtful Tarakki model', kind: 'Development approach', desc: 'Community participation, local leadership, and inclusive decision-making framework for fostering thriving, resilient, and sustainable rural communities.', url: 'https://www.trif.in/'},
      {name: 'Convergence model', kind: 'Implementation approach', desc: 'Leveraging government schemes alongside community-level interventions for health, education, and livelihoods.', url: 'https://www.trif.in/'}
    ],
    sources: [
      {label: 'Website', url: 'https://www.trif.in/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'SwaYYam': {
    status: 'researched',
    summary: 'SwaYYam uses permaculture and agroecology to regenerate degraded farmland at the edge of Bandipur, organising farmer collectives around tree-planting, polyculture, and food sovereignty.',
    tangible: [
      {name: '1000 Tree Project', kind: 'Collective farming programme', desc: 'Farmer collectives pooling land to plant drought-resistant fruit, timber, medicine, and fodder trees while practising chemical-free polyculture and rainwater harvesting.', url: 'https://swayyam.org/'},
      {name: 'Open Shell Farm', kind: 'Demonstration farm', desc: 'A 1.3-acre rain-fed permaculture demonstration and education site growing 70% of its own food using regenerative principles.', url: 'https://swayyam.org/'},
      {name: 'Vasudha Collective', kind: 'Farmer collective', desc: 'First collective of four farmers managing 12 contiguous acres in Yelachatti village near Bandipur, buffering crop loss through fruit and timber saplings.', url: 'https://blog.rainmatter.org/swayyam-permaculture/'}
    ],
    intangible: [
      {name: 'Farmer collective model', kind: 'Community organising approach', desc: 'Farmers pool contiguous land, eliminate chemical pesticides, practise polyculture, implement rainwater harvesting, and plant a minimum of 100 trees per acre.', url: 'https://blog.rainmatter.org/swayyam-permaculture/'},
      {name: 'Permaculture education programme', kind: 'Training model', desc: 'Workshops and hands-on training in permaculture design, natural farming, seed saving, and natural building techniques.', url: 'https://swayyam.org/'}
    ],
    sources: [
      {label: 'Website', url: 'https://swayyam.org/'},
      {label: 'Rainmatter blog', url: 'https://blog.rainmatter.org/swayyam-permaculture/'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  },
  'Palar Guttahalli Eco-restoration Program': {
    status: 'researched',
    summary: 'A landscape-scale eco-restoration initiative rebuilding the upper Palar River basin through riverine afforestation, groundwater recharge, and community-led recovery of barren hillsides in Chikkaballapur district.',
    tangible: [
      {name: 'Guttahalli Hills afforestation', kind: 'Restoration site', desc: '70+ hectare barren-to-forest restoration in the Guttahalli Hills of the Palar River basin, remodelling degraded land into vibrant ecosystems for groundwater recharge.', url: 'https://rotaryclubofbangalore.org/2021/05/07/palar-guttahalli-eco-restoration-program/'},
      {name: 'Riverine afforestation programme', kind: 'Field programme', desc: 'Planting 15+ native tree species along Palar River banks to rejuvenate the river catchment and improve groundwater in adjoining villages.', url: 'https://rotaryclubofbangalore.org/2021/05/07/palar-guttahalli-eco-restoration-program/'}
    ],
    intangible: [
      {name: 'River basin eco-restoration model', kind: 'Landscape approach', desc: 'Upper-catchment restoration combining afforestation, soil conservation, and community participation to revive a disappearing river system.', url: 'https://rotaryclubofbangalore.org/2021/05/07/palar-guttahalli-eco-restoration-program/'}
    ],
    sources: [
      {label: 'Rotary Club of Bangalore', url: 'https://rotaryclubofbangalore.org/2021/05/07/palar-guttahalli-eco-restoration-program/'},
      {label: 'Deccan Herald coverage', url: 'https://www.deccanherald.com/city/bengaluru-infrastructure/rotary-aol-to-undertake-massive-eco-restoration-project-in-kaiwara-937288.html'},
      {label: 'Rainmatter partners', url: 'https://rainmatter.org/partners'}
    ]
  }
};
