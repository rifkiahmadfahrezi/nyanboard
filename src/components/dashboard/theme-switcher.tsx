"use client";

import React from "react";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "../ui/sidebar";

export const ThemeSwithcer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="cursor-pointer"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
          <span>{theme === "dark" ? "Light" : "Dark"} mode</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
