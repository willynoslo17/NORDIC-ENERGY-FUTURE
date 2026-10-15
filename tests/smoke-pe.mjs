#!/usr/bin/env node
/**
 * Smoke checks for Solwirk /pe/ (Peru) and Norway safety invariants.
 * Run: node tests/smoke-pe.mjs
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fail = [];
const ok = [];

function read(rel) {
  const p = join(root, rel);
  if (!existsSync(p)) {
    fail.push("missing file: " + rel);
    return "";
  }
  return readFileSync(p, "utf8");
}

function assert(cond, msg) {
  if (cond) ok.push(msg);
  else fail.push(msg);
}

const pe = read("pe/index.html");
const region = read("region-switch.js");
const runtime = read("commerce-runtime.js");
const checkout = read("functions/api/create-checkout-session.ts");
const index = read("index.html");
const winners = read("functions/_shared/catalog-data/cj-winners.json");
const products = read("pe/products.json");

assert(pe.includes('lang="es-PE"'), "pe/index.html is Spanish (es-PE)");
assert(/IGV|igv/.test(pe) && pe.includes("18"), "pe page mentions IGV 18%");
assert(pe.includes("PEN") || pe.includes("currency: 'PEN'") || pe.includes("currency:'PEN'"), "pe page uses PEN");
assert(pe.includes('id="regionSwitch"'), "pe header has region switch");
assert(pe.includes("/region-switch.js"), "pe loads region-switch.js");
assert(pe.includes("/pe/products.json"), "pe loads static products.json");
assert(!pe.includes("supplier-bridge"), "pe does not load supplier-bridge (no live API)");
assert(!pe.includes("/api/cj-products") && !pe.includes("loadNordicCatalog"), "pe does not call live catalog API");
assert(!/CHECKOUT_ENABLED\s*=\s*true/.test(pe), "pe page does not enable checkout locally");
assert(pe.includes('disabled') && /CAJA PRONTO|PAGO PRONTO/.test(pe), "pe checkout controls are paused");

assert(region.includes("solwirk-region"), "region-switch uses localStorage key solwirk-region");
assert(region.includes("/pe/"), "region-switch knows /pe/ path");
assert(region.includes("europa") && region.includes("peru"), "region-switch has Europa/Perú");

assert(/const CHECKOUT_ENABLED = false/.test(runtime), "commerce-runtime CHECKOUT_ENABLED=false");
assert(/const CHECKOUT_ENABLED = false/.test(checkout), "create-checkout-session CHECKOUT_ENABLED=false");

assert(index.includes('lang="nb"'), "Norwegian store html lang unchanged");
assert(!index.includes("lima.css"), "Norwegian store does not load lima.css");
assert(!index.includes("region-switch.js"), "Norwegian store does not load region-switch.js");
assert(/Energi fra solen/.test(index), "Norwegian hero copy unchanged");

const legalPages = [
  ["pe/terminos.html", "Términos", "IGV"],
  ["pe/privacidad.html", "MARTINEZ LOZANO INTERNASJONAL HANDEL", "responsable"],
  ["pe/envios.html", "Envío a todo el Perú", "S/ 14"],
  ["pe/cambios.html", "devoluciones", "support@solwirk.no"],
  ["pe/libro-reclamaciones.html", "Libro de Reclamaciones", "mailto:support@solwirk.no"],
];
for (const [file, a, b] of legalPages) {
  const text = read(file);
  assert(text.includes(a) && text.includes(b), file + " has required legal content");
  assert(text.includes("regionSwitch") || text.includes("region-switch.js"), file + " has region switch");
  assert(text.includes("support@solwirk.no"), file + " books support@solwirk.no");
}
assert(existsSync(join(root, "pe/legal.css")), "pe/legal.css exists");
assert(pe.includes("/pe/libro-reclamaciones"), "pe homepage links Libro de Reclamaciones");

const lima = read("pe/lima.css");
assert(lima.includes("--sun") && lima.includes("Archivo Black"), "lima.css defines Lima palette/fonts");
assert(pe.includes("/pe/lima.css"), "pe storefront loads lima.css");
assert(pe.includes("Yape") && pe.includes("Plin") && /pr[oó]ximamente/i.test(pe), "pe shows Yape/Plin próximamente");
assert(pe.includes("badge stock") && pe.includes("Envío a todo el Perú"), "pe products show stock and Peru shipping badges");
assert(pe.includes("reseñas") || pe.includes("reviews"), "pe products show reviews");
assert(!/\binstalamos\b|\bmontamos tu\b|generaci[oó]n garantizada|kWh garantiz|ahorra\s+\d/i.test(pe), "pe does not promise installation or generation");
assert(/No ofrecemos instalaci|no prometemos generaci/i.test(pe), "pe explicitly disclaims installation/generation");

let winnersJson;
let productsJson;
try {
  winnersJson = JSON.parse(winners);
  productsJson = JSON.parse(products);
  assert(winnersJson.onlyWinners === true, "cj-winners.json onlyWinners remains true");
  assert(Array.isArray(winnersJson.products) && winnersJson.products.length >= 1, "cj-winners has snapshot products");
  assert(Array.isArray(productsJson) && productsJson.length === winnersJson.products.length, "pe/products.json matches reviewed winners count");
  assert(productsJson.every((p) => Number(p.priceNok) >= 99), "pe products have retail priceNok");
  const blob = JSON.stringify(productsJson).toLowerCase();
  assert(blob.includes("ducha") || blob.includes("shower") || blob.includes("solar"), "pe catalog is solar/energy accessories");
  assert(!blob.includes("cj_api_key") && !blob.includes("sk_live"), "pe products file has no secrets");
  assert(!blob.includes("supplierpricemaxusd"), "pe public products omit supplier cost fields");
} catch (e) {
  fail.push("catalog parse: " + e.message);
}

const csp = read("netlify.toml");
assert(csp.includes("fonts.googleapis.com") && csp.includes("fonts.gstatic.com"), "CSP allows Lima fonts");

console.log("PASS " + ok.length);
ok.forEach((m) => console.log("  ✓ " + m));
if (fail.length) {
  console.log("FAIL " + fail.length);
  fail.forEach((m) => console.log("  ✗ " + m));
  process.exit(1);
}
console.log("All smoke checks passed.");
