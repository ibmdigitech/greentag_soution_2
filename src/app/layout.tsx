import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Green Tag Solutions",
  "image": "https://greentagsolutions.com/images/logo.jpeg",
  "@id": "https://greentagsolutions.com/#organization",
  "url": "https://greentagsolutions.com",
  "telephone": "+919876543210",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Green Tag Solutions Office, Main Road",
    "addressLocality": "Kozhikode",
    "addressRegion": "Kerala",
    "postalCode": "673001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.2588,
    "longitude": 75.7804
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://facebook.com/greentagsolutions",
    "https://instagram.com/greentagsolutions"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What cleaning services does Green Tag Solutions offer in Kerala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Green Tag Solutions offers a full range of premium cleaning services across Kerala, including residential deep cleaning, commercial office sanitization, school facility sanitization, specialized post-construction cleaning, and high-quality eco-friendly cleaning product sales with convenient WhatsApp ordering."
      }
    },
    {
      "@type": "Question",
      "name": "Do you use eco-friendly cleaning products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we prioritize health and safety by using and distributing premium eco-friendly, non-toxic cleaning products that are completely safe for pets, children, and office personnel."
      }
    },
    {
      "@type": "Question",
      "name": "How can I book a professional cleaning service or order products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can instantly book our services or buy cleaning supplies by using our integrated 'WhatsApp Order' feature, or by filling out the Book Cleaning form directly on our website."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        {/* Google Analytics Tracking Tag (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SEO_VERIFY_TAG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SEO_VERIFY_TAG', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Structured Data / JSON-LD for SEO & AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50 dark:bg-secondary-900 transition-colors duration-300">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}