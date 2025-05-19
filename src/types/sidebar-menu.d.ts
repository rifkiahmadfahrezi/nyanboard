import type { LucideIcon } from "lucide-react"
import type { BadgeVariant } from "@/components/ui/badge"

export type SidebarMenu = {
  title?: string
  menus: SidebarSubmenu[]
}

export type SidebarSubmenu = {
  label: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  badge?: MenuBadge
  items?: SidebarMenuItem[]
}

export type MenuBadge = {
  variant: BadgeVariant["variant"]
  content: string
}

export type SidebarMenuItem = {
  badge?: MenuBadge
  label: string
  url: string
}
