import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";

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

// The store serves product detail pages under /products/<slug>.
const productHref = (url: string) => url.replace("/product/", "/products/");

export function FeaturedProducts() {
  const [items, setItems] = useState<Product[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(false);
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
    <div className="mt-14 sm:mt-16">
      {/* Gradient banner header, cards overlap the band below it */}
      <div className="relative overflow-hidden rounded-3xl bg-primary px-5 pb-28 pt-10 sm:px-9 sm:pb-32 sm:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary-foreground/70">
              Curated performance &amp; diagnostic solutions
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-primary-foreground sm:text-4xl">
              Featured products in the store
            </h3>
            <span className="mt-4 block h-1 w-24 rounded-full bg-primary-foreground/40" aria-hidden="true" />
            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85">
              Handpicked professional diagnostic tools &amp; engine solutions ready to dispatch.
            </p>
          </div>
          <a
            href={SITE.storefront.url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "light", size: "lg" })}
          >
            View All Products
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Product grid pulled up over the banner */}
      <ul
        ref={gridRef}
        className="-mt-20 grid grid-cols-1 gap-5 px-1 sm:-mt-24 sm:grid-cols-2 lg:grid-cols-4"
      >
        {slots.map((product, index) =>
          product ? (
            <li
              key={product.id}
              style={{ transitionDelay: `${index * 80}ms` }}
              className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lifted transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <a
                href={productHref(product.url)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col p-4"
              >
                <div className="aspect-square overflow-hidden rounded-xl bg-surface">
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

                <p className="mt-4 line-clamp-2 font-display text-base font-bold uppercase leading-snug text-foreground">
                  {product.name}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {product.brand ? (
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {product.brand}
                    </span>
                  ) : null}
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                      product.in_stock
                        ? "bg-primary-soft text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {product.in_stock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                  <div>
                    <span className="font-display text-xl font-bold text-foreground">
                      {money(product.price)}
                    </span>
                    {product.on_sale && product.regular_price ? (
                      <span className="ml-2 text-xs text-muted-foreground line-through">
                        {money(product.regular_price)}
                      </span>
                    ) : null}
                  </div>
                  <span className={buttonVariants({ variant: "hero", size: "sm" })}>
                    View Details
                  </span>
                </div>
              </a>
            </li>
          ) : (
            <li
              key={`skeleton-${index}`}
              className="h-80 animate-pulse rounded-2xl border border-border bg-card"
            />
          ),
        )}
      </ul>
    </div>
  );
}
