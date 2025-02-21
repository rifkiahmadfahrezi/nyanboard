import type { LucideIcon } from "lucide-react";

export type SidebarMenu = {
   title ?: string;
   menus: SidebarSubmenu[]
}

export type SidebarSubmenu = {
   label: string  
   url: string
   icon?: LucideIcon
   isActive?: boolean
   items?: SidebarMenuItem[]
}

export type SidebarMenuItem = {
   label: string
   url: string
}