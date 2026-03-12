import heroImage from "@/assets/yacht-hero.webp";
import { Anchor, ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="M/Y OCEANIC DREAM - Luxury Motor Yacht"
          className="h-full w-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Top nav bar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <Anchor className="h-6 w-6 text-primary" />
          

          
        </div>
        <div className="hidden md:block" />
        

        
      </nav>

      {/* Breadcrumb */}
      <div className="relative z-10 px-8 pt-2">
        <p className="font-body text-xs tracking-wide text-foreground/50">
          ​
        </p>
      </div>

      {/* Hero content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 pb-24 text-center">
        <p className="mb-2 font-body uppercase tracking-[0.25em] text-primary text-6xl">
          FOR SALE 
        </p>
        <h1 className="mb-3 font-display text-5xl font-medium tracking-wide text-foreground md:text-9xl">
          BARON TRENK 
        </h1>
        <p className="font-display text-lg italic text-muted-foreground">
          Built to explore the world in uncompromising luxury.
        </p>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center border-t border-foreground/10 px-8 py-4">
        <div className="hidden gap-8 font-body text-sm uppercase tracking-[0.15em] text-foreground/70 md:flex">
          <a href="#popis" className="transition-colors hover:text-primary">Popis</a>
          <span className="text-foreground/20">|</span>
          <a href="#specifikace" className="transition-colors hover:text-primary">Specifikace</a>
          <span className="text-foreground/20">|</span>
          <a href="#galerie" className="transition-colors hover:text-primary">Galerie</a>
          <span className="text-foreground/20">|</span>
          <a href="#layout" className="transition-colors hover:text-primary">Layout</a>
        </div>
      </div>
    </section>);

};

export default HeroSection;