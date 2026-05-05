# Data and groundtruth

What water data exists in India, how recent it is, how it's used, how trustworthy it is. The honest answer is that India has more water data than is widely understood — the problem is fragmentation, latency, and the gap between what's collected and what's actually used.

## The legal data infrastructure (what exists)

**IMD — meteorological.** Daily gridded rainfall at 25 km resolution since 1901 reanalysis. ~700 manned stations + ~1,500 automatic weather stations. 5-day to monsoon-scale forecasts. Cyclone tracking. Mausam app for consumer access. Strong, public, free.

**CWC — surface water.** ~878 hydrological observation stations on rivers. Daily reservoir levels for ~150 major dams. Weekly storage bulletin (Thursday). Flood forecasting at 332 stations across 22 basins. Annual Water Yearbook. Decent quality, modest public access. Real-time flood data is operational; deep historical access is harder.

**CGWB — groundwater.** ~25,000 monitoring wells. Four readings per year (pre-monsoon Apr-May, monsoon Aug, post-monsoon Nov, post-rabi Jan-Feb). District-level Ground Water Estimation (GEC) report every 2-3 years (latest 2023, released September 2024). National Aquifer Mapping (NAQUIM) ongoing, ~75% complete as of 2024. Block-level safe / semi-critical / critical / over-exploited classification.

**CPCB — quality.** ~4,484 water quality stations across rivers, lakes, groundwater. Monthly to quarterly readings. 311 polluted river stretches identified (the count has hovered there for years). State PCBs run additional stations.

**India-WRIS.** National portal stitching CWC + CGWB + IMD + CPCB. Reservoirs, GW, basins, water quality. Decent UX. Underused. Aggregator, not model.

**ISRO / NRSC.** Bhuvan portal — water bodies (NDWI), drought indicators, snow cover, wetland atlas (2011, dated). NRSC drought + flood products operational.

**SAC / NWI 2011.** 2.25 lakh wetlands mapped at 1:50,000. Latest comprehensive: 2011. Incremental updates haven't replaced.

**FSI — Forest Survey.** Biennial assessment, latest ISFR 2023. Catchment forest cover at 23.5m resolution.

**JJM dashboard.** Household tap connection coverage, real-time, daily. State-reported.

**Atal Bhujal dashboard.** Village water budgets in 8,000+ Gram Panchayats across 7 stressed states. Real-time.

**International / free:**

- **GRACE / GRACE-FO** (NASA gravimetry). Basin-scale groundwater changes. Showed Northwest India losing ~17 cubic km/year — the most striking single piece of Indian water data ever produced. By an American satellite. Indian agencies do not operationalize it.
- **HydroSHEDS** — global river network, basin boundaries, free, well-used by researchers.
- **Sentinel / Landsat / MODIS** — satellite imagery, free, well-used by researchers.
- **CHIRPS, ERA5** — rainfall reanalysis.
- **WRI Aqueduct** — water risk maps. Heavily used by global corporates with India operations.
- **CMIP6** — downscaled climate projections.
- **ICIMOD HKH** — Himalayan glaciers and basins.
- **SWOT** (NASA Surface Water and Ocean Topography) — new altimetry.

**Civil society + civic:**

- **IndiaWaterPortal** (Arghyam, since 2007) — single largest knowledge archive for Indian water. Heavily used in NGO + academic + journalism.
- **SANDRP** — South Asia Network on Dams Rivers People. Independent dam + river database. Reference for activists and journalists.
- **WELL Labs** — open-data dashboards on basins, applied research. Emerging civic layer.
- **Veditum** — river archive, journalism, walks. Cultural archive of disappearing rivers.
- **CSE / Down to Earth** — water reports, reporting, *State of India's Environment* annual.
- **ATREE, ACWADAM, CEEW** — research-grade reports.
- **The Third Pole, Mongabay India** — water + climate journalism with cross-border coverage.
- **Sikkim Spring Atlas** (state-level, methodology model).
- **Meghalaya Springshed Mission** (state-level implementation).

## Tempo — how current is what?

Different data layers operate at very different cadences.

**Real-time (today):** rainfall, dam ops, flood forecasts, JJM tap connections, IMD weather + cyclone tracking.

**Daily-weekly:** CWC reservoir bulletin (Thursday weekly, ~150 reservoirs), river flow at major stations during monsoon, satellite NDVI + water bodies.

**Monthly-quarterly:** CPCB water quality (mostly grab samples), agricultural electricity consumption (proxy for GW pumping).

**4×/year only:** CGWB groundwater levels. The most-watched aquifer in the country measured four times a year.

**Annual:** CWC Water Yearbook, CGWB Ground Water Yearbook, CPCB Annual State of Water Quality (typically 6-12 month publication lag), STP performance reports.

