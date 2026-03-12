import heroImage from "@/assets/yacht-hero.jpg";
import { Anchor, ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="M/Y OCEANIC DREAM - Luxury Motor Yacht"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Top nav bar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <Anchor className="h-6 w-6 text-primary" />
          <span className="font-display text-xl tracking-[0.2em] text-foreground">
            PRESTIGE YACHTS
          </span>
        </div>
        <div className="hidden gap-8 font-body text-sm uppercase tracking-[0.15em] text-foreground/80 md:flex">
          <a href="#" className="transition-colors hover:text-primary">Koupit</a>
          <a href="#" className="transition-colors hover:text-primary">Prodat</a>
          <a href="#" className="transition-colors hover:text-primary">Charter</a>
          <a href="#" className="transition-colors hover:text-primary">O nás</a>
          <a href="#" className="transition-colors hover:text-primary">Kontakt</a>
        </div>
        <button className="border border-primary px-6 py-2 font-body text-sm uppercase tracking-[0.15em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
          Poptávka
        </button>
      </nav>

      {/* Breadcrumb */}
      <div className="relative z-10 px-8 pt-2">
        <p className="font-body text-xs tracking-wide text-foreground/50">
          Domů &gt; Jachty na prodej &gt; M/Y OCEANIC DREAM
        </p>
      </div>

      {/* Hero content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 pb-24 text-center">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.25em] text-primary">
          Na prodej
        </p>
        <h1 className="mb-3 font-display text-5xl font-medium tracking-wide text-foreground md:text-7xl">
          OCEANIC DREAM
        </h1>
        <p className="font-display text-lg italic text-muted-foreground">
          Shipworks Brisbane
        </p>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between border-t border-foreground/10 px-8 py-4">
        <button className="flex items-center gap-2 font-body text-sm uppercase tracking-[0.1em] text-foreground/60 transition-colors hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          Předchozí jachta
        </button>
        <div className="hidden gap-8 font-body text-sm uppercase tracking-[0.15em] text-foreground/70 md:flex">
          <a href="#popis" className="transition-colors hover:text-primary">Popis</a>
          <span className="text-foreground/20">|</span>
          <a href="#specifikace" className="transition-colors hover:text-primary">Specifikace</a>
          <span className="text-foreground/20">|</span>
          <a href="#galerie" className="transition-colors hover:text-primary">Galerie</a>
        </div>
        <button className="flex items-center gap-2 font-body text-sm uppercase tracking-[0.1em] text-foreground/60 transition-colors hover:text-foreground">
          Další jachta
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
