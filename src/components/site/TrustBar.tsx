import { Reveal } from "./Reveal";

const METRICS = [
  { value: "10+", label: "Years of hands-on engineering" },
  { value: "7", label: "Integrated solution divisions" },
  { value: "3", label: "ISO certified management systems" },
  { value: "2", label: "Global authorised partnerships" },
];

const BADGES = [
  "Magic Motorsport Authorized Partner",
  "Jaltest Diagnostics Authorized Partner",
  "ISO 9001:2015",
  "ISO 14001:2015",
  "ISO 45001:2018",
];

export function TrustBar() {
  return (
    <section aria-label="Trust indicators" className="relative z-10 border-b border-border bg-card">
      <div className="section-shell py-14 sm:py-16">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {METRICS.map((metric) => (
              <div key={metric.label} className="lg:border-l lg:border-border lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
                <p className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                  {metric.value}
                </p>
                <p className="mt-2 max-w-[16ch] text-sm leading-snug text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="no-scrollbar mt-12 flex gap-3 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {BADGES.map((badge) => (
              <li
                key={badge}
                className="shrink-0 rounded-full border border-border bg-surface px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
              >
                {badge}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
