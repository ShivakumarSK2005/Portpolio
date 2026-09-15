import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivakumar's Portpolio",
  description:
    "Portfolio of Shivakumar Kokatanur — Full Stack Developer and Problem Solver.",
  keywords: ["Shivakumar Kokatanur", "Full Stack Developer", "React", "Next.js"],
  authors: [{ name: "Shivakumar Kokatanur" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Shivakumar's Portpolio",
    description:
      "Portfolio of Shivakumar Kokatanur — Full Stack Developer and Problem Solver.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}