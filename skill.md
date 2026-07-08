# Fréscopa — Claude Skill
> Instructional reference for Claude when building websites, components, emails, documents, or any asset for the Fréscopa brand.
> Read this file alongside `design.md` before producing any Frescopa output.

---

## What is Frescopa?

Fréscopa is a **demo brand** — fictional, created for demonstration purposes. Any resemblance to a real company is coincidental.

It operates across two distinct arms:

**B2C** — Premium beverages (coffee, tea, fresh juices) and the artisan appliances that produce them, sold direct to consumers through retail and Frescopa Cafés.

**B2B** — End-to-end commercial beverage solutions for corporate offices, hospitality groups, cafés, restaurants, co-working spaces, and property developers. Covers equipment supply, consumables, fit-out consultancy, installation, servicing, and account management.

**The Frescopa Café** is the physical and conceptual bridge between both — part retail, part showroom, part community space.

---

## Before You Build

Always establish context first:

1. **Is this B2C or B2B?** Color, tone, and emphasis differ significantly between the two.
2. **What surface?** Web page, email, document, social post, presentation — each has different conventions.
3. **What section of the brand?** Positioning, product, café, business solutions — each has its own voice register.

If context is ambiguous, ask before proceeding.

---

## Brand Personality

> Warm and knowledgeable — the expert friend who makes premium feel earned, not exclusive.

The brand is **never** elitist, cold, or jargon-heavy. It is **never** bland, generic, or corporate. The sweet spot is confident warmth — like a knowledgeable friend who happens to know a lot about great coffee.

---

## Voice Rules

### Always

- Write in sentence case for headlines and body copy
- Use active voice
- Use serial commas (coffee, tea, and juices)
- Use ending punctuation on all sentences
- Keep sentences concise and impactful
- Evoke taste, warmth, ritual, and moment — but through feeling, not technical description
- Capitalise Fréscopa — it is a proper noun

### Never

- Use tasting-note jargon: "notes of blackcurrant", "bright acidity", "long finish"
- Use connoisseur language: "for the discerning palate", "true aficionados"
- Use corporate jargon: "leverage synergies", "end-to-end ecosystem", "scalable solutions"
- Use ALL CAPS CTAs longer than 3 letters: no "SHOP NOW", "FREE", "LIMITED TIME ONLY"
- Promote the skill level or experience of the drinker
- Repeat words within the same sentence or paragraph

### The Test

> Would I say this to a friend over a cup of coffee?
> If yes — on brand. If not — simplify.

---

## B2C Voice Register

Sensory, warm, inviting. Evokes the ritual and the pleasure of a great drink. Present tense, personal, conversational.

**Good examples:**
- "Start your morning with something special."
- "Real fruit. Real energy. Real good."
- "Brewed with care, shared with love."
- "Wake up to rich, smooth flavour — now in three new blends."
- "Fuel your day the natural way."

**Bad examples:**
- "Our artisanally crafted, micro-lot, third-wave coffee experience…"
- "For those who appreciate the finer things…"

---

## B2B Voice Register

Same warmth, but shifts to outcome-focused and relationship-led. Confident rather than playful. The expert friend becomes the expert partner. Still no jargon.

**Good examples:**
- "One partner. Machine, supply, and service — so your team never misses a great cup."
- "We'll handle everything from machine specification through to ongoing supply — so your team always has what they need, without the admin."
- "Most breakrooms settle for average. We think your team deserves better."
- "Your account is up for renewal next month. We'd love to talk through what's working."

**Bad examples:**
- "End-to-end synergistic beverage ecosystem solutions."
- "Leveraging our proprietary supply chain to maximise ROI."

### B2B Document Note

In formal B2B documents (proposals, contracts, service agreements), standard legal and contractual language is exempt from editorial tone guidelines. Apply brand voice to executive summaries, cover letters, and relationship-facing sections only. Never apply informal phrasing to pricing schedules, terms, or SLAs.

---

## Modern Classic Duality

All brand expressions must balance:

- **Classic Artisan**: quality, tradition, craftsmanship, elegance
- **Modern Innovator**: playfulness, convenience, accessibility, lifestyle

Neither should dominate. A page that is only elegant feels cold. A page that is only playful feels cheap. This applies to substantive messaging and visuals — not to short functional phrases like "Add to cart."

---

## Color Application

Always use CSS custom properties from `design.md`. Never hard-code hex values directly in new stylesheets — reference the tokens.

**B2C page or component:**
```css
/* Lead with Terracotta, background Cream */
background: var(--frescopa-color-background);
color: var(--frescopa-color-text);
accent: var(--frescopa-color-secondary); /* Terracotta */
```

**B2B page or component:**
```css
/* Lead with Teal, can use Charcoal background */
background: var(--frescopa-color-black); /* or background */
color: var(--frescopa-color-background);
accent: var(--frescopa-color-primary); /* Teal */
```

**Never:**
- Use Amber (`#EBA439`) for body text — it fails contrast on Cream
- Use Terracotta for body text — headlines only
- Introduce colors outside the defined palette

---

## Typography Application

