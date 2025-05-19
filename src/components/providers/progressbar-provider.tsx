"use client"

import React from "react"
import { ProgressProvider as ProgressBar } from "@bprogress/next/app"
import { siteConfig } from "@/config/site"

const { color, height, spinner } = siteConfig.progressbar
export const ProgressbarProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      {children}
      <ProgressBar
        height={height}
        color={color}
        options={{ showSpinner: spinner }}
        shallowRouting
      />
    </>
  )
}
