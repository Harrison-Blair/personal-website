import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/layout/Navigation";

const protoNF = localFont({
  src: "./fonts/0xProtoNerdFont-Regular.woff",
  variable: "--font-proto",
});
const protoMonoNF = localFont({
  src: "./fonts/0xProtoNerdFontMono-Regular.woff",
  variable: "--font-proto-mono",
});

export const metadata: Metadata = {
  title: "Harrison's Website",
  description: "A personal website showcasing my work and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${protoNF.variable} ${protoMonoNF.variable} antialiased`}>
        <Navigation />
        <main className="mb-[var(--nav-size)] lg:ml-[var(--nav-size)] lg:mb-0">
          {children}
        </main>
      </body>
    </html>
  );
}
