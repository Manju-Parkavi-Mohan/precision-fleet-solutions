import { Reveal } from "./Reveal";
import magicLogo from "@/assets/magic-motorsport.jpg.asset.json";
import jaltestLogo from "@/assets/jaltest.jpg.asset.json";

const PARTNERS = [
  {
    name: "Magic Motorsport",
    role: "Authorized Partner",
    logo: magicLogo.url,
    body: "ECU tuning tools, programming hardware, and file services backed by factory-level support.",
  },
  {
    name: "Jaltest Diagnostics",
    role: "Authorized Partner",
    logo: jaltestLogo.url,
    body: "Multi-brand commercial vehicle diagnostics covering trucks, buses, agriculture, and construction.",
  },
];

export function Partners() {
  return (
    <section aria-label="Authorized partners" className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Authorized Partners
          </p>
          <h2 className="mt-5 font-display text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Authorised technology from global leaders.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 sm:gap-14 md:grid-cols-2 md:gap-16">
          {PARTNERS.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 90}>
              <div className="flex flex-col">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={640}
                  height={280}
                  loading="lazy"
                  decoding="async"
                  className="h-32 w-full max-w-[360px] object-contain object-left sm:h-40"
                />
                <p className="mt-7 font-display text-xl font-bold text-foreground sm:text-2xl">
                  {partner.name}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {partner.role}
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {partner.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
