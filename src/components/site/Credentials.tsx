import { BadgeCheck, Leaf, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const CERTIFICATIONS = [
  {
    code: "ISO 9001:2015",
    title: "Quality Management",
    body: "Documented processes and controls that keep diagnostic and repair quality consistent on every job.",
    Icon: BadgeCheck,
  },
  {
    code: "ISO 14001:2015",
    title: "Environmental Management",
    body: "Responsible handling of components, consumables, and workshop waste across all operations.",
    Icon: Leaf,
  },
  {
    code: "ISO 45001:2018",
    title: "Health & Safety Management",
    body: "A safety-first workshop culture protecting our engineers, partners, and customer assets.",
    Icon: ShieldCheck,
  },
];

export function Credentials() {
  return (
    <section id="credentials" className="bg-background py-20 sm:py-28 lg:py-36">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Certifications
          </p>
          <h2 className="mt-5 font-display text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Certified management systems.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
          {CERTIFICATIONS.map((cert, index) => (
            <Reveal key={cert.code} delay={index * 90}>
              <article className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lifted sm:p-9">
                <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <cert.Icon className="size-6" aria-hidden="true" />
                </span>
                <p className="mt-7 font-display text-lg font-bold text-foreground">{cert.code}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                  {cert.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{cert.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
