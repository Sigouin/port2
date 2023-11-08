import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import localFont from "@next/font/local";

export const metadata: Metadata = {
  title: 'Matt"s Portfolio',
  description: "Generated by create next app",
};

const dank = localFont({
  src: [
    {
      path: "../public/fonts/DankMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/DankMono-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/DankMono-Bold.ttf",
      style: "italic",
    },
  ],
  variable: "--font-dank",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dank.variable} font-sans`}>
        <div className="main-content">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}