import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Punsatva - Male Wellness Platform",
  description: "Ayurvedic and modern approach to male wellness. Evidence-based health guidance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
