const BASE = "https://api.printify.com/v1";

// Per-store curated catalog — PRIMARY source for storefront (never replace with shared shop dump)
const SELECTED: any[] = [
  {
    "id": "printify-solar-energy-1",
    "sku": "PFY-ENRG-TOTE-SOLAR",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Solar Future Tote",
    "category": "Energy Merch",
    "supplierPriceUsd": 7.1,
    "suggestedRetailUsd": 22.5,
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a67478e?auto=format&fit=crop&w=800&q=80",
    "matchType": "tote",
    "sector": "solar energy"
  },
  {
    "id": "printify-solar-energy-2",
    "sku": "PFY-ENRG-TOTE-WATT",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Watt Wise Canvas Tote",
    "category": "Energy Merch",
    "supplierPriceUsd": 7.1,
    "suggestedRetailUsd": 21.9,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    "matchType": "tote",
    "sector": "solar energy"
  },
  {
    "id": "printify-solar-energy-3",
    "sku": "PFY-ENRG-TOTE-GRID",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Clean Grid Market Tote",
    "category": "Education",
    "supplierPriceUsd": 7.1,
    "suggestedRetailUsd": 23.5,
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
    "matchType": "tote",
    "sector": "solar energy"
  },
  {
    "id": "printify-solar-energy-4",
    "sku": "PFY-ENRG-POSTER-SOLAR",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Solar Future Poster",
    "category": "Education",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 24.9,
    "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "solar energy"
  },
  {
    "id": "printify-solar-energy-5",
    "sku": "PFY-ENRG-POSTER-CHECK",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Home Energy Checklist Poster",
    "category": "Education",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 21.9,
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "solar energy"
  },
  {
    "id": "printify-solar-energy-6",
    "sku": "PFY-ENRG-POSTER-WIND",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Wind & Sun Infographic Poster",
    "category": "Education",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 22.9,
    "image": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "solar energy"
  },
  {
    "id": "printify-solar-energy-7",
    "sku": "PFY-ENRG-POSTER-NETZERO",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Net Zero Vision Poster",
    "category": "Education",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 23.5,
    "image": "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "solar energy"
  },
  {
    "id": "printify-solar-energy-8",
    "sku": "PFY-ENRG-TOTE-CHARGE",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Charge Forward Tote",
    "category": "Energy Merch",
    "supplierPriceUsd": 7.1,
    "suggestedRetailUsd": 20.9,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    "matchType": "tote",
    "sector": "solar energy"
  },
  {
    "id": "printify-solar-energy-9",
    "sku": "PFY-ENRG-POSTER-PANEL",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Panel Pride Wall Poster",
    "category": "Education",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 25.5,
    "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "solar energy"
  },
  {
    "id": "printify-solar-energy-10",
    "sku": "PFY-ENRG-TOTE-KWH",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Green kWh Canvas Tote",
    "category": "Energy Merch",
    "supplierPriceUsd": 7.1,
    "suggestedRetailUsd": 24.5,
    "image": "https://images.unsplash.com/photo-1590874103328-eac38a67478e?auto=format&fit=crop&w=800&q=80",
    "matchType": "tote",
    "sector": "solar energy"
  },
  {
    "id": "printify-solar-energy-11",
    "sku": "PFY-ENRG-POSTER-MAP",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Future Grid Map Poster",
    "category": "Education",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 26.9,
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "solar energy"
  },
  {
    "id": "printify-solar-energy-12",
    "sku": "PFY-ENRG-TOTE-ECO",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Eco Carry All Tote",
    "category": "Energy Merch",
    "supplierPriceUsd": 7.1,
    "suggestedRetailUsd": 19.9,
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
    "matchType": "tote",
    "sector": "solar energy"
  },
  {
    "id": "printify-solar-energy-13",
    "sku": "PFY-ENRG-POSTER-PHOTON",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Photon Path Poster",
    "category": "Education",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 24.5,
    "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "solar energy"
  },
  {
    "id": "printify-solar-energy-14",
    "sku": "PFY-ENRG-TOTE-BATTERY",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Battery Freedom Tote",
    "category": "Energy Merch",
    "supplierPriceUsd": 7.1,
    "suggestedRetailUsd": 23.9,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    "matchType": "tote",
    "sector": "solar energy"
  },
  {
    "id": "printify-solar-energy-15",
    "sku": "PFY-ENRG-POSTER-CARBON",
    "supplier": "Printify",
    "provider": "printify",
    "printifyProductId": "",
    "printifyVariantId": "",
    "name": "Carbon Cut Checklist Poster",
    "category": "Education",
    "supplierPriceUsd": 7.5,
    "suggestedRetailUsd": 22.5,
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    "matchType": "poster",
    "sector": "solar energy"
  }
];

const SECTOR_ALIASES: Record<string, string> = {
  "beauty": "beauty",
  "perfume": "beauty",
  "perfumes": "beauty",
  "skincare": "beauty",
  "toys": "toys",
  "kids": "toys",
  "kid": "toys",
  "children": "toys",
  "electronics": "electronics",
  "tech": "electronics",
  "technology": "electronics",
  "pet supplies": "pet supplies",
  "pets": "pet supplies",
  "pet": "pet supplies",
  "home living": "home living",
  "home": "home living",
  "living": "home living",
  "fitness": "fitness",
  "outdoor": "fitness",
  "sports": "fitness",
  "solar energy": "solar energy",
  "energy": "solar energy",
  "solar": "solar energy",
  "car accessories": "car accessories",
  "car": "car accessories",
  "auto": "car accessories",
  "automotive": "car accessories"
};

