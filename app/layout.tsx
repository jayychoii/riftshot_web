import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Riftshot",
  description: "Beautiful full-page screenshots with customizable layouts",
  openGraph: {
    title: "Riftshot",
    description: "Beautiful full-page screenshots with customizable layouts",
    images: ["/main/5.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riftshot",
    description: "Beautiful full-page screenshots with customizable layouts",
    images: ["/main/5.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
