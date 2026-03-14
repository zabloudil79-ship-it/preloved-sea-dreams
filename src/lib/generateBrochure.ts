import jsPDF, { GState } from "jspdf";

// Import images
import heroImg from "@/assets/yacht-hero.webp";
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
import sundeckImg from "@/assets/sundeck.jpg";
import upperdeckImg from "@/assets/upperdeck.jpg";
import maindeckImg from "@/assets/maindeck.jpg";
import lowerdeckImg from "@/assets/lowerdeck.jpg";

// Colors matching the website design system
const GOLD = "#c49a2e"; // hsl(38, 70%, 55%)
const DARK_BG = "#0f1319"; // hsl(216, 28%, 7%)
const DARK_CARD = "#181e28"; // hsl(216, 25%, 11%)
const WHITE = "#f0f2f5"; // hsl(210, 20%, 95%)
const MUTED = "#7a8699"; // hsl(213, 15%, 55%)
const SECONDARY_FG = "#c0c8d4"; // hsl(210, 20%, 85%)
const BORDER = "#252e3b"; // hsl(216, 20%, 18%)
const RED_BANNER = "#e04040"; // destructive
const PAGE_W = 297; // A4 landscape
const PAGE_H = 210;

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function drawPageBg(doc: jsPDF) {
  doc.setFillColor(DARK_BG);
  doc.rect(0, 0, PAGE_W, PAGE_H, "F");
}

function drawGoldLine(doc: jsPDF, x: number, y: number, w: number) {
  doc.setDrawColor(GOLD);
  doc.setLineWidth(0.6);
  doc.line(x, y, x + w, y);
}

function drawSectionHeader(doc: jsPDF, subtitle: string, title: string, y: number): number {
  doc.setTextColor(GOLD);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(subtitle.toUpperCase(), PAGE_W / 2, y, { align: "center" });

  doc.setTextColor(WHITE);
  doc.setFontSize(26);
  doc.setFont("times", "bold");
  doc.text(title, PAGE_W / 2, y + 13, { align: "center" });

  drawGoldLine(doc, PAGE_W / 2 - 20, y + 17, 40);

  return y + 25;
}

function addImageCover(doc: jsPDF, img: HTMLImageElement, x: number, y: number, w: number, h: number) {
  const imgRatio = img.width / img.height;
  const boxRatio = w / h;
  let sx = 0, sy = 0, sw = img.width, sh = img.height;
  if (imgRatio > boxRatio) {
    sw = img.height * boxRatio;
    sx = (img.width - sw) / 2;
  } else {
    sh = img.width / boxRatio;
    sy = (img.height - sh) / 2;
  }
  const canvas = document.createElement("canvas");
  canvas.width = w * 4;
  canvas.height = h * 4;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
  doc.addImage(canvas.toDataURL("image/jpeg", 0.85), "JPEG", x, y, w, h);
}

// ─── PAGE 1: HERO / COVER ───
async function pageCover(doc: jsPDF, heroImage: HTMLImageElement) {
  drawPageBg(doc);
  addImageCover(doc, heroImage, 0, 0, PAGE_W, PAGE_H);

  // Gradient overlay top + bottom
  doc.setFillColor(0, 0, 0);
  doc.setGState(new GState({ opacity: 0.5 }));
  doc.rect(0, 0, PAGE_W, PAGE_H, "F");
  doc.setGState(new GState({ opacity: 1 }));

  // Top content
  doc.setTextColor(GOLD);
  doc.setFontSize(16);
  doc.setFont("helvetica", "normal");
  doc.text("43.5 M SUPERYACHT FOR SALE", PAGE_W / 2, 50, { align: "center" });

  doc.setTextColor(WHITE);
  doc.setFontSize(56);
  doc.setFont("times", "bolditalic");
  doc.text("BARON TRENCK", PAGE_W / 2, 78, { align: "center" });

  // Price banner (red, like website)
  const bannerY = PAGE_H - 60;
  const bannerH = 32;
  doc.setFillColor(RED_BANNER);
  doc.rect(0, bannerY, PAGE_W, bannerH, "F");

  doc.setTextColor(WHITE);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text("€5,990,000", PAGE_W / 2, bannerY + 14, { align: "center" });

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("AMAZING DEAL – Special price for the pre-season sale, valid until May 2026", PAGE_W / 2, bannerY + 24, { align: "center" });

  // Tagline below banner
  doc.setTextColor(GOLD);
  doc.setFontSize(13);
  doc.setFont("times", "italic");
  doc.text("Built to explore the world in uncompromising luxury.", PAGE_W / 2, PAGE_H - 18, { align: "center" });
}

