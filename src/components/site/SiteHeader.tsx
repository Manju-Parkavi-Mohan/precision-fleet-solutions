import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/site";
import logo from "@/assets/autodome-logo.png";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
      <div className="section-shell flex h-20 items-center justify-between gap-4 sm:h-24 sm:gap-6">
        <a href="/#top" className="group flex min-w-0 items-center gap-3" aria-label="AutoDome home">
          <span className="grid shrink-0 place-items-center rounded-2xl bg-foreground px-3 py-2 shadow-soft">
            <img
              src={logo}
              alt="AutoDome logo"
              width={200}
              height={80}
              className="h-11 w-auto object-contain sm:h-12 lg:h-14"
            />
          </span>

          <span className="hidden min-w-0 leading-tight sm:block lg:hidden xl:block">
            <span
              className={cn(
                "block font-display text-lg font-bold tracking-tight transition-colors sm:text-xl",
                scrolled ? "text-foreground" : "text-primary-foreground lg:text-primary-foreground",
              )}
            >
              AUTODOME
            </span>
            <span
              className={cn(
                "block truncate text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors sm:text-[10px] sm:tracking-[0.22em]",
                scrolled ? "text-muted-foreground" : "text-primary-foreground/70",
              )}
            >
              Commercial Vehicle Technology
            </span>
          </span>
        </a>


        <nav className="hidden items-center gap-5 lg:flex xl:gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const linkClass = cn(
              "relative whitespace-nowrap text-sm font-semibold transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
              scrolled
                ? "text-muted-foreground hover:text-primary"
                : "text-primary-foreground/85 hover:text-primary-foreground",
            );

            if ("hasServicesMenu" in link && link.hasServicesMenu) {
              return (
                <div key={link.href} className="group relative">
                  <a href={link.href} className={cn(linkClass, "inline-flex items-center gap-1")}>
                    {link.label}
                    <ChevronDown className="size-3.5" aria-hidden="true" />
                  </a>
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-lifted">
                      {SERVICES.map((service) => (
                        <li key={service.slug}>
                          <Link
                            to="/services/$slug"
                            params={{ slug: service.slug }}
                            className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-surface hover:text-primary"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            return (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
            className={cn(
              "hidden items-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors xl:flex",
              scrolled
                ? "text-foreground hover:text-primary"
                : "text-primary-foreground hover:text-accent",
            )}
          >
            <Phone className="size-4" aria-hidden="true" />
            {SITE.phones[0]}
          </a>
          <Button asChild variant="hero" className="whitespace-nowrap">
            <a href="/#contact">Request Consultation</a>
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
          <div className="flex items-center justify-between gap-3">
            <span className="flex min-w-0 items-center gap-3">
              <span className="grid shrink-0 place-items-center rounded-2xl bg-foreground px-3 py-2">
                <img
                  src={logo}
                  alt="AutoDome logo"
                  width={180}
                  height={72}
                  className="h-11 w-auto object-contain"
                />
              </span>

              <span className="min-w-0 leading-tight">
                <span className="block font-display text-lg font-bold tracking-tight">AUTODOME</span>
                <span className="block truncate text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Commercial Vehicle Technology
                </span>
              </span>
            </span>
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
            {NAV_LINKS.map((link) =>
              "hasServicesMenu" in link && link.hasServicesMenu ? (
                <div key={link.href} className="border-b border-border/70">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    className="flex w-full items-center justify-between py-4 font-display text-xl font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn("size-5 transition-transform", servicesOpen && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                  {servicesOpen && (
                    <ul className="pb-4">
                      {SERVICES.map((service) => (
                        <li key={service.slug}>
                          <Link
                            to="/services/$slug"
                            params={{ slug: service.slug }}
                            onClick={() => setOpen(false)}
                            className="block py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/70 py-4 font-display text-xl font-semibold text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className="mt-auto space-y-3 pt-10">
            <Button asChild variant="hero" size="lg" className="w-full">
              <a href="/#contact" onClick={() => setOpen(false)}>
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
