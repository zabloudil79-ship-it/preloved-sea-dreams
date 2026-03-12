const specGroups = [
  {
    title: "Ubytování",
    specs: [
      { label: "Hosté", value: "9" },
      { label: "Kabiny", value: "5" },
      { label: "Konfigurace", value: "Double (4), Twin (1)" },
      { label: "Posádka", value: "9" },
    ],
  },
  {
    title: "Konstrukce & Design",
    specs: [
      { label: "Stavba / Refit", value: "2004 / 2015" },
      { label: "Loděnice", value: "Shipworks Brisbane" },
      { label: "Materiál trupu", value: "Hliník" },
      { label: "Exteriér / Interiér", value: "Bernie Cohen" },
    ],
  },
  {
    title: "Rozměry",
    specs: [
      { label: "Délka", value: "44m (144')" },
      { label: "Šířka", value: "8,53m (28')" },
      { label: "Ponor", value: "2,24m (7'4\")" },
      { label: "Hrubá tonáž", value: "457 GT" },
    ],
  },
  {
    title: "Výkon & Motory",
    specs: [
      { label: "Cestovní rychlost", value: "13 uzlů" },
      { label: "Max. rychlost", value: "16 uzlů" },
      { label: "Dojezd", value: "6 000 nm" },
      { label: "Motory", value: "2× Caterpillar (900 hp)" },
    ],
  },
];

const Specifications = () => {
  return (
    <section id="specifikace" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 font-body text-sm uppercase tracking-[0.25em] text-primary">
            Technické údaje
          </p>
          <h2 className="font-display text-4xl font-medium text-foreground">
            Specifikace
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-16 bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {specGroups.map((group) => (
            <div key={group.title} className="rounded-sm border border-border bg-card p-8">
              <h3 className="mb-6 font-display text-xl text-foreground">{group.title}</h3>
              <div className="space-y-4">
                {group.specs.map((spec) => (
                  <div key={spec.label} className="flex items-baseline justify-between border-b border-border/50 pb-3">
                    <span className="spec-label">{spec.label}</span>
                    <span className="font-body text-sm font-medium text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specifications;
