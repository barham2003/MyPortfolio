import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barham Khalid",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="selection:bg-primary/10">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative">
              <Sidebar />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
