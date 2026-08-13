import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

const PREVIEW_LENGTH = 165;

function ServiceSlide({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const needsToggle = service.body.length > PREVIEW_LENGTH;
  const preview = needsToggle
    ? `${service.body.slice(0, PREVIEW_LENGTH).trimEnd()}… `
    : service.body;

  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
      <div className="overflow-hidden rounded-3xl shadow-soft">
        <img
          src={service.image}
          alt={service.alt}
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>

      <div>
        <p className="font-display text-sm font-bold tracking-[0.2em] text-primary-foreground/70">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 font-display text-xl font-bold leading-snug sm:text-2xl lg:text-3xl">
          {service.title}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {expanded ? `${service.body} ` : preview}
          {needsToggle && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline font-semibold text-primary-foreground underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              {expanded ? "Show less" : "Learn more"}
            </button>
          )}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild variant="light" className="w-full sm:w-auto">
            <a href="/#contact">
              Request Consultation
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Link
            to="/services/$slug"
            params={{ slug: service.slug }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            View service page
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function Services() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = SERVICES.length;

  const go = useCallback(
    (dir: number) => setActive((i) => (i + dir + total) % total),
    [total],
  );

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % total), 7000);
    return () => window.clearInterval(id);
  }, [paused, total]);

  return (
    <section id="solutions" className="section-dark py-20 sm:py-28 lg:py-36">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow !text-primary-foreground">
            <span className="h-px w-8 bg-primary-foreground" aria-hidden="true" />
            Services
          </p>
          <h2 className="mt-5 font-display text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Seven engineering disciplines. One accountable partner.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-lg">
            Every AutoDome service is built around measurable uptime, technical accuracy, and
            long-term reliability for commercial vehicle operators.
          </p>
        </Reveal>

        <Reveal className="mt-12 sm:mt-16">
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="AutoDome services"
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {SERVICES.map((service, index) => (
                  <div
                    key={service.title}
                    className="w-full shrink-0 px-0.5"
                    aria-hidden={index !== active}
                  >
                    <ServiceSlide service={service} index={index} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous service"
                className="grid size-11 shrink-0 place-items-center rounded-full border border-primary-foreground/30 bg-transparent text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground hover:text-ink"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-2">
                {SERVICES.map((service, index) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Go to ${service.title}`}
                    aria-current={index === active}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      index === active
                        ? "w-7 bg-primary-foreground"
                        : "w-2 bg-primary-foreground/35 hover:bg-primary-foreground/70",
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next service"
                className="grid size-11 shrink-0 place-items-center rounded-full border border-primary-foreground/30 bg-transparent text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground hover:text-ink"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
