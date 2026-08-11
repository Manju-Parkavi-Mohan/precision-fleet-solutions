import { Reveal } from "./Reveal";
import { Counter, useRollTrigger } from "./useRollCounter";

const METRICS = [
  { value: 10, suffix: "+", label: "Years of hands-on engineering" },
  { value: 7, suffix: "", label: "Integrated solution divisions" },
  { value: 3, suffix: "", label: "ISO certified management systems" },
  { value: 2, suffix: "", label: "Global authorised partnerships" },
];

export function TrustBar() {
  const { ref, run } = useRollTrigger<HTMLDivElement>();

  return (
    <section aria-label="Trust indicators" className="relative z-10 border-b border-border bg-card">
      <div ref={ref} className="section-shell py-10 sm:py-14">
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
                  <Counter value={metric.value} suffix={metric.suffix} run={run} />
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
