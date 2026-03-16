import heroImage from "@/assets/yacht-hero.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PriceBanner from "@/components/PriceBanner";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="M/Y OCEANIC DREAM - Luxury Motor Yacht"
          className="h-full w-full object-cover brightness-125 contrast-105" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </div>

      {/* Hero content - top */}
      <div className="relative z-10 px-8 pt-4 text-center space-y-0">
        <p className="font-body uppercase tracking-[0.25em] text-primary text-6xl leading-none">
          43.5 M SUPERYACHT
        </p>
        <p className="font-body uppercase tracking-[0.25em] text-6xl leading-none text-destructive">
          FOR SALE
        </p>
        <h1 className="-mt-14 font-display text-5xl font-medium tracking-wide text-foreground md:text-9xl leading-none">
          BARON TRENCK 
        </h1>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 pb-24 text-center">
        <div className="mb-4 -mx-8">
          <PriceBanner />
        </div>
        <p className="font-body uppercase tracking-[0.25em] text-primary text-2xl">
          Built to explore the world in uncompromising luxury.
        </p>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center border-t border-foreground/10 px-8 py-4">
        <div className="hidden gap-8 font-body text-sm uppercase tracking-[0.15em] text-foreground/70 md:flex">
          <a href="#popis" className="transition-colors hover:text-primary">Description</a>
          <span className="text-foreground/20">|</span>
          <a href="#specifikace" className="transition-colors hover:text-primary">Specifications</a>
          <span className="text-foreground/20">|</span>
          <a href="#galerie" className="transition-colors hover:text-primary">Gallery</a>
          <span className="text-foreground/20">|</span>
          <a href="#layout" className="transition-colors hover:text-primary">Layout</a>
        </div>
      </div>
    </section>);

};

export default HeroSection;