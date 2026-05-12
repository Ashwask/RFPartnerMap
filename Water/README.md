# India Water Canvas

A public-good infrastructure artefact for India's water situation, systems, and place-based interventions. CC BY-NC 4.0 · open data · open methodology.

## 🔗 Quick links

- **Live dashboard** → [`dashboard.html`](dashboard.html) *(open locally; see "Run it" below; or via GitHub Pages once enabled — see "Public link")*
- **Methodology** → [`methodology.html`](methodology.html) — how H/A/I scores are derived
- **Open data** → [`data/`](data/) — 8 CSVs · per-state H/A/I, funder ladder, bottlenecks, sheds, hidden dynamics, unit economics
- **Prose folder** → 14 chapters · `landscape.md` → `build-plan.md` · the argument behind the dashboard

## ⚙️ Use this artefact

It's a public digital good. Anyone can clone, fork, run locally, embed in their own tools, or contribute corrections back. Five concrete ways to use it:

| You want to... | Do this |
|---|---|
| **View the dashboard** | Open `dashboard.html` in your browser (or visit the public link below) |
| **Use the data** | Download from [`data/`](data/) — CSVs are open under CC BY-NC 4.0 |
| **Fork it** | [Click "Fork"](https://github.com/Ashwask/RFPartnerMap/fork) — make it your own, customise, extend |
| **Contribute back** | Open a [pull request](https://github.com/Ashwask/RFPartnerMap/pulls) or [issue](https://github.com/Ashwask/RFPartnerMap/issues/new) — main-branch changes are evaluated and merged |
| **Cite it** | See [`CITATION.cff`](CITATION.cff) · attribute as *"India Water Canvas (2026), https://github.com/Ashwask/RFPartnerMap/tree/main/Water, CC BY-NC 4.0"* |

## 🚀 Run it locally

The dashboard is a single static HTML file with no build step. Three ways to run:

```bash
# 1. Clone the repo
git clone https://github.com/Ashwask/RFPartnerMap.git
cd RFPartnerMap

# 2. Open the dashboard directly (uses local files)
open Water/dashboard.html

# 2b. Or serve over HTTP (better for CORS-sensitive features like fetch)
python3 -m http.server 8000
# Then open http://localhost:8000/Water/dashboard.html
```

No dependencies to install — Leaflet, Chart.js, D3 are loaded from public CDNs.

## 🌐 Public link

Once GitHub Pages is enabled on this repo (settings → Pages → branch `main`, folder `/`), the dashboard is hosted at:

**`https://ashwask.github.io/RFPartnerMap/Water/dashboard.html`**

To enable: repo settings → Pages → source `Deploy from branch` → branch `main`, folder `/(root)` → save. Build takes ~1 minute.

## 🔄 Contribute back

The artefact's job is to be correctable. Three contribution paths:

- **Submit a correction** — anything wrong? [Open an issue](https://github.com/Ashwask/RFPartnerMap/issues/new) with `[Correction]` prefix. Tracked in `erratum.md`.
- **Propose a methodology change** — fork, edit `data/h-a-i-derivation.csv` or `methodology.html`, open a PR. Main-branch changes are evaluated and merged when reasoned.
- **Add data** — partner-table addition, place-level observation, hidden dynamic, source update. Issue or PR.

Issue templates pre-fill via the dashboard's "Submit a correction" floating button + each role panel's give-side links.

## 📂 Folder structure

```
Water/
├── dashboard.html          ← the live artefact (open this in a browser)
├── methodology.html        ← H/A/I formula + derivation
├── data/                   ← 8 open CSVs · CC BY-NC 4.0
│   ├── h-a-i-derivation.csv
│   ├── funder-ladder.csv
│   ├── bottlenecks.csv
│   ├── unit-econ.csv
│   ├── sheds.csv
│   └── hidden-dynamics.csv
├── changelog.md            ← version history
├── erratum.md              ← correction log
├── LICENSE                 ← CC BY-NC 4.0
├── CITATION.cff            ← citation file format
├── terms.md                ← terms of use
├── privacy.md              ← privacy notice
├── water-map.html          ← standalone Leaflet map (older variant)
└── [14 prose chapters]     ← landscape · stakeholders · legal-vacuum ·
                              data-and-groundtruth · data-inventory · artefacts ·
                              gaps · gaps-deepdive · hard-questions ·
                              funders-ecosystem · funders-flow · imagination ·
                              still-missing · build-plan
```

## How this folder came to be

The original prompt was "start a Water folder in the repo." The conversation that followed pulled away from a portfolio companion (which Rainmatter water partners?) toward a public-good landscape document (what is water in India, for whom, and what's missing?).

The argument arrived at, across the files in this folder, is roughly:

> The deepest gap in Indian water is not a missing partner, scheme, dam, or report. It is the absence of a public-good information infrastructure that makes water legible to citizens. Without that, every other reform — demand-side, governance, basin-scale, climate-adaptive — sits on opaque ground. Building that information layer, civic-side, outside the state, is plausibly the most leveraged thing one could do in Indian water right now.

`build-plan.md` is the concrete proposal that follows from this argument.

## Reading order

For someone new to the folder:

1. **`landscape.md`** — what India's water situation actually is: scale, stress fronts, vanishing geography, mass poisoning, climate collision, federalism. The factual ground.
2. **`stakeholders.md`** — water as public good for whom, with radically asymmetric stakes. Who's at the table; who is structurally absent.
3. **`legal-vacuum.md`** — the constitutional + legal frame. Why water is a State subject, why the River Boards Act is dormant, why groundwater runs on 1882 law, what FRA-for-water might mean.
4. **`data-and-groundtruth.md`** — what data exists, how recent, how trustworthy, who uses it.
5. **`data-inventory.md`** — companion appendix: 15-category catalog with trust grades (gold/silver/bronze/red), ~120 named sources. Read alongside `data-and-groundtruth.md`.
6. **`artefacts.md`** — inventory of public water artefacts (200-500 substantial), with a usage read.
7. **`gaps.md`** — the 7-layer stack of what's missing, from sensing to imagination.
8. **`gaps-deepdive.md`** — operational depth on each of the 7 layers: named attempts, cost tiers, talent picture, comparators, layer-interaction failure modes.
9. **`hard-questions.md`** — the dozen questions worth asking — uncomfortable, structural, unresolved. Each ends with "what would change my mind."
10. **`funders-ecosystem.md`** — who funds water in India, and who could anchor a public-good build.
11. **`funders-flow.md`** — where the funding actually lands: NGO backbone, basin/state heat map, diaspora capital, climate-adaptation finance, faith-based philanthropy, impact-failure post-mortems.
12. **`imagination.md`** — the meta-angle: India lacks a coherent imagination of itself as a water civilization. The deepest unfinished work.
13. **`still-missing.md`** — self-audit: 14 categorical omissions with must-fill / nice-to-have / out-of-scope verdicts, and meta-blind-spots on the folder itself.
14. **`build-plan.md`** — the 7-layer stack, 10-year phased build, ~₹500-1000 cr ask, with capital structure, founding team, risk register, sequencing, Phase 0 specifics (Cauvery upper basin + cryosphere standalone), failure-case postures, decision gates, migration policy, and 8 pre-build open threads.

## Conventions

- Files are prose-first, not data-first. They argue, not tabulate.
- Numbers cited are from training-era public sources (CWC, CGWB, CPCB, IMD, ISRO, NFHS, ICIMOD, GRACE, peer-reviewed). Where a number could be wrong by ±30%, treat it as directional.
- Voice is opinionated and specific. Not a survey. Not neutral.
- No emojis. No marketing copy. This is internal strategy material.
- When this folder's thinking gets sharp enough to influence the live dashboard (a Water lens, a basin SHED, a geo layer), the relevant files migrate into the root data files (`partners.js`, `artefacts.js`, `dashboard.html` SHEDS array) — see migration policy in `build-plan.md`.

## What this folder is *not*

- Not a comprehensive academic survey. There are 200+ books on Indian water; this isn't one of them.
- Not a Rainmatter portfolio companion. The frame is pan-India water as public good, not RM-portfolio-shaped.
- Not a funding pitch. `build-plan.md` is a construction plan, not a fundraising deck. A pitch is a downstream artifact.
- Not a fixed canon. Memory of what's true at a point in time. The numbers age. The institutions shift. Treat as a living draft.

## Source material

Two principal feeders behind this folder, beyond direct experience:

- The data + report ecosystem catalogued in `artefacts.md`. Especially CWC + CGWB Yearbooks, CPCB river-quality reports, GRACE satellite findings, ICIMOD Himalayan basins, JJM + Atal Bhujal dashboards, IndiaWaterPortal archive (Arghyam, 2007+), SANDRP, WELL Labs, ATREE, ACWADAM.
- The canon: *Dying Wisdom* (Anil Agarwal + Sunita Narain, 1997), *Aaj Bhi Khare Hain Talab* (Anupam Mishra, 1994), *Wells of Memory* (Mridula Ramesh), Veditum's river archive, CSE's *Down to Earth* coverage.

## Status

Draft, May 2026. **All 14 chapters written.** Reflects a multi-session conversation arc; not a vetted multi-author document. The folder has reached the size at which the prose risks substituting for action — see `still-missing.md` meta-blind-spots. The next move is operational, not editorial: anchor commitment signing, co-authorship recruitment, founding-team identification, Phase 0 state partnership, reader-testing with the figures named in `still-missing.md` and `build-plan.md` open threads. Treat sections as starting points for sharper authorship and external reader-testing, not final answers.
