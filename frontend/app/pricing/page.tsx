"use client";

import { motion } from "framer-motion";
import { Pricing } from "@/components/sections/Pricing";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { FAQ } from "@/components/sections/FAQ";

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            {/* Page Hero */}
            <section className="bg-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading mb-6"
                    >
                        Transparent <br />
                        <AnimatedText text="Pricing" className="text-purple-400" />
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        Choose the plan that fits your school's needs. No hidden fees.
                    </motion.p>
                </div>
            </section>

            <Pricing />
            <FAQ />
        </div>
    );
}
