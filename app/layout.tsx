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
    default: "YOUR Plumbing Services",
    template: "%s | YOUR Plumbing Services",
  },
  description: "24/7 emergency plumber in your city.",
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
          content="24/7 emergency plumbing in your city. YOUR Plumbing Services offers leak repair, drain cleaning, water heater repair, and fast local response."
        />
      </head>
      <body className={`${robotoCondensed.className} antialiased`}>{children}</body>
    </html>
  );
}
