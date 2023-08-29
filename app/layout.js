import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alex Canfield | Portfolio',
  description: `Alex Canfield&#39;s Portfolio`,
  type: "website",
  url: "alexcanfield.us",
  image: "https://i.imgur.com/KxmeXlT.png"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/logo.svg" type="image/x-icon"/><meta property="og:image" content="https://i.imgur.com/KxmeXlT.png"/></head>
      <body>{children}</body>
    </html>
  )
}
