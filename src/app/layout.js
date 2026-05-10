import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// load fonts from Google Fonts
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// SEO metadata
export const metadata = {
  title: "Earth's Exhale | Indoor Plants for a Greener Home",
  description:
    "Discover beautiful indoor plants that purify your air and bring nature into your home. Shop our curated collection of houseplants at Earth's Exhale.",
  keywords: "indoor plants, houseplants, plant shop, green home, air purifying plants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
