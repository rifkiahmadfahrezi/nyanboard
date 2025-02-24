import type { NavMenu } from "@/types/navbar";
import { Briefcase, Building } from "lucide-react";

export const navbarMenus: NavMenu[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Blog",
    url: "/blog",
  },
  {
    label: "Company",
    items: [
      {
        title: "About us",
        url: "#",
        description: "Meet our team",
        icon: Briefcase,
      },
      {
        title: "Our Team",
        url: "#",
        description: "Meet our team",
        icon: Briefcase,
      },
      {
        title: "Careers",
        url: "#",
        description: "Join us",
        icon: Building,
      },
    ],
  },
  {
    label: "Contact",
    url: "/contact",
  },
];
