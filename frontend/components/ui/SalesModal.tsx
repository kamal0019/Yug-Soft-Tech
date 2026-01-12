"use client";

import { Modal } from "./Modal";
import { Button } from "./button";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

interface SalesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SalesModal({ isOpen, onClose }: SalesModalProps) {
    const contactInfo = {
        name: "Sourabh Choudhary",
        role: "Co-Founder",
        phone: "8875509344",
        email: "sourabhchoudhary8875@gmail.com",
        image: "/assets/team-sourabh.png"
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="p-6">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Talk to Sales</h2>
                    <p className="text-slate-600">Connect with our team to discuss your needs</p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                            <Image
                                src={contactInfo.image}
                                alt={contactInfo.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-left">
                            <h3 className="font-bold text-lg text-slate-900">{contactInfo.name}</h3>
                            <p className="text-blue-600 font-medium text-sm">{contactInfo.role}</p>
                        </div>
                    </div>

                    <div className="grid gap-3">
                        <a
                            href={`tel:${contactInfo.phone}`}
                            className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Phone size={20} />
                            </div>
                            <div className="flex-1">
                                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Call Now</span>
                                <div className="font-medium text-slate-900">{contactInfo.phone}</div>
                            </div>
                        </a>

                        <a
                            href={`https://wa.me/91${contactInfo.phone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group"
                        >
                            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <MessageCircle size={20} />
                            </div>
                            <div className="flex-1">
                                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">WhatsApp</span>
                                <div className="font-medium text-slate-900">{contactInfo.phone}</div>
                            </div>
                        </a>

                        <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-purple-500 hover:shadow-md transition-all group"
                        >
                            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <Mail size={20} />
                            </div>
                            <div className="flex-1">
                                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email</span>
                                <div className="font-medium text-slate-900 break-all">{contactInfo.email}</div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="text-center">
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        className="text-slate-500 hover:text-slate-900"
                    >
                        Maybe Later
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
