import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alex Canfield',
  description: `Alex Canfield&#39;s Portfolio`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/logo.svg" type="image/x-icon"/></head>
      <body>{children}</body>
    </html>
  )
}
