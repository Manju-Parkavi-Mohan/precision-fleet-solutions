import { ArrowUpRight, PackageCheck, ShoppingCart, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";
import { FeaturedProducts } from "./FeaturedProducts";
import partsImg from "@/assets/service-parts.jpg";

const POINTS = [
  {
    Icon: ShoppingCart,
    title: "Order Online",
    body: "Browse diagnostic tools, ECUs, electronic components, and workshop equipment in one catalogue.",
  },
  {
    Icon: PackageCheck,
    title: "Genuine Stock",
    body: "The same genuine parts and authorised tooling our engineers use on commercial vehicles every day.",
  },
  {
    Icon: Truck,
    title: "Fast Dispatch",
    body: "Regional delivery across the UAE and export shipping for fleets and workshops abroad.",
  },
];

export function AdlStore() {
  return (
    <section id="store" className="bg-surface py-24 sm:py-32 lg:py-40">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <img
                src={partsImg}
                alt="Shelves of genuine heavy-duty vehicle parts available on the ADL Automotive online store"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal direction="right">
            <p className="eyebrow">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Online Store
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              ADL Automotive — our e-commerce storefront
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <a
                href={SITE.storefront.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-accent"
              >
                {SITE.storefront.name}
              </a>{" "}
              is the online store of AutoDome, where workshops, fleets, and technicians can buy
              diagnostic tools, ECU hardware, heavy-duty vehicle parts, and workshop equipment
              directly — with the same technical support behind every order.
            </p>

            <ul className="mt-10 space-y-5">
              {POINTS.map((point) => (
                <li key={point.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <point.Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-foreground">
                      {point.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {point.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <a href={SITE.storefront.url} target="_blank" rel="noopener noreferrer">
                  Visit ADL Automotive Store
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <a href="#contact">Request Consultation</a>
              </Button>
            </div>
          </Reveal>
        </div>

        <FeaturedProducts />
      </div>
    </section>
  );
}
