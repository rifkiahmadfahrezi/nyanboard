"use client";

import React from "react";
import type {
  SidebarMenu as SidebarMenuType,
  SidebarSubmenu,
} from "@/types/sidebar-menu";
import { usePathname } from "next/navigation";

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { isMenuActive } from "@/config/navigation-menu/utils";
import Link from "next/link";

export const NavMenu = ({ menus }: { menus: SidebarMenuType[] }) => {
  return (
    <>
      {menus.map((menu) => (
        <SidebarGroup key={menu.title}>
          {menu.title && (
            <SidebarGroupLabel className="flex items-center gap-2">
              {menu.title}
              <span className="h-[1px] w-full bg-muted-foreground/20 rounded"></span>
            </SidebarGroupLabel>
          )}

          <SidebarMenu>
            {menu.menus.map((item) => {
              return (
                <>
                  {!item.items ? (
                    <Menu item={item} />
                  ) : (
                    <CollapsibleMenu items={item} />
                  )}
                </>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
};

export const CollapsibleMenu = ({ items }: { items: SidebarSubmenu }) => {
  const pathname = usePathname();

  return (
    <Collapsible
      key={items.label}
      asChild
      defaultOpen={items.isActive}
      className="group/collapsible space-y-2"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            isActive={isMenuActive("/dashboard", pathname, items.url)}
            className="cursor-pointer"
            tooltip={items.label}
          >
            {items.icon && <items.icon />}
            <span>{items.label}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.items?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.label}>
                <SidebarMenuSubButton asChild>
                  <Link href={subItem.url}>
                    <span>{subItem.label}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};

export const Menu = ({ item }: { item: SidebarSubmenu }) => {
  const pathname = usePathname();

  return (
    <SidebarMenuItem key={item.label}>
      <SidebarMenuButton
        isActive={isMenuActive("/dashboard", pathname, item.url)}
        tooltip={item.label}
        asChild
      >
        <Link href={item.url}>
          {item.icon && <item.icon />}
          <span>{item.label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
