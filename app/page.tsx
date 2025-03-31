// import { Button } from "@/components/ui/button"
// import { ThemeToggle } from "@/components/theme-toggle"
// import { MobileMenu } from "@/components/mobile-menu"
import Hero from '@/components/pages/home/hero';
import { Benefits } from '@/components/pages/home/benefits';
import { Features } from '@/components/pages/home/features';
import { Testimonials } from '@/components/pages/home/testimonials';
import { Tools } from '@/components/pages/home/tools';
import { Pricing } from '@/components/pages/home/pricing';
import { FAQSection } from '@/components/pages/home/faq-section';
import { Footer } from '@/components/shared/footer/index';
import { Header } from '@/components/shared/header/index';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-32">
        {/* Navigation */}
        <Header />

        {/* Hero Section */}
        <Hero />

        {/* Benefits Section */}
        <Benefits />

        {/* Features Section */}
        <Features />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Tools Section */}
        <Tools />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <FAQSection />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
