import Header from "@/components/Header";
import HeroSection from "./section/HeroSection";
import PricingSection from "./section/PricingSection";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <PricingSection />
      </main>
    </div>
  );
}
