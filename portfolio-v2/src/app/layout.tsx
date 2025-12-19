import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rohit Garwad | Java Full Stack & AI Developer",
  description:
    "Portfolio of Rohit Garwad - Java Full Stack & AI Developer. Expert in React.js, Spring Boot, LangChain, and modern web technologies.",
  keywords: [
    "Rohit Garwad",
    "Java Full Stack Developer",
    "AI Developer",
    "React Developer",
    "Spring Boot",
    "LangChain",
    "Portfolio",
  ],
  authors: [{ name: "Rohit Garwad" }],
  creator: "Rohit Garwad",
  metadataBase: new URL("https://rohitgarwad.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rohitgarwad.vercel.app",
    title: "Rohit Garwad | Java Full Stack & AI Developer",
    description:
      "Portfolio of Rohit Garwad - Java Full Stack & AI Developer. Building intelligent web applications and AI-powered solutions.",
    siteName: "Rohit Garwad Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rohit Garwad - Java Full Stack & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Garwad | Java Full Stack & AI Developer",
    description:
      "Portfolio of Rohit Garwad - Java Full Stack & AI Developer.",
    creator: "@rohitgarwad4",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${nunito.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
