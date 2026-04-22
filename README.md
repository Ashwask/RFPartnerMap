# RF Partner Map

Interactive India map tracking **Rainmatter Foundation** partners, their artefacts, and place-based landscape profiles — rooted in Rainmatter's Place Thesis.

**Live dashboard:** https://ashwask.github.io/RFPartnerMap/

## What's inside

Three tabs:

1. **Atlas** — Leaflet map with partner HQ markers, state boundaries, geographies of work, and Rainmatter / Ecosystem network layers.
2. **Artefacts** — per-organisation research ledger with tangible / intangible artefact cards and source trails.
3. **Place** — 13 landscape / bioregion profiles with health indicators, needs, risks, and partner coverage.

**Portfolio lenses:** All · Urban · Rural · Conservation · Buildings · Data.

## Repo layout

| File | Purpose |
|------|---------|
| `dashboard.html` | Single-page dashboard (inline CSS + JS) |
| `dashboard.inline.js` | Map + tab logic |
| `partners.js` | `MAP_PARTNERS` — partner records (name, lat/lon, category, states, `rm` flag) |
| `artefacts.js` | `ORG_ARTEFACT_OVERRIDES` + `ORG_ARTEFACT_ALIASES` — per-org research |
| `india_geo.js`, `india_states_simple.geojson` | Geographic boundaries |
| `export_dashboard_payload.js`, `export_dashboard_excel.py` | Export utilities |
| `index.html` | Redirect to `dashboard.html` |
| `CLAUDE.md` | Working conventions |

## Contributing

The repo is public. Two ways to contribute:

**External (fork + PR)**
1. Fork this repo on GitHub
2. Clone your fork, branch, and make changes
3. Open a pull request against `main`

**Collaborator (direct)**
If you've been added as a collaborator:
```bash
git clone https://github.com/Ashwask/RFPartnerMap.git
cd RFPartnerMap
git checkout -b my-change
# edit
git add . && git commit -m "describe change"
git push -u origin my-change
# open PR on GitHub
```

GitHub Pages auto-rebuilds on merge to `main` (30–90 s).

### Adding a new partner

1. Add an entry to `MAP_PARTNERS` in `partners.js` with all fields including `rm` (`true` = Rainmatter Foundation partner, `false` = ecosystem partner).
2. Add an entry to `ORG_ARTEFACT_OVERRIDES` in `artefacts.js` with `status: "researched"`, summary, tangible / intangible artefacts, and sources.
3. If the partner name differs from the canonical artefact name, add a mapping to `ORG_ARTEFACT_ALIASES`.
4. Verify every partner resolves to an override:
   ```bash
   node -e "eval(require('fs').readFileSync('partners.js','utf8')); \
     eval(require('fs').readFileSync('artefacts.js','utf8')); \
     var missing = MAP_PARTNERS.filter(function(p){ \
       var c = ORG_ARTEFACT_ALIASES[p.name] || p.name; \
       return !ORG_ARTEFACT_OVERRIDES[c]; \
     }); \
     console.log('Missing:', missing.length); \
     missing.forEach(function(p){ console.log(' -', p.name); });"
   ```

### Conventions

- Categories: `Urban`, `Rural`, `CnR`, `Buildings` — do not invent new ones.
- State names must match the GeoJSON; use `STATE_ALIAS` for normalisation. `"Pan India"` is valid.
- Coordinates: WGS84 lat/lon of the organisation's HQ.
- All dashboard JS is vanilla ES5 (no modules, no arrow functions, no `let`/`const`). This keeps the dashboard a single drop-in HTML file.

See `CLAUDE.md` for the full scope and out-of-scope list.

## Running locally

No build step. Just serve the directory:

```bash
python3 -m http.server 8000
# open http://localhost:8000/dashboard.html
```

## License

TBD.
