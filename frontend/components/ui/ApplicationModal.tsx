"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, UploadCloud } from "lucide-react";
import { toast } from "sonner";

interface ApplicationFormInputs {
    name: string;
    email: string;
    phone: string;
    coverLetter: string;
    resume: FileList;
}

interface ApplicationModalProps {
    jobTitle: string;
    children: React.ReactNode;
}

export function ApplicationModal({ jobTitle, children }: ApplicationModalProps) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ApplicationFormInputs>();

    const onSubmit: SubmitHandler<ApplicationFormInputs> = async (data) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("position", jobTitle);
        formData.append("coverLetter", data.coverLetter);
        formData.append("resume", data.resume[0]);

        try {
            const response = await fetch("http://localhost:5000/api/applications", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to submit application");
            }

            toast.success("Application submitted successfully!");
            reset();
            setOpen(false);
        } catch (error: any) {
            console.error(error);
            toast.error(error.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Apply for {jobTitle}</DialogTitle>
                    <DialogDescription>
                        Fill out the form below to apply. We'll get back to you soon.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            placeholder="John Doe"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                            })}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            placeholder="+1 (555) 000-0000"
                            {...register("phone", { required: "Phone number is required" })}
                        />
                        {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="resume">Resume (PDF, DOC, DOCX - Max 5MB)</Label>
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="resume-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <UploadCloud className="w-8 h-8 mb-2 text-gray-500" />
                                    <p className="text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
                                    <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
                                </div>
                                <input
                                    id="resume-upload"
                                    type="file"
                                    className="hidden"
                                    accept=".pdf,.doc,.docx"
                                    {...register("resume", { required: "Resume is required" })}
                                />
                            </label>
                        </div>
                        {errors.resume && <p className="text-sm text-red-500">{errors.resume.message}</p>}
                        {/* Optional: Show selected filename */}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                        <Textarea
                            id="coverLetter"
                            placeholder="Tell us why you're a great fit..."
                            {...register("coverLetter")}
                        />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                            </>
                        ) : (
                            "Submit Application"
                        )}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
