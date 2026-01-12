"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";

export const ImageBanner = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const backgroundImages = [

        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1577896334614-501d3755231c?q=80&w=2070&auto=format&fit=crop", // Classroom/Students
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop", // Education/Learning
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"  // Graduation/Success
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
        }, 2000); // Change every 2 seconds as requested
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full h-[400px] relative overflow-hidden mt-[77px]">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.1, zIndex: 10 }}
                    animate={{ opacity: 1, scale: 1, zIndex: 10 }}
                    exit={{ opacity: 0, zIndex: 0, transition: { duration: 0.2, delay: 1.4 } }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
                    />
                    {/* Overlay for better text visibility if we add text later, or just for style */}
                    <div className="absolute inset-0 bg-black/20" />
                </motion.div>
            </AnimatePresence>

            {/* Optional: Add a subtle content or just keep it as a visual banner */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
                        <AnimatedText
                            text="Building Solutions That Matter"
                            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 drop-shadow-sm pb-1"
                            stagger={0.05}
                        />
                    </h2>
                </div>
            </div>
        </div>
    );
};
