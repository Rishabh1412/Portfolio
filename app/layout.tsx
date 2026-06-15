import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "./providers/lenis-providers";
//local fonts
import localFont from "next/font/local";

const axiforma = localFont({
  src: [
    {
      path: "./fonts/axiforma/Kastelov-AxiformaThin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/axiforma/Kastelov-AxiformaLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/axiforma/Kastelov-AxiformaRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/axiforma/Kastelov-AxiformaMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/axiforma/Kastelov-AxiformaSemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/axiforma/Kastelov-AxiformaBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/axiforma/Kastelov-AxiformaBlack.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/axiforma/Kastelov-AxiformaBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-axiforma",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rishabh Kartik - Portfolio",
  description: "Welcome to my portfolio! I'm Rishabh Kartik, a passionate software developer specializing in web development. Explore my projects, skills, and experience as you navigate through my work. Feel free to connect with me for collaborations or opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
      suppressHydrationWarning={true}
        className={`${axiforma.className} antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
