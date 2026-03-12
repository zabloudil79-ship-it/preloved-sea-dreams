const PriceBanner = () => {
  return (
    <section className="bg-primary py-5">
      <div className="mx-auto max-w-6xl px-8 text-center">
        <p className="font-display text-3xl font-semibold tracking-wide text-primary-foreground md:text-4xl">
          €5,900,000
        </p>
        <p className="mt-1 font-body text-sm uppercase tracking-[0.2em] text-primary-foreground/80">
          Special price for the pre-season sale, valid until May 2026
        </p>
      </div>
    </section>
  );
};

export default PriceBanner;
