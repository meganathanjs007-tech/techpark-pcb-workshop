import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechPark PCB Design Workshop",
  description:
    "Free PCB Design Workshop conducted by TechPark. Learn PCB Design from basics with practical sessions.",

  keywords: [
    "PCB",
    "PCB Design",
    "TechPark",
    "Workshop",
    "Electronics",
    "KiCad",
    "EasyEDA",
  ],

  authors: [
    {
      name: "TechPark",
    },
  ],

  creator: "TechPark",

  openGraph: {
    title: "TechPark PCB Design Workshop",
    description:
      "Free PCB Design Workshop conducted by TechPark.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}