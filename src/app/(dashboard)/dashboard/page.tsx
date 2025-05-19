import React from "react"
import type { Metadata } from "next"

import { DashboardPage as DashboardExample } from "@/examples/dashboard-page"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page",
}

const DashboardPage = () => {
  return <DashboardExample />
}

export default DashboardPage
