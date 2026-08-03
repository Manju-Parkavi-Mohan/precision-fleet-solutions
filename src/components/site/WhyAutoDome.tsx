import { Cpu, Layers, Wrench, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const REASONS = [
  {
    title: "Engineering Expertise",
    body: "Experienced professionals delivering reliable commercial vehicle solutions.",
    Icon: Wrench,
  },
  {
    title: "Complete Automotive Solutions",
    body: "Diagnostics, repairs, ECU solutions, parts, training, and equipment under one roof.",
    Icon: Layers,
  },
  {
    title: "Advanced Technology",
    body: "Using modern diagnostic equipment and industry-leading solutions.",
    Icon: Cpu,
  },
  {
    title: "Fleet-Focused Approach",
    body: "Helping businesses maximize uptime and vehicle reliability.",
    Icon: TrendingUp,
  },
];

export function WhyAutoDome() {
  return (
    <section className="bg-surface py-24 sm:py-32 lg:py-40">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Why AutoDome
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Chosen by operators who cannot afford downtime.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {REASONS.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 80}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lifted">
                <span
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <reason.Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-8 font-display text-xl font-bold sm:text-2xl">{reason.title}</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  {reason.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
