import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DVALEE BEAUTY — Premium Hair Experience",
  description: "Alisados premium, tratamientos capilares profesionales y experiencias de transformación.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
