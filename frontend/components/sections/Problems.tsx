"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react";

const problems = [
    {
        icon: Clock,
        title: "Manual Work Overload",
        description: "Spending hours on attendance, fee collection, and report cards manually?",
        color: "text-red-500",
        bg: "bg-red-50",
    },
    {
        icon: Users,
        title: "Communication Gaps",
        description: "Parents complaining about missing notices or lack of updates?",
        color: "text-orange-500",
        bg: "bg-orange-50",
    },
    {
        icon: TrendingDown,
        title: "Low Admissions",
        description: "Struggling to fill seats despite having great infrastructure?",
        color: "text-yellow-600",
        bg: "bg-yellow-50",
    },
    {
        icon: AlertTriangle,
        title: "No Online Presence",
        description: "Invisible to parents searching for schools on Google?",
        color: "text-blue-500",
        bg: "bg-blue-50",
    },
];

export function Problems() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold font-heading mb-4"
                    >
                        Is Your School Facing These <span className="text-red-500">Challenges?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground"
                    >
                        Managing a school is hard. Without the right tools, it becomes overwhelming.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all ${problem.bg} group cursor-default`}
                        >
                            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <problem.icon className={`h-6 w-6 ${problem.color}`} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{problem.title}</h3>
                            <p className="text-sm text-muted-foreground">{problem.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
