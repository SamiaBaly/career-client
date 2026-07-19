import type { Metadata } from "next";
import "./globals.css";

import QueryProvider from "./providers/QueryProvider";
import { AuthProvider } from "./providers/AuthProvider";

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
            {children}
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}