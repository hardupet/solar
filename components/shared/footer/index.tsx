import { Sun } from "lucide-react"

export function Footer() {
  return (
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
  )
} 