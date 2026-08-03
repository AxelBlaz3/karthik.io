import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karthik Gaddam",
  description: "Mobile & Systems Engineer. Flutter, Android, BLE, React Native.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <footer className="border-t border-border mt-32">
            <div className="max-w-screen-lg mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
              <span className="font-mono text-[11px] text-muted-foreground">
                Karthik Gaddam · {new Date().getFullYear()}
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">
                Pontiac, MI
              </span>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
