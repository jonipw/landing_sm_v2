import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { FeaturesSection } from "@/components/features-section";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollAnimation } from "@/components/scroll-animation";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ScrollAnimation>
          <HeroSection />
        </ScrollAnimation>
        <ScrollAnimation delay={0.2} direction="up">
          <PortfolioSection />
        </ScrollAnimation>
        <ScrollAnimation delay={0.3} direction="up">
          <FeaturesSection />
        </ScrollAnimation>
        <ScrollAnimation delay={0.2} direction="up">
          <PricingSection />
        </ScrollAnimation>
        <ScrollAnimation delay={0.3} direction="up">
          <FAQSection />
        </ScrollAnimation>
        <ScrollAnimation delay={0.2} direction="up">
          <ContactSection />
        </ScrollAnimation>
      </main>
      <ScrollAnimation delay={0.1} direction="up">
        <Footer />
      </ScrollAnimation>
    </div>
  );
}
