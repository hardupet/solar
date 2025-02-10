"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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

export function FAQSection() {
  // Changed from export default to export function
  return (
    <section className="container px-4 py-12 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12 font-kode-mono">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full font-gontserrat">
          {faq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="font-kode-mono">
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

