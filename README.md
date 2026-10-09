# Solwirk

Storefront brand: **Solwirk** · https://solwirk.no/ · Norwegian solar equipment shop (hytte, bobil, båt).

Repo / Pages project: `NORDIC-ENERGY-FUTURE`.

## Commerce

The store has `/api/cj-products` and a validated `/api/order` endpoint. Configure `CJ_API_KEY` and the shared `MAKE_ORDERS_WEBHOOK` in Netlify; credentials must never be committed.

Checkout uses Stripe when `CHECKOUT_ENABLED` is turned on in `commerce-runtime.js` and the Netlify function. Do not commit secrets.

## Catalogs

- Storefront switcher: **CJ | Printify | Gelato | Printful** — `window.nordicCatalogs` keeps arrays separate; default UI shows CJ only.
- Env: `PRINTIFY_API_TOKEN`, `GELATO_API_KEY`, `PRINTFUL_API_TOKEN` (plus existing `CJ_API_KEY`). See `STRIPE-SETUP.md`.
