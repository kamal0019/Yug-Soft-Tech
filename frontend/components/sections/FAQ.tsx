"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How long does it take to set up the ERP?",
        answer: "We can set up the basic ERP system for your school within 24 hours. Data migration and staff training typically take 3-5 days depending on the size of your school.",
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We use bank-grade encryption and host data on secure cloud servers with daily backups. Your data is safe and only accessible to authorized personnel.",
    },
    {
        question: "Do you provide training for teachers?",
        answer: "Yes, we provide comprehensive training sessions for your admin staff and teachers. We also have video tutorials and a dedicated support team to help whenever needed.",
    },
    {
        question: "Can I upgrade my plan later?",
        answer: "Yes, you can upgrade your plan at any time. We will help you migrate to the higher tier seamlessly without any data loss.",
    },
    {
        question: "Does the website come with the ERP?",
        answer: "The website is included in our Premium plan. For other plans, it can be added as a separate service at a discounted rate.",
    },
];

export function FAQ() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-heading mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-medium text-lg">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
