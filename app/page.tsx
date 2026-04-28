import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PilaresSection from "@/components/PilaresSection";
import ServicesSection from "@/components/ServicesSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-amber-200">
        <HeroSection />
        <PilaresSection />
        <ServicesSection />
        <VisionMissionSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
