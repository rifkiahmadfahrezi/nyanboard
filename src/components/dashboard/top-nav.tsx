import React from 'react'

import { cn } from '@/lib/utils'

import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
 } from "@/components/ui/breadcrumb"
 import { Separator } from "@/components/ui/separator"
 import { SidebarTrigger } from '../ui/sidebar'
import { DynamicBreadcrumb } from './dynamic-breadcrumb'

export const TopNav = ({
   className,
   ...props
}: React.ComponentProps<'header'>) => {
  return (
   <header className={cn("flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12", className)} {...props}>
      <div className="flex items-center gap-2 px-4">

         <SidebarTrigger className="-ml-1" />

         <Separator orientation="vertical" className="mr-2 h-4" />
         <DynamicBreadcrumb />
         {/* <Breadcrumb>
            <BreadcrumbList>
               <BreadcrumbItem className="hidden md:block">
               <BreadcrumbLink href="#">
                  Building Your Application
               </BreadcrumbLink>
               </BreadcrumbItem>
               <BreadcrumbSeparator className="hidden md:block" />
               <BreadcrumbItem>
               <BreadcrumbPage>Data Fetching</BreadcrumbPage>
               </BreadcrumbItem>
            </BreadcrumbList>
         </Breadcrumb> */}
      </div>
   </header>
  )
}