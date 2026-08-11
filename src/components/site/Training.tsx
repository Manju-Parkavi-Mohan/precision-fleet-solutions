import { ArrowRight, GraduationCap, Users, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import trainingImage from "@/assets/service-training.jpg";

const PILLARS = [
  { Icon: GraduationCap, title: "Certification", body: "Structured programs with formal assessment and certificates of completion." },
  { Icon: Users, title: "Hands-on workshops", body: "Live vehicle and bench sessions on real ECUs and diagnostic hardware." },
  { Icon: ClipboardCheck, title: "Corporate learning", body: "Tailored fleet and workshop team training, delivered on-site or at our facility." },
];

export function Training() {
  return (
    <section id="training" className="relative isolate overflow-hidden py-28 sm:py-32 lg:py-40">
      <img
        src={trainingImage}
        alt="AutoDome instructor leading an advanced diagnostics training program"
        width={1600}
        height={900}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <span className="absolute inset-0 -z-10 bg-hero-veil" aria-hidden="true" />
      <span className="absolute inset-0 -z-10 bg-foreground/55" aria-hidden="true" />

      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Advanced Training Programs
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Technical training that raises the capability of your entire team.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Our professional programs are designed for technicians and engineers who need real
            diagnostic depth — electronic systems, ECU work, fault tracing, and modern workshop
            practice, taught by working engineers.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 90}>
              <div className="h-full rounded-2xl border border-primary-foreground/25 bg-foreground/90 p-7 shadow-lifted backdrop-blur-md">
                <pillar.Icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg font-bold text-primary-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <Button asChild variant="light" size="xl" className="mt-12 w-full sm:w-auto">
            <a href="#contact">
              View Programs
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
