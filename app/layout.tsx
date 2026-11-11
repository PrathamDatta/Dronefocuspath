import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://derospacesystems.com"),
  title: "Derospace Systems | UAV Mission Systems, Built in India",
  description:
    "Mission infrastructure, deployable UAV systems and operator training for evolving UAV operational needs. DGCA-authorised RPTO, DPIIT-recognised startup, Indian-owned IP.",
  icons: { icon: "/assets/favicon.svg" },
  openGraph: { title: "Derospace Systems", description: "Everything the mission needs.", images: ["/og-image.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
