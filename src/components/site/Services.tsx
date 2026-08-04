import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import diagnosticsImg from "@/assets/service-diagnostics.jpg";
import ecuImg from "@/assets/service-ecu.jpg";
import trainingImg from "@/assets/service-training.jpg";
import partsImg from "@/assets/service-parts.jpg";
import equipmentImg from "@/assets/service-equipment.jpg";
import aboutImg from "@/assets/about-workshop.jpg";
import fleetImg from "@/assets/cta-fleet.jpg";

const SERVICES = [
  {
    title: "Diagnosis, Troubleshooting & Repair",
    body: "Advanced diagnosis and repair solutions for heavy-duty commercial vehicles, helping fleets reduce downtime and maintain reliable operations.",
    image: aboutImg,
    alt: "Technician diagnosing a heavy-duty commercial vehicle engine",
  },
  {
    title: "Dealer-Level Diagnostic Tools & Support",
    body: "Professional diagnostic equipment and technical support that enables workshops and technicians to identify complex vehicle issues accurately.",
    image: diagnosticsImg,
    alt: "Dealer-level diagnostic equipment connected to a commercial truck",
  },
  {
    title: "ECU Remapping Tools & File Tuning",
    body: "Performance optimization solutions including ECU tuning tools and file services designed to improve vehicle efficiency and performance.",
    image: fleetImg,
    alt: "Commercial truck fleet optimised for efficiency and performance",
  },
  {
    title: "ECU Repair & Reprogramming",
    body: "Expert ECU repair and programming services for engines, gearboxes, and vehicle electronic systems.",
    image: ecuImg,
    alt: "Engineer repairing a vehicle electronic control unit circuit board",
  },
  {
    title: "Advanced Training Programs",
    body: "Professional training programs designed for technicians and engineers to enhance diagnostic and repair capabilities.",
    image: trainingImg,
    alt: "Automotive technicians attending an AutoDome technical training session",
  },
  {
    title: "Heavy Duty Vehicle Parts Supply",
    body: "Genuine electronic components, control units, and mechanical parts supporting commercial vehicle maintenance.",
    image: partsImg,
    alt: "Warehouse shelving stocked with genuine heavy-duty vehicle parts",
  },
  {
    title: "Workshop Tools & Equipment Trading",
    body: "Complete workshop technology solutions with professional tools and equipment for automotive businesses.",
    image: equipmentImg,
    alt: "Professional workshop tools and equipment supplied by AutoDome",
  },
];

export function Services() {
  return (
    <section id="solutions" className="bg-surface py-24 sm:py-32 lg:py-40">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Core Solutions
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Seven engineering disciplines. One accountable partner.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every AutoDome service is built around measurable uptime, technical accuracy, and
            long-term reliability for commercial vehicle operators.
          </p>
        </Reveal>

        <div className="mt-20 space-y-24 lg:space-y-32">
          {SERVICES.map((service, index) => {
            const flip = index % 2 === 1;
            return (
              <article
                key={service.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
              >
                <Reveal
                  direction={flip ? "right" : "left"}
                  className={flip ? "lg:order-2" : undefined}
                >
                  <div className="group overflow-hidden rounded-3xl shadow-soft">
                    <img
                      src={service.image}
                      alt={service.alt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                  </div>
                </Reveal>

                <Reveal
                  direction={flip ? "left" : "right"}
                  className={flip ? "lg:order-1" : undefined}
                >
                  <p className="font-display text-sm font-bold tracking-[0.2em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-bold leading-snug sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                  <Button asChild variant="hero" className="mt-8 w-full sm:w-auto">
                    <a href="#contact">
                      Learn More
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </Button>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
