import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import galleryNew4 from "@/assets/gallery-new-4.webp";
import gallery5 from "@/assets/gallery-5.webp";
import gallery6 from "@/assets/gallery-6.webp";
import gallery7 from "@/assets/gallery-7.webp";
import gallery8 from "@/assets/gallery-8.webp";
import gallery9 from "@/assets/gallery-9.webp";
import gallery10 from "@/assets/gallery-10.webp";
import gallery11 from "@/assets/gallery-11.webp";
import gallery12 from "@/assets/gallery-12.webp";
import gallery13 from "@/assets/gallery-13.webp";
import gallery14 from "@/assets/gallery-14.webp";
import gallery15 from "@/assets/gallery-15.webp";
import gallery16 from "@/assets/gallery-16.webp";
import gallery17 from "@/assets/gallery-17.webp";
import gallery18 from "@/assets/gallery-18.webp";
import gallery19 from "@/assets/gallery-19.webp";
import gallery20 from "@/assets/gallery-20.webp";
import gallery21 from "@/assets/gallery-21.webp";
import gallery22 from "@/assets/gallery-22.webp";
import gallery23 from "@/assets/gallery-23.webp";
import gallery24 from "@/assets/gallery-24.webp";
import gallery25 from "@/assets/gallery-25.webp";
import gallery26 from "@/assets/gallery-26.webp";
import gallery27 from "@/assets/gallery-27.webp";
import gallery28 from "@/assets/gallery-28.webp";
import gallery29 from "@/assets/gallery-29.webp";

const images = [
  { src: gallery1, alt: "Baron Trenck – side view" },
  { src: gallery2, alt: "Baron Trenck – side view 2" },
  { src: gallery4, alt: "Baron Trenck – stern view" },
  { src: gallery3, alt: "Baron Trenck – bow view" },
  { src: gallery6, alt: "Outdoor lounge" },
  { src: galleryNew4, alt: "Sundeck jacuzzi – aerial view" },
  { src: gallery5, alt: "Sundeck with jacuzzi" },
  { src: gallery7, alt: "Sundeck with jacuzzi and sunbeds" },
  { src: gallery8, alt: "Alfresco dining" },
  { src: gallery9, alt: "Jacuzzi – detail" },
  { src: gallery10, alt: "Main salon" },
  { src: gallery11, alt: "Salon – side view" },
  { src: gallery12, alt: "Salon with bar" },
  { src: gallery13, alt: "Dining room" },
  { src: gallery14, alt: "Master cabin" },
  { src: gallery15, alt: "Sky lounge" },
  { src: gallery16, alt: "Sky lounge – TV" },
  { src: gallery17, alt: "VIP salon" },
  { src: gallery18, alt: "VIP cabin" },
  { src: gallery19, alt: "Master suite" },
  { src: gallery20, alt: "Master suite – detail" },
  { src: gallery21, alt: "Guest cabin" },
  { src: gallery22, alt: "Twin cabin" },
  { src: gallery23, alt: "VIP cabin – detail" },
  { src: gallery24, alt: "Twin cabin 2" },
  { src: gallery25, alt: "Twin cabin 3" },
  { src: gallery26, alt: "Bathroom" },
  { src: gallery27, alt: "Guest cabin 2" },
  { src: gallery28, alt: "Bridge" },
  { src: gallery29, alt: "Galley" },
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goTo = (index: number) => {
    setCurrentIndex((index + images.length) % images.length);
  };

  return (
    <section id="galerie" className="bg-card py-20">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 font-body text-sm uppercase tracking-[0.25em] text-primary">
            Tour
          </p>
          <h2 className="font-display text-4xl font-medium text-foreground">
            Gallery
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-16 bg-primary" />
        </div>

        {/* Single preview image */}
        <div className="relative group cursor-pointer" onClick={() => setLightboxOpen(true)}>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full max-h-[600px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors duration-300 group-hover:bg-background/30">
            <span className="font-body text-sm uppercase tracking-[0.2em] text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Click to view gallery
            </span>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); goTo(currentIndex - 1); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/60 p-2 text-foreground transition-colors hover:bg-background/80"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goTo(currentIndex + 1); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/60 p-2 text-foreground transition-colors hover:bg-background/80"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-4 right-4 bg-background/60 px-3 py-1 font-body text-sm text-foreground">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute right-6 top-6 text-foreground/70 transition-colors hover:text-foreground"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goTo(currentIndex - 1); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/40 p-3 text-foreground transition-colors hover:bg-background/60 md:left-8"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goTo(currentIndex + 1); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/40 p-3 text-foreground transition-colors hover:bg-background/60 md:right-8"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-sm text-foreground/70">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
