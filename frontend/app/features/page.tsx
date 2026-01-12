"use client";

import { motion } from "framer-motion";
import { ERPFeatures } from "@/components/sections/ERPFeatures";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { useBooking } from "@/context/BookingContext";
import { Button } from "@/components/ui/button";
import { BookOpen, Bus, Calendar, Check, Coins, Cpu, FileText, Globe, Layers, Lock, MessageSquare, Server, Shield, Smartphone, Users, Wifi } from "lucide-react";

import { SalesModal } from "@/components/ui/SalesModal";
import { useState } from "react";

export default function FeaturesPage() {
    const { openBooking } = useBooking();
    const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            {/* Page Hero */}
            <section className="bg-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading mb-6"
                    >
                        Powerful Tools at <br />
                        <AnimatedText text="Your Fingertips" className="text-emerald-400" />
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        Explore the comprehensive suite of features designed to modernize your campus.
                    </motion.p>
                </div>
            </section>

            <ERPFeatures />

            {/* Core Modules Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Comprehensive Core Modules
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Everything you need to run your institution smoothly, all in one integrated platform.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: BookOpen, title: "Academics", desc: "Manage curriculum, lesson plans, timetables, and syllabus tracking effortlessly." },
                            { icon: Coins, title: "Finance & Fees", desc: "Automated fee collection, invoices, payroll management, and expense tracking." },
                            { icon: Users, title: "Human Resources", desc: "Staff attendance, leave management, performance evaluation, and recruitment." },
                            { icon: Bus, title: "Transport", desc: "Real-time GPS tracking, route optimization, and vehicle maintenance logs." },
                            { icon: FileText, title: "Examination", desc: "Exam scheduling, grade book management, and automated report card generation." },
                            { icon: Layers, title: "Inventory", desc: "Track assets, manage stocks, purchase orders, and vendor relationships." },
                            { icon: MessageSquare, title: "Communication", desc: "SMS, Email, and WhatsApp integration for instant alerts and announcements." },
                            { icon: Globe, title: "Online Admissions", desc: "Paperless admission inquiries, form processing, and document management." },
                            { icon: Calendar, title: "Library", desc: "Book cataloging, circulation management, and barcode integration." }
                        ].map((module, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 group"
                            >
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <module.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{module.title}</h3>
                                <p className="text-slate-600">{module.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hardware Integration */}
            <section className="py-20 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-medium mb-6">
                                <Cpu size={16} /> Hardware Ready
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                                Seamless Hardware Integration
                            </h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                Connect your physical infrastructure with your digital ERP. We support a wide range of hardware devices to automate data capture.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Biometric Attendance", desc: "Fingerprint and facial recognition for accurate staff and student attendance." },
                                    { title: "RFID Smart Cards", desc: "Contactless ID cards for gate entry, library access, and canteen payments." },
                                    { title: "GPS Tracking", desc: "Live location tracking for school buses with parent notifications." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                            <Wifi size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{item.title}</h4>
                                            <p className="text-slate-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
                            <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-8 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                    alt="Hardware Integration"
                                    className="w-full h-auto rounded-xl shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mobile App & Security */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Mobile App Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8">
                                    <Smartphone size={32} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Native Mobile App</h3>
                                <p className="text-blue-100 mb-8 max-w-md">
                                    Give parents, teachers, and students the power of the ERP in their pockets. Available on iOS and Android.
                                </p>
                                <ul className="space-y-3 mb-8 text-blue-50">
                                    <li className="flex items-center gap-2"><Check className="w-5 h-5" /> Push Notifications</li>
                                    <li className="flex items-center gap-2"><Check className="w-5 h-5" /> Online Fee Payment</li>
                                    <li className="flex items-center gap-2"><Check className="w-5 h-5" /> Homework Uploads</li>
                                </ul>
                                <Button variant="secondary" className="rounded-full">Download Brochure</Button>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-2xl" />
                        </motion.div>

                        {/* Security Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-100 rounded-3xl p-8 md:p-12 text-slate-900 relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm text-slate-900">
                                    <Shield size={32} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Bank-Grade Security</h3>
                                <p className="text-slate-600 mb-8 max-w-md">
                                    Your data's safety is our top priority. We use industry-standard encryption and security protocols.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                                        <Lock className="w-6 h-6 text-emerald-500 mb-2" />
                                        <div className="font-bold text-sm">256-bit SSL</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                                        <Server className="w-6 h-6 text-blue-500 mb-2" />
                                        <div className="font-bold text-sm">Daily Backups</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                                        <Users className="w-6 h-6 text-purple-500 mb-2" />
                                        <div className="font-bold text-sm">Role Access</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                                        <Cpu className="w-6 h-6 text-orange-500 mb-2" />
                                        <div className="font-bold text-sm">99.9% Uptime</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

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
