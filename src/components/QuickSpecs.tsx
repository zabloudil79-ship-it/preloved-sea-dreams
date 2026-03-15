import { Ruler, Calendar, Users, BedDouble, UserCog, Flag, Receipt } from "lucide-react";
import {Link} from "react-router-dom";

const specs = [
  { icon: Ruler, label: "Length", value: "43.50 m" },
  { icon: Calendar, label: "Build/Refit", value: "2011 / 2022" },
  { icon: Users, label: "Guests", value: "12" },
  { icon: BedDouble, label: "Cabins", value: "6" },
  { icon: UserCog, label: "Crew", value: "9" },
  { icon: Flag, label: "Flag", value: "Malta" },
  { icon: Receipt, label: "VAT", value: "Not Paid" },
];



const QuickSpecs = () => {
  return (
    <section className="bg-card py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-8 md:grid-cols-7">
        {specs.map((spec) => (
          <div key={spec.label} className="text-center">
            <spec.icon className="mx-auto mb-3 h-5 w-5 text-primary" />
            <p className="spec-value">{spec.value}</p>
            <p className="spec-label mt-1">{spec.label}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl justify-center px-8">
        <Link to = '/assets/Baron_Trenk_Brochure.pdf' target="_blank"><button className="bg-primary px-8 py-3 font-body text-sm uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90">Download Brochure</button></Link>
      </div>
    </section>
  );
};

export default QuickSpecs;