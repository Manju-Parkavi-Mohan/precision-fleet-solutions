import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import logo from "@/assets/autodome-logo.png";

const SERVICES = [
  "Diagnosis, Troubleshooting & Repair",
  "Dealer-Level Diagnostic Tools",
  "ECU Remapping & File Tuning",
  "ECU Repair & Reprogramming",
  "Advanced Training Programs",
  "Heavy Duty Vehicle Parts",
  "Workshop Tools & Equipment",
];

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="section-shell py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-foreground/10 p-1.5">
                <img
                  src={logo}
                  alt="AutoDome logo"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-display text-xl font-bold tracking-tight">AUTODOME</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              A technology-driven automotive solutions provider specialising in commercial vehicles
              and equipment — diagnostics, ECU solutions, repairs, genuine parts, training, and
              workshop technology.
            </p>
            <div className="mt-7 flex gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#contact"
                  aria-label={`AutoDome on ${label}`}
                  className="grid size-10 place-items-center rounded-full border border-primary-foreground/25 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Quick Links
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-primary-foreground/75">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-primary-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Services
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-primary-foreground/75">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a href="#solutions" className="transition-colors hover:text-primary-foreground">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Contact
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-primary-foreground/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{SITE.address}</span>
              </li>
              {SITE.phones.map((phone) => (
                <li key={phone} className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-primary-foreground"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-primary-foreground"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>

            <h2 className="mt-8 font-display text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Business Hours
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
              {SITE.hours.map((slot) => (
                <li key={slot.days}>
                  {slot.days}: {slot.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AutoDome. All rights reserved.</p>
          <p className="font-semibold tracking-wide text-primary-foreground/80">
            Online store:{" "}
            <a
              href={SITE.storefront.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {SITE.storefront.name}
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}
