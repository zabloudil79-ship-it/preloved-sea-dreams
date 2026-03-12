const specGroups = [
  {
    title: "Accommodation",
    specs: [
      { label: "Guests", value: "9" },
      { label: "Cabins", value: "6" },
      { label: "Configuration", value: "Double (4), Twin (2)" },
      { label: "Crew", value: "9" },
      { label: "Crew Cabins", value: "4" },
    ],
  },
  {
    title: "Construction & Design",
    specs: [
      { label: "Build / Refit", value: "2004 / 2015" },
      { label: "Shipyard", value: "Shipworks Brisbane" },
      { label: "Hull Material", value: "Aluminium" },
      { label: "Exterior / Interior", value: "Bernie Cohen" },
      { label: "Flag", value: "Malta" },
      { label: "VAT", value: "Not Paid" },
    ],
  },
  {
    title: "Dimensions",
    specs: [
      { label: "Length", value: "44m (144')" },
      { label: "Beam", value: "8.53m (28')" },
      { label: "Draft", value: "2.24m (7'4\")" },
      { label: "Gross Tonnage", value: "457 GT" },
    ],
  },
  {
    title: "Performance & Engines",
    specs: [
      { label: "Cruising Speed", value: "13 knots" },
      { label: "Max Speed", value: "16 knots" },
      { label: "Fuel Consumption", value: "100 l/h (ECO 10 knots)" },
      { label: "Range", value: "11 600 nm" },
      { label: "Engines", value: "2× Caterpillar (900 hp)" },
    ],
  },
  {
    title: "Capacities & Tanks",
    specs: [
      { label: "Consumption (ECO)", value: "~ 100 l/h" },
      { label: "Fuel", value: "283,905 l" },
      { label: "Grey Water", value: "18,927 l" },
      { label: "Black Water", value: "18,927 l" },
      { label: "Fresh Water", value: "37,854 l" },
      { label: "Stabilisation System", value: "Fin Stabilizers" },
    ],
  },
];

const Specifications = () => {
  return (
    <section id="specifikace" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 font-body text-sm uppercase tracking-[0.25em] text-primary">
            Technical Data
          </p>
          <h2 className="font-display text-4xl font-medium text-foreground">
            Specifications
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-16 bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {specGroups.map((group, index) => (
            <div
              key={group.title}
              className={`rounded-sm border border-border bg-card p-8${
                index === specGroups.length - 1 && specGroups.length % 2 !== 0
                  ? " md:col-span-2 md:mx-auto md:max-w-[calc(50%-1.25rem)]"
                  : ""
              }`}
            >
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