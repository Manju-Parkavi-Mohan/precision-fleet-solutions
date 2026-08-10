import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 10, suffix: "K+", label: "Vehicles Serviced" },
  { value: 1, suffix: "K+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Hour Support" },
];

function useRollTrigger<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [run, setRun] = useState(0);

  useEffect(() => {
    // roll once on first load, then again every time the block scrolls into view
    setRun((n) => n + 1);
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setRun((n) => n + 1);
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, run };
}

function Counter({ value, suffix, run }: { value: number; suffix: string; run: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!run) return;
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
    setDisplay(0);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, value]);

  return (
    <span>
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

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
