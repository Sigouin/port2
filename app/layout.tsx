import type { Metadata } from "next";
import "@/ui/global.css";
import Footer from "./components/footer";
import { dank } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Matt's Portfolio",
    default: "Matt's Portfolio",
  },
  description: "Generated by create next app",
};

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
          poop
          <Footer />
        </div>
      </body>
    </html>
  );
}
