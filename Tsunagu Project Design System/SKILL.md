---
name: tsunagu-design
description: Use this skill to generate well-branded interfaces and assets for つなぐProject (Tsunagu Project) — a bilingual (JP/EN), modern editorial brand for a near-60 PM working in finance IT, AI, and life-plan companionship. Use for production code or throwaway prototypes/mocks/decks.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Tokens:** `colors_and_type.css` — load it once at the top of any HTML you build.
- **Brand assets:** `assets/` (logo-mark, logo-wordmark, logo-lockup, favicon, hero-thread-field, marks/thread-divider, paper/night placeholders).
- **Components:** `ui_kits/marketing/` (marketing site), `ui_kits/note_reader/` (long-form article reader). Read the React JSX for component patterns; lift the markup directly when building.
- **Slides:** `slides/` — 1920×1080 templates using `deck-stage.js`.
- **Voice:** companion-mentor (伴走者). Calm, second-person, bilingual JP-primary / EN-secondary. No emoji in product UI. See README "Content fundamentals."
- **Visual signature:** dot-and-thread motif; warm washi paper background (`#f7f5f0`); deep indigo (`#0e1730`) and thread orange (`#d96b2c`) only; restrained radii; no gradients except the optional hero thread-field SVG.
