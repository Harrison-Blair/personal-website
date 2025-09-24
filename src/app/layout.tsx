import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const protoNF = localFont({
  src: "./fonts/0xProtoNerdFont-Regular.woff",
  variable: "--font-proto",
  weight: "100 900",
});
const protoMonoNF = localFont({
  src: "./fonts/0xProtoNerdFontMono-Regular.woff",
  variable: "--font-proto-mono",
  weight: "100 900",
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
        <main>{children}</main>
      </body>
    </html>
  );
}
