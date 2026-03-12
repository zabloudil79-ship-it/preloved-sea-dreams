import { useState } from "react";
import sundeckImg from "@/assets/sundeck.jpg";
import upperDeckImg from "@/assets/upperdeck.jpg";

const decks = [
  { id: "sundeck", label: "Sundeck" },
  { id: "upper-deck", label: "Upper Deck" },
  { id: "main-deck", label: "Main Deck" },
  { id: "lower-deck", label: "Lower Deck" },
];

const deckImages: Record<string, string | null> = {
  sundeck: sundeckImg,
  "upper-deck": upperDeckImg,
  "main-deck": null,
  "lower-deck": null,
};

const LayoutSection = () => {
  const [activeDeck, setActiveDeck] = useState("sundeck");

  return (
    <section id="layout" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-8">
        <p className="mb-2 text-center font-body text-sm uppercase tracking-[0.25em] text-primary">
          Deck Plans
        </p>
        <h2 className="mb-4 text-center font-display text-4xl font-medium text-foreground">
          Layout
        </h2>
        <div className="mx-auto mb-12 h-[2px] w-16 bg-primary" />

        {/* Deck tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 md:gap-4">
          {decks.map((deck) => (
            <button
              key={deck.id}
              onClick={() => setActiveDeck(deck.id)}
              className={`px-6 py-3 font-body text-sm uppercase tracking-[0.15em] transition-all ${
                activeDeck === deck.id
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {deck.label}
            </button>
          ))}
        </div>

        {/* Deck image */}
        <div className="flex min-h-[300px] items-center justify-center rounded bg-card md:min-h-[500px]">
          {deckImages[activeDeck] ? (
            <img
              src={deckImages[activeDeck]!}
              alt={decks.find((d) => d.id === activeDeck)?.label}
              className="max-h-[600px] w-full object-contain"
            />
          ) : (
            <p className="font-body text-muted-foreground">
              Nahrajte obrázek pro {decks.find((d) => d.id === activeDeck)?.label}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default LayoutSection;
