# Partner Map Dashboard — Claude Instructions

## Scope

This project is the **Rainmatter Partner Map Dashboard** — an interactive India map tracking partner organisations, their artefacts, and place-based landscape profiles rooted in the Rainmatter Foundation's Place Thesis.

All work in this directory MUST stay within the scope of:
- The dashboard (`dashboard.html`, `dashboard.inline.js`)
- Partner data (`partners.js`) — the `MAP_PARTNERS` array
- Artefact data (`artefacts.js`) — `ORG_ARTEFACT_OVERRIDES` and `ORG_ARTEFACT_ALIASES`
- Geographic data (`india_geo.js`, `india_states_simple.geojson`)
- Export utilities (`export_dashboard_payload.js`, `export_dashboard_excel.py`)

Do NOT create new files unless explicitly asked. Prefer editing existing files.

## Data model

### Partners (`partners.js`)
Each partner has: `name`, `lat`, `lon`, `geo` (HQ city), `cat` (Urban/Rural/CnR/Buildings), `desc`, `states` (array), `rm` (boolean — true = Rainmatter Foundation partner, false = Ecosystem partner).

### Artefacts (`artefacts.js`)
- `ORG_ARTEFACT_ALIASES` maps variant partner names to canonical names
- `ORG_ARTEFACT_OVERRIDES` holds per-org research: `status` ("researched"), `summary`, `tangible` (array of {name, kind, desc, url}), `intangible` (same), `sources` (array of {label, url})
- Every partner in `MAP_PARTNERS` must resolve to an override (directly or via alias)

### Dashboard tabs
1. **Atlas** — Leaflet map with HQ markers, state boundaries, geographies of work, network layer (Rainmatter/Ecosystem)
2. **Artefacts** — per-org research ledger with tangible/intangible artefact cards and source trails
3. **Place** — 13 landscape/bioregion profiles (SHEDS array in dashboard.html) with health indicators, needs, risks, counters, and partner coverage

### Portfolio lenses
Filter pills: All, Urban, Rural, Conservation, Buildings, Data. "Data" is a cross-cutting lens defined by the `DATA_PARTNERS` array.

## Key conventions

- Categories: `Urban`, `Rural`, `CnR`, `Buildings` — do not invent new ones
- Network: `rm: true` for Rainmatter Foundation partners, `rm: false` for ecosystem partners
- States must match GeoJSON names. Use `STATE_ALIAS` mapping for normalization. "Pan India" is valid.
- Coordinates are WGS84 lat/lon for the organisation's HQ
- All JS is vanilla ES5-compatible (no modules, no arrow functions, no let/const in dashboard code)
- The dashboard is a single HTML file with inline CSS and JS, loading external data via script tags

## When adding a new partner

1. Add entry to `MAP_PARTNERS` in `partners.js` with all fields including `rm`
2. Add entry to `ORG_ARTEFACT_OVERRIDES` in `artefacts.js` with status `researched`
3. If the name differs from the canonical artefact name, add to `ORG_ARTEFACT_ALIASES`
4. Verify with: `node -e "eval(require('fs').readFileSync('partners.js','utf8')); eval(require('fs').readFileSync('artefacts.js','utf8')); var missing = MAP_PARTNERS.filter(function(p){ var c = ORG_ARTEFACT_ALIASES[p.name] || p.name; return !ORG_ARTEFACT_OVERRIDES[c]; }); console.log('Missing:', missing.length); missing.forEach(function(p){console.log(' -', p.name);});"`

## When modifying the Place tab

- SHEDS are landscape/bioregion profiles, NOT administrative boundaries
- Each shed has: `key`, `label`, `states`, `context`, `health` (array of indicators), `needs`, `fills`, `risks`, `counters`, `rings`
- Partner coverage is computed dynamically from `MAP_PARTNERS` state overlap
- Do not hardcode partner names into shed data

## Out of scope

Do NOT:
- Build features unrelated to the partner map, artefacts, or place profiles
- Create new HTML pages or separate apps
- Add backend/server code — this is a static dashboard
- Modify the GeoJSON or india_geo.js unless fixing geographic data
- Add npm/node dependencies — the dashboard runs from a local file
