import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "you and .ai — Real conversations with AI, published",
  description: "A personal publication sharing real conversations with AI models across engineering, research, and creative tasks. Learn what works, what doesn't, and why.",
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
      <body style={{ position: "relative", zIndex: 1 }}>{children}</body>
    </html>
  );
}
