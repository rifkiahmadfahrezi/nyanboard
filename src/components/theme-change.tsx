"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

import React from "react";

const themes = [
  {
    icon: Moon,
    label: "Dark mode",
    theme: "dark",
  },
  {
    icon: Sun,
    label: "Light mode",
    theme: "light",
  },
  {
    icon: Monitor,
    label: "System",
    theme: "system",
  },
];

export const ThemeChange = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="flex items-center justify-between border rounded-full p-1"
      {...props}
    >
      {themes.map((item) => (
        <Button
          key={item.label}
          size={"icon"}
          title={item.label}
          className="rounded-full p-1"
          onClick={() => setTheme(item.theme)}
          variant={theme === item.theme ? "default" : "ghost"}
        >
          <item.icon />
        </Button>
      ))}
    </div>
  );
};
