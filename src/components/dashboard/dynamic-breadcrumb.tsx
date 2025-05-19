"use client"

import React, { useMemo } from "react"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { usePathname } from "next/navigation"

export const DynamicBreadcrumb = () => {
  const pathname = usePathname()

  const paths: string[] = useMemo(() => {
    const splited = pathname.split("/")
    splited.shift()
    return splited
  }, [pathname])

  const dropdownMenu: string[] = useMemo(() => {
    const splited = pathname.split("/")
    splited.shift()
    splited.shift()
    splited.pop()
    return splited
  }, [pathname])

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {paths.length > 1 && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        {paths.length > 1 && (
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {dropdownMenu.map((path) => (
                  <DropdownMenuItem>
                    <BreadcrumbLink className="capitalize" href={`/${path}`}>
                      {path}
                    </BreadcrumbLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
        )}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="capitalize">
            {paths[paths.length - 1]}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
