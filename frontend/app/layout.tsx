import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayocuci - Aplikasi Kasir Laundry Modern & Praktis",
  description:
    "Kelola transaksi, pantau status cucian, dan lihat laporan bisnis laundry kamu dalam satu aplikasi yang mudah digunakan.",
};

const displayFont =
  "'Plus Jakarta Sans', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
const bodyFont = "'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      style={
        {
          "--font-display": displayFont,
          "--font-body": bodyFont,
        } as React.CSSProperties
      }
    >
      <body
        style={{
          fontFamily: "var(--font-body)",
          backgroundColor: "#FFF8F2",
          color: "#1B2430",
        }}
      >
        {children}
      </body>
    </html>
  );
}
