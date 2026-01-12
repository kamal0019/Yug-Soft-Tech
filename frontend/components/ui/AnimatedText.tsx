"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    className?: string;
    stagger?: number;
    delay?: number;
}

export function AnimatedText({ text, className = "", stagger = 0.08, delay = 0.2 }: AnimatedTextProps) {
    return (
        <motion.span
            className={`inline-block ${className}`}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: stagger,
                        delayChildren: delay
                    }
                }
            }}
        >
            {Array.from(text).map((char, index) => (
                <motion.span
                    key={index}
                    variants={{
                        hidden: { opacity: 0, y: 20, rotateX: 90 },
                        visible: { opacity: 1, y: 0, rotateX: 0 }
                    }}
                    transition={{ type: "spring", damping: 12, stiffness: 100 }}
                    className="inline-block origin-bottom"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}
