import interiorImg from "@/assets/yacht-interior.jpg";
import deckImg from "@/assets/yacht-deck.jpg";
import cabinImg from "@/assets/yacht-cabin.jpg";
import heroImg from "@/assets/yacht-hero.jpg";

const images = [
  { src: heroImg, alt: "Letecký pohled na jachtu", span: "md:col-span-2 md:row-span-2" },
  { src: interiorImg, alt: "Interiér salonu", span: "" },
  { src: deckImg, alt: "Sluneční paluba s vířivkou", span: "" },
  { src: cabinImg, alt: "Kabina majitele", span: "md:col-span-2" },
];

const ImageGallery = () => {
  return (
    <section id="galerie" className="bg-card py-20">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 font-body text-sm uppercase tracking-[0.25em] text-primary">
            Prohlídka
          </p>
          <h2 className="font-display text-4xl font-medium text-foreground">
            Galerie
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-16 bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full min-h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
