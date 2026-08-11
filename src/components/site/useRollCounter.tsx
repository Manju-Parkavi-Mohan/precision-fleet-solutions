import { useEffect, useRef, useState } from "react";

export function useRollTrigger<T extends HTMLElement>() {
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

export function Counter({
  value,
  suffix,
  run,
}: {
  value: number;
  suffix: string;
  run: number;
}) {
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