// ─── PAGE 2: QUICK SPECS ───
function pageQuickSpecs(doc: jsPDF) {
  drawPageBg(doc);

  const startY = drawSectionHeader(doc, "Key Specifications", "At a Glance", 25);

  const specs = [
    { label: "Length", value: "43.50 m" },
    { label: "Build/Refit", value: "2011 / 2022" },
    { label: "Guests", value: "12" },
    { label: "Cabins", value: "6" },
    { label: "Crew", value: "9" },
    { label: "Flag", value: "Malta" },
    { label: "VAT", value: "Not Paid" },
  ];

  const boxW = 30;
  const totalW = specs.length * boxW + (specs.length - 1) * 6;
  const sx = (PAGE_W - totalW) / 2;
  const y = startY + 10;

  specs.forEach((spec, i) => {
    const x = sx + i * (boxW + 6);

    // Card background
    doc.setFillColor(DARK_CARD);
    doc.roundedRect(x, y, boxW, 35, 2, 2, "F");

    doc.setTextColor(GOLD);
    doc.setFontSize(16);
    doc.setFont("times", "bold");
    doc.text(spec.value, x + boxW / 2, y + 16, { align: "center" });

    doc.setTextColor(MUTED);
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    doc.text(spec.label.toUpperCase(), x + boxW / 2, y + 26, { align: "center" });
  });

}

// ─── DESCRIPTION PAGES (full text from website) ───
function pageDescription1(doc: jsPDF) {
  drawPageBg(doc);

  const startY = drawSectionHeader(doc, "Description", "BARON TRENCK", 22);

  const paragraphs = [
    "The 43.5-metre BARON TRENCK is a striking explorer superyacht built by the renowned Italian shipyard Eurocraft. Designed for owners who seek both adventure and sophistication, she perfectly balances robust engineering with the elegance and comfort expected from a modern superyacht.",
    "",
    "Constructed with a steel hull and aluminium superstructure, BARON TRENCK offers excellent seaworthiness, stability and long-range cruising capability. Her distinctive profile, highlighted by a powerful bow and purposeful explorer styling, reflects a yacht designed to confidently cross oceans while maintaining exceptional comfort on board.",
    "",
    "Powered by twin MTU diesel engines, she cruises comfortably at 10–12 knots and reaches a maximum speed of 14 knots. Thanks to her efficient fuel consumption and large fuel capacity, she offers an impressive range of over 11,600 nautical miles, making her perfectly suited for long-distance cruising and exploration of remote destinations.",
    "",
    "",
    "Elegant accommodation for 12 guests",
    "",
    "BARON TRENCK offers luxurious accommodation for up to 12 guests in five beautifully appointed staterooms.",
    "",
    "The impressive full-beam Master Suite is located on the main deck and benefits from large oval windows offering stunning ocean views. The suite also features a private office, spacious walk-in wardrobe and separate his-and-hers bathrooms, creating an exceptional private retreat for the owner.",
    "",
    "The lower deck hosts a generous full-beam VIP suite, one double cabin and one twin cabin. An additional 2 guests cabin located on the bridge deck can also be used as a massage or wellness treatment room, offering additional flexibility for guests.",
    "",
    "Accommodation for up to nine crew members ensures seamless service and a relaxed luxury experience on board.",
  ];

  doc.setTextColor(SECONDARY_FG);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  let curY = startY + 6;
  for (const para of paragraphs) {
    if (para === "") {
      curY += 3;
      continue;
    }
    // Check if it's a heading (short and title-like)
    if (para === "Elegant accommodation for 12 guests") {
      curY += 4;
      doc.setTextColor(WHITE);
      doc.setFontSize(14);
      doc.setFont("times", "bold");
      doc.text(para, 40, curY);
      curY += 6;
      doc.setTextColor(SECONDARY_FG);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      continue;
    }
    const lines = doc.splitTextToSize(para, PAGE_W - 80);
    doc.text(lines, 40, curY);
    curY += lines.length * 4.5;
  }
}

