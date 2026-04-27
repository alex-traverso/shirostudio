// app/layout.tsx
import type { Metadata } from "next";
import IntroAnimation from "@/components/IntroAnimation";

export const metadata: Metadata = {
  title: "Your App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/*
         * IntroAnimation wraps the entire app via children.
         * The intro overlay sits on top (position: fixed, z-index: 50).
         * Once it animates off screen, the children (page.tsx, etc.) are visible.
         * You don't need to touch IntroAnimation when editing page content.
         */}
        <IntroAnimation>{children}</IntroAnimation>
      </body>
    </html>
  );
}
