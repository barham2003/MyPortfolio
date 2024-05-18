import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

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
        <body className="relative selection:bg-primary/10">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex w-full flex-col xl:flex-row">
              <Sidebar />
              {children}
              <Toaster />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
