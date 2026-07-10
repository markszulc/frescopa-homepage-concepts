/* @ds-bundle: {"format":4,"namespace":"FrScopaDesignSystem_406815","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"FLAVOUR_PROFILES","sourcePath":"components/brand/FlavourDNA.jsx"},{"name":"FlavourDNA","sourcePath":"components/brand/FlavourDNA.jsx"},{"name":"ProductCard","sourcePath":"components/cards/ProductCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Badge","sourcePath":"components/labels/Badge.jsx"},{"name":"Chip","sourcePath":"components/labels/Chip.jsx"},{"name":"ChipGroup","sourcePath":"components/labels/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/labels/Eyebrow.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"084ad1b9d6e2","components/actions/IconButton.jsx":"154acb5360cc","components/actions/TextLink.jsx":"8b4d105d0521","components/brand/FlavourDNA.jsx":"00aea219efb7","components/cards/ProductCard.jsx":"179035309e4b","components/forms/Input.jsx":"3a9779e44e34","components/labels/Badge.jsx":"4c0f3d49c22a","components/labels/Chip.jsx":"edb76015f184","components/labels/Eyebrow.jsx":"b5982d473118","components/navigation/SiteFooter.jsx":"9c7f03f20861","components/navigation/SiteHeader.jsx":"45351f8ae371","ui_kits/marketing-site/App.jsx":"23989c7fd6fe","ui_kits/marketing-site/Sections.jsx":"3dcc53c9a5dc","ui_kits/marketing-site/behaviors.jsx":"37d6fa3a25ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FrScopaDesignSystem_406815 = window.FrScopaDesignSystem_406815 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fréscopa primary action. Pill-shaped, warm fills, a 2px lift on hover
 * and an optional animated arrow. Renders as <a> when `href` is given,
 * otherwise <button>.
 */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.textContent = `
.fr-btn {
  --_bg: var(--burgundy); --_fg: var(--cream);
  display: inline-flex; align-items: center; gap: 0.6em;
  padding: 0.95em 1.6em;
  font-family: var(--font-body); font-size: var(--fs-sm); font-weight: 600;
  letter-spacing: 0.005em; line-height: 1;
  color: var(--_fg); background: var(--_bg);
  border: 1px solid transparent; border-radius: var(--r-pill);
  transition: transform var(--dur-1) var(--ease-quint),
              background-color var(--dur-1) var(--ease-quint),
              box-shadow var(--dur-1) var(--ease-quint),
              color var(--dur-1) var(--ease-quint),
              border-color var(--dur-1) var(--ease-quint);
  will-change: transform;
}
.fr-btn .fr-btn__arrow { transition: transform var(--dur-1) var(--ease-quint); }
.fr-btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.fr-btn:hover .fr-btn__arrow { transform: translateX(3px); }
.fr-btn:active { transform: translateY(0); }
.fr-btn:disabled, .fr-btn[aria-disabled="true"] { opacity: 0.45; pointer-events: none; box-shadow: none; }

.fr-btn--primary { --_bg: var(--burgundy); --_fg: var(--cream); }
.fr-btn--primary:hover { --_bg: var(--burgundy-deep); }
.fr-btn--terracotta { --_bg: var(--terracotta); --_fg: var(--cream); }
.fr-btn--terracotta:hover { --_bg: var(--terracotta-deep); }
.fr-btn--cream { --_bg: var(--paper); --_fg: var(--burgundy); box-shadow: var(--shadow-sm); }
.fr-btn--cream:hover { --_bg: #fff; }
.fr-btn--ghost {
  --_fg: currentColor; background: transparent;
  border-color: color-mix(in oklch, currentColor 32%, transparent);
}
.fr-btn--ghost:hover {
  background: color-mix(in oklch, currentColor 8%, transparent);
  box-shadow: none; border-color: color-mix(in oklch, currentColor 55%, transparent);
}`;
  document.head.appendChild(el);
}
function Button({
  children,
  variant = "primary",
  arrow = false,
  href,
  disabled = false,
  className = "",
  ...rest
}) {
  useStyles();
  const cls = `fr-btn fr-btn--${variant} ${className}`.trim();
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("span", {
    className: "fr-btn__arrow",
    "aria-hidden": "true"
  }, "\u2192"));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon button used in the header utility row (search, account,
 * cart). 40px hit target; a soft currentColor wash on hover.
 */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.textContent = `
.fr-iconbtn {
  display: inline-grid; place-items: center; width: 40px; height: 40px;
  border-radius: 50%; color: inherit; flex-shrink: 0;
  transition: background-color var(--dur-1) var(--ease-quint);
}
.fr-iconbtn:hover { background: color-mix(in oklch, currentColor 12%, transparent); }
.fr-iconbtn:disabled { opacity: 0.4; pointer-events: none; }`;
  document.head.appendChild(el);
}
function IconButton({
  children,
  label,
  className = "",
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `fr-iconbtn ${className}`.trim(),
    "aria-label": label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Terracotta text link with an animated underline that wipes in on hover,
 * and an optional arrow. Used inline in body copy and card footers.
 */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.textContent = `
.fr-link {
  color: var(--terracotta); font-weight: 600;
  display: inline-flex; align-items: center; gap: 0.45em;
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 0% 1.5px; background-position: 0 100%; background-repeat: no-repeat;
  transition: background-size var(--dur-2) var(--ease-quint), color var(--dur-1) var(--ease-quint);
  padding-bottom: 2px; cursor: pointer;
}
.fr-link:hover { background-size: 100% 1.5px; color: var(--terracotta); }
.fr-link--sm { font-size: 0.85rem; }
.fr-link .fr-link__arrow { transition: transform var(--dur-1) var(--ease-quint); }
.fr-link:hover .fr-link__arrow { transform: translateX(3px); }`;
  document.head.appendChild(el);
}
function TextLink({
  children,
  href = "#",
  arrow = false,
  size = "md",
  as,
  className = "",
  ...rest
}) {
  useStyles();
  const Tag = as || (href ? "a" : "button");
  const cls = `fr-link ${size === "sm" ? "fr-link--sm" : ""} ${className}`.trim();
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, Tag === "a" ? {
    href
  } : {}, rest), children, arrow && /*#__PURE__*/React.createElement("span", {
    className: "fr-link__arrow",
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input — pill-shaped, warm. `light` for forms on paper surfaces;
 * `dark` matches the footer signup field (charcoal fill, amber focus).
 */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.textContent = `
.fr-input {
  width: 100%; border-radius: var(--r-pill);
  padding: 0.85em 1.25em; border: 1px solid var(--line);
  background: var(--paper); color: var(--ink);
  transition: border-color var(--dur-1) var(--ease-quint), box-shadow var(--dur-1) var(--ease-quint);
}
.fr-input::placeholder { color: color-mix(in oklch, var(--ink-soft) 65%, transparent); }
.fr-input:focus-visible { outline: none; border-color: var(--terracotta); box-shadow: 0 0 0 3px color-mix(in oklch, var(--terracotta) 22%, transparent); }
.fr-input--dark { background: var(--charcoal-2); border-color: var(--line-dark); color: var(--cream); }
.fr-input--dark::placeholder { color: color-mix(in oklch, var(--cream-soft) 70%, transparent); }
.fr-input--dark:focus-visible { border-color: var(--amber); box-shadow: 0 0 0 3px color-mix(in oklch, var(--amber) 28%, transparent); }`;
  document.head.appendChild(el);
}
function Input({
  tone = "light",
  type = "text",
  className = "",
  ...rest
}) {
  useStyles();
  const cls = `fr-input ${tone === "dark" ? "fr-input--dark" : ""} ${className}`.trim();
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    className: cls
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/labels/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small tag that labels a single object — a product category over imagery,
 * or a brew style on a warm wash. Uppercase, tracked micro-copy.
 */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.textContent = `
.fr-badge {
  display: inline-flex; align-items: center;
  font-family: var(--font-mono); font-size: 0.66rem; text-transform: uppercase;
  letter-spacing: 0.12em; padding: 0.4em 0.75em; border-radius: var(--r-pill);
}
.fr-badge--overlay {
  background: color-mix(in oklch, var(--paper) 92%, transparent);
  -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
  color: var(--burgundy);
}
.fr-badge--amber {
  background: color-mix(in oklch, var(--amber) 22%, var(--paper));
  color: var(--terracotta-deep); letter-spacing: 0.14em;
}
.fr-badge--burgundy { background: var(--burgundy); color: var(--cream); }`;
  document.head.appendChild(el);
}
function Badge({
  children,
  variant = "overlay",
  className = "",
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `fr-badge fr-badge--${variant} ${className}`.trim()
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Badge.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Product card — the unit of the "for you" feed. Photo with a category
 * badge, title, note, and a price/add-to-cart footer. Media zooms and the
 * card lifts on hover.
 */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.textContent = `
.fr-card {
  background: var(--surface-card); border: 1px solid var(--line);
  border-radius: var(--r-lg); overflow: hidden;
  display: flex; flex-direction: column;
  transition: transform var(--dur-2) var(--ease-quint), box-shadow var(--dur-2) var(--ease-quint);
}
.fr-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); }
.fr-card__media { position: relative; aspect-ratio: 4 / 3; overflow: hidden; }
.fr-card__media img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s var(--ease-quint); }
.fr-card:hover .fr-card__media img { transform: scale(1.06); }
.fr-card__cat { position: absolute; top: 0.85rem; left: 0.85rem; }
.fr-card__body { padding: 1.3rem 1.4rem 1.4rem; display: flex; flex-direction: column; gap: 0.5rem; flex: 1; }
.fr-card__title { font-family: var(--font-display); font-size: 1.5rem; color: var(--burgundy); font-weight: 700; line-height: 1.15; }
.fr-card__note { color: var(--ink-soft); font-size: 0.94rem; flex: 1; }
.fr-card__foot {
  display: flex; align-items: center; justify-content: space-between;
  margin-top: 0.7rem; padding-top: 0.9rem; border-top: 1px solid var(--line);
}
.fr-card__price { font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; color: var(--ink); }`;
  document.head.appendChild(el);
}
function ProductCard({
  image,
  imageAlt = "",
  category,
  title,
  note,
  price,
  action = "Add to cart",
  onAction,
  className = "",
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("article", _extends({
    className: `fr-card ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "fr-card__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    loading: "lazy"
  }), category && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "overlay",
    className: "fr-card__cat"
  }, category)), /*#__PURE__*/React.createElement("div", {
    className: "fr-card__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "fr-card__title"
  }, title), note && /*#__PURE__*/React.createElement("p", {
    className: "fr-card__note"
  }, note), /*#__PURE__*/React.createElement("div", {
    className: "fr-card__foot"
  }, price != null && /*#__PURE__*/React.createElement("span", {
    className: "fr-card__price"
  }, price), action && /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    as: "button",
    size: "sm",
    arrow: true,
    onClick: onAction
  }, action))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/labels/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Static feature chip — a pill of tracked, uppercase micro-copy on a raised
 * sand surface. Used in clusters (sustainability claims, spec highlights).
 */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.textContent = `
.fr-chip {
  font-family: var(--font-mono); font-size: 0.74rem; text-transform: uppercase;
  letter-spacing: 0.06em; color: var(--burgundy);
  background: var(--paper-2); border: 1px solid var(--line);
  padding: 0.55em 0.95em; border-radius: var(--r-pill);
  display: inline-flex; align-items: center;
}
.fr-chips { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 0.6rem; }`;
  document.head.appendChild(el);
}
function Chip({
  children,
  className = "",
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("li", _extends({
    className: `fr-chip ${className}`.trim()
  }, rest), children);
}

/** Convenience flex list wrapper for a row of <Chip>s. */
function ChipGroup({
  children,
  className = "",
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: `fr-chips ${className}`.trim()
  }, rest), children);
}
Object.assign(__ds_scope, { Chip, ChipGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Chip.jsx", error: String((e && e.message) || e) }); }

// components/labels/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kicker / section label. Uppercase, tracked, terracotta, preceded by a
 * short hairline. The signature way every Fréscopa section opens.
 */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.textContent = `
.fr-eyebrow {
  font-family: var(--font-mono); font-size: var(--fs-eyebrow); font-weight: 500;
  letter-spacing: var(--tracking-eyebrow); text-transform: uppercase;
  color: var(--terracotta); display: inline-flex; align-items: center; gap: 0.7em;
}
.fr-eyebrow::before {
  content: ""; width: 1.6em; height: 1px; background: currentColor; opacity: 0.5;
}
.fr-eyebrow--plain::before { display: none; }
.fr-eyebrow--light { color: var(--amber); }`;
  document.head.appendChild(el);
}
function Eyebrow({
  children,
  tone = "terracotta",
  rule = true,
  className = "",
  ...rest
}) {
  useStyles();
  const cls = ["fr-eyebrow", tone === "light" ? "fr-eyebrow--light" : "", rule ? "" : "fr-eyebrow--plain", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("p", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/FlavourDNA.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flavour DNA — the brand's signature data viz. A hand-drawn SVG radar
 * across six taste axes that morphs between taste profiles. Colour comes
 * from CSS custom properties so it sits in any Fréscopa surface.
 */

const AXES = ["Strength", "Body", "Sweetness", "Smoothness", "Warmth", "Crema"];
const FLAVOUR_PROFILES = {
  weekday: {
    label: "Weekday",
    title: "The weekday cup",
    note: "Brisk and a little bolder. Enough to meet the day, never so much it rushes you.",
    values: [0.92, 0.62, 0.34, 0.5, 0.66, 0.82]
  },
  sunday: {
    label: "Slow Sunday",
    title: "The slow Sunday",
    note: "Softer and rounder, made for lingering. It knows there is nowhere you need to be.",
    values: [0.58, 0.8, 0.6, 0.88, 0.84, 0.62]
  },
  evening: {
    label: "After dinner",
    title: "The after-dinner cup",
    note: "Gentle and sweet, half the strength. A quiet close to the evening, not a second start.",
    values: [0.34, 0.7, 0.78, 0.74, 0.9, 0.5]
  }
};
const SIZE = 420,
  CX = 210,
  CY = 206,
  R = 138,
  TAU = Math.PI * 2;
const angleFor = i => -Math.PI / 2 + i / AXES.length * TAU;
const pointAt = (i, v) => [CX + Math.cos(angleFor(i)) * R * v, CY + Math.sin(angleFor(i)) * R * v];
const polygonPath = vals => vals.map((v, i) => {
  const p = pointAt(i, v);
  return (i === 0 ? "M" : "L") + p[0].toFixed(2) + " " + p[1].toFixed(2);
}).join(" ") + " Z";
const easeExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.textContent = `
.fr-dna {
  --dna-grid: color-mix(in oklch, var(--burgundy) 12%, transparent);
  --dna-axis: color-mix(in oklch, var(--burgundy) 16%, transparent);
  --dna-label: var(--ink-soft);
  --dna-fill: color-mix(in oklch, var(--terracotta) 22%, transparent);
  --dna-stroke: var(--terracotta);
  --dna-dot: var(--burgundy);
  --dna-dot-ring: var(--paper);
}
.fr-dna__frame {
  position: relative; background: var(--paper); border: 1px solid var(--line);
  border-radius: var(--r-xl); padding: clamp(1.2rem,3vw,2rem) clamp(1.2rem,3vw,2rem) 1.4rem;
  box-shadow: var(--shadow-md);
}
.fr-dna__frame::before {
  content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
  background: radial-gradient(120% 90% at 50% 0%, color-mix(in oklch, var(--amber) 12%, transparent), transparent 60%);
}
.fr-dna svg { width: 100%; height: auto; max-width: 460px; margin-inline: auto; display: block; position: relative; }
.fr-dna text.fr-dna__label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.04em; text-transform: uppercase; }
.fr-dna__readout { text-align: center; margin-top: 0.3rem; min-height: 4.6rem; }
.fr-dna__readout h4 { color: var(--burgundy); font-size: var(--fs-h4); font-family: var(--font-display); }
.fr-dna__readout p { color: var(--ink-soft); font-size: 0.92rem; max-width: 34ch; margin: 0.4rem auto 0; }
.fr-dna__controls { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; margin-top: 1.2rem; }
.fr-dna__btn {
  font-family: var(--font-mono); font-size: 0.74rem; letter-spacing: 0.06em; text-transform: uppercase;
  padding: 0.6em 1.05em; border-radius: var(--r-pill); border: 1px solid var(--line);
  color: var(--ink-soft); background: var(--paper); cursor: pointer;
  transition: color var(--dur-2) var(--ease-quint), background-color var(--dur-2) var(--ease-quint), border-color var(--dur-2) var(--ease-quint);
}
.fr-dna__btn:hover { border-color: var(--terracotta); color: var(--terracotta); }
.fr-dna__btn.is-active { background: var(--burgundy); color: var(--cream); border-color: var(--burgundy); }`;
  document.head.appendChild(el);
}
function FlavourDNA({
  defaultProfile = "weekday",
  autocycle = false,
  className = "",
  ...rest
}) {
  useStyles();
  const order = Object.keys(FLAVOUR_PROFILES);
  const [active, setActive] = React.useState(defaultProfile);
  const [values, setValues] = React.useState([0, 0, 0, 0, 0, 0]);
  const raf = React.useRef(0);
  const from = React.useRef([0, 0, 0, 0, 0, 0]);
  const userTook = React.useRef(false);
  const rootRef = React.useRef(null);
  const pick = key => {
    userTook.current = true;
    setActive(key);
  };
  React.useEffect(() => {
    const target = FLAVOUR_PROFILES[active].values;
    const start = performance.now();
    const dur = 820;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValues(target);
      from.current = target.slice();
      return;
    }
    const step = now => {
      const t = Math.min(1, (now - start) / dur);
      const e = easeExpo(t);
      const cur = target.map((v, i) => from.current[i] + (v - from.current[i]) * e);
      setValues(cur);
      if (t < 1) raf.current = requestAnimationFrame(step);else from.current = target.slice();
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [active]);

  // Optional auto-demo: loop profiles every ~3s until the user takes over,
  // and only while on screen. Respects reduced-motion.
  React.useEffect(() => {
    if (!autocycle) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer = null;
    const tick = () => {
      timer = setTimeout(() => {
        if (!userTook.current) {
          setActive(cur => order[(order.indexOf(cur) + 1) % order.length]);
          tick();
        }
      }, 3000);
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !userTook.current && !timer) tick();
      });
    }, {
      threshold: 0.3
    });
    if (rootRef.current) io.observe(rootRef.current);
    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [autocycle]);
  const p = FLAVOUR_PROFILES[active];
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: rootRef,
    className: `fr-dna ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "fr-dna__frame"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${SIZE} ${SIZE}`,
    role: "img",
    "aria-label": "Flavour profile radar showing six taste dimensions."
  }, /*#__PURE__*/React.createElement("g", null, [0.25, 0.5, 0.75, 1].map(ring => /*#__PURE__*/React.createElement("polygon", {
    key: ring,
    points: AXES.map((_, i) => {
      const pt = pointAt(i, ring);
      return pt[0].toFixed(1) + "," + pt[1].toFixed(1);
    }).join(" "),
    fill: "none",
    stroke: "var(--dna-grid)",
    strokeWidth: ring === 1 ? 1.4 : 1
  }))), /*#__PURE__*/React.createElement("g", null, AXES.map((axis, i) => {
    const end = pointAt(i, 1);
    const a = angleFor(i);
    const lx = CX + Math.cos(a) * (R + 26);
    const ly = CY + Math.sin(a) * (R + 26);
    const anchor = Math.abs(Math.cos(a)) < 0.3 ? "middle" : Math.cos(a) > 0 ? "start" : "end";
    return /*#__PURE__*/React.createElement("g", {
      key: axis
    }, /*#__PURE__*/React.createElement("line", {
      x1: CX,
      y1: CY,
      x2: end[0].toFixed(1),
      y2: end[1].toFixed(1),
      stroke: "var(--dna-axis)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: lx.toFixed(1),
      y: ly.toFixed(1),
      textAnchor: anchor,
      dominantBaseline: "middle",
      className: "fr-dna__label",
      fill: "var(--dna-label)"
    }, axis));
  })), /*#__PURE__*/React.createElement("path", {
    d: polygonPath(values),
    fill: "var(--dna-fill)",
    stroke: "var(--dna-stroke)",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), values.map((v, i) => {
    const pt = pointAt(i, v);
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      r: "3.6",
      cx: pt[0].toFixed(2),
      cy: pt[1].toFixed(2),
      fill: "var(--dna-dot)",
      stroke: "var(--dna-dot-ring)",
      strokeWidth: "2"
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "fr-dna__readout"
  }, /*#__PURE__*/React.createElement("h4", null, p.title), /*#__PURE__*/React.createElement("p", null, p.note))), /*#__PURE__*/React.createElement("div", {
    className: "fr-dna__controls",
    role: "group",
    "aria-label": "Choose a taste profile"
  }, order.map(key => /*#__PURE__*/React.createElement("button", {
    key: key,
    type: "button",
    className: `fr-dna__btn ${key === active ? "is-active" : ""}`,
    "aria-pressed": key === active,
    onClick: () => pick(key)
  }, FLAVOUR_PROFILES[key].label))));
}
Object.assign(__ds_scope, { FLAVOUR_PROFILES, FlavourDNA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FlavourDNA.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fréscopa site footer — the dark charcoal chrome that closes every page.
 * Brand column with an email signup, link columns, and a social + legal row.
 * Self-contained: injects its own styles and composes Input + Button.
 */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.textContent = `
.fr-ftr { background: var(--charcoal); color: var(--cream-soft); padding-top: clamp(3.5rem, 6vw, 5.5rem); }
.fr-ftr__inner, .fr-ftr__legal { width: 100%; max-width: var(--content); margin-inline: auto; padding-inline: var(--gutter); }
.fr-ftr__inner { display: grid; grid-template-columns: 1.3fr 2fr; gap: clamp(2rem, 6vw, 5rem); padding-bottom: 3rem; }
.fr-ftr__logo { height: 38px; width: auto; margin-bottom: 1.3rem; }
.fr-ftr__wordmark { font-family: var(--font-display); font-weight: 800; font-size: 1.6rem; color: var(--cream); display: block; margin-bottom: 1.1rem; }
.fr-ftr__tag { color: var(--cream-soft); font-size: 0.95rem; max-width: 42ch; }
.fr-ftr__signup { margin-top: 1.9rem; }
.fr-ftr__signup-label { display: block; font-family: var(--font-display); font-size: 1.2rem; color: var(--cream); margin-bottom: 0.8rem; }
.fr-ftr__signup-row { display: flex; gap: 0.6rem; flex-wrap: wrap; }
.fr-ftr__signup-row > :first-child { flex: 1; min-width: 190px; }
.fr-ftr__cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.fr-ftr__col h3 { font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.14em; color: var(--amber); margin-bottom: 1rem; font-weight: 500; }
.fr-ftr__col a { display: block; color: var(--cream-soft); padding: 0.36rem 0; font-size: 0.95rem; transition: color var(--dur-1); }
.fr-ftr__col a:hover { color: var(--cream); }
.fr-ftr__legal { border-top: 1px solid var(--line-dark); padding-block: 1.5rem 2rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
.fr-ftr__social { display: flex; gap: 0.7rem; }
.fr-ftr__social a { display: inline-grid; place-items: center; width: 38px; height: 38px; border-radius: 50%; color: var(--cream-soft); border: 1px solid var(--line-dark); transition: color var(--dur-1), border-color var(--dur-1); }
.fr-ftr__social a:hover { color: var(--amber); border-color: var(--amber); }
.fr-ftr__meta { font-size: 0.8rem; color: var(--cream-soft); opacity: 0.85; }
@media (max-width: 980px) { .fr-ftr__inner { grid-template-columns: 1fr; gap: 2.5rem; } }
@media (max-width: 560px) { .fr-ftr__cols { grid-template-columns: 1fr 1fr; } }`;
  document.head.appendChild(el);
}
const DEFAULT_COLUMNS = [{
  title: "Shop",
  links: ["Coffee", "Tea", "Cold-pressed juice", "Machines", "Accessories"]
}, {
  title: "Company",
  links: ["Our story", "Sustainability", "Fréscopa Café", "Careers"]
}, {
  title: "Support",
  links: ["Contact us", "Delivery & returns", "Register your Atelier", "Help centre"]
}];
const SOCIAL = {
  Instagram: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3.5",
    y: "3.5",
    width: "17",
    height: "17",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "7",
    r: "1",
    fill: "currentColor",
    stroke: "none"
  })),
  Pinterest: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8c-2 0-3 1.4-3 3 0 1 .5 2 1.3 2.4M12 8c1.8 0 3 1.1 3 2.8 0 2-1.2 3.4-2.8 3.4-.8 0-1.4-.5-1.2-1.3l.6-2.4M10.8 17l1-4",
    strokeLinecap: "round"
  })),
  YouTube: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "6",
    width: "18",
    height: "12",
    rx: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m10 9 5 3-5 3V9Z",
    fill: "currentColor",
    stroke: "none"
  }))
};
function SiteFooter({
  columns = DEFAULT_COLUMNS,
  tagline = "Warm mornings, made effortless. Coffee, tea, and cold-pressed juice, and the machines that make them sing.",
  logoLight,
  signupLabel = "A little warmth in your inbox.",
  onSignup,
  meta = "© 2026 Fréscopa · Privacy · Terms · A fictional brand, created for demonstration.",
  className = "",
  ...rest
}) {
  useStyles();
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    if (onSignup) onSignup(email);
  };
  const linkOf = l => typeof l === "string" ? {
    label: l,
    href: "#"
  } : l;
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: `fr-ftr ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "fr-ftr__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr-ftr__brand"
  }, logoLight ? /*#__PURE__*/React.createElement("img", {
    className: "fr-ftr__logo",
    src: logoLight,
    alt: "Fr\xE9scopa",
    width: "168",
    height: "45"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "fr-ftr__wordmark"
  }, "Fr\xE9scopa"), /*#__PURE__*/React.createElement("p", {
    className: "fr-ftr__tag"
  }, tagline), /*#__PURE__*/React.createElement("form", {
    className: "fr-ftr__signup",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("label", {
    className: "fr-ftr__signup-label",
    htmlFor: "fr-ftr-email"
  }, done ? "Thanks — see you in the inbox." : signupLabel), !done && /*#__PURE__*/React.createElement("div", {
    className: "fr-ftr__signup-row"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "fr-ftr-email",
    tone: "dark",
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "cream",
    type: "submit"
  }, "Sign up")))), /*#__PURE__*/React.createElement("nav", {
    className: "fr-ftr__cols",
    "aria-label": "Footer"
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    className: "fr-ftr__col",
    key: col.title
  }, /*#__PURE__*/React.createElement("h3", null, col.title), col.links.map(l => {
    const lk = linkOf(l);
    return /*#__PURE__*/React.createElement("a", {
      href: lk.href,
      key: lk.label
    }, lk.label);
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "fr-ftr__legal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr-ftr__social"
  }, Object.entries(SOCIAL).map(([name, path]) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": name,
    key: name
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, path)))), /*#__PURE__*/React.createElement("p", {
    className: "fr-ftr__meta"
  }, meta)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Fréscopa site header — the top navigation chrome used on every page.
 * Sticky; transparent over hero media, turns to a blurred paper bar once
 * scrolled. Includes the utility icon row (search / account / cart with a
 * live count) and a mobile nav drawer (hamburger → X, slide-in panel).
 * Self-contained: injects its own styles and composes IconButton.
 */

let injected = false;
function useStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.textContent = `
.fr-hdr { position: fixed; top: 0; left: 0; right: 0; z-index: 100; color: var(--cream);
  transition: background-color var(--dur-2) var(--ease-quint), color var(--dur-2) var(--ease-quint), box-shadow var(--dur-2) var(--ease-quint); }
.fr-hdr__inner { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; padding-block: 1.1rem;
  width: 100%; max-width: var(--content); margin-inline: auto; padding-inline: var(--gutter); }
.fr-hdr.is-scrolled { background: color-mix(in oklch, var(--paper) 90%, transparent);
  -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); color: var(--ink); box-shadow: 0 1px 0 var(--line), var(--shadow-sm); }
.fr-hdr__brand { display: block; line-height: 0; position: relative; color: inherit; }
.fr-hdr__logo { height: 30px; width: auto; transition: opacity var(--dur-2) var(--ease-quint); }
.fr-hdr__logo--dark { position: absolute; inset: 0; opacity: 0; }
.fr-hdr.is-scrolled .fr-hdr__logo--light { opacity: 0; }
.fr-hdr.is-scrolled .fr-hdr__logo--dark { opacity: 1; }
.fr-hdr__wordmark { font-family: var(--font-display); font-weight: 800; font-size: 1.5rem; letter-spacing: -0.02em; color: inherit; }
.fr-hdr__nav { display: flex; align-items: center; gap: clamp(1.1rem, 2vw, 2.4rem); }
.fr-hdr__nav a { font-size: 0.95rem; font-weight: 500; color: inherit; position: relative; padding: 0.2rem 0; }
.fr-hdr__nav a::after { content: ""; position: absolute; left: 0; bottom: -2px; height: 1.5px; width: 0; background: currentColor; transition: width var(--dur-2) var(--ease-quint); }
.fr-hdr__nav a:hover::after, .fr-hdr__nav a.is-active::after { width: 100%; }
.fr-hdr__utils { display: flex; align-items: center; gap: 0.35rem; }
.fr-hdr__cart-wrap { display: flex; align-items: flex-start; }
.fr-hdr__cart-count { font-family: var(--font-mono); font-size: 0.6rem; font-weight: 700; background: var(--terracotta); color: var(--cream); border-radius: var(--r-pill); min-width: 16px; height: 16px; display: inline-grid; place-items: center; padding: 0 4px; margin-left: -6px; margin-top: -14px; }
.fr-hdr__toggle { display: none; width: 42px; height: 42px; border-radius: 50%; position: relative; color: inherit; background: none; border: none; cursor: pointer; }
.fr-hdr__toggle span { position: absolute; left: 11px; width: 20px; height: 1.8px; background: currentColor; border-radius: 2px; transition: transform var(--dur-1) var(--ease-quint), opacity var(--dur-1); }
.fr-hdr__toggle span:first-child { top: 17px; }
.fr-hdr__toggle span:last-child { top: 24px; }
.fr-hdr__toggle[aria-expanded="true"] span:first-child { transform: translateY(3.5px) rotate(45deg); }
.fr-hdr__toggle[aria-expanded="true"] span:last-child { transform: translateY(-3.5px) rotate(-45deg); }
.fr-hdr.nav-is-open .fr-hdr__toggle span { background: var(--ink); }
html.fr-nav-open { overflow: hidden; }
@media (max-width: 900px) {
  .fr-hdr__nav { position: fixed; inset: 0 0 0 auto; width: min(82vw, 340px); flex-direction: column; align-items: flex-start; justify-content: center; gap: 1.4rem;
    background: var(--paper); color: var(--ink); padding: 5rem 2.2rem; transform: translateX(105%); transition: transform var(--dur-2) var(--ease-expo); box-shadow: var(--shadow-lg); z-index: 90; }
  .fr-hdr__nav.is-open { transform: none; }
  .fr-hdr__nav a { font-family: var(--font-display); font-size: 1.6rem; font-weight: 700; color: var(--burgundy); }
  .fr-hdr__nav a::after { display: none; }
  .fr-hdr__toggle { display: inline-grid; place-items: center; z-index: 95; }
}`;
  document.head.appendChild(el);
}
function Ico({
  children
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, children);
}
const DEFAULT_NAV = [{
  label: "Coffee",
  href: "#learn"
}, {
  label: "Machines",
  href: "#mood"
}, {
  label: "Accessories",
  href: "#feed"
}, {
  label: "Discover",
  href: "#cafe"
}];
function SiteHeader({
  navItems = DEFAULT_NAV,
  activeHref,
  cartCount = 0,
  brandHref = "#top",
  logoLight,
  logoDark,
  solid = false,
  onSearch,
  onAccount,
  onCart,
  className = "",
  ...rest
}) {
  useStyles();
  const [scrolled, setScrolled] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);
  React.useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);
  const opaque = solid || scrolled;
  React.useEffect(() => {
    document.documentElement.classList.toggle("fr-nav-open", navOpen);
    const onKey = e => {
      if (e.key === "Escape") setNavOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [navOpen]);
  return /*#__PURE__*/React.createElement("header", _extends({
    className: `fr-hdr ${opaque ? "is-scrolled" : ""} ${navOpen ? "nav-is-open" : ""} ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "fr-hdr__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "fr-hdr__brand",
    href: brandHref,
    "aria-label": "Fr\xE9scopa home"
  }, logoLight ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "fr-hdr__logo fr-hdr__logo--light",
    src: logoLight,
    alt: "Fr\xE9scopa",
    width: "150",
    height: "40"
  }), /*#__PURE__*/React.createElement("img", {
    className: "fr-hdr__logo fr-hdr__logo--dark",
    src: logoDark || logoLight,
    alt: "",
    "aria-hidden": "true",
    width: "150",
    height: "40"
  })) : /*#__PURE__*/React.createElement("span", {
    className: "fr-hdr__wordmark"
  }, "Fr\xE9scopa")), /*#__PURE__*/React.createElement("nav", {
    className: `fr-hdr__nav ${navOpen ? "is-open" : ""}`,
    "aria-label": "Primary",
    onClick: e => {
      if (e.target.closest("a")) setNavOpen(false);
    }
  }, navItems.map(item => /*#__PURE__*/React.createElement("a", {
    key: item.href,
    href: item.href,
    className: item.href === activeHref ? "is-active" : ""
  }, item.label))), /*#__PURE__*/React.createElement("div", {
    className: "fr-hdr__utils"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Search",
    onClick: onSearch
  }, /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.2-3.2",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Account",
    onClick: onAccount
  }, /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fr-hdr__cart-wrap"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: `Cart, ${cartCount} items`,
    onClick: onCart
  }, /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 8h12l-1 11H7L6 8Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 8a3 3 0 0 1 6 0",
    strokeLinecap: "round"
  }))), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "fr-hdr__cart-count"
  }, cartCount)), /*#__PURE__*/React.createElement("button", {
    className: "fr-hdr__toggle",
    "aria-label": "Menu",
    "aria-expanded": navOpen,
    onClick: () => setNavOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/App.jsx
try { (() => {
/* Fréscopa marketing site — full interactive homepage recreation.
   Header + footer now come from the design system (SiteHeader / SiteFooter);
   this file wires them to the page's cart + section anchors. */
const {
  useState: useStateApp
} = React;
const {
  SiteHeader,
  SiteFooter
} = window.FrScopaDesignSystem_406815;
const SITE_NAV = [{
  label: "Coffee",
  href: "#learn"
}, {
  label: "Machines",
  href: "#mood"
}, {
  label: "Accessories",
  href: "#feed"
}, {
  label: "Discover",
  href: "#cafe"
}];
function Site() {
  const [cart, setCart] = useStateApp(0);
  React.useEffect(() => {
    if (window.initReveal) window.initReveal();
    if (window.initParallax) window.initParallax();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "site",
    "data-screen-label": "Homepage"
  }, /*#__PURE__*/React.createElement("a", {
    className: "skip-link",
    href: "#top"
  }, "Skip to content"), /*#__PURE__*/React.createElement(SiteHeader, {
    navItems: SITE_NAV,
    cartCount: cart,
    logoLight: "../../assets/frescopa-logo-light.svg",
    logoDark: "../../assets/frescopa-logo.svg",
    onCart: () => {}
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Intro, null), /*#__PURE__*/React.createElement(Learn, null), /*#__PURE__*/React.createElement(Mood, null), /*#__PURE__*/React.createElement(Feed, {
    onAdd: () => setCart(c => c + 1)
  }), /*#__PURE__*/React.createElement(Sustain, null), /*#__PURE__*/React.createElement(Voices, null), /*#__PURE__*/React.createElement(Cafe, null), /*#__PURE__*/React.createElement(CTA, null)), /*#__PURE__*/React.createElement(SiteFooter, {
    logoLight: "../../assets/frescopa-logo-light.svg"
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Site, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Sections.jsx
try { (() => {
/* Fréscopa marketing sections — composed from the design-system
   components (Eyebrow, Button, FlavourDNA, ProductCard, Chip, Badge). */
const {
  useState: useStateS
} = React;
const {
  Eyebrow,
  Button,
  TextLink,
  FlavourDNA,
  ProductCard,
  Chip,
  ChipGroup
} = window.FrScopaDesignSystem_406815;

/* ---------- Hero ---------- */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/hero-machine.jpg",
    alt: "The Fr\xE9scopa Atelier on a sunlit kitchen counter, steam rising from a freshly pulled cup.",
    "data-parallax": "12"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__scrim"
  })), /*#__PURE__*/React.createElement("div", {
    className: "container hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, "Meet the Atelier")), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title reveal",
    style: {
      "--reveal-delay": ".08s"
    }
  }, "Every morning,", /*#__PURE__*/React.createElement("br", null), "perfected."), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead reveal",
    style: {
      "--reveal-delay": ".16s"
    }
  }, "The first Fr\xE9scopa machine with a feel for your mornings. It learns what you love, softens or sharpens to match your mood, and quietly takes care of the rest."), /*#__PURE__*/React.createElement("div", {
    className: "hero__actions reveal",
    style: {
      "--reveal-delay": ".24s"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "terracotta",
    arrow: true,
    href: "#learn"
  }, "Meet your coffee agent"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#feed",
    style: {
      color: "var(--cream)"
    }
  }, "Explore taste profiles"))), /*#__PURE__*/React.createElement("a", {
    className: "hero__scroll",
    href: "#intro",
    "aria-label": "Scroll to explore"
  }, /*#__PURE__*/React.createElement("span", null, "Scroll"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M6 13l6 6 6-6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}

/* ---------- Intro ---------- */
function Intro() {
  return /*#__PURE__*/React.createElement("section", {
    className: "intro",
    id: "intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container intro__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Ritual, meet intelligence"), /*#__PURE__*/React.createElement("h2", {
    className: "intro__statement"
  }, "Barista craft, ", /*#__PURE__*/React.createElement("em", null, "with a mind of its own."))), /*#__PURE__*/React.createElement("div", {
    className: "intro__body reveal",
    style: {
      "--reveal-delay": ".1s"
    }
  }, /*#__PURE__*/React.createElement("p", null, "For a hundred mornings, the Atelier watches how you like your cup, then makes it that way without being asked. No apps to fuss over, no settings to memorise."), /*#__PURE__*/React.createElement(TextLink, {
    href: "#learn",
    arrow: true
  }, "See how it learns"))));
}

/* ---------- Learn / Flavour DNA ---------- */
function Learn() {
  const points = [["Remembered", "It keeps what you love, and quietly lets go of what you don't."], ["Adaptive", "Bolder before a long day, gentler when there is time to linger."], ["Yours everywhere", "Your profile travels with you, so any Atelier pours it just right."]];
  return /*#__PURE__*/React.createElement("section", {
    className: "learn",
    id: "learn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "How it learns you"), /*#__PURE__*/React.createElement("h2", null, "Your taste, drawn one cup at a time."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Every cup teaches the Atelier a little more. We call the picture it builds your flavour DNA \u2014 watch it shift as the day, and your mood, changes."), /*#__PURE__*/React.createElement("ul", {
    className: "learn__points"
  }, points.map(([label, text]) => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("span", {
    className: "learn__pt-label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "learn__pt-text"
  }, text))))), /*#__PURE__*/React.createElement("div", {
    className: "learn__viz reveal",
    style: {
      "--reveal-delay": ".12s"
    }
  }, /*#__PURE__*/React.createElement(FlavourDNA, {
    defaultProfile: "weekday",
    autocycle: true
  }))));
}

/* ---------- Mood / Calendar ---------- */
const DAYS = [{
  n: 2,
  tag: "Bolder",
  title: "Extra shot, no fuss",
  note: "A full day ahead, so a bolder, quicker cup to meet it."
}, {
  n: 3,
  muted: true
}, {
  n: 4,
  tag: "Balanced",
  title: "The everyday pour",
  note: "A steady, even morning calls for your house blend, just the way you like it."
}, {
  n: 5,
  muted: true
}, {
  n: 6,
  tag: "Bright",
  title: "A lighter start",
  note: "Something brighter and softer to ease into a shorter week."
}, {
  n: 7,
  tag: "Gentle",
  title: "The lingering cup",
  note: "Nowhere to be. Rounder, sweeter, made to be sipped slowly."
}, {
  n: 8,
  muted: true
}];
function Mood() {
  const [active, setActive] = useStateS(2);
  const took = React.useRef(false);
  const panelRef = React.useRef(null);
  const brew = DAYS.find(d => d.n === active) || DAYS[2];
  const pickDay = n => {
    took.current = true;
    setActive(n);
  };
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const active_days = DAYS.filter(d => !d.muted).map(d => d.n);
    let timer = null;
    const tick = () => {
      timer = setTimeout(() => {
        if (!took.current) {
          setActive(cur => {
            const i = active_days.indexOf(cur);
            return active_days[(i + 1) % active_days.length];
          });
          tick();
        }
      }, 3000);
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !took.current && !timer) tick();
      });
    }, {
      threshold: 0.2
    });
    if (panelRef.current) io.observe(panelRef.current);
    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "mood",
    id: "mood"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Mood-aware brewing"), /*#__PURE__*/React.createElement("h2", null, "It reads the room. And the calendar."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "A packed Monday, an early flight, a slow Sunday with nowhere to be. The Atelier looks at what's ahead and adjusts, so the cup always suits the morning you're having."), /*#__PURE__*/React.createElement("p", {
    className: "mood__hint"
  }, "Tap a day to see what it would pour.")), /*#__PURE__*/React.createElement("div", {
    className: "mood__panel reveal",
    style: {
      "--reveal-delay": ".12s"
    },
    ref: panelRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "cal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cal__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cal__month"
  }, "March"), /*#__PURE__*/React.createElement("span", {
    className: "cal__year"
  }, "2026")), /*#__PURE__*/React.createElement("div", {
    className: "cal__grid",
    role: "group",
    "aria-label": "Days"
  }, ["M", "T", "W", "T", "F", "S", "S"].map((d, i) => /*#__PURE__*/React.createElement("span", {
    className: "cal__dow",
    key: i
  }, d)), DAYS.map(d => d.muted ? /*#__PURE__*/React.createElement("span", {
    className: "cal__day cal__day--muted",
    key: d.n
  }, d.n) : /*#__PURE__*/React.createElement("button", {
    key: d.n,
    className: `cal__day ${active === d.n ? "is-active" : ""}`,
    "aria-pressed": active === d.n,
    onClick: () => pickDay(d.n)
  }, d.n)))), /*#__PURE__*/React.createElement("div", {
    className: "brew"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brew__tag"
  }, brew.tag), /*#__PURE__*/React.createElement("h4", {
    className: "brew__title"
  }, brew.title), /*#__PURE__*/React.createElement("p", {
    className: "brew__note"
  }, brew.note)))));
}

/* ---------- Feed ---------- */
const PRODUCTS = [{
  image: "../../assets/images/espresso-pour.jpg",
  alt: "A double shot of espresso pouring into a warm glass.",
  category: "Coffee",
  title: "The house pour",
  note: "Our everyday blend, coaxed a little rounder for the season. The one you'll reach for on autopilot.",
  price: "£14"
}, {
  image: "../../assets/images/tea-moment.jpg",
  alt: "A glass cup of amber tea beside loose leaves.",
  category: "Tea",
  title: "Honeybush & orange peel",
  note: "Caffeine-free, and quietly sweet. Made for the afternoons that ask you to slow down a little.",
  price: "£11"
}, {
  image: "../../assets/images/citrus-juice.jpg",
  alt: "A glass of fresh cold-pressed citrus juice.",
  category: "Juice",
  title: "Cold-pressed citrus",
  note: "Three oranges, one grapefruit, and a whisper of ginger. Bright enough to wake a room.",
  price: "£8"
}];
function Feed({
  onAdd
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "feed",
    id: "feed"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feed__head reveal"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "This week, for you"), /*#__PURE__*/React.createElement("h2", null, "New favourites, found for you.")), /*#__PURE__*/React.createElement("p", {
    className: "feed__intro"
  }, "A short list worth trying, drawn from what you already love and where you might like to wander. Coffee, tea, and cold-pressed juice, all in the same trusted hands.")), /*#__PURE__*/React.createElement("div", {
    className: "feed__grid"
  }, PRODUCTS.map((p, i) => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.title,
    className: "reveal",
    style: {
      "--reveal-delay": `${i * 0.1}s`
    },
    image: p.image,
    imageAlt: p.alt,
    category: p.category,
    title: p.title,
    note: p.note,
    price: p.price,
    onAction: onAdd
  })))));
}

/* ---------- Sustainability ---------- */
function Sustain() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sustain"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sustain__media reveal"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/sustainability.jpg",
    alt: "A compostable kraft coffee bag beside fresh grounds on pale stone."
  })), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      "--reveal-delay": ".1s"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Kind by design"), /*#__PURE__*/React.createElement("h2", null, "Nothing wasted, right down to the grounds."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "The Atelier keeps an eye on your beans and reorders before you run low, in packaging that returns to the earth as easily as it arrived."), /*#__PURE__*/React.createElement(ChipGroup, null, /*#__PURE__*/React.createElement(Chip, null, "Compostable pods"), /*#__PURE__*/React.createElement(Chip, null, "Plastic-free refills"), /*#__PURE__*/React.createElement(Chip, null, "Reorders itself"), /*#__PURE__*/React.createElement(Chip, null, "Grounds for your garden")))));
}

/* ---------- Voices ---------- */
function Voices() {
  return /*#__PURE__*/React.createElement("section", {
    className: "voices"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "From kitchens like yours")), /*#__PURE__*/React.createElement("blockquote", {
    className: "voices__lead reveal",
    style: {
      "--reveal-delay": ".06s"
    }
  }, /*#__PURE__*/React.createElement("p", null, "\u201CIt worked out that my Monday needs more than my Sunday. I never taught it that. It simply ", /*#__PURE__*/React.createElement("em", null, "knew."), "\u201D"), /*#__PURE__*/React.createElement("cite", null, "Mara \xB7 Lisbon")), /*#__PURE__*/React.createElement("div", {
    className: "voices__grid"
  }, /*#__PURE__*/React.createElement("blockquote", {
    className: "voices__item reveal"
  }, /*#__PURE__*/React.createElement("p", null, "\u201CThe first machine I've owned that feels less like a gadget and more like a habit.\u201D"), /*#__PURE__*/React.createElement("cite", null, "Devon \xB7 Melbourne")), /*#__PURE__*/React.createElement("blockquote", {
    className: "voices__item reveal",
    style: {
      "--reveal-delay": ".1s"
    }
  }, /*#__PURE__*/React.createElement("p", null, "\u201CI haven't run out of beans since it arrived. A small thing that quietly changed my week.\u201D"), /*#__PURE__*/React.createElement("cite", null, "Priya \xB7 Bristol")))));
}

/* ---------- Café band ---------- */
function Cafe() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cafe",
    id: "cafe"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cafe__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/cafe-interior.jpg",
    alt: "The warm interior of a Fr\xE9scopa Caf\xE9 at golden hour.",
    "data-parallax": "14"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cafe__scrim"
  })), /*#__PURE__*/React.createElement("div", {
    className: "container cafe__inner reveal"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, "Come say hello"), /*#__PURE__*/React.createElement("h2", {
    className: "cafe__title"
  }, "Every Atelier begins at the Fr\xE9scopa Caf\xE9."), /*#__PURE__*/React.createElement("p", {
    className: "cafe__body"
  }, "Part shop, part studio, part living room. Pull up a stool, taste a few blends, and let one of ours show you what your mornings could feel like."), /*#__PURE__*/React.createElement(Button, {
    variant: "cream",
    arrow: true,
    href: "#"
  }, "Find a caf\xE9 near you")));
}

/* ---------- Closing CTA ---------- */
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container cta__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "cta__promise reveal"
  }, "Your best cup is the one you ", /*#__PURE__*/React.createElement("em", null, "haven't met yet.")), /*#__PURE__*/React.createElement("p", {
    className: "cta__sub reveal",
    style: {
      "--reveal-delay": ".08s"
    }
  }, "Bring the Atelier home, and let tomorrow's coffee introduce itself."), /*#__PURE__*/React.createElement("div", {
    className: "cta__actions reveal",
    style: {
      "--reveal-delay": ".16s"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "terracotta",
    arrow: true,
    href: "#"
  }, "Meet your coffee agent"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#",
    style: {
      color: "var(--cream)"
    }
  }, "Order the Atelier"))));
}
Object.assign(window, {
  Hero,
  Intro,
  Learn,
  Mood,
  Feed,
  Sustain,
  Voices,
  Cafe,
  CTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/behaviors.jsx
try { (() => {
/* Fréscopa marketing-site behaviours — the vanilla scroll effects the
   site uses site-wide. Call from App after mount. Both no-op under
   prefers-reduced-motion. */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Fade + rise elements marked .reveal as they enter the viewport.
  function initReveal(root = document) {
    const els = root.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || reduce) {
      els.forEach(e => e.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    });
    els.forEach(e => io.observe(e));
  }

  // Subtle transform-only parallax on [data-parallax] (amount in px).
  function initParallax(root = document) {
    const items = root.querySelectorAll("[data-parallax]");
    if (!items.length || reduce || matchMedia("(hover: none)").matches) return;
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const progress = (mid - vh / 2) / vh;
        const amount = parseFloat(item.getAttribute("data-parallax")) || 24;
        item.style.transform = "translate3d(0," + (-progress * amount).toFixed(1) + "px,0)";
      });
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, {
      passive: true
    });
    window.addEventListener("resize", update, {
      passive: true
    });
    update();
  }
  Object.assign(window, {
    initReveal,
    initParallax
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/behaviors.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.FLAVOUR_PROFILES = __ds_scope.FLAVOUR_PROFILES;

__ds_ns.FlavourDNA = __ds_scope.FlavourDNA;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.ChipGroup = __ds_scope.ChipGroup;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
