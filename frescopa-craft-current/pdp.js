/* ============================================================
   FRÉSCOPA — Atelier product page behaviour
   Vanilla JS, no dependencies, same conventions as shared/app.js.
   Progressive enhancement: the page is fully readable without JS
   (accordions are native <details>); this adds the gallery, finish,
   quantity, add-to-cart, and the "how it works" step switcher.
   ============================================================ */
(function () {
  "use strict";

  var CART_KEY = "frescopa_cart";

  /* ---- Shared cart counter (mirrors the imported page's localStorage) ---- */
  function readCart() {
    try { return parseInt(localStorage.getItem(CART_KEY) || "0", 10) || 0; }
    catch (e) { return 0; }
  }
  function writeCart(n) {
    try { localStorage.setItem(CART_KEY, String(n)); } catch (e) {}
  }
  function paintCart(n) {
    var badge = document.querySelector("[data-cart-count]");
    var button = document.querySelector("[data-cart-button]");
    if (badge) {
      badge.textContent = String(n);
      badge.hidden = n <= 0;
    }
    if (button) {
      button.setAttribute("aria-label", "Cart, " + n + (n === 1 ? " item" : " items"));
    }
  }
  function initCart() {
    paintCart(readCart());
    window.addEventListener("storage", function (e) {
      if (e.key === CART_KEY) paintCart(readCart());
    });
  }
  function addToCart(qty) {
    var n = readCart() + (qty > 0 ? qty : 1);
    writeCart(n);
    paintCart(n);
  }

  /* ---- Product gallery ---- */
  function initGallery() {
    var gallery = document.querySelector("[data-gallery]");
    if (!gallery) return;
    var images = Array.prototype.slice.call(gallery.querySelectorAll("[data-gallery-image]"));
    var thumbs = Array.prototype.slice.call(gallery.querySelectorAll("[data-gallery-thumb]"));
    if (!images.length || !thumbs.length) return;
    function select(idx) {
      images.forEach(function (img) { img.hidden = img.getAttribute("data-gallery-image") !== String(idx); });
      thumbs.forEach(function (t) {
        var on = t.getAttribute("data-gallery-thumb") === String(idx);
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-pressed", on ? "true" : "false");
      });
    }
    thumbs.forEach(function (t) {
      t.addEventListener("click", function () { select(t.getAttribute("data-gallery-thumb")); });
    });
  }

  /* ---- Finish swatches ---- */
  function initFinish() {
    var field = document.querySelector("[data-finish]");
    if (!field) return;
    var swatches = Array.prototype.slice.call(field.querySelectorAll("[data-finish-swatch]"));
    var nameEl = field.querySelector("[data-finish-name]");
    swatches.forEach(function (s) {
      s.addEventListener("click", function () {
        swatches.forEach(function (o) { o.classList.toggle("is-active", o === s); });
        if (nameEl) nameEl.textContent = s.getAttribute("data-finish-swatch");
      });
    });
  }

  /* ---- Quantity + add to cart (buy box) ---- */
  function initBuyBox() {
    var row = document.querySelector("[data-add]");
    if (!row) return;
    var valEl = row.querySelector("[data-qty-val]");
    var dec = row.querySelector("[data-qty-dec]");
    var inc = row.querySelector("[data-qty-inc]");
    var addBtn = row.querySelector("[data-add-btn]");
    var qty = 1;
    function paint() { if (valEl) valEl.textContent = String(qty); }
    if (dec) dec.addEventListener("click", function () { qty = Math.max(1, qty - 1); paint(); });
    if (inc) inc.addEventListener("click", function () { qty = Math.min(9, qty + 1); paint(); });
    if (addBtn) bindAdd(addBtn, function () { return qty; });
  }

  /* ---- Every other "Add to cart" button (bundles, pairs) adds one ---- */
  function initOtherAddButtons() {
    var buyRow = document.querySelector("[data-add]");
    document.querySelectorAll("[data-add-btn]").forEach(function (btn) {
      if (buyRow && buyRow.contains(btn)) return; // handled by initBuyBox
      bindAdd(btn, function () { return 1; });
    });
  }

  function bindAdd(btn, getQty) {
    var label = btn.innerHTML;
    var timer = null;
    btn.addEventListener("click", function () {
      addToCart(getQty());
      btn.innerHTML = "Added to cart ✓";
      clearTimeout(timer);
      timer = setTimeout(function () { btn.innerHTML = label; }, 2000);
    });
  }

  /* ---- "How it works" step switcher ---- */
  var HOW = [
    { title: "It tastes every cup", body: "A ring of sensors watches every extraction — the grind size, how fast the water flows, the strength in the cup, and the temperature at the group head. The same signals a barista feels by hand, read hundreds of times a second.", img: "./assets/images/espresso-pour.jpg", alt: "Sensors reading every pour." },
    { title: "It builds your flavour DNA", body: "Those readings roll up into a flavour DNA for each person in the house — how strong, how hot, how much milk, which drink, and when. Every cup you pour nudges the picture a little closer to right.", img: "./assets/images/hero-machine.jpg", alt: "The Atelier building your flavour DNA." },
    { title: "It reads the morning", body: "Before you've asked, it weighs the time of day, what's on your calendar, the weather outside, and who's already awake. A rushed Tuesday and a slow Sunday call for different cups, and it knows the difference.", img: "./assets/images/cafe-interior.jpg", alt: "Reading the shape of the morning." },
    { title: "It acts on its own", body: "Then it acts. It warms up before your alarm, sets the pour to match the morning, and quietly reorders beans before you run low. Less like using a machine, and more like being looked after.", img: "./assets/images/sustainability.jpg", alt: "Acting on its own, right down to the grounds." }
  ];
  function initHowSteps() {
    var group = document.querySelector("[data-steps]");
    if (!group) return;
    var steps = Array.prototype.slice.call(group.querySelectorAll("[data-step]"));
    var nEl = document.querySelector("[data-detail-n]");
    var titleEl = document.querySelector("[data-detail-title]");
    var bodyEl = document.querySelector("[data-detail-body]");
    var imgEl = document.querySelector("[data-detail-image]");
    if (!steps.length) return;
    function select(idx) {
      var d = HOW[idx];
      if (!d) return;
      steps.forEach(function (s) {
        var on = s.getAttribute("data-step") === String(idx);
        s.classList.toggle("is-active", on);
        s.setAttribute("aria-pressed", on ? "true" : "false");
      });
      if (nEl) nEl.textContent = String(idx + 1);
      if (titleEl) titleEl.textContent = d.title;
      if (bodyEl) bodyEl.textContent = d.body;
      if (imgEl) { imgEl.src = d.img; imgEl.alt = d.alt; }
    }
    steps.forEach(function (s) {
      s.addEventListener("click", function () { select(parseInt(s.getAttribute("data-step"), 10)); });
    });
  }

  function init() {
    initCart();
    initGallery();
    initFinish();
    initBuyBox();
    initOtherAddButtons();
    initHowSteps();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
