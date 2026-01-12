"use client";

import { Button } from "@/components/ui/button";
import { ImageSlider } from "@/components/ui/ImageSlider";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useBooking } from "@/context/BookingContext";

import { SalesModal } from "@/components/ui/SalesModal";

const words = ["Intelligent", "Excellent", "Modern", "Advanced", "Smart"];

export function Hero() {
    const [index, setIndex] = useState(0);
    const { openBooking } = useBooking();
    const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-background">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[100px] animate-float" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
                <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-secondary/20 blur-[80px] animate-float" style={{ animationDelay: "4s" }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium mb-6 shadow-sm">
                        <Sparkles className="h-4 w-4 text-accent" />
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                            #1 ERP Solution for Modern Schools
                        </span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold font-heading text-foreground leading-[1.1] mb-6">
                        <span className="sr-only">Transform Your School with Intelligent Technology</span>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                            className="flex flex-wrap gap-x-3 gap-y-1"
                        >
                            {["Transform", "Your", "School", "with"].map((word, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                    }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                            <div className="relative inline-block min-w-[320px] h-[1.2em] overflow-hidden align-top px-1">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={words[index]}
                                        initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
                                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                        exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute left-0 top-0 text-gradient block"
                                    >
                                        {words[index]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                Technology
                            </motion.span>
                        </motion.div>
                    </h1>

                    <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                        The all-in-one platform to streamline operations, boost admissions by 3x, and deliver a world-class experience to parents.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <Button size="lg" className="text-base px-8 h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 border-0" onClick={openBooking}>
                            Book Free Demo <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-base px-8 h-12 border-primary/20 hover:bg-primary/5 text-primary backdrop-blur-sm bg-white/30"
                            onClick={() => setIsSalesModalOpen(true)}
                        >
                            Talk to Sales
                        </Button>
                        <SalesModal isOpen={isSalesModalOpen} onClose={() => setIsSalesModalOpen(false)} />
                    </div>

                    <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-foreground font-medium">
                        <div className="flex items-center gap-2">
                            <div className="p-1 rounded-full bg-green-100 text-green-600">
                                <CheckCircle2 className="h-3 w-3" />
                            </div>
                            <span>Setup in 24 Hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="p-1 rounded-full bg-green-100 text-green-600">
                                <CheckCircle2 className="h-3 w-3" />
                            </div>
                            <span>No Technical Skills Needed</span>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 animate-float">
                        {/* Main Dashboard Preview Mockup */}
                        <div className="glass rounded-2xl overflow-hidden p-2">
                            <div className="rounded-xl overflow-hidden bg-white shadow-2xl border border-slate-100">
                                <div className="h-10 bg-slate-50 border-b flex items-center px-4 gap-2 justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <div className="h-4 w-32 bg-slate-200 rounded-full opacity-50" />
                                </div>
                                <div className="p-1 bg-slate-50 relative">
                                    {/* Placeholder for Dashboard Image - Replaced with abstract UI */}
                                    {/* Dashboard Image Slider */}
                                    <div className="aspect-[16/10] bg-slate-100 w-full rounded-lg relative overflow-hidden group">
                                        <ImageSlider
                                            images={[
                                                "/assets/slider-1.png",
                                                "/assets/slider-2.jpg",
                                                "/assets/slider-3.png"
                                            ]}
                                            interval={3000}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute -bottom-8 -left-8 glass p-4 rounded-xl max-w-[220px]"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold shadow-lg shadow-green-500/30">
                                    +
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-medium">New Admissions</p>
                                    <p className="text-xl font-bold text-foreground">+128%</p>
                                </div>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-green-400 to-green-600 w-[70%]" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -top-8 -right-8 glass p-3 rounded-xl flex items-center gap-3"
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <CheckCircle2 className="text-white h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-foreground">Fees Collected</p>
                                <p className="text-xs text-green-600 font-medium bg-green-100 px-2 py-0.5 rounded-full inline-block mt-1">Just now</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
