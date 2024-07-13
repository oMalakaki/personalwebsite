import "./globals.css";

import { Analytics } from "@vercel/analytics/react";


export const metadata = {
  title: "Alex Canfield | Portfolio",
  description: `Alex Canfield's Portfolio`,
  type: "website",
  url: "https://alexcanfield.us",
  image: "https://i.imgur.com/KxmeXlT.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/x-icon" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content={metadata.type} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta
          property="og:image"
          content={metadata.image}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
