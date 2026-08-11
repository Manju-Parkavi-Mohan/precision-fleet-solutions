import { Reveal } from "./Reveal";
import logistics from "@/assets/ind-logistics.jpg";
import construction from "@/assets/ind-construction.jpg";
import mining from "@/assets/ind-mining.jpg";
import agriculture from "@/assets/ind-agriculture.jpg";
import marine from "@/assets/ind-marine.jpg";
import transport from "@/assets/ind-transport.jpg";
import equipment from "@/assets/service-equipment.jpg";

const INDUSTRIES = [
  { name: "Logistics", body: "Long-haul and distribution fleets", image: logistics },
  { name: "Construction", body: "Site machinery and tipper fleets", image: construction },
  { name: "Mining", body: "Haulage and heavy earthmoving", image: mining },
  { name: "Agriculture", body: "Tractors and harvesting equipment", image: agriculture },
  { name: "Marine", body: "Auxiliary and propulsion engines", image: marine },
  { name: "Public Transport", body: "Bus and passenger fleets", image: transport },
  { name: "Industrial Equipment", body: "Generators and plant machinery", image: equipment },
];

export function Industries() {
  return (
    <section id="industries" className="bg-surface py-24 sm:py-32 lg:py-40">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Industries We Serve
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Engineering support across every heavy-duty sector.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <Reveal
              key={industry.name}
              direction="scale"
              delay={(index % 3) * 90}
              className={index === 0 ? "lg:row-span-2" : ""}
            >
              <article className="group relative h-full min-h-[280px] overflow-hidden rounded-3xl shadow-soft">
                <img
                  src={industry.image}
                  alt={`${industry.name} vehicles and equipment supported by AutoDome`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                />
                <span
                  className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/25 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col justify-end p-8">
                  <h3 className="font-display text-2xl font-bold text-primary-foreground">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">{industry.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
