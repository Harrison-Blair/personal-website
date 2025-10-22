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
  const inputStyle = 'rounded-lg p-2 bg-[var(--muted)] text-[var(--foreground)] border border-[var(--primary)] border-[2px]'

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
    <div className="p-4">
      <h1>
        Contact Me
      </h1>
      <div className='grid grid-cols-1 gap-4
                      lg:grid-cols-[1fr_2fr]'>
        <div>
          <p className="bg-[var(--muted)] rounded-3xl text-center p-4 mb-4 text-[1.25rem]">
            Let&apos;s get in touch! Whether you have a question, a project idea, or just want to say hi, I&apos;d love to hear from you. Fill out the form and I&apos;ll get back to you as soon as I can.
          </p>
          <div className='flex flex-col items-center justify-center gap-4'>
            <RectangularButton
              href="https://www.linkedin.com/in/harrison-blair"
              icon={Linkedin}
              text="LinkedIn"
              bgColor="bg-[var(--primary)]"
              hoverColor="hover:bg-[var(--accent)]"
              isExternal={true}
            />
            <RectangularButton
              href={`mailto:${process.env.NEXT_PUBLIC_RESEND_DESTINATION_EMAIL}`}
              icon={Mail}
              text="Email Me"
              bgColor="bg-[var(--primary)]"
              hoverColor="hover:bg-[var(--accent)]"
              isExternal={true}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 text-[var(--primary)] bg-[var(--muted)] p-4 rounded-3xl'>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputStyle}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className={`${inputStyle} h-96 `}
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
  );
}