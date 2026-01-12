"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import { useBooking } from "@/context/BookingContext";

export function StickyCTA() {
    const [show, setShow] = useState(false);
    const { openBooking } = useBooking();

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* WhatsApp Floating Button (Desktop & Mobile) */}
            <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
            >
                <MessageCircle className="h-6 w-6" />
            </motion.a>

            {/* Mobile Sticky Bottom Bar */}
            <AnimatePresence>
                {show && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t p-4 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
                    >
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 border-primary text-primary">
                                <Phone className="mr-2 h-4 w-4" /> Call
                            </Button>
                            <Button variant="cta" className="flex-1" onClick={openBooking}>
                                Book Demo
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
