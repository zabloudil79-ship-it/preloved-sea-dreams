const PriceBanner = () => {
  return (
    <section className="py-5 bg-destructive">
      <div className="mx-auto max-w-6xl px-8 text-center">
        <p className="text-3xl font-semibold tracking-wide text-destructive-foreground font-sans md:text-6xl animate-pulse">
          €5,990,000
        </p>
        <p className="mt-1 uppercase tracking-[0.2em] text-primary-foreground/80 text-lg font-sans font-bold">
          AMAZING DEAL - Special price for the pre-season sale, valid until May 2026
        </p>
      </div>
    </section>);

};

export default PriceBanner;