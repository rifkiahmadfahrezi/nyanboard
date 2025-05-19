"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { navbarMenus } from "./navbar-menu"

export function NavMenu({
  ...props
}: React.ComponentProps<typeof NavigationMenu>) {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList>
        {navbarMenus.map((menu) => (
          <NavigationMenuItem key={menu.label}>
            {menu.items ? (
              <>
                <NavigationMenuTrigger>{menu.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-2 gap-3 md:w-[400px] lg:w-[500px]">
                    {menu.items.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <a
                            className="flex items-start gap-2 p-3 rounded-md hover:bg-accent focus:bg-accent"
                            href={item.url}
                          >
                            {item.icon && <item.icon className="h-5 w-5" />}
                            <div>
                              <div className="text-sm font-medium">
                                {item.title}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={menu.url || "#"} passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {menu.label}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
