# Fréscopa — The Atelier

Standalone, self-contained copy of the "Atelier" homepage direction (warm editorial
flagship), forked from the multi-direction concept picker at
[`frescopa-homepage-concepts`](https://github.com/markszulc/frescopa-homepage-concepts)
on 2026-07-09 so it can be iterated on independently.

Type: **Schibsted Grotesk** (headlines) + **Hanken Grotesk** (body & labels).

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
frescopa-atelier/
├── index.html
├── atelier.css
├── server.mjs
├── shared/            # design system (tokens, reveal/header/nav/calendar JS, Flavour DNA, art-directed hero)
└── assets/            # only the images + logo variants this direction actually uses
```

## Notes

- Plain HTML, CSS, and vanilla JS — no build step, block-shaped markup for a
  mechanical lift into Adobe Edge Delivery Services.
- `shared/` here is a **local, independent copy** — it is not linked to the
  Craft & Current project or the original concept picker. Edit freely without
  affecting either.

---

*Fréscopa is a fictional brand created for demonstration purposes only.*