function pageDescription2(doc: jsPDF) {
  drawPageBg(doc);

  let curY = 25;

  const sections = [
    {
      heading: "Designed for comfort and entertaining",
      paragraphs: [
        "BARON TRENCK offers a variety of inviting spaces designed for relaxation and socialising. Guests can enjoy the deck jacuzzi with panoramic sea views, spacious exterior decks ideal for alfresco dining, and multiple lounge areas perfect for entertaining or unwinding after a day on the water.",
        "Modern onboard amenities include Wi-Fi connectivity, full air-conditioning and stabilizers at anchor, ensuring maximum comfort throughout the journey.",
      ],
    },
    {
      heading: "The ultimate explorer yacht",
      paragraphs: [
        "With her robust construction, exceptional range and generous onboard volume, BARON TRENCK is ideally suited for global cruising and luxury island-hopping adventures. Her relatively shallow draft of approximately 3 metres also allows access to secluded bays and anchorages often unreachable by larger yachts.",
        "Combining expedition capability with refined luxury, BARON TRENCK represents a rare opportunity to own a capable long-range explorer superyacht with timeless appeal and global cruising potential.",
      ],
    },
    {
      heading: "Key Features",
      paragraphs: [],
      bullets: [
        "Ice-breaker hull",
        "Fantastic range: 11,600nm / 10 knots",
        "Low fuel consumption",
        "Large exterior spaces",
        "Zero-speed stabilizers NAIAD",
        "Shore Power Frequency Converters",
      ],
    },
  ];

  for (const section of sections) {
    doc.setTextColor(WHITE);
    doc.setFontSize(14);
    doc.setFont("times", "bold");
    doc.text(section.heading, 40, curY);
    curY += 8;

    doc.setTextColor(SECONDARY_FG);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    for (const para of section.paragraphs) {
      const lines = doc.splitTextToSize(para, PAGE_W - 80);
      doc.text(lines, 40, curY);
      curY += lines.length * 4.5 + 3;
    }

    if (section.bullets) {
      for (const bullet of section.bullets) {
        doc.text("•  " + bullet, 44, curY);
        curY += 5.5;
      }
    }

    curY += 8;
  }
}

