import { Ruler, Calendar, Users, BedDouble, UserCog, DollarSign } from "lucide-react";

const specs = [
  { icon: Ruler, label: "Délka", value: "44m / 144'" },
  { icon: Calendar, label: "Stavba / Refit", value: "2004 / 2015" },
  { icon: Users, label: "Hosté", value: "12" },
  { icon: BedDouble, label: "Kabiny", value: "5" },
  { icon: UserCog, label: "Posádka", value: "9" },
  { icon: DollarSign, label: "Cena", value: "€5 950 000" },
];

const QuickSpecs = () => {
  return (
    <section className="bg-card py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-8 md:grid-cols-3 lg:grid-cols-6">
        {specs.map((spec) => (
          <div key={spec.label} className="text-center">
            <spec.icon className="mx-auto mb-3 h-5 w-5 text-primary" />
            <p className="spec-value">{spec.value}</p>
            <p className="spec-label mt-1">{spec.label}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl justify-center px-8">
        <button className="bg-primary px-8 py-3 font-body text-sm uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90">
          Stáhnout brožuru
        </button>
      </div>
    </section>
  );
};

export default QuickSpecs;
