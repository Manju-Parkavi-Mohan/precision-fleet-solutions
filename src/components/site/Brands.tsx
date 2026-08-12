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
  const loop = [...BRANDS, ...BRANDS];

  return (
    <section
      aria-label="Supported vehicle brands"
      className="section-dark border-y border-border py-16 sm:py-20 lg:py-24"
    >
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Supported Vehicle Brands
          </p>
          <h2 className="mt-5 font-display text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
            Multi-brand coverage for trucks, buses, and off-highway equipment.
          </h2>
        </Reveal>
      </div>

      <div
        className="marquee-mask mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-hidden="true"
      >
        <ul className="marquee-track flex w-max gap-4 pr-4">
          {loop.map((brand, index) => (
            <li
              key={`${brand}-${index}`}
              className="grid h-20 w-[170px] shrink-0 place-items-center rounded-2xl border border-border bg-card px-5 text-center sm:h-24 sm:w-[210px]"
            >
              <span className="font-display text-sm font-bold tracking-tight text-foreground sm:text-base">
                {brand}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="sr-only">
        {BRANDS.map((brand) => (
          <li key={brand}>{brand}</li>
        ))}
      </ul>
    </section>
  );
}
