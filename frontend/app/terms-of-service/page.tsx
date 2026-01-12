"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20 font-sans">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100"
                >
                    <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-8">Terms of Service</h1>
                    <p className="text-slate-500 mb-8">Last Updated: January 10, 2026</p>

                    <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600">
                        <p>
                            Welcome to Yug Soft-Tech! By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
                        </p>

                        <h3>1. Use of Services</h3>
                        <p>
                            You must be at least 18 years old to use our services. You agree to use the services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                        </p>

                        <h3>2. Intellectual Property</h3>
                        <p>
                            The content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of Yug Soft-Tech and are protected by copyright, trademark, and other intellectual property laws.
                        </p>

                        <h3>3. User Content</h3>
                        <p>
                            You retain ownership of any content you submit or upload to our services ("User Content"). However, by submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content in connection with providing our services.
                        </p>

                        <h3>4. Limitation of Liability</h3>
                        <p>
                            To the fullest extent permitted by law, Yug Soft-Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the services; (b) any conduct or content of any third party on the services; or (c) unauthorized access, use, or alteration of your transmissions or content.
                        </p>

                        <h3>5. Termination</h3>
                        <p>
                            We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>

                        <h3>6. Changes to Terms</h3>
                        <p>
                            We reserve the right to modify or replace these Terms at any time. We will provide notice of any significant changes. By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.
                        </p>

                        <h3>7. Contact Us</h3>
                        <p>
                            If you have any questions about these Terms, please contact us at <a href="mailto:legal@yugsofttech.com">legal@yugsofttech.com</a>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
