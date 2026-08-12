import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import aboutImage from "@/assets/about-workshop.jpg";
import { SITE } from "@/lib/site";

const FACTS = [
  { value: "Dealer-level", label: "Diagnostic capability" },
  { value: "End-to-end", label: "Vehicle lifecycle support" },
  { value: "Sharjah, UAE", label: "Engineering headquarters" },
  { value: "Fleet-first", label: "Uptime driven approach" },
];

export function About() {
  return (
    <section id="about" className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal direction="left" className="relative">
          <div className="overflow-hidden rounded-3xl shadow-lifted">
            <img
              src={aboutImage}
              alt="AutoDome engineer running a dealer-level diagnostic scan on a commercial truck engine"
              width={1200}
              height={1408}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft sm:absolute sm:-bottom-10 sm:-right-6 sm:mt-0 sm:max-w-xs lg:-right-10">
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-primary">
              Shop online at {SITE.storefront.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {SITE.storefront.name} is our e-commerce storefront, delivering the tools, parts, and
              workshop equipment behind every AutoDome service.
            </p>
            <a
              href={SITE.storefront.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary underline-offset-4 hover:underline"
            >
              Visit the {SITE.storefront.name} store
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              About AutoDome
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              A technology-driven automotive solutions provider for commercial vehicles and
              equipment.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                AutoDome specialises in commercial vehicles and equipment, providing complete
                solutions including advanced diagnostics, expert repairs, ECU solutions, genuine
                parts supply, and professional technical training.
              </p>
              <p>
                Our mission is straightforward: keep commercial fleets, workshops, and industrial
                operators moving. We combine dealer-level tooling with experienced engineers so
                complex faults are resolved accurately the first time — reducing downtime, cost, and
                operational risk.
              </p>
              <p>
                From a single ECU repair to equipping an entire workshop, every engagement is
                delivered with the same engineering discipline and quality assurance.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <dl className="mt-12 hidden grid-cols-2 gap-8 border-t border-border pt-10 sm:grid">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {fact.value}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{fact.label}</dd>
                </div>
              ))}
            </dl>

            <Button asChild variant="hero" size="lg" className="mt-10 w-full sm:w-auto">
              <a href="#solutions">
                Explore our services
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
