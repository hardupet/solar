import { Chrome, Apple, Database } from "lucide-react"
import { ComputerIcon as Windows, LaptopIcon as Linux } from "lucide-react"

export function Tools() {
  return (
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
  )
} 