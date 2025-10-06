import { Linkedin, Mail } from "lucide-react";
import RectangularButton from "../components/ui/RectangularButton";

export default function Contact() {
    return (
        <div className="grid grid-rows-[1fr_8fr] h-[90vh] w-[90vw] overflow-hidden">
            <h1 className="text-[6.5vh]"> {/* Header */}
                Contact
            </h1>
            <div className="grid grid-cols-[1fr_2fr]">
                <div> {/* Contact Info / CTA Here */}
                    <div className="grid grid-rows-3 h-full">
                        <div className="bg-[var(--muted)] h-full rounded-[5rem] p-10">
                            <p className="text-[2vh] text-center">
                                Let&apos;s get in touch! Whether you have a question, a project idea, or just want to say hi, I&apos;d love to hear from you. Fill out the form and I&apos;ll get back to you as soon as I can.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4 p-8"> {/* Buttons */}
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
                <div> {/* Contact Form Here */}
                    <div className="bg-[var(--muted)] h-full rounded-[5rem] ml-10 p-10">
                        <form className="text-[var(--primary)]">
                            <div className="flex justify-center gap-4">
                                <input type="text" placeholder="Your Name" className="w-1/2 h-[4vh] rounded-lg px-3 bg-[var(--muted)] text-[var(--foreground)] border border-[var(--primary)]"/>
                                <input type="email" placeholder="Your Email" className="w-1/2 h-[4vh] rounded-lg px-3 bg-[var(--muted)] text-[var(--foreground)] border border-[var(--primary)]"/>
                            </div>
                            <input type="text" placeholder="Subject" className="w-full h-[4vh] rounded-lg px-3 mt-4 bg-[var(--muted)] text-[var(--foreground)] border border-[var(--primary)]"/>
                            <textarea placeholder="Your Message" className="w-full h-[50vh] rounded-lg px-3 mt-4 pt-2 resize-none bg-[var(--muted)] text-[var(--foreground)] border border-[var(--primary)]"/>
                            <div className="flex justify-center mt-4">
                                <button type="submit" className="bg-[var(--primary)] hover:bg-[var(--accent)] text-white rounded-lg px-6 py-2">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}