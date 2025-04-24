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
import { isMenuActive } from "@/lib/menu";
import Link from "next/link";
import { Badge } from "../ui/badge";

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
                    <Menu item={item} key={item.url} />
                  ) : (
                    <CollapsibleMenu items={item} key={item.url} />
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
            <span className="line-clamp-1" title={items.label}>
              {items.label}
            </span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            {items.badge && (
              <Badge
                className="text-xs py-[1px] px-[2px] rounded-xl"
                variant={items.badge.variant || "secondary"}
              >
                {items.badge.content}
              </Badge>
            )}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.items?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.label}>
                <SidebarMenuSubButton asChild>
                  <Link href={subItem.url}>
                    <span className="line-clamp-1" title={subItem.label}>
                      {subItem.label}
                    </span>
                    {subItem.badge && (
                      <Badge
                        className="text-xs py-[1px] px-[2px] rounded-xl"
                        variant={subItem.badge.variant || "secondary"}
                      >
                        {subItem.badge.content}
                      </Badge>
                    )}
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
          <span className="line-clamp-1" title={item.label}>
            {item.label}
          </span>
          {item.badge && (
            <Badge
              className="text-xs py-[1px] px-[2px] rounded-xl"
              variant={item.badge.variant || "secondary"}
            >
              {item.badge.content}
            </Badge>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
