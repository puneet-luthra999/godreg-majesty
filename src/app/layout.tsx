import './globals.css'
import type { Metadata } from 'next'
import { Oswald  } from 'next/font/google'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // adjust weights as needed
  variable: '--font-oswald',
});


export const metadata: Metadata = {
  title: 'Godrej Majesty | Sec -12 Noida Extension',
  description: 'Luxiries 3 & 4 BHK Apartments in Greater Noida',
}

export default function RootLayout({children}: { children: React.ReactNode}) {
  return (
    <html lang="en" className={oswald.variable}>
      <body className="font-oswald">{children}</body>
    </html>
  )
}
