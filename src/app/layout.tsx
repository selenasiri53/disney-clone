import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { ThemeProvider } from "@/components/ui/ThemeProvider" // new

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "For educational purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1A1C29]">
       {/* new */}
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          ><Header />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
