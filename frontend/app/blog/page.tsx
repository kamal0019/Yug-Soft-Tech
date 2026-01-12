"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Search, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = ["All", "EdTech", "Guides", "Company News", "Student Success", "Teachers", "Policy"];

const articles = [
    {
        title: "The Future of AI in Education: A Comprehensive Guide",
        excerpt: "Artificial intelligence is no longer just a buzzword. From personalized learning paths to automated grading, explore how AI is reshaping the classroom experience for students and teachers alike.",
        date: "Oct 12, 2025",
        author: "Sarah Johnson",
        category: "EdTech",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Top 10 School Management Tips for 2026",
        excerpt: "Streamline your administrative processes with these proven strategies. Learn how to save time, reduce paperwork, and improve staff morale with simple digital implementations.",
        date: "Sep 28, 2025",
        author: "David Chen",
        category: "Guides",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Building Stronger Parent-Teacher Communities",
        excerpt: "Why engagement matters and how to foster better communication between home and school. Discover the tools that bridge the gap effectively.",
        date: "Sep 15, 2025",
        author: "Emily Wilson",
        category: "Community",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Digital Transformation Trends to Watch",
        excerpt: "What to expect in the coming year for educational institutions adopting new technologies. Stay ahead of the curve with our expert predictions.",
        date: "Aug 30, 2025",
        author: "Michael Brown",
        category: "Trends",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Case Study: How Lincoln High Saved 20hrs/Week",
        excerpt: "A deep dive into how one high school automated their attendance and grading systems, freeing up valuable time for their teaching staff.",
        date: "Aug 12, 2025",
        author: "Sarah Johnson",
        category: "Student Success",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Cybersecurity in Schools: What You Need to Know",
        excerpt: "With the rise of digital learning comes the risk of data breaches. Here is a checklist to ensure your school's data remains secure.",
        date: "Jul 25, 2025",
        author: "David Kim",
        category: "Guides",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop"
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20 font-sans">
            <div className="container mx-auto px-4">

                {/* Header & Search */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-bold font-heading text-slate-900 mb-4"
                        >
                            Insights & <br />
                            <span className="text-blue-600">Resources</span>
                        </motion.h1>
                        <p className="text-lg text-slate-600">
                            Expert advice, industry news, and practical guides for modern school management.
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full md:w-auto"
                    >
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <Input placeholder="Search articles..." className="pl-10 w-full md:w-80 bg-white border-slate-200" />
                        </div>
                    </motion.div>
                </div>

                {/* Categories */}
                <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
                    <div className="flex gap-3">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${i === 0 ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Post */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 grid md:grid-cols-2 gap-8 items-center bg-white rounded-[2rem] p-6 pr-8 md:pr-12 shadow-2xl shadow-slate-200/50 border border-slate-100"
                >
                    <div className="relative h-64 md:h-[500px] rounded-[1.5rem] overflow-hidden group">
                        <img
                            src={articles[0].image}
                            alt={articles[0].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-slate-900 shadow-sm">
                            {articles[0].category}
                        </div>
                    </div>
                    <div className="md:pl-8 py-6">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                            <span className="flex items-center gap-2"><Calendar size={16} /> {articles[0].date}</span>
                            <span className="flex items-center gap-2"><User size={16} /> {articles[0].author}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                            {articles[0].title}
                        </h2>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            {articles[0].excerpt}
                        </p>
                        <Button className="rounded-full px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20">
                            Read Full Article <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </motion.div>

                {/* Article Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {articles.slice(1).map((article, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                                    {article.category}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                                    <span className="flex items-center gap-1"><User size={12} /> {article.author}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                    {article.excerpt}
                                </p>
                                <div className="pt-6 border-t border-slate-100">
                                    <span className="text-sm font-bold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read More <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <section className="bg-slate-900 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                                    <Mail size={24} />
                                </div>
                                <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">Newsletter</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Subscribe to our weekly insights</h2>
                            <p className="text-slate-400 text-lg">
                                Join over 50,000 school administrators getting the best tips and news delivered to their inbox.
                            </p>
                        </div>
                        <div className="w-full max-w-md bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <BlogNewsletterForm />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

function BlogNewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("http://localhost:5001/api/newsletter/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            setStatus("success");
            setMessage("Subscribed successfully!");
            setEmail("");
        } catch (error: any) {
            setStatus("error");
            setMessage(error.message || "Failed to subscribe");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === "loading" || status === "success"}
                    className="flex-1 bg-transparent border border-white/20 text-white px-6 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 placeholder:text-slate-500 outline-none transition-all disabled:opacity-50"
                />
                <Button
                    disabled={status === "loading" || status === "success"}
                    className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-8 h-auto py-3 disabled:opacity-50 whitespace-nowrap"
                >
                    {status === "loading" ? "..." : status === "success" ? "Done" : "Subscribe"}
                </Button>
            </form>
            {message && (
                <p className={`text-sm mt-3 text-center sm:text-left ${status === "success" ? "text-green-400" : "text-red-400"}`}>
                    {message}
                </p>
            )}
        </div>
    );
}