- **Headlines**: always Playfair Display Bold — never DM Sans for headings
- **Italic Playfair**: use for brand promises, pull quotes, and key statements
- **Body**: always DM Sans Regular
- **Labels/eyebrows**: DM Mono, uppercase, wide letter-spacing
- **Never**: Arial, Inter, Roboto, system-ui, or any other typeface

Load from Google Fonts — see `design.md` for the import link.

---

## Logo Usage

- Use the SVG file (`Frescopa_Logotype.svg`) — never recreate the wordmark in text
- On light backgrounds: Burgundy wordmark, Amber beans
- On dark backgrounds: Cream wordmark, Amber beans
- Bean mark alone: only at small sizes or in established brand contexts (favicons, avatars)
- Never recreate, distort, recolor, or approximate the logo

---

## Layout Principles

- Generous whitespace — Frescopa breathes
- Max content width 1100px, centered
- Sections feel distinct and considered — not continuous scrolling noise
- Two-column layouts preferred over single-column walls of text
- Use flush 2px-gap panel grids for showcase content (color swatches, product cards)
- Use 20–24px gap card grids for informational content
- Dark sections (Charcoal) used deliberately for contrast — not as default

---

## Photography & Image Rules

Only use approved photography styles. When selecting or generating image prompts:

**Use:**
- Warm, natural light — golden hour ideal
- Relaxed, authentic people — not posed or model-like
- Outdoor café scenes, morning rituals, kitchen moments
- Warm color palette: browns, creams, ambers, terracottas
- For juice/energy: fresh greens, warm ambers, vibrant fruit

**Never use:**
- Cold, desaturated, or editorial-fashion tones
- Adventure, athletic, or outdoor utility contexts
- Staged stock-photo compositions
- Cluttered or busy backgrounds
- Harsh flash or studio lighting

**Reference images available in the repo:**
- `photo-cafe.jpeg` — Lifestyle, outdoor café, core brand ✓
- `photo-golden.jpeg` — Lifestyle, golden hour, hero-grade ✓
- `photo-mug.jpeg` — Still life, seasonal atmosphere, supporting use only ⚠

---

## What Frescopa Is Not

Never position Frescopa as:
- A budget or value brand
- A tech company (even though it sells appliances)
- An outdoor / adventure brand
- An exclusive luxury brand for experts only
- A coffee-only brand (tea and juices are equal pillars)

---

## Sections & Their Purpose

| Section | Purpose | Lead color |
|---|---|---|
| Positioning | Who Frescopa is | Terracotta |
| B2C | Consumer products and café experience | Terracotta |
| B2B | Business solutions | Teal |
| Flywheel | How B2C and B2B reinforce each other | Crimson |
| Logo & Identity | Visual identity rules | Neutral |
| Color | Palette and usage | Neutral |
| Typography | Font system | Neutral |
| Voice & Tone | How Frescopa speaks | Terracotta |
| Editorial | Writing rules | Neutral |
| Image Guidelines | Photography standards + examples | Neutral |
| Brand Values | Sustainability, Craftsmanship, Community, Inspiration, Quality | Crimson |
| Text Checks | QA checks for copy | Terracotta |
| Image Checks | QA checks for imagery | Teal |

---

## Audience Segments

### B2C
- Discerning home enthusiasts who value craftsmanship in their daily ritual
- Health-conscious consumers seeking premium, naturally sourced beverages
- Design-forward buyers who want appliances that perform and look beautiful
- Café culture lovers who want more than just a drink — they want a ritual

### B2B
- Enterprise & Corporate — investing in staff wellbeing and workplace culture
- Hospitality — hotels and venues where beverage quality reflects guest experience
- Food & Beverage Operators — cafés and restaurants seeking premium-aligned supply
- Property Developers — specifying beverage infrastructure into commercial builds
- Co-working Spaces — high-footfall, culture-conscious operators

---

## Brand Values (use these to inform tone and framing)

| Value | What it means in practice |
|---|---|
| Sustainability | Responsible sourcing, eco-friendly packaging — mention naturally where relevant |
| Craftsmanship | Meticulous detail, never cutting corners — earned quality, not claimed quality |
| Community | Bringing people together — in homes, workplaces, cafés |
| Inspiration | A great drink sparks a moment — lead with the feeling, not the product |
| Quality | Non-negotiable at every level — ingredients, appliances, experience |

---

## Common Mistakes to Avoid

| Mistake | Correct approach |
|---|---|
| Writing "SHOP NOW" on a CTA | Write "Shop now" |
| Using Amber text on Cream background | Use Burgundy or Charcoal for text |
| Describing coffee with tasting notes | Describe the feeling or the moment instead |
| Using a generic system font | Always load Playfair Display + DM Sans |
| Building a purely B2C page for a B2B audience | Switch lead color to Teal, adjust register |
| Positioning Frescopa as coffee-only | Always include tea and juices in product references |
| Making the brand feel exclusive | Make it feel earned — warm, not elitist |
| Using the logo as text | Always use the SVG file |

---

## Disclaimer

Fréscopa is a fictional demo brand created for demonstration purposes only. All names, logos, products, and brand materials are invented. Any resemblance to a real company, product, or brand is entirely coincidental and unintended.
