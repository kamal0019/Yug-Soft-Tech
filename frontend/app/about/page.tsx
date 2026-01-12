"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Award, Users, Globe, Rocket } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-50" />

                <div className="container relative mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-semibold mb-6">
                            Established 2020
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-8 tracking-tight leading-tight">
                            Driving the Future <br />
                            <AnimatedText
                                text="of Education Technology"
                                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
                                stagger={0.04}
                            />
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
                    >
                        We are a team of educators, engineers, and visionaries dedicated to transforming
                        how schools operate and students learn. From humble beginnings to a global platform,
                        our journey is defined by innovation.
                    </motion.p>
                </div>
            </section>

            {/* Stats Banner */}
            <section className="-mt-16 relative z-10 px-4">
                <div className="container mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Schools Connected", value: "500+", icon: Globe },
                            { label: "Active Students", value: "1M+", icon: Users },
                            { label: "Awards Won", value: "15+", icon: Award },
                            { label: "Yrs of Innovation", value: "5+", icon: Rocket }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center justify-center p-4">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                                    <stat.icon size={24} />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-slate-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story / Mission */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-20 blur-xl" />
                            <img
                                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop"
                                alt="Our Story"
                                className="relative rounded-2xl shadow-2xl w-full object-cover h-[600px]"
                            />
                            {/* Floating Card */}
                            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                                <p className="text-slate-600 italic">"Our goal has always been simple: make education accessible and manageable for everyone."</p>
                                <div className="mt-4 font-bold text-slate-900">- Kamal Prajapat, CEO</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                                Our Mission & Vision
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                At Yug Soft-Tech, we believe that technology should empower educators, not complicate their lives.
                                Our mission is to simplify school management so that teachers can focus on what they do best: teaching.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Founded in 2020 during the peak of the digital shift in education, we saw a gap in how schools managed their daily operations.
                                Clunky legacy software was holding them back. We set out to build something better—something beautiful, intuitive, and powerful.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    "Simplifying Administration",
                                    "Enhancing Communication",
                                    "Data-Driven Decisions",
                                    "Student-Centric Approach"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <span className="text-slate-700 font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Button className="rounded-full px-8 bg-slate-900 text-white hover:bg-slate-800">
                                Read Our Full Story <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-heading">Our Core Values</h2>
                        <p className="text-slate-600">The principles that guide every decision we make.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation First", desc: "We constantly push the boundaries of what's possible in EdTech.", color: "bg-blue-500" },
                            { title: "User Obsessed", desc: "Every feature is designed with the end-user's experience in mind.", color: "bg-emerald-500" },
                            { title: "Integrity Always", desc: "We handle student data with the highest level of security and ethics.", color: "bg-purple-500" },
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden group"
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 ${value.color}`} />
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {value.desc}
                                </p>
                                <div className={`absolute -bottom-4 -right-4 w-24 h-24 ${value.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-heading">Meet The Team</h2>
                        <p className="text-slate-600">The brilliant minds behind Yug Soft-Tech.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { name: "Ajeet Ojha", role: "", img: "/assets/team-ajeet.jpg" },
                            { name: "Kamal Prajapat", role: "", img: "/assets/team-kamal.png" },
                            { name: "Sourabh Choudhary", role: "", img: "/assets/team-sourabh.png" },
                            { name: "Happy Singh", role: "", img: "/assets/team-happy.png" },
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="group text-center"
                            >
                                <div className="relative mb-6 inline-block rounded-full p-2 border-2 border-slate-100 group-hover:border-blue-500 transition-colors">
                                    <div className="w-48 h-48 rounded-full overflow-hidden">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                                <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
