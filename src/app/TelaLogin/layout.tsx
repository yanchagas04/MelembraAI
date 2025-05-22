import type { Metadata } from "next";
import favicon from "./favicon.ico";
import { Geist } from "next/font/google";
import "./globals.css";

const outfit = Geist({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Login",
  description: "Página de login",
  icons: {
    icon: favicon.src,
  },
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${outfit.variable} antialiased bg-gray-50 min-h-screen flex items-center justify-center`}>
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
          <main className="w-full max-w-md p-8 bg-white rounded shadow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
