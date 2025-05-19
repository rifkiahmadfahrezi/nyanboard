// Example dashboard page
"use client"
import React from "react"

import { OverviewCard } from "@/components/overview-card"
import { Box, ChartLine, ShoppingBag, Users } from "lucide-react"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { DataTableDemo } from "./data-table"

const data = [
  {
    id: 1,
    title: "Earnings",
    value: "$350.00",
    icon: ChartLine,
  },
  {
    id: 2,
    title: "Orders",
    value: "15",
    icon: ShoppingBag,
  },
  {
    id: 3,
    title: "Products",
    value: "5",
    icon: Box,
  },
  {
    id: 4,
    title: "Customers",
    value: "10",
    icon: Users,
  },
]

export const DashboardPage = () => {
  return (
    <>
      <div className="grid gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          {data.map(({ id, ...rest }) => (
            <OverviewCard
              key={id}
              {...rest}
              // title={title}
              // value={value}
              // icon={icon}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Orders />

          <Card>
            <CardHeader>
              <CardTitle>Latest orders</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTableDemo />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

const chartData = [
  { day: "15th Feb", success: 45, onprocess: 23, failed: 10 },
  { day: "16th Feb", success: 50, onprocess: 23, failed: 3 },
  { day: "17th Feb", success: 48, onprocess: 11, failed: 5 },
  { day: "18th Feb", success: 52, onprocess: 33, failed: 12 },
  { day: "19th Feb", success: 55, onprocess: 23, failed: 7 },
  { day: "20th Feb", success: 60, onprocess: 21, failed: 8 },
  { day: "21st Feb", success: 62, onprocess: 16, failed: 11 },
]

const chartConfig = {
  success: {
    label: "Success",
    color: "hsl(var(--chart-1))",
  },
  failed: {
    label: "Failed",
    color: "hsl(var(--chart-2))",
  },
  onprocess: {
    label: "Onprocess",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Orders() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Orders</CardTitle>
        <CardDescription>Last 7 Days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="success" fill="var(--chart-2)" radius={4} />
            <Bar dataKey="onprocess" fill="var(--chart-1)" radius={4} />
            <Bar dataKey="failed" fill="var(--destructive)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing product orders for the last 7 days
        </div>
      </CardFooter>
    </Card>
  )
}
