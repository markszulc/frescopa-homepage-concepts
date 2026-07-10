# Fréscopa — Craft & Current

Standalone, self-contained copy of the "Craft & Current" homepage direction (bold,
art-directed, drenched colour), forked from the multi-direction concept picker at
[`frescopa-homepage-concepts`](https://github.com/markszulc/frescopa-homepage-concepts)
on 2026-07-09 so it can be iterated on independently.

Type: **Figtree** — one family for headlines, body, and labels.

## View it

```bash
node server.mjs          # serves this folder at http://localhost:4173
```

Any static server works; `server.mjs` is a zero-dependency helper that serves
whatever folder it lives in.

## Structure

Everything this direction needs lives inside this folder — no dependency on
a sibling `shared/` or `assets/` folder elsewhere.

```
frescopa-craft-current/
├── index.html         # homepage — "Every morning, perfected."
├── atelier.html       # Atelier product detail page (PDP)
├── craft.css
├── pdp.css            # PDP-only layout, additive; reuses the shared tokens + craft.css
├── pdp.js             # PDP interactions (gallery, finish, quantity, add-to-cart, step switcher)
├── server.mjs
├── shared/            # design system (tokens, reveal/header/nav/calendar JS, Flavour DNA)
└── assets/            # only the images, logo, and video this direction actually uses
```

The Atelier PDP keeps every section from the "customer journey" design export
(gallery, buy box, how-it-works, specifications, Flavour DNA, reviews, FAQ,
bundles) but is rebuilt entirely on this direction's own tokens and primitives,
so it reads as one system with `index.html`.

## Notes

- Plain HTML, CSS, and vanilla JS — no build step, block-shaped markup for a
  mechanical lift into Adobe Edge Delivery Services.
- `shared/` here is a **local, independent copy** — it is not linked to the
  Atelier project or the original concept picker. Edit freely without
  affecting either.
- Includes the hover-to-play (desktop) / autoplay (mobile) dial video under
  `assets/video/dialcloseup.mp4`.

---

*Fréscopa is a fictional brand created for demonstration purposes only.*
