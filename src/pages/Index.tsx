import HeroSection from "@/components/HeroSection";
import QuickSpecs from "@/components/QuickSpecs";
import YachtDescription from "@/components/YachtDescription";
import ImageGallery from "@/components/ImageGallery";
import Specifications from "@/components/Specifications";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <QuickSpecs />
      <YachtDescription />
      <ImageGallery />
      <Specifications />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
