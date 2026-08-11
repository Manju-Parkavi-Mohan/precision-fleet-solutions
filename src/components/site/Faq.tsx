import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Which vehicles and equipment do you support?",
    a: "We work across heavy-duty commercial vehicles, buses, trailers, construction and agricultural machinery, marine engines, and industrial equipment — including Mercedes-Benz, Volvo, Scania, MAN, DAF, IVECO, Renault Trucks, Cummins, Perkins, Caterpillar, and John Deere.",
  },
  {
    q: "Do you offer diagnostics support to other workshops?",
    a: "Yes. We supply dealer-level diagnostic tools and provide ongoing technical support so workshops and technicians can identify complex vehicle issues accurately in their own facility.",
  },
  {
    q: "Can you repair an ECU rather than replacing it?",
    a: "In most cases, yes. We repair and reprogram ECUs for engines, gearboxes, and vehicle electronic systems, which is usually faster and more cost-effective than a full replacement unit.",
  },
  {
    q: "Are you an authorised partner for any technology brands?",
    a: "AutoDome is an authorised partner of Magic Motorsport and Jaltest Diagnostics, giving our customers access to genuine tooling, licensed software, and manufacturer-level support.",
  },
  {
    q: "Who are your training programs for?",
    a: "Technicians, workshop engineers, and fleet maintenance teams. Programs range from diagnostic fundamentals to advanced electronic systems and ECU work, and can be delivered to corporate groups.",
  },
  {
    q: "Do you supply parts and workshop equipment?",
    a: "Yes. We supply genuine electronic components, control units, and mechanical parts for heavy-duty vehicles, along with complete workshop tooling and equipment packages.",
  },
  {
    q: "Where are you located and can you support fleets outside the UAE?",
    a: "Our facility is in Al Sajaa Industrial, Sharjah, UAE. We support customers regionally and internationally through equipment supply, file services, and remote technical support.",
  },
];

export function Faq() {
  return (
    <section className="bg-surface py-24 sm:py-32 lg:py-40">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal direction="left">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            FAQ
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Answers before you enquire.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Still need clarity? Our engineers respond to technical enquiries directly.
          </p>
        </Reveal>

        <Reveal direction="right">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="py-6 text-left font-display text-base font-semibold hover:no-underline hover:text-primary sm:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
