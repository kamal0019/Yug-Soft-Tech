"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cloud, Clock, Smartphone, TrendingUp, HeartHandshake } from "lucide-react";

const features = [
    {
        icon: Cloud,
        title: "99.9% Uptime Guarantee",
        description: "Our cloud infrastructure ensures your school's data is always accessible, anytime, anywhere."
    },
    {
        icon: ShieldCheck,
        title: "Bank-Grade Security",
        description: "We use 256-bit encryption and daily backups to ensure your sensitive data is never compromised."
    },
    {
        icon: HeartHandshake,
        title: "Dedicated Support",
        description: "Get a dedicated account manager and 24/7 technical support to resolve queries instantly."
    },
    {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "A seamless experience across all devices - desktops, tablets, and smartphones."
    },
    {
        icon: TrendingUp,
        title: "Scalable Architecture",
        description: "Whether you have 100 students or 10,000, our platform grows with your institution."
    },
    {
        icon: Clock,
        title: "Rapid Implementation",
        description: "Go live in less than 24 hours with our streamlined onboarding and data migration tools."
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-5" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
                        Why Leading Schools Choose Us
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        We don't just provide software; we provide a partnership for growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/25">
                                <feature.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
