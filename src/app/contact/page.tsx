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
                                bgColor="bg-blue-500"
                                hoverColor="hover:bg-blue-600"
                                isExternal={true}
                                width="75%"
                                height="5vh"
                                styling="text-[2vh]"
                            />
                            <RectangularButton
                                href="mailto:example@example.com"
                                icon={Mail}
                                text="Email Me"
                                bgColor="bg-blue-500"
                                hoverColor="hover:bg-blue-600"
                                isExternal={true}
                                width="75%"
                                height="5vh"
                                styling="text-[2vh]"
                            />
                        </div>
                    </div>
                </div>
                <div> {/* Contact Form Here */}

                </div>
            </div>
        </div>
    );
}