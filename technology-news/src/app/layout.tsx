import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Technology/news",
  description: "Todas as notícias de tecnologia do mundo!",
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
        {children}
      </body>
    </html>
  );
}
