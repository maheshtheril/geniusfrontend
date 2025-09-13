import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GeniusGrid ERP",
  description: "Multi-tenant, RBAC, AI-integrated ERP frontend"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
