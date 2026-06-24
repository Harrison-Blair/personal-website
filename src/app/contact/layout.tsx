import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Harrison's Website",
  description: "Get in touch with Harrison Blair.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
