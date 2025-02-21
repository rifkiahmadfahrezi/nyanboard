import type { SidebarMenu } from "@/types/sidebar-menu";

import { BookOpen, Bot, Frame, PieChart, Settings2, Map} from "lucide-react"
import { SquareTerminal } from "lucide-react";

export const sidebarMenus : SidebarMenu[] = [
   {
      title: "Platform",
      menus: [
         {
           label: "Playground",
           url: "#",
           icon: SquareTerminal,
           isActive: true,
           items: [
             {
               label: "History",
               url: "#",
             },
             {
               label: "Starred",
               url: "#",
             },
             {
               label: "Settings",
               url: "#",
             },
           ],
         },
         {
           label: "Models",
           url: "#",
           icon: Bot,
           items: [
             {
               label: "Genesis",
               url: "#",
             },
             {
               label: "Explorer",
               url: "#",
             },
             {
               label: "Quantum",
               url: "#",
             },
           ],
         },
         {
           label: "Documentation",
           url: "#",
           icon: BookOpen,
           items: [
             {
               label: "Introduction",
               url: "#",
             },
             {
               label: "Get Started",
               url: "#",
             },
             {
               label: "Tutorials",
               url: "#",
             },
             {
               label: "Changelog",
               url: "#",
             },
           ],
         },
         {
           label: "Settings",
           url: "#",
           icon: Settings2,
           items: [
             {
               label: "General",
               url: "#",
             },
             {
               label: "Team",
               url: "#",
             },
             {
               label: "Billing",
               url: "#",
             },
             {
               label: "Limits",
               url: "#",
             },
           ],
         },
       ]
   },

   // projects menus
   {
      title: 'Project',
      menus: [
         {
           label: "Design Engineering",
           url: "#",
           icon: Frame,
         },
         {
           label: "Sales & Marketing",
           url: "#",
           icon: PieChart,
         },
         {
           label: "Travel",
           url: "#",
           icon: Map,
         },
       ],
   }
]