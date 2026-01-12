"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Briefcase, Heart, Zap, Coffee, ArrowRight, Check, MapPin, Smile, BookOpen, Sun } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Hero */}
            <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10" />

                <div className="container mx-auto px-4 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 font-medium text-sm mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        We are hiring!
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tight"
                    >
                        Build the Future <br /> of <AnimatedText text="Education" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400" stagger={0.03} delay={0.1} />
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        We're on a mission to empower schools globally. Join a team of dreamers, doers, and educators creating impact at scale.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 h-12 text-lg">
                            View Open Positions
                        </Button>
                        <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-white/10 hover:text-white rounded-full px-8 h-12 text-lg">
                            Life at Yug Soft-Tech
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Culture Gallery */}
            <section className="py-20 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[200px]">
                        <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
                            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" alt="Office Culture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative group">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" alt="Meeting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden relative group">
                            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Collaboration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative group">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Perks */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">Why Join Us?</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">We believe that happy employees make the best products. Here's how we take care of you.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {[
                            { icon: Heart, title: "Health & Wellness", desc: "Premium health, dental, and vision insurance for you and your dependents." },
                            { icon: Zap, title: "Impact at Scale", desc: "Your work will directly improve the education of millions of students worldwide." },
                            { icon: Briefcase, title: "Career Growth", desc: "Annual learning stipends, conference budgets, and mentorship programs." },
                            { icon: Coffee, title: "Flexible Work", desc: "Remote-first culture with beautiful hubs for when you want to collaborate in person." },
                            { icon: Sun, title: "Unlimited PTO", desc: "We trust you to manage your time and take the rest you need to perform your best." },
                            { icon: Smile, title: "Team Retreats", desc: "Quarterly offsites to amazing locations to bond, learn, and have fun together." },
                        ].map((perk, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors"
                            >
                                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                                    <perk.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-3">{perk.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{perk.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring Process */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">Our Hiring Process</h2>
                        <p className="text-slate-600">Simple, transparent, and respectful of your time.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10" />

                        {[
                            { step: "01", title: "Application", desc: "Submit your profile. We review every application." },
                            { step: "02", title: "Initial Chat", desc: "30-min call to align on goals and expectations." },
                            { step: "03", title: "Deep Dive", desc: "Technical or strategic interview relevant to the role." },
                            { step: "04", title: "Offer", desc: "We make a competitive offer and welcome you aboard!" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl text-center shadow-lg border border-slate-100 relative">
                                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold relative z-10 border-4 border-slate-50">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Open Positions</h2>

                    <div className="space-y-4">
                        {[
                            { role: "Senior Frontend Engineer", dept: "Engineering", loc: "Remote", type: "Full-time" },
                            { role: "Product Designer", dept: "Design", loc: "New York, NY", type: "Full-time" },
                            { role: "Customer Success Manager", dept: "Sales", loc: "London, UK", type: "Full-time" },
                            { role: "Backend Developer (Go)", dept: "Engineering", loc: "Remote", type: "Contract" },
                            { role: "Data Scientist", dept: "Data", loc: "San Francisco, CA", type: "Full-time" },
                        ].map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between shadow-sm hover:shadow-lg transition-all border border-slate-100 group cursor-pointer"
                            >
                                <div className="mb-4 md:mb-0">
                                    <h3 className="font-bold text-slate-900 text-xl group-hover:text-blue-600 transition-colors mb-2">
                                        {job.role}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                                        <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full"><Briefcase size={14} /> {job.dept}</span>
                                        <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full"><MapPin size={14} /> {job.loc}</span>
                                        <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full"><BookOpen size={14} /> {job.type}</span>
                                    </div>
                                </div>
                                <Button className="text-white bg-slate-900 group-hover:bg-blue-600 transition-colors rounded-full px-6">
                                    Apply Now
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
