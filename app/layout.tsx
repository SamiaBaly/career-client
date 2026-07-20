import type { Metadata } from "next";
import "./globals.css";

import QueryProvider from "./providers/QueryProvider";
import { AuthProvider } from "./providers/AuthProvider";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export const metadata: Metadata = {
  title: "CareerPilot AI",
  description: "AI Powered Career Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <AuthProvider>
            <body>
              <Navbar />

              <main>{children}</main>

              <Footer />
            </body>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}