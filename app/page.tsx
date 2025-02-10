import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { HeroBackground } from "@/components/hero-background"
import {
  BarChart3,
  Bell,
  ChevronRight,
  LineChart,
  Sun,
  Star,
  Chrome,
  Apple,
  ComputerIcon as Windows,
  LaptopIcon as Linux,
  Database,
  Check,
} from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import { FAQSection } from "@/components/faq-section"

const testimonials = [
  {
    name: "John Smith",
    role: "Solar Project Manager",
    content: "This platform has revolutionized how we approach solar projects.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Investment Analyst",
    content: "The predictive insights have been invaluable for our investment decisions.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "EPC Director",
    content: "Excellent tool for project planning and analysis.",
    rating: 4,
  },
]

const features = [
  {
    title: "Advanced Analytics",
    description: "Powerful predictive models for solar adoption trends",
  },
  {
    title: "Real-time Monitoring",
    description: "Track solar performance metrics in real-time",
  },
  {
    title: "Custom Reports",
    description: "Generate detailed reports for stakeholders",
  },
  {
    title: "API Access",
    description: "Integrate with your existing systems",
  },
  {
    title: "Market Insights",
    description: "Stay updated with market trends",
  },
  {
    title: "Policy Tracking",
    description: "Monitor regulatory changes and policies",
  },
]

const faq = [
  {
    question: "How accurate are the predictions?",
    answer: "Our machine learning models achieve 98.7% accuracy based on historical data.",
  },
  {
    question: "Can I export the data?",
    answer: "Yes, you can export data in multiple formats including PDF, Excel, and CSV.",
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes, our enterprise plan includes customization options for specific needs.",
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl">Alpha One Solutions</span>
            </div>
            <nav className="hidden md:flex-1 md:flex md:justify-center">
              <div className="flex items-center space-x-8 font-kode-mono">
                <Button variant="ghost" className="text-base">
                  Home
                </Button>
                <Button variant="ghost" className="text-base">
                  Pricing
                </Button>
                <Button variant="ghost" className="text-base">
                  Features
                </Button>
                <Button variant="ghost" className="text-base">
                  Use Cases
                </Button>
              </div>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-base">
                Log in
              </Button>
              <Button className="text-base">Sign up</Button>
              <ThemeToggle />
            </div>
            <MobileMenu />
          </div>
        </header>

        {/* Hero Section with 3D Background */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <HeroBackground />
          <div className="container px-4 py-24 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Solar Energy Insights Platform
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Empower your solar investments with data-driven predictions
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Start Free Trial
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container px-4 py-12 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="p-6">
              <LineChart className="h-12 w-12 mb-4 text-orange-500" />
              <h3 className="text-lg font-bold">Predictive Analytics</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Advanced machine learning models with proven high accuracy
              </p>
            </Card>
            <Card className="p-6">
              <Bell className="h-12 w-12 mb-4 text-orange-500" />
              <h3 className="text-lg font-bold">Real-Time Alerts</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Stay informed about market shifts and policy changes
              </p>
            </Card>
            <Card className="p-6">
              <BarChart3 className="h-12 w-12 mb-4 text-orange-500" />
              <h3 className="text-lg font-bold">Custom Reports</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Generate detailed reports for stakeholder presentations
              </p>
            </Card>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container px-4 py-12 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6">
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="container px-4 py-12 md:px-6 bg-muted">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools & Integrations */}
        <section className="container px-4 py-12 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Tools & Integrations</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Chrome className="h-12 w-12 text-gray-400" />
            <Apple className="h-12 w-12 text-gray-400" />
            <Windows className="h-12 w-12 text-gray-400" />
            <Linux className="h-12 w-12 text-gray-400" />
            <Database className="h-12 w-12 text-gray-400" />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container px-4 py-12 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "Basic",
                price: "$0",
                features: ["Basic predictions", "Monthly reports", "Email support"],
              },
              {
                name: "Pro",
                price: "$30",
                isBestSeller: true,
                features: ["Advanced predictions", "Weekly reports", "Priority support", "API access"],
              },
              {
                name: "Enterprise",
                price: "$100",
                features: [
                  "Custom predictions",
                  "Real-time reports",
                  "24/7 support",
                  "Full API access",
                  "Custom integration",
                ],
              },
            ].map((plan) => (
              <Card key={plan.name} className="p-6 relative">
                {plan.isBestSeller && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Best seller
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <div className="mt-2 text-3xl font-bold">
                    {plan.price}
                    <span className="text-sm font-normal">/month</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">{plan.name === "Basic" ? "Get Started" : "Subscribe"}</Button>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Footer */}
        <footer className="border-t">
          <div className="container px-4 py-12 md:px-6">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Sun className="h-6 w-6" />
                  <span className="font-bold">Alpha One Solutions</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Empowering solar energy adoption with predictive insights
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>API</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>About</li>
                  <li>Blog</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li>Privacy</li>
                  <li>Terms</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

