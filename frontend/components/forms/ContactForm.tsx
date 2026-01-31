"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { API_URL } from "@/lib/config";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        schoolName: "",
        phone: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch(`${API_URL}/api/requests`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            alert("Request submitted successfully! We will contact you soon.");
            setFormData({ name: "", role: "", schoolName: "", phone: "", message: "" });
        } catch (error: any) {
            alert(error.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm h-full">
            <h3 className="text-xl font-bold mb-6">Request a Free Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input
                            id="name"
                            
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="role" className="text-sm font-medium">Role</label>
                        <Input
                            id="role"
                            placeholder="Principal / Owner"
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="school" className="text-sm font-medium">School Name</label>
                    <Input
                        id="school"
                       
                        value={formData.schoolName}
                        onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input
                        id="phone"
                        type="tel"
                       
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message (Optional)</label>
                    <Textarea
                        id="message"
                       
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit Request"} <Send className="ml-2 h-4 w-4" />
                </Button>
            </form>
        </div>
    );
}
