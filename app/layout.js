import styles from './globals.css'
import { Inter } from 'next/font/google'




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bibisha Guragain- Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth duration-100'>
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
