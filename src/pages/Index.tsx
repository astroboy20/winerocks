import HeroSection from "@/components/HeroSection";
import BehavioralFabric from "@/components/BehavioralFabric";
import VentureLab from "@/components/VentureLab";
import ContactSection from "@/components/ContactSection";
import NudgeGenerator from "@/components/NudgeGenerator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <BehavioralFabric />
      <VentureLab />
      <ContactSection />
      <NudgeGenerator />
    </div>
  );
};

export default Index;
