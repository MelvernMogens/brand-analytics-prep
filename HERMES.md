# Brand Analytics Prep — HERMES.md

## What this is
Interactive, single-file offline study app for Melvern's **Brand Analytics** course (Prasetiya Mulya 2026, Week 1–7): worked cases step-by-step, concept bank, PG quiz, case-study practice (incl. unlimited random RFM cases), NusaBean RFM lab, exam simulation. Deployed publicly on **GitHub Pages** (user OK'd public; Netlify credits nearly exhausted — do NOT deploy to Netlify).

## Stack
- Content in a line DSL: `content/*.md` (+ `content/data/*.json`, `content/corrections.json`). Contract: `docs/CONTENT-SPEC.md` (FROZEN topic ids).
- `build/parse.py` verifies every `@check` (python, incl. `NB` = NusaBean RFM from `content/data/nusabean.json`) → fails build on any wrong number.
- `build/texcheck.js` renders every LaTeX string with KaTeX → fails build on parse error.
- `build/rfm.py` recomputes NusaBean RFM from raw Excel (`src_txt/rfm.json`) and diffs vs facilitator key.
- `src/*.js` + `style.css` (engine forked from ~/Code/busmath-prep/v2) → `build/build.py` inlines everything (KaTeX + fonts) into `out/index.html`.
- Rejected: framework/bundler (single offline file is the requirement), Netlify (credits).

## Commands
- Build + all checks: `uv run python build/build.py && node --check build/_app.js`
- Content only: `python3 build/parse.py`
- Local preview: `cd out && python3 -m http.server 8795` → http://127.0.0.1:8795/
- Deploy: push `out/` to branch `gh-pages` (see README).

## Conventions
- UI Indonesian, casual-clear; technical terms English. Every number traceable + `@check`ed.
- Slide/key errors are documented, not silently fixed (`content/corrections.json` + `@trap`).
- localStorage key `brandan.v1`.
