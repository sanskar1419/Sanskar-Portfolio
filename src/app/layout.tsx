import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Sanskar | Portfolio",
  description:
    "A creative problem solver with a passion for building fast, scalable, and user-friendly applications. I have experience with a wide range of technologies, including React, Next.js, Node.js, Express, and MongoDB. I'm always looking for new ways to improve my skills and create innovative solutions.",
};

// This line imports the Inter font with the latin subset and assigns it to the "--font-sans" CSS variable.
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
// This line imports the Calistoga font with the latin subset and assigns it to the "--font-serif" CSS variable with a weight of 400.
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
