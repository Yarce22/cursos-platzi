import { Inter } from 'next/font/google'
import { Header } from 'app/component/shared/Header'
import { Footer } from 'app/component/shared/Footer'
import 'app/sass/globals.sass'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
