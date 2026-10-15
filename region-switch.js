/* Solwirk region switch: Europa ↔ Perú. Loaded only from /pe/ pages — Norwegian storefront stays unchanged. */
(function () {
  "use strict";

  const KEY = "solwirk-region";
  const EUROPA = "europa";
  const PERU = "peru";
  const EUROPA_PATH = "/";
  const PERU_PATH = "/pe/";

  function write(region) {
    try { localStorage.setItem(KEY, region); } catch (_) {}
  }

  function onPeruPath() {
    const p = location.pathname.replace(/\/+$/, "") || "/";
    return p === "/pe" || p.indexOf("/pe/") === 0;
  }

  function go(region) {
    write(region);
    const wantPeru = region === PERU;
    if (wantPeru && !onPeruPath()) {
      location.assign(PERU_PATH);
      return;
    }
    if (!wantPeru && onPeruPath()) {
      location.assign(EUROPA_PATH);
    }
  }

  function mountSelect(select) {
    if (!select || select.dataset.regionBound === "1") return;
    select.dataset.regionBound = "1";
    const current = onPeruPath() ? PERU : EUROPA;
    if (!select.options.length) {
      select.innerHTML =
        '<option value="' + EUROPA + '">Europa</option>' +
        '<option value="' + PERU + '">Perú</option>';
    }
    select.value = current;
    select.addEventListener("change", function () {
      go(select.value === PERU ? PERU : EUROPA);
    });
  }

  function init() {
    if (onPeruPath()) write(PERU);
    const select = document.getElementById("regionSwitch");
    if (select) mountSelect(select);
  }

  window.SolwirkRegion = { KEY, write, go, init, onPeruPath };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
