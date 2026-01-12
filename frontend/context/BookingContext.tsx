"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/forms/ContactForm";

interface BookingContextType {
    openBooking: () => void;
    closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openBooking = () => setIsOpen(true);
    const closeBooking = () => setIsOpen(false);

    return (
        <BookingContext.Provider value={{ openBooking, closeBooking }}>
            {children}
            {/* Global Modal Instance */}
            <Modal isOpen={isOpen} onClose={closeBooking}>
                <div className="p-1">
                    <ContactForm />
                </div>
            </Modal>
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error("useBooking must be used within a BookingProvider");
    }
    return context;
}
