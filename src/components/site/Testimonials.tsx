import { Quote, Star, ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "./Reveal";
import { REVIEWS_URL } from "@/lib/site";

const TOTAL_REVIEWS = 20;

// Google reviews with written feedback, sorted by rating then by review length.
const TESTIMONIALS = [
  {
    quote:
      "Thank you so much for the excellent service. Honestly, the treatment exceeded expectations in terms of efficiency and expertise.",
    name: "Mahmoud Elamin",
    rating: 5,
  },
  {
    quote: "10 years of experience with the team. Top services",
    name: "Zabir Alam",
    rating: 5,
  },
  {
    quote: "Friendly staffs and beautiful atmosphere 😍😍",
    name: "Asheeq Mohammed",
    rating: 5,
  },
  {
    quote: "One stop place for heavy equipment. Computer experts.",
    name: "Praveen TG",
    rating: 5,
  },
  {
    quote: "The best car garage in the UAE, I highly recommend it.",
    name: "Mostafa Shehata",
    rating: 5,
  },
  {
    quote: "One of the best truck experts in UAE",
    name: "Fais Karunath",
    rating: 5,
  },
  {
    quote: "Last option of all heavy equipments 👍",
    name: "Pramod Radhakrishnan",
    rating: 5,
  },
  {
    quote: "Professional team",
    name: "Muhammed. Rafi.",
    rating: 5,
  },
  {
    quote: "Good team",
    name: "mejo Joseph",
    rating: 5,
  },
  {
    quote: "Reliable",
    name: "Honest World",
    rating: 5,
  },
]
  .slice()
  .sort((a, b) => b.rating - a.rating || b.quote.length - a.quote.length);

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="size-4 fill-accent text-accent" aria-hidden="true" />
      ))}
    </div>
  );
}

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
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Stars rating={5} />
            <p className="text-sm font-semibold text-foreground">
              5.0 from {TOTAL_REVIEWS} Google reviews
            </p>
            <a
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary underline underline-offset-4 transition-colors hover:text-accent"
            >
              Read all {TOTAL_REVIEWS} reviews
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Carousel opts={{ align: "start", loop: true }} className="mt-14">
            <CarouselContent className="-ml-5">
              {TESTIMONIALS.map((item) => (
                <CarouselItem key={item.name} className="pl-5 md:basis-1/2 lg:basis-1/3">
                  <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-9 shadow-soft">
                    <Quote className="size-9 text-accent" aria-hidden="true" />
                    <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground">
                      {item.quote}
                    </blockquote>
                    <figcaption className="mt-8 border-t border-border pt-6">
                      <Stars rating={item.rating} />
                      <p className="mt-2 font-display text-sm font-bold text-foreground">
                        {item.name}
                      </p>
                      <a
                        href={REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
                      >
                        View review on Google
                        <ArrowUpRight className="size-3" aria-hidden="true" />
                      </a>
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
