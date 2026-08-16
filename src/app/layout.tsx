import type { Metadata } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://statwerks.com"),
  title: {
    default: "Statwerks — Know what to look for before you buy",
    template: "%s — Statwerks",
  },
  description:
    "Free, model-specific buying dashboards for used Porsches — known issues, market pricing context, and a buying checklist before you ever call a seller.",
  openGraph: {
    title: "Statwerks — Know what to look for before you buy",
    description:
      "Free, model-specific buying dashboards for used Porsches — known issues, market pricing context, and a buying checklist before you ever call a seller.",
    siteName: "Statwerks",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
