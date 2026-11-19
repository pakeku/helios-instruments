import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import DemoBanner from "@/components/DemoBanner";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "Helios Instruments: professional hardware, materials and parts",
  description:
    "Professional hardware, consumable materials and parts, sold direct online and shipped worldwide from five warehouses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${plex.variable}`}>
      <body className="bg-white font-sans text-slate-700 antialiased">
        <DemoBanner />
        {children}
        {/* Start of heliosinstruments Zendesk Widget script */}
        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=e1f79a57-f28b-41cb-bdfc-cf0c8ed23007"
          strategy="afterInteractive"
        />
        {/* End of heliosinstruments Zendesk Widget script */}
      </body>
    </html>
  );
}
