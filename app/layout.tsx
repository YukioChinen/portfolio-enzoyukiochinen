import type { Metadata } from "next";
import "@fontsource/cascadia-code/400.css";
import "@fontsource/cascadia-code/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enzo — Portfólio",
  description: "Portfólio do Enzo: sobre mim e minhas experiências.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}