import { Reveal } from "./Reveal";

const METRICS = [
  { value: "10+", label: "Years of hands-on engineering" },
  { value: "7", label: "Integrated solution divisions" },
  { value: "3", label: "ISO certified management systems" },
  { value: "2", label: "Global authorised partnerships" },
];

export function TrustBar() {
  return (
    <section aria-label="Trust indicators" className="relative z-10 border-b border-border bg-card">
      <div className="section-shell py-10 sm:py-14">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {METRICS.map((metric, index) => (
              <div
                key={metric.label}
                className={[
                  "px-3 py-6 text-center sm:px-6 sm:py-8",
                  index % 2 === 1 ? "border-l border-border" : "",
                  index >= 2 ? "border-t border-border lg:border-t-0" : "",
                  "lg:border-l lg:first:border-l-0",
                ].join(" ")}
              >
                <p className="font-display text-3xl font-bold tracking-tight text-primary sm:text-5xl">
                  {metric.value}
                </p>
                <p className="mx-auto mt-2 max-w-[18ch] text-sm leading-snug text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
