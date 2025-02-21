import type { LucideIcon } from "lucide-react";

export type NavMenu = {
  label: string;
  url?: string;
  items?: NavMenuItem[];
};

export type NavbarItem = {
  title: string;
  url: string;
  description?: string;
  icon?: LucideIcon;
};
