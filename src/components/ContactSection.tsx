import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-4xl px-8 text-center">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.25em] text-primary">
          Interested?
        </p>
        <h2 className="mb-4 font-display text-4xl font-medium text-foreground">
          Contact Us
        </h2>
        <div className="mx-auto mb-10 h-[2px] w-16 bg-primary" />
        <p className="mx-auto mb-12 max-w-2xl font-body text-muted-foreground">
          Our team of specialists is ready to assist you with a viewing, detailed 
          condition reports or arranging a sea trial.
        </p>

        <div className="mb-12 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <span className="font-body text-foreground">+420 775 799901 </span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span className="font-body text-foreground">info@yachtprofessional.cz</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-body text-foreground">Italy</span>
          </div>
        </div>

        <button className="bg-primary px-12 py-4 font-body text-sm uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90">
          Download Brochure
        </button>
      </div>
    </section>
  );
};

export default ContactSection;