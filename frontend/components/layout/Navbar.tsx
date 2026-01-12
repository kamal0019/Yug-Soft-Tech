"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
    { name: "Solutions", href: "/solutions" },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
];

import { useBooking } from "@/context/BookingContext";

export function Navbar() {
    const [scrolled, setScrolled] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const { scrollY } = useScroll();
    const { openBooking } = useBooking();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const isScrolled = latest > 50;
        if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
        }
    });

    return (
        <>
            <motion.header
                layout
                className={cn(
                    "fixed z-50 transition-all duration-500 ease-in-out",
                    scrolled
                        ? "top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-fit md:max-w-[98%] h-16 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl shadow-black/20"
                        : "top-0 left-0 right-0 h-24 bg-transparent"
                )}
            >
                <div className="h-full px-12 flex items-center justify-between mx-auto max-w-7xl">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-0 group">
                        <div className={cn(
                            "relative flex items-center justify-center transition-all duration-300 translate-y-2",
                            scrolled ? "w-20 h-20" : "w-24 h-24"
                        )}>
                            <Image
                                src="/assets/logo-yug-new.png"
                                alt="Yug Soft-Tech Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className={cn(
                            "text-xl font-bold font-heading tracking-tight transition-colors whitespace-nowrap",
                            scrolled ? "text-white -ml-5" : "text-slate-900 -ml-7"
                        )}>
                            Yug Soft-Tech
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <NavLink key={link.name} href={link.href} scrolled={scrolled}>
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            className={cn(
                                "rounded-full px-6 transition-all duration-300 shadow-lg hover:shadow-primary/25",
                                scrolled
                                    ? "bg-white text-black hover:bg-white/90"
                                    : "bg-gradient-to-r from-primary to-accent text-white border-0"
                            )}
                            onClick={openBooking}
                        >
                            Book Demo
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={cn(
                            "md:hidden p-2 transition-colors",
                            scrolled ? "text-white/90 hover:text-white" : "text-slate-900 hover:text-slate-700"
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 z-40 bg-black/60 md:hidden"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="absolute top-0 left-0 right-0 bg-zinc-900 border-b border-white/10 p-6 pt-28"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="flex items-center justify-between text-lg font-medium text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                            <ChevronRight size={16} className="opacity-50" />
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-4"
                                >
                                    <Button
                                        className="w-full bg-gradient-to-r from-primary to-accent rounded-full h-12 text-lg font-semibold"
                                        onClick={() => {
                                            openBooking();
                                            setIsOpen(false); // Close mobile menu after clicking
                                        }}
                                    >
                                        Book Free Demo
                                    </Button>
                                </motion.div>
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function NavLink({ href, children, scrolled }: { href: string; children: React.ReactNode; scrolled: boolean }) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <Link
            href={href}
            className="relative px-4 py-2 text-sm font-medium transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className={cn(
                "relative z-10 transition-colors duration-200",
                scrolled ? (isHovered ? "text-white" : "text-white/70") : "text-slate-700 hover:text-slate-900"
            )}>
                {children}
            </span>
            {isHovered && (
                <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
            )}
        </Link>
    );
}
