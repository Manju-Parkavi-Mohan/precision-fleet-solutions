import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { SITE } from "@/lib/site";

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
  const [visible, setVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLUListElement | null>(null);

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

  // Trigger the staggered entrance once the grid scrolls into view.
  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [items]);

  if (failed || (items && items.length === 0)) return null;

  const slots = items ?? Array.from({ length: 4 }).map(() => null);

  return (
    <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card/70 p-5 shadow-soft sm:mt-12 sm:p-7 lg:mt-14">
      {/* Integrated top bar */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Featured Products
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured products
            </span>{" "}
            in the store
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Handpicked professional diagnostic tools & engine solutions ready to dispatch.
          </p>
        </div>
        <a
          href={SITE.storefront.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition-all hover:gap-2.5 hover:shadow-brand"
        >
          Explore Full Catalog
          <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
      </div>

      {/* Product grid */}
      <ul ref={gridRef} className="mt-7 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {slots.map((product, index) =>
          product ? (
            <li
              key={product.id}
              style={{ transitionDelay: `${index * 80}ms` }}
              className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-lifted ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col"
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
                    <span className="text-sm font-bold text-primary">
                      {money(product.price)}
                    </span>
                    {product.on_sale && product.regular_price ? (
                      <span className="text-xs text-muted-foreground line-through">
                        {money(product.regular_price)}
                      </span>
                    ) : null}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
                    View products
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
