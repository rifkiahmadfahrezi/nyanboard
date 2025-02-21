"use client";

import React from "react";
import type {
  SidebarMenu as SidebarMenuType,
  SidebarSubmenu,
} from "@/types/sidebar-menu";

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

export const NavMenu = ({ menus }: { menus: SidebarMenuType[] }) => {
  return (
    <>
      {menus.map((menu) => (
        <SidebarGroup key={menu.title}>
          {menu.title && <SidebarGroupLabel>{menu.title}</SidebarGroupLabel>}

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
        </SidebarGroup>
      ))}
    </>
  );
};

export const CollapsibleMenu = ({ items }: { items: SidebarSubmenu }) => {
  return (
    <SidebarMenu>
      {/* {items.map((item) => ( */}
      <Collapsible
        key={items.label}
        asChild
        defaultOpen={items.isActive}
        className="group/collapsible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className="cursor-pointer" tooltip={items.label}>
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
                    <a href={subItem.url}>
                      <span>{subItem.label}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
      {/* ))} */}
    </SidebarMenu>
  );
};

export const Menu = ({ item }: { item: SidebarSubmenu }) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem key={item.label}>
        <SidebarMenuButton tooltip={item.label} asChild>
          <a href={item.url}>
            {item.icon && <item.icon />}
            <span>{item.label}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
