// import { Button } from "@/components/ui/button"
// import { ThemeToggle } from "@/components/theme-toggle"
// import { MobileMenu } from "@/components/mobile-menu"
import Hero from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Tools } from "@/components/tools"
import { Pricing } from "@/components/pricing"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

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
  )
}

