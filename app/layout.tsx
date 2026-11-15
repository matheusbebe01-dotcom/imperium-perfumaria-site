import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barbearia Imperium — Perfumaria",
  description: "Catálogo de perfumes e atendimento da Barbearia Imperium.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
