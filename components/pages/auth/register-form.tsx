"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import Link from "next/link"

export function RegisterForm() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold font-kode-mono">Create Account</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your details to create your account</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Input type="text" placeholder="Full Name" className="font-kode-mono" />
        </div>
        <div className="space-y-2">
          <Input type="email" placeholder="Email" className="font-kode-mono" />
        </div>
        <div className="space-y-2">
          <Input type="password" placeholder="Password" className="font-kode-mono" />
        </div>
        <div className="space-y-2">
          <Input type="password" placeholder="Confirm Password" className="font-kode-mono" />
        </div>
        <Button className="w-full font-kode-mono">Create Account</Button>
      </div>
      <div className="text-center text-sm">
        <Link href="/auth/login" className="text-blue-500 hover:text-blue-600 dark:text-blue-400">
          Already have an account? Login
        </Link>
      </div>
    </motion.div>
  )
} 