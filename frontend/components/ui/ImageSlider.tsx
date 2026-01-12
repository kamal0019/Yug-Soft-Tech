"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageSliderProps {
    images: string[];
    interval?: number;
    className?: string;
}

export function ImageSlider({ images, interval = 2000, className }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className={cn("relative w-full h-full overflow-hidden rounded-xl", className)}>
            {images.map((src, index) => (
                <div
                    key={src}
                    className={cn(
                        "absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out",
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    )}
                >
                    <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Optional: Dots indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={cn(
                            "w-1.5 h-1.5 rounded-full transition-colors duration-300",
                            index === currentIndex ? "bg-white" : "bg-white/50"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
