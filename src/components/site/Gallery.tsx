import { Reveal } from "./Reveal";
import diagnostics from "@/assets/service-diagnostics.jpg";
import ecu from "@/assets/service-ecu.jpg";
import workshop from "@/assets/hero-workshop.jpg";
import training from "@/assets/service-training.jpg";
import fleet from "@/assets/cta-fleet.jpg";
import repairs from "@/assets/about-workshop.jpg";

const ITEMS = [
  { title: "Diagnostics", image: diagnostics, span: "sm:row-span-2" },
  { title: "Programming", image: ecu, span: "" },
  { title: "Workshop", image: workshop, span: "" },
  { title: "Training", image: training, span: "" },
  { title: "Fleet Maintenance", image: fleet, span: "" },
  { title: "Repairs", image: repairs, span: "sm:row-span-2" },
];

export function Gallery() {
  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Inside AutoDome
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            A look at the work behind the results.
          </h2>
        </Reveal>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, index) => (
            <Reveal
              key={item.title}
              direction="scale"
              delay={(index % 3) * 80}
              className={item.span}
            >
              <figure className="group relative h-full overflow-hidden rounded-3xl shadow-soft">
                <img
                  src={item.image}
                  alt={`${item.title} at AutoDome's commercial vehicle facility`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/80 to-transparent p-7 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="font-display text-xl font-bold text-primary-foreground">
                    {item.title}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
