import { Anchor } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-8 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Anchor className="h-5 w-5 text-primary" />
          <span className="font-display text-lg tracking-[0.2em] text-foreground">
            PRESTIGE YACHTS
          </span>
        </div>
        <p className="font-body text-sm text-muted-foreground">
          © 2026 Prestige Yachts. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
