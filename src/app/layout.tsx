import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LParts | Peças para Escavadeiras e Linha Amarela",
  description:
    "Peças para escavadeiras e linha amarela com atendimento rápido, qualidade e entrega ágil. Fale com a LParts no WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
