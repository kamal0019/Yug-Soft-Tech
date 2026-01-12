"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { User, Users, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/context/BookingContext";

const roles = [
    {
        id: "admin",
        label: "Principals & Admins",
        icon: Briefcase,
        title: "Complete Control & Insight",
        description: "Get a bird's eye view of your entire institution. Make data-driven decisions with real-time analytics.",
        benefits: [
            "Centralized Dashboard for Multi-branch Management",
            "Automated potentially recurring tasks",
            "Financial Reporting & Fee Tracking",
            "Staff Performance Monitoring"
        ],
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "teacher",
        label: "Teachers",
        icon: User,
        title: "Focus on Teaching, Not Paperwork",
        description: "Automate routine administrative tasks and spend more time engaging with students.",
        benefits: [
            "Digital Attendance & Leave Management",
            "Easy Grade Entry & Report Card Generation",
            "Lesson Planning & Syllabus Tracking",
            "Direct Communication with Parents"
        ],
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "student",
        label: "Students",
        icon: GraduationCap,
        title: "Empowering Learning Journeys",
        description: "Access learning materials, track progress, and stay organized with a personalized student portal.",
        benefits: [
            "Access to Homework & Assignments Online",
            "Digital Library & E-Books",
            "Exam Schedules & Results",
            "Virtual Classroom Integration"
        ],
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "parent",
        label: "Parents",
        icon: Users,
        title: "Stay Connected & Informed",
        description: "Never miss an update about your child's education. Get real-time alerts and track progress.",
        benefits: [
            "Real-time Attendance Alerts",
            "Secure Online Fee Payment",
            "Academic Performance Tracking",
            "Bus Tracking & Safety Alerts"
        ],
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2000&auto=format&fit=crop"
    }
];

export function SolutionsByRole() {
    const [activeTab, setActiveTab] = useState(0);
    const { openBooking } = useBooking();

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
                        Built for <span className="text-gradient">Everyone</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Our platform provides tailored interfaces and tools for every stakeholder in the education ecosystem.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Sidebar / Tabs */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-2">
                        {roles.map((role, index) => (
                            <button
                                key={role.id}
                                onClick={() => setActiveTab(index)}
                                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${activeTab === index
                                    ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                                    }`}
                            >
                                <div className={`p-2 rounded-lg ${activeTab === index ? "bg-white/20" : "bg-white text-primary shadow-sm"}`}>
                                    <role.icon size={20} />
                                </div>
                                <span className="font-semibold">{role.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-2/3">
                        <div className="relative bg-slate-50 rounded-3xl p-8 overflow-hidden min-h-[500px] border border-slate-100">
                            {roles.map((role, index) => (
                                index === activeTab && (
                                    <motion.div
                                        key={role.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="h-full flex flex-col"
                                    >
                                        <div className="mb-8">
                                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{role.title}</h3>
                                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                                {role.description}
                                            </p>

                                            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                                                {role.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                                        </div>
                                                        <span className="text-slate-700">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <Button onClick={openBooking} className="bg-primary text-white hover:bg-primary/90">
                                                Schedule Demo for {role.label}
                                            </Button>
                                        </div>

                                        <div className="mt-auto relative h-64 rounded-2xl overflow-hidden group">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                            <img
                                                src={role.image}
                                                alt={role.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
