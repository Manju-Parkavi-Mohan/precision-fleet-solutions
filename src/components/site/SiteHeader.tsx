import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl shadow-soft"
          : "border-b border-transparent",
      )}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <a href="#top" className="group flex items-center gap-3" aria-label="AutoDome home">
          <span
            className={cn(
              "grid h-11 w-11 place-items-center rounded-xl p-1.5 transition-colors",
              scrolled ? "bg-foreground/5" : "bg-primary-foreground/10",
            )}
          >
            <img
              src={logo.url}
              alt="AutoDome logo"
              width={44}
              height={44}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block font-display text-lg font-bold tracking-tight transition-colors",
                scrolled ? "text-foreground" : "text-primary-foreground lg:text-primary-foreground",
              )}
            >
              AUTODOME
            </span>
            <span
              className={cn(
                "block text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors",
                scrolled ? "text-muted-foreground" : "text-primary-foreground/70",
              )}
            >
              Commercial Vehicle Technology
            </span>
          </span>
        </a>


        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-semibold transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-primary-foreground/85 hover:text-primary-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
            className={cn(
              "flex items-center gap-2 text-sm font-semibold transition-colors",
              scrolled
                ? "text-foreground hover:text-primary"
                : "text-primary-foreground hover:text-accent",
            )}
          >
            <Phone className="size-4" aria-hidden="true" />
            {SITE.phones[0]}
          </a>
          <Button asChild variant={scrolled ? "hero" : "onImage"}>
            <a href="#contact">Request Consultation</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className={cn(
            "grid size-11 place-items-center rounded-full border transition-colors lg:hidden",
            scrolled
              ? "border-border bg-card text-foreground"
              : "border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground",
          )}
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </div>

      {/* Slide-in mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-400",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-background px-7 pb-10 pt-7 shadow-lifted transition-transform duration-500",
            open ? "translate-x-0" : "translate-x-full",
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-bold">AUTODOME</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-full border border-border text-foreground"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-4 font-display text-xl font-semibold text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-3 pt-10">
            <Button asChild variant="hero" size="lg" className="w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Request Consultation
              </a>
            </Button>
            <Button asChild variant="outlineBrand" size="lg" className="w-full">
              <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}>Call {SITE.phones[0]}</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
