"use client";

import { motion } from "framer-motion";
import { Contact } from "@/components/sections/Contact";
import { AnimatedText } from "@/components/ui/AnimatedText";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            {/* Page Hero */}
            <section className="bg-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f14d70fa4c4d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading mb-6"
                    >
                        Get in <br />
                        <AnimatedText text="Touch" className="text-blue-400" />
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        Have questions? We're here to help you transform your school.
                    </motion.p>
                </div>
            </section>

            <Contact />
        </div>
    );
}
