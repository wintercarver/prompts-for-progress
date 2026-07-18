import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prompts for Progress",
  description:
    "An archive of attempts to use AI systems to solve research problems in mathematics and the sciences.",
  openGraph: {
    title: "Prompts for Progress",
    description: "Documenting how AI-assisted research actually happens.",
    type: "website",
    images: [{ url: "/og.png", width: 1734, height: 909, alt: "Prompts for Progress" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompts for Progress",
    description: "Documenting how AI-assisted research actually happens.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
