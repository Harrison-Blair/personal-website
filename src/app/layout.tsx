import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/layout/Navigation/Navigation";

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
        <main className="flex-1 ml-20 p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
