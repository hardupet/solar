"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Button variant="ghost" className="w-full justify-start text-lg">
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start text-lg">
            Pricing
          </Button>
          <Button variant="ghost" className="w-full justify-start text-lg">
            Features
          </Button>
          <Button variant="ghost" className="w-full justify-start text-lg">
            Use Cases
          </Button>
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="outline" className="w-full">
              Log in
            </Button>
            <Button className="w-full">Sign up</Button>
          </div>
          <div className="mt-4">
            {/* <ThemeToggle /> */}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

