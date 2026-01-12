"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useBooking } from "@/context/BookingContext";

const plans = [
    {
        name: "Starter",
        description: "For small schools starting their digital journey.",
        price: { monthly: "₹1,500", yearly: "₹15,000" },
        period: { monthly: "/month", yearly: "/year" },
        features: ["Student Management", "Fee Collection", "Basic Reports", "Email Support"],
        popular: false,
    },
    {
        name: "Standard",
        description: "Perfect for growing schools needing more control.",
        price: { monthly: "₹3,500", yearly: "₹35,000" },
        period: { monthly: "/month", yearly: "/year" },
        features: ["Everything in Starter", "Exam & Results", "Parent Mobile App", "SMS Integration", "Priority Support"],
        popular: true,
    },
    {
        name: "Premium",
        description: "Complete solution for established institutions.",
        price: { monthly: "Custom", yearly: "Custom" },
        period: { monthly: "", yearly: "" },
        features: ["Everything in Standard", "Website Development", "Admission Marketing", "Dedicated Account Manager", "Custom Features"],
        popular: false,
    },
];

export function Pricing() {
    const [isYearly, setIsYearly] = useState(true);
    const { openBooking } = useBooking();

    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-heading mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Choose the plan that fits your school&apos;s size and needs. No hidden setup fees.
                    </p>

                    {/* Toggle Switch */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative w-14 h-8 rounded-full bg-slate-200 p-1 transition-colors hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            <motion.div
                                className="w-6 h-6 rounded-full bg-white shadow-sm"
                                animate={{ x: isYearly ? 24 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
                            Yearly <span className="text-xs text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded-full ml-1">SAVE 20%</span>
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border ${plan.popular
                                ? "border-primary shadow-xl bg-white scale-105 z-10"
                                : "border-slate-100 shadow-sm bg-slate-50"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-sm text-muted-foreground mb-6 h-10">{plan.description}</p>

                            <div className="mb-6 h-16">
                                <motion.div
                                    key={isYearly ? "yearly" : "monthly"}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="text-4xl font-bold">{isYearly ? plan.price.yearly : plan.price.monthly}</span>
                                    <span className="text-muted-foreground">{isYearly ? plan.period.yearly : plan.period.monthly}</span>
                                </motion.div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm">
                                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.popular ? "cta" : "outline"}
                                className="w-full group relative overflow-hidden"
                                onClick={openBooking}
                            >
                                <span className="relative z-10">Get Started</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
