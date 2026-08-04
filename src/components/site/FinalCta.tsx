import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import ctaImage from "@/assets/cta-fleet.jpg";
import { SITE } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-32 lg:py-40">
      <img
        src={ctaImage}
        alt="Large commercial truck fleet parked at a logistics depot at sunrise"
        width={1920}
        height={1000}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full scale-105 object-cover blur-[3px]"
      />
      <span
        className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/50"
        aria-hidden="true"
      />

      <div className="section-shell text-center">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Let&apos;s Keep Your Fleet Moving
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Share your vehicles, workshop needs, or technical challenge. An AutoDome engineer will
            review it and respond with a clear, practical recommendation.
          </p>
          <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <a href={`tel:${SITE.phones[1].replace(/\s/g, "")}`}>
                <PhoneCall className="size-4" aria-hidden="true" />
                Talk to an Expert
              </a>
            </Button>
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <a href="#contact">
                Request Consultation
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
