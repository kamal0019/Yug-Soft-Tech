"use client";

import { motion } from "framer-motion";
import { Solutions } from "@/components/sections/Solutions";
import { SolutionsByRole } from "@/components/sections/SolutionsByRole";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SolutionsFAQ } from "@/components/sections/SolutionsFAQ";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/context/BookingContext";

import { SalesModal } from "@/components/ui/SalesModal";
import { useState } from "react";

export default function SolutionsPage() {
    const { openBooking } = useBooking();
    const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            {/* Page Hero */}
            <section className="bg-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading mb-6"
                    >
                        Tailored Solutions for <br />
                        <AnimatedText text="Every Institution" className="text-blue-400" />
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        From K-12 schools to universities, our platform adapts to your unique needs.
                    </motion.p>
                </div>
            </section>

            {/* Main Solutions Grid */}
            <Solutions />

            {/* Solutions by Role */}
            <SolutionsByRole />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* FAQ */}
            <SolutionsFAQ />

            {/* Final CTA */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Modernize Your Campus?</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        Join hundreds of innovative schools that trust Yug Soft-Tech to manage their daily operations.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8" onClick={openBooking}>
                            Book a Free Demo
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full px-8"
                            onClick={() => setIsSalesModalOpen(true)}
                        >
                            Talk to Sales
                        </Button>
                    </div>
                </div>
            </section>
            <SalesModal isOpen={isSalesModalOpen} onClose={() => setIsSalesModalOpen(false)} />
        </div>
    );
}
