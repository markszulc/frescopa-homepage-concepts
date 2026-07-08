# Fréscopa — Home page concepts

Three home page directions for the **Fréscopa Atelier** (the coffee machine that learns
your taste and reads your mornings), built on **one fresh design system**. The concept
across all three: *ritual meets intelligence* — barista craft with a warm, quiet
intelligence, never cold tech.

Everything is plain **HTML, CSS, and vanilla JavaScript** with no build step, structured
so it lifts cleanly into **Adobe Edge Delivery Services**.

## The three directions

| # | Name | Mood |
|---|------|------|
| 01 | **The Atelier** | Warm editorial flagship. Golden light, generous space, the machine as hero. |
| 02 | **Quiet Ritual** | Gallery minimal. Restraint and air, photography framed like prints. |
| 03 | **Craft & Current** | Bold and art-directed. Oversized type, drenched colour, expressive. |

## View it

```bash
node server.mjs          # serves the folder at http://localhost:4173
```

Open `http://localhost:4173/` for the concept picker, then jump into any direction. (Any
static server works; `server.mjs` is a zero-dependency helper.)

## Structure

```
homepage/
├── index.html              # concept picker ("cover") + design-system overview
├── index.css
├── server.mjs              # zero-dependency static preview server
├── shared/                 # THE design system — shared by all three directions
│   ├── tokens.css          # OKLCH colour, type scale, spacing, motion, primitives
│   ├── app.js              # reveal-on-scroll, header, mobile nav, mood calendar, parallax
│   └── flavor-dna.js       # the Flavour DNA radar (SVG, morphs between taste profiles)
├── directions/
│   ├── 01-atelier/         { index.html, atelier.css }
│   ├── 02-quiet-ritual/    { index.html, ritual.css }
│   └── 03-craft-current/   { index.html, craft.css }
└── assets/
    ├── frescopa-logo.svg        # burgundy wordmark + amber beans (light backgrounds)
    ├── frescopa-logo-light.svg  # cream wordmark + amber beans (dark backgrounds)
    └── images/                  # warm, golden-hour brand photography
```

## The design system (`shared/tokens.css`)

- **Colour** — warm OKLCH palette grounded in the real brand: Burgundy `#58181d` (headlines,
  brand), Terracotta (B2C lead accent), Amber `#eaa33a` (detail, never body text), a range of
  warm creams, and a warm Charcoal for deliberate dark moments. Neutrals are tinted toward the
  brand hue; no pure black or white.
- **Type** — Playfair Display (headlines, italic for brand promises), DM Sans (body),
  DM Mono (eyebrows and labels), per the Fréscopa brand guide.
- **Primitives** — `.container`, `.eyebrow`, `.btn` (+ variants), `.link`, `.reveal`,
  `.skip-link`. Each direction layers its own art direction on top, scoped by a body class
  (`.atelier`, `.ritual`, `.craft`).

## Signature interactions (vanilla JS)

- **Flavour DNA** (`flavor-dna.js`) — a hand-built SVG radar that blooms in on scroll and
  morphs between taste profiles (Weekday, Slow Sunday, After dinner). Geometry is drawn in JS;
  colour is set per direction through CSS custom properties.
- **Mood-aware calendar** (`app.js`) — tapping a day updates the suggested brew, illustrating
  how the Atelier reads the week ahead.

## Imagery

The photography was generated to match Fréscopa's rules (warm natural light, authentic
morning-ritual moments, browns / creams / ambers / terracottas) and optimised for the web.
Swap in approved brand shots by replacing the files in `assets/images/` (same names).

## Mapping to Edge Delivery Services

The markup is intentionally block-shaped, so porting is mechanical:

- **Tokens → `styles/styles.css`** — drop `shared/tokens.css` into the global styles so every
  block inherits the system.
- **Sections → blocks** — each `<section class="hero|learn|mood|feed|…">` maps to an EDS block
  (`blocks/hero/hero.css` + `hero.js`, etc.). The CSS is already partitioned by section.
- **Shared behaviours → block JS or `scripts/`** — `flavor-dna.js` becomes the `flavour-dna`
  block's decorator; the reveal / header / nav / calendar helpers in `app.js` split across the
  relevant blocks or a shared `scripts/scripts.js`.
- **Content authoring** — headings, copy, and image references come straight from a Google
  Doc / Word table; the `data-*` hooks (`data-flavor-dna`, `data-calendar`, `data-day`) are the
  only wiring the block JS needs.
- **Progressive enhancement** — everything renders without JavaScript; the scripts only add
  motion and interaction, matching EDS conventions.

## Brand notes

Copy follows the Fréscopa voice: sentence case, warm and conversational, serial commas, no
tasting-note jargon, no all-caps CTAs. Coffee, tea, and cold-pressed juice appear as equal
pillars. The "intelligence" is always framed as a warm, barista-like helper, never as a cold
operating system, because Fréscopa is a warm premium brand, not a tech company.

---

*Fréscopa is a fictional brand created for demonstration purposes only. Any resemblance to a
real company, product, or brand is coincidental.*
