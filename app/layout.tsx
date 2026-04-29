// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Rokkitt } from "next/font/google";
import IntroAnimation from "@/components/IntroAnimation";
import "@/app/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const rokkitt = Rokkitt({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-rokkitt",
});

export const metadata: Metadata = {
  title: "Shiro Studio - Transformando Complejidad en Claridad",
  description:
    "Soluciones digitales claras, enfocadas y de alto impacto para tu negocio.",
};

// TODO: Add IntroAnimation back in once it's ready.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${rokkitt.variable}`}>
      <body>
        {/*
         * IntroAnimation wraps the entire app via children.
         * The intro overlay sits on top (position: fixed, z-index: 50).
         * Once it animates off screen, the children (page.tsx, etc.) are visible.
         * You don't need to touch IntroAnimation when editing page content.
         */}
        {children}
        {/* <IntroAnimation>{children}</IntroAnimation> */}
      </body>
    </html>
  );
}