**Biennial:** ISFR (Forest Survey).

**Periodic, slow:** GEC every 2-3 years, NAQUIM ongoing, NFHS every ~5 years (latest NFHS-5, 2019-21), Census (should have been 2021, didn't happen — major denominators uncertain).

**Decadal+:** National Wetland Inventory (2011, 13 years stale), glacier inventory (last comprehensive ~2014, fragmentary updates), spring inventories (Sikkim 2008, Meghalaya, others absent).

**Lagged + post-event:** disaster losses (state DDMAs, months late, partial), NMCG Ganga monitoring (significant lag), JJM water-quality testing (testing protocol exists, aggregated public data inconsistent).

### The tempo problem

The fastest-moving water phenomena in India — flash floods, GLOFs, contamination spikes, aquifer collapse acceleration, cyclone-driven cloudbursts — operate at hourly-to-monthly timescales. The data infrastructure operates at quarterly-to-decadal timescales. **There is a structural mismatch between what's happening and what's measured.** We are watching a 4K phenomenon through a 240p camera.

## Is the data groundtruthed?

The honest answer is that **data quality in India follows political incentive.** Where the cost of dishonesty is acute (cyclone deaths, dam operations), data is decent. Where dishonesty has political payoff (sewage compliance, JJM water quality, polluter monitoring), data is poor.

### Generally credible

- **IMD rainfall.** Manned stations regularly calibrated. Satellite-radar-gauge cross-checks. Limitations: AWS sensor drift; cloudburst detection at fine spatial resolution is weak.
- **Forest cover (FSI).** Methodology public, satellite-based, independently verifiable. Critique exists ("plantation = forest") but the data integrity is high.
- **Census + NFHS** when they happen. Internationally peer-reviewed sampling. Major problem: Census 2021 delayed/skipped — all population denominators are estimates.
- **Cyclone tracking.** Track forecasts strong; lives saved (1999 Odisha super-cyclone ~10,000 dead → recent comparable storms <100). Direct political cost of error.
- **GRACE satellite GW.** Independent NASA observation. Confirms CGWB direction, sometimes more starkly.

### Partially credible, politically inflected

- **Reservoir levels.** Dam operators are the data source — direct conflict of interest with release decisions tied to political pressure. Karnataka and Tamil Nadu have publicly accused each other of tampering during Cauvery low-flow periods. Independent verification rare.
- **River flow.** Discharge measurements at flood stage are notoriously imprecise (rating curves break at extremes). Many CWC stations have outdated rating curves. Sediment data sparse.
- **Groundwater level.** Direction (declining) is solid. Fine resolution is suspect — wells abandoned but listed, manpower constraints mean scheduled readings missed. Quality testing inconsistent across stations.
- **Water quality (CPCB).** Grab-samples miss spike events. Lab quality varies — some State PCB labs are NABL-accredited, many aren't. Yamuna BOD readings show same-day divergence between Delhi Pollution Control Committee and CPCB. Independent academic measurements often higher than official.

### Largely uncredible / routinely disputed

- **STP performance.** Self-reported by SPCBs. CAG + NGT audits have repeatedly flagged misreporting. Design capacity vs actual treatment vs effluent quality routinely diverge. Compliance is reported when standards are exceeded.
- **JJM "functional household tap" coverage.** CAG audits 2022 + 2024 flagged: definition slippage (counted on day of installation, not continuous service), unverified state reporting, completion rates inflated. Real-world functionality often well below dashboard.
- **JJM tap water quality.** Field Testing Kit (FTK) testing variable by state. Lab confirmation for tiny subset. Aggregated data not consistently published. The contradiction with the celebrated tap-coverage KPI is politically sensitive.
- **Industrial OCEMS** (Online Continuous Emission Monitoring System). Mandated since 2014 for 17 categories. Tampering documented: sensor manipulation, "convenient" downtimes during inspections, corrupted timestamps. NGT has prosecuted some cases. Public access heavily restricted.
- **Disaster loss data.** State DDMAs partial, lagged. Methodology inconsistent across states. Political pressure for higher numbers (more relief) or lower (less embarrassment) depending on context.
- **Atal Bhujal village water budgets.** Self-reported by village committees. ICAR + research institutes have flagged template-completion vs actual measurement.

### The honest hierarchy of trust

1. IMD rainfall + Census/NFHS (when they happen) + FSI satellite + GRACE → high trust.
2. CWC operational dam ops + IMD cyclone → high trust (acute cost of error).
3. CGWB groundwater (direction) → trustworthy; resolution dubious.
4. CPCB water quality → mixed; baseline trustworthy, individual readings disputed.
5. STP performance + JJM functionality + OCEMS → low trust; routine misreporting documented.
6. Disaster loss accounting → political artefact.

### The ungroundtruthed core

The most important measurements for water-as-public-good — household tap water quality, sewage discharge compliance, industrial discharge, groundwater abstraction — are exactly the ones with the weakest groundtruthing. The system measures what is politically safe and aspires to measure what is politically inconvenient. **Data quality is endogenous to political incentive.**

Building independent verification capacity (citizen science, third-party labs, civic auditors) is itself a public-good intervention. This is one of the load-bearing reasons that `build-plan.md` Phase 3 (citizen science + verification) is structured the way it is.

## How the data is used (or isn't)

Even the data that exists mostly fails to drive decisions.

**Used reasonably well:**
- IMD forecasts in agromet advisories and disaster early warning.
- CWC reservoir + flood forecasting for dam operations and short-horizon flood ops.
- IDSP (Integrated Disease Surveillance Programme) for some outbreak response.

**Collected but not driving decisions:**
- CGWB classification informs scheme eligibility (which blocks qualify for which scheme). It does not change pricing, electricity policy, or extraction limits in over-exploited blocks.
- CPCB river stretch classification: 311 polluted stretches listed for years. Few prosecutions. No pricing of pollution.
- NMCG Ganga BOD has improved marginally despite ₹38,000+ cr spent. Tributaries (Yamuna, Hindon, Ramganga, Kosi) remain catastrophic. Data shows the failure; intervention does not update.
- JJM tap-connection KPI is celebrated. JJM water-quality testing data exists but isn't aggregated. The two data streams don't talk to each other politically.

**Public access is near-zero in real time.** No equivalent of a Bhujal app. No live aquifer dashboard. No live water-quality view. Citizens cannot be stakeholders in a system they cannot see. Investigative journalism uses CWC/CGWB sporadically; most reporting is event-driven.

**Cross-agency stitching is broken.** IMD rainfall + CGWB recharge + CWC discharge + CPCB quality should be one model. They are six agencies under different ministries with different data formats and update cycles. India-WRIS attempted aggregation; it is a portal, not a model.

**Climate scenarios aren't integrated into allocation.** IMD/IITM produce climate projections. Cauvery, Krishna, Indus allocations don't use them. Tribunals use historical stationary data. Every existing allocation is therefore wrong relative to what is coming.

**Data-driven enforcement is missing.** CPCB knows polluters. NGT acts case by case. State PCBs are politically captured. The data exists; the enforcement architecture doesn't translate it into consequence.

## Cross-domain comparison

India built strong public information for cyclones. IMD does well; deaths fell from ~10,000 in the 1999 Odisha super-cyclone to <100 in recent comparable storms. The political cost of failure is acute and there is no political coalition that benefits from cyclone deaths.

India built COVID-19 dashboards in weeks under acute crisis + international pressure + no political vote bank in opacity.

India built AQI dashboards in cities under pressure from urban middle-class campaigning, especially Delhi. Real-time public AQI is now baseline.

For water: chronic opacity protects political settlements. The constituency that benefits from transparency (rural poor, women, tribals, downstream, future) is politically marginal. The constituency that benefits from opacity (paddy farmers in the GW belt, polluting industries, state water bureaucracies, state electricity boards) is politically central.

**Water information as public good will get built when the affected become politically consequential, OR when an acute crisis aligns urban middle-class interest with the public-good frame.** Bengaluru's repeated near-Day-Zeros may eventually deliver the latter.

## What an honest groundtruthed system would look like

Sketch (developed concretely in `build-plan.md`):

- **Sensing layer:** real-time aquifer telemetry at 10× current density (~250,000 wells, sub-daily). Continuous water quality sensors (multi-parameter — TDS, pH, DO, BOD, F, As, NO₃) at ~50,000 stations. Mandatory sewage outflow monitoring at every STP and CETP. Glacial lake monitoring at the 200+ ICIMOD-flagged dangerous lakes. Soil moisture network at farm scale. Spring discharge monitoring in mountains. Coastal salinity sensors. Groundwater abstraction metering at pump head — the single most important missing measurement.
- **Integration layer:** federated API across IMD + CWC + CGWB + CPCB + state PCBs + ISRO. Common units, schemas, geospatial reference. Climate scenario integration.
- **Verification layer:** independent citizen science network. Standardized testing protocols. Third-party lab partnerships. Public reports comparing official vs citizen + lab measurements. The audit muscle that makes the state honest.
- **Access layer:** citizen-grade dashboards. Multi-language. Voice/SMS for low-literacy. Open APIs.
- **Modeling layer:** basin digital twins, aquifer governance models, urban flood inundation, water-energy-food nexus.

The bet behind this: India does not lack data. It lacks a public-good information system. Building one is plausibly the single most leveraged intervention in Indian water — see `build-plan.md`.
