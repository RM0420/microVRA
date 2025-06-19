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
  title: "MicroVRA",
  description: "empowering struggling entrepreneurs, one loan at a time",
  openGraph: {
    title: "MicroVRA",
    description: "empowering struggling entrepreneurs, one loan at a time",
    images: [
      {
        url: "/images/Logo.jpg",
        alt: "MicroVRA Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/Logo.jpg",
    shortcut: "/images/Logo.jpg",
    apple: "/images/Logo.jpg",
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
