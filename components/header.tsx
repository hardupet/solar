import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b">
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
        {/* Mobile Controls */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
} 