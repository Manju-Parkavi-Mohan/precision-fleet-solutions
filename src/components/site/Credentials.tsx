import { BadgeCheck, Leaf, ShieldCheck, Handshake } from "lucide-react";
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

const PARTNERS = [
  {
    name: "Magic Motorsport",
    role: "Authorized Partner",
    body: "ECU tuning tools, programming hardware, and file services backed by factory-level support.",
  },
  {
    name: "Jaltest Diagnostics",
    role: "Authorized Partner",
    body: "Multi-brand commercial vehicle diagnostics covering trucks, buses, agriculture, and construction.",
  },
];

export function Credentials() {
  return (
    <section id="credentials" className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Certifications & Partners
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Certified systems. Authorised technology.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CERTIFICATIONS.map((cert, index) => (
            <Reveal key={cert.code} delay={index * 90}>
              <article className="group h-full rounded-3xl border border-border bg-card p-9 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lifted">
                <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <cert.Icon className="size-6" aria-hidden="true" />
                </span>
                <p className="mt-8 font-display text-lg font-bold text-foreground">{cert.code}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                  {cert.title}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{cert.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PARTNERS.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 90}>
              <article className="flex h-full flex-col gap-6 rounded-3xl border border-border bg-surface p-9 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lifted sm:flex-row sm:items-center">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-card text-primary shadow-soft">
                  <Handshake className="size-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-xl font-bold text-foreground">{partner.name}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    {partner.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {partner.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