// ─── PAGE 3: SPECIFICATIONS (grouped cards like the website) ───
function pageSpecifications(doc: jsPDF) {
  drawPageBg(doc);

  const startY = drawSectionHeader(doc, "Technical Data", "Specifications", 20);

  const specGroups = [
    {
      title: "Accommodation",
      specs: [
        ["Guests", "12"],
        ["Cabins", "6"],
        ["Configuration", "Double (4), Twin (2)"],
        ["Crew", "9"],
        ["Crew Cabins", "4"],
      ],
    },
    {
      title: "Construction & Design",
      specs: [
        ["Build / Refit", "2011 / 2022"],
        ["Shipyard", "Eurocraft Cantieri Navali"],
        ["Hull / Structure", "STEEL / ALUMINIUM"],
        ["Flag", "Malta"],
        ["VAT", "Not Paid"],
      ],
    },
    {
      title: "Dimensions",
      specs: [
        ["Length", "43.50 m / 142.7 ft"],
        ["Beam", "8.20 m / 26.9 ft"],
        ["Draft", "3.1 m / 10.7 ft"],
        ["Gross Tonnage", "498 GT"],
      ],
    },
    {
      title: "Performance & Engines",
      specs: [
        ["Cruising Speed", "12 knots"],
        ["Max Speed", "15 knots"],
        ["Fuel Consumption", "100 l/h (ECO 10 kn)"],
        ["Range", "11,600 nm"],
        ["Engines", "2× MTU 12V2000M60 (1632 HP)"],
      ],
    },
    {
      title: "Capacities & Tanks",
      specs: [
        ["Fuel", "105,000 L"],
        ["Fresh Water", "23,270 L"],
        ["Stabilizers", "NAIAD Zero-Speed"],
      ],
    },
  ];

  const margin = 20;
  const gap = 8;
  const cardW = (PAGE_W - margin * 2 - gap) / 2;
  let col = 0;
  let row = 0;
  let rowY = startY + 6;
  const rowHeights: number[] = [];

  // Pre-calculate row heights
  for (let i = 0; i < specGroups.length; i += 2) {
    const h1 = 14 + specGroups[i].specs.length * 7.5;
    const h2 = i + 1 < specGroups.length ? 14 + specGroups[i + 1].specs.length * 7.5 : 0;
    rowHeights.push(Math.max(h1, h2));
  }

  specGroups.forEach((group, i) => {
    col = i % 2;
    row = Math.floor(i / 2);

    let y = startY + 6;
    for (let r = 0; r < row; r++) y += rowHeights[r] + gap;

    const x = margin + col * (cardW + gap);
    const cardH = rowHeights[row];

    // Card background with border
    doc.setFillColor(DARK_CARD);
    doc.roundedRect(x, y, cardW, cardH, 1.5, 1.5, "F");
    doc.setDrawColor(BORDER);
    doc.setLineWidth(0.3);
    doc.roundedRect(x, y, cardW, cardH, 1.5, 1.5, "S");

    // Title
    doc.setTextColor(WHITE);
    doc.setFontSize(11);
    doc.setFont("times", "bold");
    doc.text(group.title, x + 8, y + 10);

    // Specs rows
    group.specs.forEach((spec, si) => {
      const sy = y + 18 + si * 7.5;

      // Separator line
      doc.setDrawColor(BORDER);
      doc.setLineWidth(0.15);
      doc.line(x + 8, sy - 3, x + cardW - 8, sy - 3);

      doc.setTextColor(MUTED);
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.text(spec[0].toUpperCase(), x + 8, sy);

      doc.setTextColor(WHITE);
      doc.setFontSize(8);
      doc.setFont("helvetica", "bold");
      doc.text(spec[1], x + cardW - 8, sy, { align: "right" });
    });
  });
}

// ─── GALLERY PAGE (6 images per page) ───
function pageGallery(doc: jsPDF, images: HTMLImageElement[], pageTitle: string) {
  drawPageBg(doc);

  const startY = drawSectionHeader(doc, "Tour", pageTitle, 18);

  const margin = 18;
  const gap = 5;
  const cols = 3;
  const rows = 2;
  const imgW = (PAGE_W - margin * 2 - gap * (cols - 1)) / cols;
  const imgH = (PAGE_H - startY - 10 - margin - gap * (rows - 1)) / rows;

  images.forEach((img, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = margin + col * (imgW + gap);
    const y = startY + 6 + row * (imgH + gap);
    addImageCover(doc, img, x, y, imgW, imgH);
  });
}

// ─── DECK PLANS (2 pages, 2 decks each) ───
function pageDeckPlans(doc: jsPDF, deckImages: HTMLImageElement[], labels: string[]) {
  drawPageBg(doc);

  const startY = drawSectionHeader(doc, "Deck Plans", "Layout", 18);

  const margin = 25;
  const gap = 6;
  const deckW = PAGE_W - margin * 2;
  const availH = PAGE_H - startY - 18;
  const deckH = (availH - gap - 2 * 10) / 2;

  deckImages.forEach((img, i) => {
    const y = startY + 4 + i * (deckH + gap + 10);

    doc.setTextColor(GOLD);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(labels[i].toUpperCase(), margin, y + 4);

    addImageCover(doc, img, margin, y + 6, deckW, deckH);
  });
}

