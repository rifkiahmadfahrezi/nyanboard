import type { SidebarMenu } from "@/types/sidebar-menu";

import { House, LayoutDashboard, Layers } from "lucide-react";

export const sidebarMenus: SidebarMenu[] = [
  {
    menus: [
      {
        label: "Dashboard",
        url: "/dashboard",
        icon: House,
      },
    ],
  },

  // ui menus
  {
    title: "UI",
    menus: [
      {
        label: "Components",
        url: "/dashboard/components",
        badge: {
          variant: "warning",
          content: "wip",
        },
        icon: LayoutDashboard,
        items: [
          {
            label: "Editor",
            url: "/dashboard/components/editor",
            badge: {
              variant: "warning",
              content: "wip",
            },
          },
          {
            label: "Overview card",
            url: "/dashboard/components/overview card",
            badge: {
              variant: "warning",
              content: "wip",
            },
          },
          {
            label: "Charts",
            url: "/dashboard/components/charts",
            badge: {
              variant: "warning",
              content: "wip",
            },
          },
          {
            label: "Multistep form",
            url: "/dashboard/components/multistep-form",
            badge: {
              variant: "warning",
              content: "wip",
            },
          },
        ],
      },
    ],
  },
];
