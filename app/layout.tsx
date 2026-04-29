import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "S&A Plumbing",
    template: "%s | S&A Plumbing",
  },
  description: "24/7 emergency plumber in Griffin, GA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="24/7 emergency plumbing in Griffin, GA. S&A Plumbing offers leak repair, drain cleaning, water heater repair, and fast local response."
        />
      </head>
      <body className={`${robotoCondensed.className} antialiased`}>{children}</body>
    </html>
  );
}
