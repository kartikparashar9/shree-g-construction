'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ClientLayout({ children }) {
  const pathname = usePathname()
  const hideLayoutOn = ['/sign-in', '/sign-up']
  const shouldHideLayout = hideLayoutOn.includes(pathname)

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <main>{children}</main>
      {!shouldHideLayout && <Footer />}
    </>
  )
}
