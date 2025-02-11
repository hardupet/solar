"use client"

import Content from "./content"
import Layout from "./layout"
import { motion } from "framer-motion"

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        <Content />
      </Layout>
    </motion.div>
  )
} 