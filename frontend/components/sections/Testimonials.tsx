"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Since switching to this ERP, our administrative workload has reduced by 60%. The parents love the mobile app!",
        author: "Mr. Rajesh Kumar",
        role: "Principal, St. Xavier's School",
        location: "Bangalore",
    },
    {
        quote: "Their admission marketing strategies helped us fill our seats within 2 months. Highly recommended!",
        author: "Mrs. Priya Sharma",
        role: "Director, Little Angels Academy",
        location: "Delhi",
    },
    {
        quote: "The website they designed is beautiful and very easy to update. We get so many inquiries through it now.",
        author: "Dr. Anirudh Gupta",
        role: "Chairman, Global International School",
        location: "Mumbai",
    },
];

export function Testimonials() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading mb-4">
                        What School Leaders Say
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-slate-100 h-12 w-12 -z-0" />
                            <p className="text-slate-600 mb-6 relative z-10 italic">
                                &quot;{testimonial.quote}&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                    {testimonial.author[0]}
                                </div>
                                <div>
                                    <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
