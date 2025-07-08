import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import './../globals.css'
import DashNav from "@/components/dashboard/DashNav";
import Sidebar from "@/components/dashboard/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "TUMALOCK DEAL",
  description: "Tumalock Deal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Toaster />

        {/* Top Navigation */}
        <div className="fixed top-0 left-0 w-full z-50">
          <DashNav />
        </div>

        {/* Sidebar + Main Content Wrapper */}
        <div className="flex pt-[60px] min-h-screen">
          {/* Sidebar */}
          <aside className="w-[250px] bg-white shadow-md border-r hidden md:block">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-gray-50 p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

