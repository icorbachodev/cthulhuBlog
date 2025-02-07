import type { Metadata } from "next"
import { cinzel } from "./fonts"
import "./globals.css";
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "Eldritch Insights",
  description: "Un blog de horror cósmico y conocimiento prohibido",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${cinzel.className} flex flex-col min-h-screen bg-background text-foreground font-lovecraft`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
