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
            {text.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                    {Array.from(word).map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            variants={{
                                hidden: { opacity: 0, y: 20, rotateX: 90 },
                                visible: { opacity: 1, y: 0, rotateX: 0 }
                            }}
                            transition={{ type: "spring", damping: 12, stiffness: 100 }}
                            className="inline-block origin-bottom"
                        >
                            {char}
                        </motion.span>
                    ))}
                    {/* Add space after word, but not for the last word */}
                    {wordIndex < text.split(" ").length - 1 && (
                        <span className="inline-block">&nbsp;</span>
                    )}
                </span>
            ))}
        </motion.span>
    );
}
