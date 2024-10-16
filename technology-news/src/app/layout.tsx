import type { Metadata } from "next";
import "./globals.css";
import { PremiumProvider } from "@/contexts/PremiumContext";

export const metadata: Metadata = {
  title: "Technology/News",
  description: "Todas as notícias de tecnologia que você pode encontrar em um só lugar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#FFFFFF] flex flex-col`}
      >
        <PremiumProvider>
          {children}
        </PremiumProvider>
      </body>
    </html>
  );
}
