import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Chat from "@/components/ai/Chat";
import Providers from "@/components/Providers";
import { Toaster } from "sonner";
import { constructMetadata } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ethan Wobb: Portfolio",
  description:
    "Ethan Wobb's Portfolio - Explore the creative and professional work of Ethan Wobb, a talented software developer. Showcasing a diverse range of projects, skills, and achievements in computer science, Ethan's portfolio highlights his expertise and passion for fullstack development. Discover innovative solutions, unique designs, and professional accomplishments that demonstrate Ethan's commitment to excellence.",
  icons: "/public/face.ico",
  metadataBase: new URL("https://ethanwobb.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Navbar />
          <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)] grainy-light">
            <div className="flex flex-col flex-1 h-full">
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </div>
            <Chat />
          </main>
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
