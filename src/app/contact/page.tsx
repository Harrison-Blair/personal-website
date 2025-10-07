"use client";

import { useState, FormEvent } from 'react';
import { Linkedin, Mail } from "lucide-react";
import RectangularButton from "../components/ui/RectangularButton";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
                console.error('Error:', data.error);
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Network error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="grid grid-rows-[1fr_8fr] h-[90vh] w-[90vw] overflow-hidden">
            <h1 className="text-[6.5vh]">
                Contact
            </h1>
            <div className="grid grid-cols-[1fr_2fr]">
                <div>
                    <div className="grid grid-rows-3 h-full">
                        <div className="bg-[var(--muted)] h-full rounded-[5rem] p-10">
                            <p className="text-[2vh] text-center">
                                Let&apos;s get in touch! Whether you have a question, a project idea, or just want to say hi, I&apos;d love to hear from you. Fill out the form and I&apos;ll get back to you as soon as I can.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4 p-8">
                            <RectangularButton
                                href="https://www.linkedin.com/in/harrison-blair"
                                icon={Linkedin}
                                text="LinkedIn"
                                bgColor="bg-[var(--primary)]"
                                hoverColor="hover:bg-[var(--accent)]"
                                isExternal={true}
                                width="75%"
                                height="5vh"
                                styling="text-[2vh] text-white"
                            />
                            <RectangularButton
                                href="mailto:example@example.com"
                                icon={Mail}
                                text="Email Me"
                                bgColor="bg-[var(--primary)]"
                                hoverColor="hover:bg-[var(--accent)]"
                                isExternal={true}
                                width="75%"
                                height="5vh"
                                styling="text-[2vh] text-white"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-[var(--muted)] h-full rounded-[5rem] ml-10 p-10">
                        <form onSubmit={handleSubmit} className="text-[var(--primary)]">
                            <div className="flex justify-center gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-1/2 h-[4vh] rounded-lg px-3 bg-[var(--muted)] text-[var(--foreground)] border border-[var(--primary)]"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-1/2 h-[4vh] rounded-lg px-3 bg-[var(--muted)] text-[var(--foreground)] border border-[var(--primary)]"
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full h-[4vh] rounded-lg px-3 mt-4 bg-[var(--muted)] text-[var(--foreground)] border border-[var(--primary)]"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full h-[50vh] rounded-lg px-3 mt-4 pt-2 resize-none bg-[var(--muted)] text-[var(--foreground)] border border-[var(--primary)]"
                            />
                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[var(--primary)] hover:bg-[var(--accent)] text-white rounded-lg px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                            {submitStatus === 'success' && (
                                <p className="text-[var(--primary)] text-center mt-4">Message sent successfully!</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-600 text-center mt-4">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}