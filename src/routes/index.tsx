import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Credentials } from "@/components/site/Credentials";
import { Industries } from "@/components/site/Industries";
import { AdlStore } from "@/components/site/AdlStore";
import { Brands } from "@/components/site/Brands";
import { Stats } from "@/components/site/Stats";
import { Gallery } from "@/components/site/Gallery";
import { Training } from "@/components/site/Training";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingActions } from "@/components/site/FloatingActions";
import { SITE } from "@/lib/site";

const TITLE = "AutoDome | Commercial Vehicle Diagnostics & ECU Solutions UAE";
const DESCRIPTION =
  "AutoDome delivers advanced commercial vehicle diagnostics, ECU repair and programming, genuine parts, technical training, and workshop equipment across the UAE.";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "AutoDome",
  description: DESCRIPTION,
  email: SITE.email,
  telephone: SITE.phones[0],
  subOrganization: { "@type": "Organization", name: SITE.storefront.name, url: SITE.storefront.url },
  address: {
    "@type": "PostalAddress",
    streetAddress: "407A, Al Sajaa Industrial",
    addressLocality: "Sharjah",
    addressCountry: "AE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: "United Arab Emirates",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Commercial vehicle solutions",
    itemListElement: [
      "Diagnosis, Troubleshooting & Repair",
      "Dealer-Level Diagnostic Tools & Support",
      "ECU Remapping Tools & File Tuning",
      "ECU Repair & Reprogramming",
      "Advanced Training Programs",
      "Heavy Duty Vehicle Parts Supply",
      "Workshop Tools & Equipment Trading",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(STRUCTURED_DATA),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Brands />
        <About />
        <Services />
        <Testimonials />
        <Credentials />
        <Industries />
        <AdlStore />
        <Stats />
        <Gallery />
        <Training />
        <Faq />
        <FinalCta />
        <Contact />
      </main>

      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
