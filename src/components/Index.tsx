import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WhyBambinosSection from "@/components/sections/WhyBambinosSection";
import TeacherProfilesSection from "@/components/sections/TeacherProfilesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import FloatingCTA from "@/components/ui/floating-cta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WhyBambinosSection />
      <TeacherProfilesSection />
      <TestimonialsSection />
      <ContactSection />
      <FinalCTASection />
      <FloatingCTA />
    </div>
  );
};

export default Index;