import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alex Canfield | Portfolio",
  description: `Alex Canfield's Portfolio`,
  type: "website",
  url: "alexcanfield.us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/x-icon" />
        <meta
          property="og:image"
          content="https://og-examples.vercel.sh/api/static"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
