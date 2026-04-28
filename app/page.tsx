import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PillarsSection from "@/components/PillarsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <PillarsSection />
        <ServicesSection />
        <VisionMissionSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
