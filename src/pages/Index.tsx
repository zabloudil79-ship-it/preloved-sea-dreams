import HeroSection from "@/components/HeroSection";
import PriceBanner from "@/components/PriceBanner";
import QuickSpecs from "@/components/QuickSpecs";
import YachtDescription from "@/components/YachtDescription";
import ImageGallery from "@/components/ImageGallery";
import VideoSection from "@/components/VideoSection";
import Specifications from "@/components/Specifications";
import LayoutSection from "@/components/LayoutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <QuickSpecs />
      <YachtDescription />
      <ImageGallery />
      <VideoSection />
      <Specifications />
      <LayoutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
