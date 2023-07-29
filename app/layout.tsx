import "@/style/reset.scss"
import "@/style/global.scss"
import type { Metadata } from 'next'
import { inter, workSans } from "@/libs/font"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { openGraphImage } from "./sharedMetadata"


export const metadata: Metadata = {
  title: 'The Box',
  description: 'Landing Page for Architect Brand | Mert Enercan',
  openGraph:{
    ...openGraphImage
  }
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
