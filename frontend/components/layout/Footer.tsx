"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-0 mb-6">
                            <div className="relative w-16 h-16">
                                <Image
                                    src="/assets/logo-yug-new.png"
                                    alt="Yug Soft-Tech Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold font-heading text-white -ml-4">Yug Soft-Tech</span>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Empowering schools with intelligent technology to streamline operations and boost growth.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white group">
                                <Facebook size={20} className="fill-current" />
                            </a>
                            <a href="https://www.instagram.com/yug_tech_?igsh=ZDcwcmF0dnQ1ZWNt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors text-white group">
                                <Instagram size={20} />
                            </a>
                            <a href="https://x.com/yug_soft_tech_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-black transition-colors text-white group border border-slate-700 hover:border-white/20">
                                {/* X (Twitter) Icon */}
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 fill-current">
                                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/yug-soft-tech-88ba903a4" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors text-white group">
                                <Linkedin size={20} className="fill-current" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="pt-4">
                        <h4 className="font-bold text-white mb-6">Product</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Updates</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="pt-4">
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="pt-4">
                        <h4 className="font-bold text-white mb-6">Stay Updated</h4>
                        <p className="text-slate-400 mb-4 text-sm">Get the latest school management tips and product updates.</p>
                        <NewsletterForm />
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Yug Soft-Tech. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function NewsletterForm() {
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
        <>
            <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === "loading" || status === "success"}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                />
                <button
                    disabled={status === "loading" || status === "success"}
                    className="w-full px-4 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                    {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"}
                </button>
            </form>
            {message && (
                <p className={`text-sm mt-2 ${status === "success" ? "text-green-400" : "text-red-400"}`}>
                    {message}
                </p>
            )}
        </>
    );
}
