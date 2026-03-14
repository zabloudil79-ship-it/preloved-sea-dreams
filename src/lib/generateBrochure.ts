import jsPDF from "jspdf";

// Import images
import heroImg from "@/assets/yacht-hero.webp";
import interiorImg from "@/assets/yacht-interior.jpg";
import cabinImg from "@/assets/yacht-cabin.jpg";
import deckImg from "@/assets/yacht-deck.jpg";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import gallery5 from "@/assets/gallery-5.webp";
import gallery6 from "@/assets/gallery-6.webp";
import sundeckImg from "@/assets/sundeck.jpg";
import upperdeckImg from "@/assets/upperdeck.jpg";
import maindeckImg from "@/assets/maindeck.jpg";
import lowerdeckImg from "@/assets/lowerdeck.jpg";

const GOLD = "#c9942e";
const DARK_BG = "#0f1419";
const DARK_CARD = "#161c24";
const WHITE = "#f0f2f5";
const MUTED = "#7a8699";
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
  doc.setLineWidth(0.5);
  doc.line(x, y, x + w, y);
}

function addImageCover(doc: jsPDF, img: HTMLImageElement, x: number, y: number, w: number, h: number) {
  // Calculate cover dimensions
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

// Page 1: Title Page
async function page1(doc: jsPDF, heroImage: HTMLImageElement) {
  drawPageBg(doc);

  // Hero image with overlay
  addImageCover(doc, heroImage, 0, 0, PAGE_W, PAGE_H);

  // Dark gradient overlay
  doc.setFillColor(0, 0, 0);
  doc.setGState(new doc.GState({ opacity: 0.55 }));
  doc.rect(0, 0, PAGE_W, PAGE_H, "F");
  doc.setGState(new doc.GState({ opacity: 1 }));

  // Gold accent line top
  drawGoldLine(doc, PAGE_W / 2 - 30, 55, 60);

  // Subtitle
  doc.setTextColor(GOLD);
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text("43.5 M SUPERYACHT FOR SALE", PAGE_W / 2, 70, { align: "center" });

  // Title
  doc.setTextColor(WHITE);
  doc.setFontSize(48);
  doc.setFont("helvetica", "bold");
  doc.text("BARON TRENCK", PAGE_W / 2, 95, { align: "center" });

  // Gold line below title
  drawGoldLine(doc, PAGE_W / 2 - 30, 103, 60);

  // Tagline
  doc.setTextColor(MUTED);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Explorer Superyacht by Eurocraft Cantieri Navali", PAGE_W / 2, 115, { align: "center" });

  // Price at bottom
  doc.setFillColor(DARK_BG);
  doc.setGState(new doc.GState({ opacity: 0.8 }));
  doc.roundedRect(PAGE_W / 2 - 55, PAGE_H - 45, 110, 30, 2, 2, "F");
  doc.setGState(new doc.GState({ opacity: 1 }));

  doc.setTextColor(GOLD);
  doc.setFontSize(10);
  doc.text("ASKING PRICE", PAGE_W / 2, PAGE_H - 33, { align: "center" });
  doc.setTextColor(WHITE);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("€ 8,250,000", PAGE_W / 2, PAGE_H - 22, { align: "center" });
}

// Page 2: Key Specifications
function page2(doc: jsPDF) {
  drawPageBg(doc);

  doc.setTextColor(GOLD);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("KEY SPECIFICATIONS", PAGE_W / 2, 25, { align: "center" });

  doc.setTextColor(WHITE);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text("Technical Overview", PAGE_W / 2, 38, { align: "center" });

  drawGoldLine(doc, PAGE_W / 2 - 25, 43, 50);

  const specs = [
    ["Length Overall", "43.50 m (142.7 ft)"],
    ["Beam", "8.20 m (26.9 ft)"],
    ["Draft", "3.1 m (10.7 ft)"],
    ["Gross Tonnage", "498 GT"],
    ["Builder", "Eurocraft Cantieri Navali"],
    ["Year / Refit", "2011 / 2022"],
    ["Hull", "Steel"],
    ["Superstructure", "Aluminium"],
    ["Flag", "Malta"],
    ["Engines", "2× MTU 12V2000M60 (1632 HP)"],
    ["Cruising Speed", "12 knots"],
    ["Max Speed", "15 knots"],
    ["Range", "11,600 nm"],
    ["Fuel Consumption", "100 l/h (ECO 10 kn)"],
    ["Fuel Capacity", "105,000 L"],
    ["Water Capacity", "23,270 L"],
    ["Guests", "12 in 6 cabins"],
    ["Crew", "9 in 4 cabins"],
    ["Stabilizers", "NAIAD Zero-Speed"],
    ["VAT", "Not Paid"],
  ];

  const colX = [30, PAGE_W / 2 + 15];
  const startY = 55;
  const rowH = 7.5;

  specs.forEach((spec, i) => {
    const col = i < 10 ? 0 : 1;
    const row = i < 10 ? i : i - 10;
    const x = colX[col];
    const y = startY + row * rowH;

    // Alternating background
    if (row % 2 === 0) {
      doc.setFillColor(DARK_CARD);
      doc.rect(x - 3, y - 4.5, PAGE_W / 2 - 32, rowH, "F");
    }

    doc.setTextColor(MUTED);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(spec[0], x, y);

    doc.setTextColor(WHITE);
    doc.setFont("helvetica", "bold");
    doc.text(spec[1], x + PAGE_W / 2 - 55, y, { align: "right" });
  });
}

// Page 3: Description
function page3(doc: jsPDF) {
  drawPageBg(doc);

  doc.setTextColor(GOLD);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("ABOUT THE YACHT", PAGE_W / 2, 25, { align: "center" });

  doc.setTextColor(WHITE);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text("Baron Trenck", PAGE_W / 2, 38, { align: "center" });

  drawGoldLine(doc, PAGE_W / 2 - 25, 43, 50);

  const desc = [
    "Baron Trenck is a 43.5-metre explorer superyacht built by Eurocraft Cantieri Navali in 2011 and refitted in 2022. With her steel hull and aluminium superstructure, she combines robust ocean-going capability with refined luxury.",
    "",
    "She accommodates 12 guests in 6 well-appointed cabins — including 4 double and 2 twin cabins — served by a professional crew of 9. Her interior design reflects timeless elegance with warm woods, natural stone, and bespoke furnishings throughout.",
    "",
    "Powered by twin MTU engines producing 1,632 HP each, Baron Trenck achieves a cruising speed of 12 knots and a maximum speed of 15 knots, with an impressive range of 11,600 nautical miles at economical speed.",
    "",
    "Equipped with NAIAD zero-speed stabilizers, she ensures smooth cruising in all conditions. The yacht features multiple deck areas, a spacious sundeck, and comprehensive amenities for extended voyages."
  ];

  doc.setTextColor("#c8cdd5");
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");

  const lines = doc.splitTextToSize(desc.join("\n"), PAGE_W - 80);
  doc.text(lines, 40, 58);
}

// Page 4-5: Photo Gallery
async function pageGallery(doc: jsPDF, images: HTMLImageElement[], pageTitle: string) {
  drawPageBg(doc);

  doc.setTextColor(GOLD);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("GALLERY", PAGE_W / 2, 20, { align: "center" });

  doc.setTextColor(WHITE);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text(pageTitle, PAGE_W / 2, 32, { align: "center" });

  drawGoldLine(doc, PAGE_W / 2 - 20, 36, 40);

  // 2x3 grid
  const margin = 20;
  const gap = 6;
  const cols = 3;
  const rows = 2;
  const imgW = (PAGE_W - margin * 2 - gap * (cols - 1)) / cols;
  const imgH = (PAGE_H - 50 - margin - gap * (rows - 1)) / rows;

  images.forEach((img, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = margin + col * (imgW + gap);
    const y = 45 + row * (imgH + gap);
    addImageCover(doc, img, x, y, imgW, imgH);
  });
}

// Page 6: Deck Plans
async function pageDeckPlans(doc: jsPDF, deckImages: HTMLImageElement[]) {
  drawPageBg(doc);

  doc.setTextColor(GOLD);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("LAYOUT", PAGE_W / 2, 20, { align: "center" });

  doc.setTextColor(WHITE);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("Deck Plans", PAGE_W / 2, 32, { align: "center" });

  drawGoldLine(doc, PAGE_W / 2 - 20, 36, 40);

  const labels = ["Sundeck", "Upper Deck", "Main Deck", "Lower Deck"];
  const deckH = 35;
  const deckW = PAGE_W - 60;
  const startY = 45;
  const gap = 3;

  deckImages.forEach((img, i) => {
    const y = startY + i * (deckH + gap + 8);

    doc.setTextColor(GOLD);
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(labels[i], 30, y);

    addImageCover(doc, img, 30, y + 2, deckW, deckH);
  });
}

// Page 7: Contact
function pageContact(doc: jsPDF) {
  drawPageBg(doc);

  doc.setTextColor(GOLD);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("CONTACT", PAGE_W / 2, 60, { align: "center" });

  doc.setTextColor(WHITE);
  doc.setFontSize(32);
  doc.setFont("helvetica", "bold");
  doc.text("Interested?", PAGE_W / 2, 78, { align: "center" });

  drawGoldLine(doc, PAGE_W / 2 - 25, 84, 50);

  doc.setTextColor("#c8cdd5");
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("We are ready to assist you with a viewing or detailed condition reports.", PAGE_W / 2, 98, { align: "center" });

  // Contact cards
  const cardW = 70;
  const cardH = 35;
  const cardY = 115;
  const cards = [
    { label: "Phone", value: "+420 775 799 901" },
    { label: "Email", value: "info@yachtprofessional.cz" },
    { label: "Location", value: "Italy" },
  ];

  const totalW = cards.length * cardW + (cards.length - 1) * 10;
  const startX = (PAGE_W - totalW) / 2;

  cards.forEach((card, i) => {
    const x = startX + i * (cardW + 10);
    doc.setFillColor(DARK_CARD);
    doc.roundedRect(x, cardY, cardW, cardH, 2, 2, "F");

    doc.setTextColor(GOLD);
    doc.setFontSize(9);
    doc.text(card.label, x + cardW / 2, cardY + 14, { align: "center" });

    doc.setTextColor(WHITE);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(card.value, x + cardW / 2, cardY + 24, { align: "center" });
    doc.setFont("helvetica", "normal");
  });

  // Footer
  doc.setTextColor(MUTED);
  doc.setFontSize(8);
  doc.text("© 2025 Yacht Professional. All information is believed to be correct but not guaranteed.", PAGE_W / 2, PAGE_H - 15, { align: "center" });
}

export async function generateBrochure() {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

  // Load all images in parallel
  const [hero, interior, cabin, deck, g1, g2, g3, g4, g5, g6, sundeck, upperdeck, maindeck, lowerdeck] =
    await Promise.all([
      loadImage(heroImg),
      loadImage(interiorImg),
      loadImage(cabinImg),
      loadImage(deckImg),
      loadImage(gallery1),
      loadImage(gallery2),
      loadImage(gallery3),
      loadImage(gallery4),
      loadImage(gallery5),
      loadImage(gallery6),
      loadImage(sundeckImg),
      loadImage(upperdeckImg),
      loadImage(maindeckImg),
      loadImage(lowerdeckImg),
    ]);

  // Page 1 - Title
  await page1(doc, hero);

  // Page 2 - Specs
  doc.addPage();
  page2(doc);

  // Page 3 - Description
  doc.addPage();
  page3(doc);

  // Page 4 - Gallery 1
  doc.addPage();
  await pageGallery(doc, [g1, g2, g3, interior, cabin, deck], "Exterior & Interior");

  // Page 5 - Gallery 2
  doc.addPage();
  await pageGallery(doc, [g4, g5, g6, g1, g2, g3], "Details & Amenities");

  // Page 6 - Deck Plans
  doc.addPage();
  await pageDeckPlans(doc, [sundeck, upperdeck, maindeck, lowerdeck]);

  // Page 7 - Contact
  doc.addPage();
  pageContact(doc);

  doc.save("Baron_Trenck_Brochure.pdf");
}
