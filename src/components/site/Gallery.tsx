import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import diagnostics from "@/assets/service-diagnostics.jpg";
import ecu from "@/assets/service-ecu.jpg";
import workshop from "@/assets/hero-workshop.jpg";
import training from "@/assets/service-training.jpg";
import fleet from "@/assets/cta-fleet.jpg";
import repairs from "@/assets/about-workshop.jpg";

const ITEMS = [
  { title: "Diagnostics", image: diagnostics },
  { title: "Programming", image: ecu },
  { title: "Workshop", image: workshop },
  { title: "Training", image: training },
  { title: "Fleet Maintenance", image: fleet },
  { title: "Repairs", image: repairs },
];

export function Gallery() {
  const scroller = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: dir * Math.min(node.clientWidth * 0.85, 640), behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <div className="section-shell">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <Reveal className="min-w-0 max-w-3xl">
            <p className="eyebrow">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Inside AutoDome
            </p>
            <h2 className="mt-5 font-display text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              A look at the work behind the results.
            </h2>
          </Reveal>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll gallery left"
              className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll gallery right"
              className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:px-8 lg:px-[max(2rem,calc((100vw-1200px)/2))]"
      >
        {ITEMS.map((item) => (
          <figure
            key={item.title}
            className="group relative aspect-[4/3] w-[85vw] max-w-[460px] shrink-0 snap-start overflow-hidden rounded-3xl shadow-soft sm:w-[420px]"
          >
            <img
              src={item.image}
              alt={`${item.title} at AutoDome's commercial vehicle facility`}
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
            />
            <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/80 to-transparent p-6 sm:p-7">
              <span className="font-display text-lg font-bold text-primary-foreground sm:text-xl">
                {item.title}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
