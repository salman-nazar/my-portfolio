import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salman Nazar — Blue Team Specialist",
  description:
    "Portfolio of Salman Nazar — a Blue Team–focused cybersecurity enthusiast and full-stack developer building with Next.js, Node.js, and Python.",
  openGraph: {
    title: "Salman Nazar — Blue Team Specialist",
    description: "Portfolio of Salman Nazar — projects, skills, and contact.",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 return (
  <html lang="en">
    <body className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </body>
  </html>
);
}