import type { Metadata } from "next";
import "@fontsource-variable/dm-sans/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samson | Social links",
  description: "Find Samson on LinkedIn, YouTube, and Instagram.",
  icons: { icon: "/avatar.webp" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
