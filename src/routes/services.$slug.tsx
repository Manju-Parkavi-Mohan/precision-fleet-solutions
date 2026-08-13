import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, Check, PhoneCall } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { SERVICES, getService } from "@/lib/services";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service unavailable | AutoDome" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.service.title} | AutoDome`;
    const description = loaderData.service.intro;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="relative isolate overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
          <img
            src={service.image}
            alt={service.alt}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
          <span
            className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/55"
            aria-hidden="true"
          />
          <div className="section-shell">
            <nav aria-label="Breadcrumb" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">
              <Link to="/" className="transition-colors hover:text-primary-foreground">
                Home
              </Link>
              <span className="px-2">/</span>
              <span className="text-primary-foreground">Services</span>
            </nav>
            <h1 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {service.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <a href="/#contact">
                  Request Consultation
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="light" size="lg" className="w-full sm:w-auto">
                <a href={`tel:${SITE.phones[1].replace(/\s/g, "")}`}>
                  <PhoneCall className="size-4" aria-hidden="true" />
                  Talk to an Engineer
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="section-shell grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                Overview
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {service.body}
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {service.highlights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                    <p className="font-display text-base font-bold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="rounded-3xl border border-border bg-surface p-8 shadow-soft">
                <p className="font-display text-lg font-bold text-foreground">What&apos;s included</p>
                <ul className="mt-6 space-y-4">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="hero" className="mt-8 w-full">
                  <a href="/#contact">Request Consultation</a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-surface py-16 sm:py-24">
          <div className="section-shell">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Other AutoDome services</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: item.slug }}
                    className="flex h-full items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <span className="font-display text-sm font-bold text-foreground">{item.title}</span>
                    <ArrowRight className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
