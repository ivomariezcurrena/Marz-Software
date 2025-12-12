import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroParallax } from "@/components/hero-parallax";
import { ServicesGrid } from "@/components/services-grid";
import { TimelineSection } from "@/components/timeline-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { StatsSection } from "@/components/stats-section";
import { CTASection } from "@/components/cta-section";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroParallax />
      <ServicesGrid />
      <TimelineSection />
      <TestimonialsSection />
      <StatsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
}
