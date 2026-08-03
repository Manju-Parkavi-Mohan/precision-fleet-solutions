import { useState, type FormEvent } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  CheckCircle2,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";

const BRANDS = [
  "Mercedes-Benz",
  "Volvo",
  "Scania",
  "MAN",
  "DAF",
  "IVECO",
  "Renault Trucks",
  "Cummins",
  "Perkins",
  "Caterpillar",
  "John Deere",
  "Other / Mixed fleet",
];

const SERVICES = [
  "Diagnosis, Troubleshooting & Repair",
  "Dealer-Level Diagnostic Tools & Support",
  "ECU Remapping Tools & File Tuning",
  "ECU Repair & Reprogramming",
  "Advanced Training Programs",
  "Heavy Duty Vehicle Parts Supply",
  "Workshop Tools & Equipment Trading",
];

const FLEET_SIZES = ["1 – 5 vehicles", "6 – 20 vehicles", "21 – 100 vehicles", "100+ vehicles", "Workshop / Trade enquiry"];

const selectClass =
  "flex h-11 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-surface py-24 sm:py-32 lg:py-40">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Contact
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Request a technical consultation.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal direction="left">
            <div className="space-y-8">
              <ul className="space-y-7">
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground">
                      Location
                    </p>
                    <p className="mt-1 text-base text-muted-foreground">{SITE.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground">
                      Phone
                    </p>
                    {SITE.phones.map((phone) => (
                      <p key={phone} className="mt-1">
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="text-base text-muted-foreground transition-colors hover:text-primary"
                        >
                          {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-1 inline-block text-base text-muted-foreground transition-colors hover:text-primary"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground">
                      Business Hours
                    </p>
                    <dl className="mt-2 space-y-1 text-base text-muted-foreground">
                      {SITE.hours.map((slot) => (
                        <div key={slot.days} className="flex flex-wrap gap-x-3">
                          <dt className="min-w-[9rem]">{slot.days}</dt>
                          <dd className="font-medium text-foreground">{slot.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outlineBrand">
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    WhatsApp
                  </a>
                </Button>
                {[
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Facebook, label: "Facebook" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#contact"
                    aria-label={`AutoDome on ${label}`}
                    className="grid size-11 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                ))}
              </div>

              <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
                <iframe
                  title="AutoDome location — Al Sajaa Industrial, Sharjah"
                  src={`https://www.google.com/maps?q=${SITE.mapQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0"
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-lifted sm:p-10">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid size-16 place-items-center rounded-full bg-primary-soft text-primary">
                    <CheckCircle2 className="size-8" aria-hidden="true" />
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-bold">Enquiry received</h3>
                  <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
                    Thank you. An AutoDome engineer will review your requirement and respond within
                    one business day. For urgent fleet downtime, call {SITE.phones[1]}.
                  </p>
                  <Button
                    variant="outlineBrand"
                    className="mt-9"
                    onClick={() => {
                      setSubmitted(false);
                      setConsent(false);
                    }}
                  >
                    Submit another enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" name="fullName" required autoComplete="name" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" autoComplete="organization" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" name="country" defaultValue="" autoComplete="country-name" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required autoComplete="email" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" required autoComplete="tel" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brand">Vehicle Brand</Label>
                      <select id="brand" name="brand" className={selectClass} defaultValue="">
                        <option value="" disabled>
                          Select a brand
                        </option>
                        {BRANDS.map((brand) => (
                          <option key={brand} value={brand}>
                            {brand}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required</Label>
                      <select id="service" name="service" className={selectClass} defaultValue="">
                        <option value="" disabled>
                          Select a service
                        </option>
                        {SERVICES.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fleetSize">Fleet Size</Label>
                      <select id="fleetSize" name="fleetSize" className={selectClass} defaultValue="">
                        <option value="" disabled>
                          Select fleet size
                        </option>
                        {FLEET_SIZES.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about the vehicles, fault symptoms, or equipment requirement."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="attachment">Upload File (optional)</Label>
                    <Input
                      id="attachment"
                      name="attachment"
                      type="file"
                      className="h-11 cursor-pointer py-2.5 file:mr-3 file:cursor-pointer file:rounded-full file:border-0 file:bg-secondary file:px-3 file:py-1 file:text-xs file:font-semibold file:text-secondary-foreground"
                    />
                    <p className="text-xs text-muted-foreground">
                      Fault reports, ECU photos, or equipment lists help us respond faster.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <Checkbox
                      id="consent"
                      checked={consent}
                      onCheckedChange={(value) => setConsent(value === true)}
                      required
                      className="mt-1"
                    />
                    <Label htmlFor="consent" className="text-sm font-normal leading-relaxed text-muted-foreground">
                      I consent to AutoDome storing and using the details above to respond to my
                      enquiry.
                    </Label>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={!consent}>
                    Submit Enquiry
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
