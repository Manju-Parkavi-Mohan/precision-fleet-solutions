import { Counter, useRollTrigger } from "./useRollCounter";

const STATS = [
  { value: 10, suffix: "K+", label: "Vehicles Serviced" },
  { value: 1, suffix: "K+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Hour Support" },
];


export function Stats() {
  const { ref, run } = useRollTrigger<HTMLDivElement>();

  return (
    <section aria-label="Company statistics" className="bg-primary py-20 sm:py-28 lg:py-32">
      <div ref={ref} className="section-shell">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "px-4 py-8 text-center sm:px-6 sm:py-10",
                index % 2 === 1
                  ? "border-l border-primary-foreground/20"
                  : "",
                index >= 2 ? "border-t border-primary-foreground/20 lg:border-t-0" : "",
                "lg:border-l lg:first:border-l-0",
              ].join(" ")}
            >
              <p className="font-display text-3xl font-bold tracking-[0.06em] text-primary-foreground sm:text-5xl lg:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} run={run} />
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/70 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
