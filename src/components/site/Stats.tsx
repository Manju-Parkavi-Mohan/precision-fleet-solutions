import { useEffect, useState } from "react";
import { useInView } from "./Reveal";

const STATS = [
  { value: 10, suffix: "K+", label: "Vehicles Serviced" },
  { value: 1, suffix: "K+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Hour Support" },
];

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const duration = 1800;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <span>
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section aria-label="Company statistics" className="bg-primary py-24 sm:py-28 lg:py-32">
      <div ref={ref} className="section-shell">
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-display text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} active={inView} />
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
