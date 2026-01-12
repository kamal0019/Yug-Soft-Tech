"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20 font-sans">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100"
                >
                    <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-8">Privacy Policy</h1>
                    <p className="text-slate-500 mb-8">Last Updated: January 10, 2026</p>

                    <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600">
                        <p>
                            At Yug Soft-Tech ("we", "our", or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>

                        <h3>1. Information We Collect</h3>
                        <p>
                            We may collect personal information that you provide to us voluntarily, such as your name, email address, phone number, and school details when you register for a demo, subscribe to our newsletter, or contact us for support.
                        </p>

                        <h3>2. How We Use Your Information</h3>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul>
                            <li>Provide, operate, and maintain our services.</li>
                            <li>Improve, personalize, and expand our platform.</li>
                            <li>Communicate with you, including for customer service, updates, and marketing purposes.</li>
                            <li>Process your transactions and manage your orders.</li>
                        </ul>

                        <h3>3. Data Security</h3>
                        <p>
                            We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
                        </p>

                        <h3>4. Third-Party Services</h3>
                        <p>
                            We may use third-party service providers to help us operate our business and the website or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.
                        </p>

                        <h3>5. Changes to This Policy</h3>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                        </p>

                        <h3>6. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@yugsofttech.com">privacy@yugsofttech.com</a>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
