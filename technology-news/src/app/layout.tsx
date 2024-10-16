"use client"
import "./globals.css";
import { PremiumProvider } from "@/components/PremiumContext";

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
