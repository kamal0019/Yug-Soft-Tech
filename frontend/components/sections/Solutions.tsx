"use client";

import { motion } from "framer-motion";
import { Laptop, Megaphone, School } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { Button } from "@/components/ui/button";

const solutions = [
    {
        icon: School,
        title: "School ERP Software",
        description: "Complete digital management of your school. From admissions to results, automate everything.",
        features: ["Student & Staff Management", "Fee Collection & Receipts", "Exam & Result Generation", "Attendance Tracking"],
        color: "bg-blue-100 text-blue-600",
        gradient: "from-blue-500 to-cyan-400",
        bg: "bg-blue-100",
    },
    {
        icon: Laptop,
        title: "School Website",
        description: "Modern, mobile-friendly websites that build trust and help parents find you easily online.",
        features: ["SEO Optimized", "Mobile Responsive", "Online Admission Forms", "Gallery & Events"],
        color: "bg-purple-100 text-purple-600",
        gradient: "from-purple-500 to-pink-400",
        bg: "bg-purple-100",
    },
    {
        icon: Megaphone,
        title: "Admission Marketing",
        description: "Data-driven digital marketing strategies to increase inquiries and boost admissions.",
        features: ["Social Media Ads", "Google Search Ranking", "Lead Generation", "Brand Building"],
        color: "bg-orange-100 text-orange-600",
        gradient: "from-orange-500 to-red-400",
        bg: "bg-orange-100",
    },
];

export function Solutions() {
    const { openBooking } = useBooking();

    return (
        <section id="solutions" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4"
                    >
                        OUR SOLUTIONS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold font-heading mb-4"
                    >
                        Everything You Need to <span className="text-gradient">Grow</span> Your School
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden"
                        >
                            {/* Top Gradient Line */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${solution.gradient}`} />

                            <div className={`w-16 h-16 rounded-2xl ${solution.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <solution.icon className={`h-8 w-8 ${solution.color}`} />
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-foreground">{solution.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {solution.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {solution.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-slate-600">
                                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.gradient} mr-2`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant="outline"
                                className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors"
                                onClick={openBooking}
                            >
                                Book a Free Demo
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
