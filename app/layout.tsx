import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "./providers/lenis-providers";

// Import the Google Font
import { Plus_Jakarta_Sans } from "next/font/google";

// Configure the font
const primaryFont = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plusjakarta-sans", 
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rishabhisme.vercel.app/"), // Replace with your actual domain
  title: {
    default: "Rishabh Kartik | Full-Stack Developer",
    template: "%s | Rishabh Kartik",
  },
  description: "Portfolio of Rishabh Kartik, a Computer Science student and full-stack developer specializing in scalable web applications and modern AI integrations.",
  keywords: ["Rishabh Kartik", "Full-Stack Developer", "Next.js", "React", "Portfolio", "IIIT Kalyani", "Software Engineer"],
  creator: "Rishabh Kartik",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rishabhisme.vercel.app/",
    title: "Rishabh Kartik | Full-Stack Developer",
    description: "I turn ideas into production-ready applications through clean design, scalable architecture, and modern technologies.",
    siteName: "Rishabh Kartik Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Create a 1200x630 image in your public folder
        width: 1200,
        height: 630,
        alt: "Rishabh Kartik Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Kartik | Full-Stack Developer",
    description: "Portfolio of Rishabh Kartik, full-stack developer and AI engineer.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // suppressHydrationWarning is safer on the HTML tag if you ever add Dark Mode providers
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${primaryFont.variable} ${primaryFont.className} antialiased bg-background text-foreground`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}