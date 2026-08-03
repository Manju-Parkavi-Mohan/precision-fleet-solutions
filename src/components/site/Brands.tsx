import { Reveal } from "./Reveal";

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
];

export function Brands() {
  return (
    <section aria-label="Supported vehicle brands" className="border-y border-border bg-surface py-20 sm:py-24">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Supported Vehicle Brands
          </p>
          <h2 className="mt-6 font-display text-2xl font-bold leading-tight sm:text-3xl">
            Multi-brand coverage for trucks, buses, and off-highway equipment.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <ul className="no-scrollbar mt-12 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible lg:grid-cols-6">
            {BRANDS.map((brand) => (
              <li
                key={brand}
                className="group grid h-24 min-w-[190px] place-items-center rounded-2xl border border-border bg-card px-6 text-center opacity-60 grayscale transition-all duration-500 hover:-translate-y-1 hover:opacity-100 hover:shadow-soft hover:grayscale-0 md:min-w-0"
              >
                <span className="font-display text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {brand}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
