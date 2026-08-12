import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: number | null;
  regular_price: number | null;
  on_sale: boolean;
  in_stock: boolean;
  brand: string | null;
  image: string | null;
  url: string;
};

const money = (value: number | null) =>
  value == null ? null : `AED ${Number(value).toLocaleString("en-AE")}`;

export function FeaturedProducts() {
  const [items, setItems] = useState<Product[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("https://adl.apaarr.com/api/public/featured-products?limit=8")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("bad response"))))
      .then((data) => {
        if (active) setItems(Array.isArray(data?.items) ? data.items : []);
      })
      .catch(() => active && setFailed(true));
    return () => {
      active = false;
    };
  }, []);

  if (failed || (items && items.length === 0)) return null;

  return (
    <div className="mt-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
          Featured products in the store
        </h3>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {(items ?? Array.from({ length: 4 }).map((_, i) => null)).map((product, index) =>
          product ? (
            <li key={product.id}>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lifted"
              >
                <div className="aspect-square overflow-hidden bg-surface">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  {product.brand ? (
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      {product.brand}
                    </p>
                  ) : null}
                  <p className="mt-1 line-clamp-2 font-display text-sm font-bold text-foreground">
                    {product.name}
                  </p>
                  <div className="mt-3 flex flex-wrap items-baseline gap-2">
                    <span className="text-sm font-bold text-primary">{money(product.price)}</span>
                    {product.on_sale && product.regular_price ? (
                      <span className="text-xs text-muted-foreground line-through">
                        {money(product.regular_price)}
                      </span>
                    ) : null}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
                    View product
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </li>
          ) : (
            <li
              key={`skeleton-${index}`}
              className="h-72 animate-pulse rounded-2xl border border-border bg-card"
            />
          ),
        )}
      </ul>
    </div>
  );
}
