import Header from "@/components/Header";
import HeroSection from "./section/hero-section";
import PricingSection from "./section/pricing-section";
import Testimonials from "./section/testimonials-section";
import Cta from "./section/cta-section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <PricingSection />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