// ─── CONTACT PAGE (no inquiry form) ───
function pageContact(doc: jsPDF) {
  drawPageBg(doc);

  const startY = drawSectionHeader(doc, "Interested?", "Contact Us", 55);

  drawGoldLine(doc, PAGE_W / 2 - 20, startY + 2, 40);

  doc.setTextColor(SECONDARY_FG);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("We are ready to assist you with a viewing or detailed condition reports.", PAGE_W / 2, startY + 14, { align: "center" });

  // Contact cards
  const cardW = 75;
  const cardH = 38;
  const cardY = startY + 28;
  const cards = [
    { label: "PHONE", value: "+420 775 799 901" },
    { label: "EMAIL", value: "info@yachtprofessional.cz" },
    { label: "LOCATION", value: "Italy" },
  ];

  const totalW = cards.length * cardW + (cards.length - 1) * 12;
  const startX = (PAGE_W - totalW) / 2;

  cards.forEach((card, i) => {
    const x = startX + i * (cardW + 12);

    doc.setFillColor(DARK_CARD);
    doc.roundedRect(x, cardY, cardW, cardH, 2, 2, "F");
    doc.setDrawColor(BORDER);
    doc.setLineWidth(0.3);
    doc.roundedRect(x, cardY, cardW, cardH, 2, 2, "S");

    doc.setTextColor(GOLD);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(card.label, x + cardW / 2, cardY + 15, { align: "center" });

    doc.setTextColor(WHITE);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text(card.value, x + cardW / 2, cardY + 26, { align: "center" });
  });

  // Footer
  doc.setTextColor(MUTED);
  doc.setFontSize(7);
  doc.text("© 2026 YACHT Professional. All rights reserved.", PAGE_W / 2, PAGE_H - 15, { align: "center" });
  doc.setFontSize(6);
  doc.text("All information is believed to be correct but not guaranteed.", PAGE_W / 2, PAGE_H - 10, { align: "center" });
}

// ─── MAIN EXPORT ───
export async function generateBrochure() {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

  // Load all images in parallel
  const [
    hero,
    g1, g2, g3, g4, gn4, g5, g6, g7, g8, g9,
    g10, g11, g12, g13, g14, g15, g16, g17, g18, g19,
    g20, g21, g22, g23, g24, g25, g26, g27, g28, g29,
    sundeck, upperdeck, maindeck, lowerdeck,
  ] = await Promise.all([
    loadImage(heroImg),
    loadImage(gallery1), loadImage(gallery2), loadImage(gallery3),
    loadImage(gallery4), loadImage(galleryNew4), loadImage(gallery5),
    loadImage(gallery6), loadImage(gallery7), loadImage(gallery8),
    loadImage(gallery9), loadImage(gallery10), loadImage(gallery11),
    loadImage(gallery12), loadImage(gallery13), loadImage(gallery14),
    loadImage(gallery15), loadImage(gallery16), loadImage(gallery17),
    loadImage(gallery18), loadImage(gallery19), loadImage(gallery20),
    loadImage(gallery21), loadImage(gallery22), loadImage(gallery23),
    loadImage(gallery24), loadImage(gallery25), loadImage(gallery26),
    loadImage(gallery27), loadImage(gallery28), loadImage(gallery29),
    loadImage(sundeckImg), loadImage(upperdeckImg),
    loadImage(maindeckImg), loadImage(lowerdeckImg),
  ]);

  // All gallery images in order matching the website
  const allGallery = [
    g1, g2, g4, g3, g6, gn4,
    g5, g7, g8, g9, g10, g11,
    g12, g13, g14, g15, g16, g17,
    g18, g19, g20, g21, g22, g23,
    g24, g25, g26, g27, g28, g29,
  ];

  const galleryPageTitles = [
    "Exterior",
    "Deck & Amenities",
    "Interior & Salon",
    "Cabins & Suites",
    "Details & Bridge",
  ];

  // Page 1 - Cover
  await pageCover(doc, hero);

  // Page 2 - Quick Specs + Description
  doc.addPage();
  pageQuickSpecs(doc);

  // Page 3 - Specifications
  doc.addPage();
  pageSpecifications(doc);

  // Pages 4-8 - Gallery (6 per page, 30 images = 5 pages)
  for (let i = 0; i < 5; i++) {
    doc.addPage();
    const pageImages = allGallery.slice(i * 6, i * 6 + 6);
    pageGallery(doc, pageImages, galleryPageTitles[i] || "Gallery");
  }

  // Page 9 - Deck Plans
  doc.addPage();
  pageDeckPlans(doc, [sundeck, upperdeck, maindeck, lowerdeck]);

  // Page 10 - Contact
  doc.addPage();
  pageContact(doc);

  doc.save("Baron_Trenck_Brochure.pdf");
}
