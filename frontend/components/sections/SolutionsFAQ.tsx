"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "Is training provided for teachers and staff?",
        answer: "Yes, we provide comprehensive training sessions for all staff members during the implementation phase. We also offer video tutorials and a dedicated support team for ongoing assistance."
    },
    {
        question: "Is my data secure in the cloud?",
        answer: "Absolutely. We use industry-standard 256-bit SSL encryption for all data transmission. Our servers are hosted on secure AWS infrastructure with automated daily backups."
    },
    {
        question: "Can I import data from my old system or Excel files?",
        answer: "Yes, our platform supports bulk data import from Excel and CSV formats. Our team will assist you in migrating your existing student and staff records seamlessly."
    },
    {
        question: "Do you offer a free trial?",
        answer: "We offer a free personalized demo where we walk you through the features relevant to your school. We can also set up a sandbox environment for you to explore."
    },
    {
        question: "Can parents pay fees online?",
        answer: "Yes, we integrate with major payment gateways to allow parents to pay fees securely via credit card, debit card, net banking, and UPI directly from the parent app."
    }
];

export function SolutionsFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground">
                        Have questions? We're here to help.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-primary" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-slate-400" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
