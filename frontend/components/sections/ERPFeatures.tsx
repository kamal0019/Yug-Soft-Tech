"use client";

import { motion } from "framer-motion";
import { Check, UserCog, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlider } from "@/components/ui/ImageSlider";

const roles = [
    {
        name: "For Admin",
        features: ["Fee Management", "Staff Payroll", "Admission Tracking", "Inventory Control"],
        image: "bg-blue-50",
        icon: UserCog,
        iconColor: "text-blue-600"
    },
    {
        name: "For Teachers",
        features: ["Attendance Marking", "Exam Marks Entry", "Homework Assignment", "Digital Diary"],
        image: "bg-green-50",
        icon: GraduationCap,
        iconColor: "text-green-600"
    },
    {
        name: "For Parents",
        features: ["Online Fee Payment", "Result Viewing", "Bus Tracking", "Direct Communication"],
        image: "bg-orange-50",
        icon: Users,
        iconColor: "text-orange-600"
    },
];

export function ERPFeatures() {
    return (
        <section id="features" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                            Powerful ERP
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold font-heading mt-2 mb-6">
                            Smart Management for Every Role
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Our ERP software adapts to the needs of every stakeholder in your school ecosystem. Simple, secure, and effective.
                        </p>

                        <div className="space-y-6">
                            {roles.map((role, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                                >
                                    <div className={`w-12 h-12 rounded-lg ${role.image} shrink-0 flex items-center justify-center`}>
                                        <role.icon className={`w-6 h-6 ${role.iconColor}`} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">{role.name}</h3>
                                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                                            {role.features.map((feature, idx) => (
                                                <span key={idx} className="text-sm text-muted-foreground flex items-center">
                                                    <Check className="w-3 h-3 text-green-500 mr-1" />
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <Button variant="cta" size="lg">
                                Explore All Features
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Abstract representation of ERP Interface */}
                        <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2">
                            <div className="bg-slate-100 rounded-xl aspect-square flex items-center justify-center text-slate-400 overflow-hidden relative">
                                <ImageSlider
                                    images={[
                                        "/assets/feature-1.png",
                                        "/assets/feature-2.png",
                                        "/assets/feature-3.png",
                                        "/assets/feature-4.png"
                                    ]}
                                    interval={2500}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
