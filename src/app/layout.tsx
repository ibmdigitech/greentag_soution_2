import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Green Tag Solutions - Kerala's Premium Cleaning Experts",
  description: "Professional cleaning & facility management services across Kerala. Home cleaning, office cleaning, deep cleaning, pest control & cleaning products with WhatsApp ordering.",
  keywords: "cleaning services, kerala, green tag solutions, home cleaning, office cleaning, deep cleaning, pest control, cleaning products",
  authors: [{ name: "Green Tag Solutions" }],
  openGraph: {
    title: "Green Tag Solutions - Professional Cleaning Services Kerala",
    description: "Premium cleaning services across Kerala with eco-friendly products",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://greentagsolutions.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-gray-50 dark:bg-secondary-900 transition-colors duration-300">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}