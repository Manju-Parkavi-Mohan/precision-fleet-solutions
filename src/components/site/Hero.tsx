import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workshop.jpg";
import magicLogo from "@/assets/magic-motorsport.jpg.asset.json";
import jaltestLogo from "@/assets/jaltest.jpg.asset.json";

const HERO_PARTNERS = [
  { name: "Magic Motorsport", logo: magicLogo.url },
  { name: "Jaltest Diagnostics", logo: jaltestLogo.url },
];

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(Math.min(window.scrollY * 0.18, 140)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="top" className="relative isolate flex min-h-[92vh] items-end overflow-hidden lg:h-screen lg:min-h-[720px]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroImage}
          alt="Heavy-duty commercial trucks raised on lifts inside AutoDome's modern diagnostics workshop"
          width={1920}
          height={1088}
          fetchPriority="high"
          decoding="async"
          className="h-[115%] w-full object-cover"
          style={{ transform: `translate3d(0, -${offset}px, 0)` }}
        />
        <div className="absolute inset-0 bg-hero-veil" />
      </div>

      <div className="section-shell pb-16 pt-32 sm:pb-24 lg:pb-28">
        <div className="max-w-3xl">
          <p className="reveal is-visible inline-flex items-center gap-3 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            UAE&apos;s Commercial Vehicle Technology Partner
          </p>

          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.06] text-primary-foreground sm:text-5xl lg:text-[4.25rem]">
            Powering Smarter Mobility Through{" "}
            <span className="text-accent">Advanced Vehicle Technology</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground sm:text-lg">
            AutoDome delivers advanced commercial vehicle diagnostics, ECU solutions, repairs,
            genuine parts, technical training, and workshop technology solutions for fleets,
            workshops, and industrial vehicle operators.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <a href="#contact">
                Request Technical Consultation
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="onImage" size="xl" className="w-full sm:w-auto">
              <a href="#solutions">Explore Services</a>
            </Button>
          </div>

          <div className="mt-10 border-t border-primary-foreground/20 pt-6 sm:mt-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground/80">
              Authorized Partners
            </p>
            <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              {HERO_PARTNERS.map((partner) => (
                <li
                  key={partner.name}
                  className="flex w-full items-center justify-center rounded-2xl bg-primary-foreground/95 px-5 py-3 shadow-soft sm:w-auto"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} authorized partner logo`}
                    width={320}
                    height={120}
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-auto max-w-[200px] object-contain sm:h-14 sm:max-w-[240px]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-primary-foreground/70 lg:block">
        <ChevronDown className="size-6 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
}
