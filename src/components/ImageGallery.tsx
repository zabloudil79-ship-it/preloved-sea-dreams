import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import gallery5 from "@/assets/gallery-5.webp";
import gallery6 from "@/assets/gallery-6.webp";
import gallery7 from "@/assets/gallery-7.webp";
import gallery8 from "@/assets/gallery-8.webp";
import gallery9 from "@/assets/gallery-9.webp";
import gallery10 from "@/assets/gallery-10.webp";
import gallery11 from "@/assets/gallery-11.webp";

const images = [
  { src: gallery1, alt: "Baron Trenck – boční pohled", span: "md:col-span-2 md:row-span-2" },
  { src: gallery2, alt: "Baron Trenck – boční pohled 2", span: "" },
  { src: gallery3, alt: "Baron Trenck – příďový pohled", span: "" },
  { src: gallery4, alt: "Baron Trenck – záďový pohled", span: "md:col-span-2" },
  { src: gallery5, alt: "Sluneční paluba s vířivkou", span: "" },
  { src: gallery6, alt: "Venkovní lounge", span: "" },
  { src: gallery7, alt: "Sundeck s vířivkou a lehátky", span: "md:col-span-2" },
  { src: gallery8, alt: "Alfresco dining", span: "" },
  { src: gallery9, alt: "Vířivka – detail", span: "" },
  { src: gallery10, alt: "Hlavní salon", span: "md:col-span-2" },
  { src: gallery11, alt: "Salon – boční pohled", span: "" },
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

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
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
