import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/app/themeProvider/ThemeProvider";
import Header from "./Components/Header";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Jab tracking app",
  icons: "./icon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <Header />
        {children}
      </ThemeProvider>
    </html>
  );
}