function money(value: unknown) {
  const amount = Number(value);
  return Number.isFinite(amount) && amount > 0 ? Math.round(amount * 100) / 100 : 0;
}

function resolveSector(raw: string) {
  const key = String(raw || "").toLowerCase().trim();
  if (!key) return SELECTED[0]?.sector || "beauty";
  if (SECTOR_ALIASES[key]) return SECTOR_ALIASES[key];
  for (const [alias, sector] of Object.entries(SECTOR_ALIASES)) {
    if (key.includes(alias) || alias.includes(key)) return sector;
  }
  return key;
}

function curated(sector: string) {
  return SELECTED
    .filter((p) => !p.sector || String(p.sector).toLowerCase() === sector)
    .map((p, i) => ({
      id: String(p.id || `printify-selected-${i}`),
      sku: String(p.sku || ""),
      supplier: "Printify",
      provider: "printify",
      printifyProductId: String(p.printifyProductId || ""),
      printifyVariantId: String(p.printifyVariantId || ""),
      name: String(p.name || "Printify product"),
      category: String(p.category || sector),
      supplierPriceUsd: money(p.supplierPriceUsd) || money(p.suggestedRetailUsd),
      suggestedRetailUsd: money(p.suggestedRetailUsd) || money(p.supplierPriceUsd),
      image: String(p.image || ""),
      matchType: String(p.matchType || ""),
      sector: String(p.sector || sector),
    }))
    .filter((p) => p.suggestedRetailUsd > 0 && p.name);
}

function haystack(p: any) {
  return [p.name, p.title, p.category, ...(Array.isArray(p.tags) ? p.tags : []), p.sku].join(" ").toLowerCase();
}

async function enrichFromLive(token: string, shopId: string, curatedProducts: any[]) {
  try {
    const apiUrl = new URL(BASE + `/shops/${shopId}/products.json`);
    apiUrl.searchParams.set("limit", "50");
    const response = await fetch(apiUrl, {
      headers: { Authorization: `Bearer ${token}`, "User-Agent": "NordicStore/1.0" },
    });
    if (!response.ok) return curatedProducts;
    const result: any = await response.json();
    const list = Array.isArray(result?.data) ? result.data : Array.isArray(result) ? result : [];
    if (!list.length) return curatedProducts;

    const typeWords: Record<string, string[]> = {
      tote: ["tote", "bag"],
      tee: ["t-shirt", "tshirt", "tee", "shirt"],
      mug: ["mug", "cup", "coffee"],
      crewneck: ["crewneck", "crew neck", "sweatshirt"],
      hoodie: ["hoodie", "zip"],
      poster: ["poster", "print"],
      case: ["case", "phone", "tough"],
      cap: ["cap", "hat"],
    };

    return curatedProducts.map((item) => {
      const words = typeWords[String(item.matchType || "").toLowerCase()] || [];
      const match = list.find((live: any) => {
        const id = String(live?.id || "");
        if (item.printifyProductId && id && id === item.printifyProductId) return true;
        if (!words.length) return false;
        const text = haystack({ name: live?.title, tags: live?.tags, sku: "" });
        return words.some((w) => text.includes(w));
      });
      if (!match) return item;
      const variants = Array.isArray(match.variants) ? match.variants : [];
      const enabled = variants.find((v: any) => v?.is_enabled !== false) || variants[0] || {};
      const images = Array.isArray(match.images) ? match.images : [];
      const image = images.find((img: any) => img?.is_default)?.src || images[0]?.src || item.image;
      const cost = money(enabled.cost);
      const retail = money(enabled.price) || (cost > 0 ? Math.round(cost * 2.2 * 100) / 100 : 0);
      return {
        ...item,
        printifyProductId: String(match.id || item.printifyProductId || ""),
        printifyVariantId: String(enabled.id || item.printifyVariantId || ""),
        sku: String(enabled.sku || item.sku || ""),
        supplierPriceUsd: cost || item.supplierPriceUsd,
        suggestedRetailUsd: retail || item.suggestedRetailUsd,
        image: image || item.image,
        enriched: true,
      };
    });
  } catch (_) {
    return curatedProducts;
  }
}

export default async (req: Request, context: any) => {
  if (req.method !== "GET") return Response.json({ error: "Method not allowed" }, { status: 405 });
  const url = new URL(req.url);
  const wanted = url.searchParams.get("q") || url.searchParams.get("sector") || "";
  const defaultSector = String(SELECTED[0]?.sector || "beauty");
  const sector = resolveSector(wanted || defaultSector);
  const headers = {
    "access-control-allow-origin": "*",
    "cache-control": "public, max-age=60",
  };

  // PRIMARY: curated per-store list. Live Printify only enriches — never replaces.
  let products = curated(sector).slice(0, 30);
  const token = (typeof Netlify !== "undefined" && Netlify.env?.get) ? Netlify.env.get("PRINTIFY_API_TOKEN") : context?.env?.PRINTIFY_API_TOKEN;
  const shopId = ((typeof Netlify !== "undefined" && Netlify.env?.get) ? Netlify.env.get("PRINTIFY_SHOP_ID") : context?.env?.PRINTIFY_SHOP_ID) || "28847802";
  if (token && products.length) {
    products = await enrichFromLive(String(token), String(shopId), products);
  }

  return Response.json(
    {
      ok: true,
      supplier: "printify",
      sector,
      query: sector,
      products,
      count: products.length,
      source: "printify-selected-primary",
      markets: ["NO", "EU", "PE"],
    },
    { status: products.length ? 200 : 503, headers }
  );
};
export const config = { path: "/api/printify-products" };
