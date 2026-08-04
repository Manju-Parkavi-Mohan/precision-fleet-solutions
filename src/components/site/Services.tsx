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
    body: "We provide diagnosis, troubleshooting, and repair for heavy-duty commercial vehicles to keep your fleet running smoothly. Our skilled technicians use advanced tools to find and fix problems quickly and efficiently. From engines and transmissions to electrical and hydraulic systems, we take care of every part of your vehicle. With a focus on reliability, safety, and minimal downtime, we help businesses get the best performance and longer life from their commercial vehicles.",
    image: aboutImg,
    alt: "Technician diagnosing a heavy-duty commercial vehicle engine",
  },
  {
    title: "Dealer-Level Diagnostic Tools & Support",
    body: "We offer dealer-level diagnostic tools along with full technical support, helping automotive professionals accurately diagnose and repair vehicles. Our range of advanced tools is designed for precision, efficiency, and reliability, ensuring technicians can quickly identify and resolve issues. With expert guidance and ongoing support, we empower workshops and service centers to maintain high standards of vehicle performance and customer satisfaction.",
    image: diagnosticsImg,
    alt: "Dealer-level diagnostic equipment connected to a commercial truck",
  },
  {
    title: "ECU Remapping Tools & File Tuning",
    body: "We provide ECU remapping tools and file tuning services to enhance the performance, efficiency, and drivability of vehicles. Our advanced tools allow precise adjustments to engine control parameters, while our expert team offers professional file tuning tailored to each vehicle's needs. Whether it's for improved power, fuel efficiency, or smoother performance, our solutions ensure optimal results while maintaining reliability and safety.",
    image: fleetImg,
    alt: "Commercial truck fleet optimised for efficiency and performance",
  },
  {
    title: "ECU Repair & Reprogramming",
    body: "Our highly skilled technicians specialize in ECU repairs and reprogramming for all types of engines and gearboxes. We ensure accurate diagnostics, reliable solutions, and professional service to get your vehicles back on the road with optimal performance.",
    image: ecuImg,
    alt: "Engineer repairing a vehicle electronic control unit circuit board",
  },
  {
    title: "Advanced Training Programs",
    body: "We deliver advanced training programs for engineers and technicians, designed to enhance skills and keep professionals up-to-date with the latest automotive technologies. Our hands-on courses cover diagnostics, repair techniques, ECU tuning, and the use of modern tools, providing practical knowledge that can be applied directly in the workshop. With expert instructors and real-world training scenarios, we empower technicians to improve efficiency, accuracy, and overall performance in their work.",
    image: trainingImg,
    alt: "Automotive technicians attending an AutoDome technical training session",
  },
  {
    title: "Heavy Duty Vehicle Parts Supply",
    body: "We maintain a large inventory of electronic control units, electronic components, and mechanical parts for all major commercial vehicle brands. In addition, our experienced team can source special or hard-to-find parts for any brand of commercial vehicles and construction equipment, ensuring timely delivery and reliable support.",
    image: partsImg,
    alt: "Warehouse shelving stocked with genuine heavy-duty vehicle parts",
  },
  {
    title: "Workshop Tools & Equipment Trading",
    body: "We specialize in trading workshop tools and equipment, offering a wide range of high-quality products for automotive and industrial workshops. From hand tools and power tools to diagnostic equipment and specialized machinery, we provide reliable solutions to meet every workshop's needs. Our focus is on quality, durability, and affordability, ensuring that professionals have the right tools to work efficiently and maintain high standards of service.",
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
