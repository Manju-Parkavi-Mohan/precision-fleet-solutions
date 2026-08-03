import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "AutoDome diagnosed an intermittent electronic fault two other workshops could not find. Our truck was back on the road the same week.",
    name: "Fleet Operations Manager",
    company: "Regional logistics operator, Sharjah",
  },
  {
    quote:
      "Their ECU repair and reprogramming turnaround is exceptional, and the technical support afterwards is just as strong.",
    name: "Workshop Owner",
    company: "Heavy vehicle service centre, Dubai",
  },
  {
    quote:
      "We equipped our workshop through AutoDome and trained our technicians with them. One partner, and the capability jump was immediate.",
    name: "Maintenance Director",
    company: "Construction equipment fleet, UAE",
  },
  {
    quote:
      "Genuine parts, accurate diagnostics, and honest advice. That combination is rare in commercial vehicle service.",
    name: "Transport Supervisor",
    company: "Public transport operator",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface py-24 sm:py-32 lg:py-40">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Client Feedback
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Trusted by fleets, workshops, and industrial operators.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <Carousel opts={{ align: "start", loop: true }} className="mt-14">
            <CarouselContent className="-ml-5">
              {TESTIMONIALS.map((item) => (
                <CarouselItem key={item.quote} className="pl-5 md:basis-1/2 lg:basis-1/3">
                  <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-9 shadow-soft">
                    <Quote className="size-9 text-accent" aria-hidden="true" />
                    <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground">
                      {item.quote}
                    </blockquote>
                    <figcaption className="mt-8 border-t border-border pt-6">
                      <p className="font-display text-sm font-bold text-foreground">{item.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-10 flex justify-end gap-3">
              <CarouselPrevious className="static translate-y-0 size-11" />
              <CarouselNext className="static translate-y-0 size-11" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
