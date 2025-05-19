"use client"

import * as React from "react"
import { AudioWaveform, Command, GalleryVerticalEnd } from "lucide-react"

import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import { ThemeSwithcer } from "./theme-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavMenu } from "./nav-menu"
import { sidebarMenus } from "./sidebar-menu"

const data = {
  user: {
    name: "Rifki",
    email: "rifki@example.com",
    avatar: "https://github.com/rifkiahmadfahrezi.png",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMenu menus={sidebarMenus} />
      </SidebarContent>
      <SidebarFooter>
        <ThemeSwithcer />
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
