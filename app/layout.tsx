import "@/style/reset.scss"
import "@/style/global.scss"
import type { Metadata } from 'next'
import { inter, workSans } from "@/libs/font"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export const metadata: Metadata = {
  title: 'The Box',
  description: 'Building things is our mission',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' ' + workSans.variable}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
