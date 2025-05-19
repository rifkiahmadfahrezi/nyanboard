"use client"

import React from "react"
import { ThemeProvider } from "./theme-provider"
import { TanstackProvider } from "./tanstack-provider"
import { Toaster } from "../ui/sonner"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TanstackProvider>{children}</TanstackProvider>
        <Toaster />
      </ThemeProvider>
    </>
  )
}

export default Providers
