const PriceBanner = () => {
  return (
    <section className="py-5 bg-destructive">
      <div className="mx-auto max-w-6xl px-8 text-center">
        <p className="font-display text-3xl font-semibold tracking-wide md:text-4xl text-destructive-foreground">
          €5,990,000
        </p>
        <p className="mt-1 font-body text-sm uppercase tracking-[0.2em] text-primary-foreground/80">
          Special price for the pre-season sale, valid until May 2026
        </p>
      </div>
    </section>);

};

export default PriceBanner;