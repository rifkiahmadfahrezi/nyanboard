import React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-svh">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
