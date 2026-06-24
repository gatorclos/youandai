import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "you and .ai — Real conversations with AI, published",
  description: "Real conversations with specific AI models on specific tasks — published with findings, failures, and what actually worked.",
  openGraph: {
    title: "you and .ai",
    description: "Real conversations with AI, published for others to learn from.",
    url: "https://youand.ai",
    siteName: "you and .ai",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-nav">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
