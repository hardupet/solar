import { RegisterForm } from "@/components/pages/auth/register-form"
import { Header } from "@/components/shared/header/index"
import { Footer } from "@/components/shared/footer/index"

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-32">
        {/* Navigation */}
        <Header />

        {/* Register Form Section */}
        <div className="flex-1 flex items-center justify-center py-16">
          <RegisterForm />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
} 