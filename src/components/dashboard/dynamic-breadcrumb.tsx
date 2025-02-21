"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
  href: string;
  label: string;
}

interface DynamicBreadcrumbProps {
  className?: string;
}

export function DynamicBreadcrumb({ className }: DynamicBreadcrumbProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const breadcrumbItems = React.useMemo(() => {
    const paths = pathname.split("/").filter(Boolean);
    return [
      { href: "/", label: "Home" },
      ...paths.map((path, index) => ({
        href: `/${paths.slice(0, index + 1).join("/")}`,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      })),
    ];
  }, [pathname]);

  if (breadcrumbItems.length === 0) {
    return null;
  }

  const visibleItems = isMobile ? 2 : 3;
  const firstItem = breadcrumbItems[0];
  const lastItem = breadcrumbItems[breadcrumbItems.length - 1];
  const middleItems = breadcrumbItems.slice(1, -1);

  return (
    <Breadcrumb className={cn("flex-wrap", className)}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={firstItem.href} asChild>
            <Link href={firstItem.href}>{firstItem.label}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {breadcrumbItems.length > 1 && (
          <>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>

            {middleItems.length > visibleItems - 2 ? (
              <>
                {!isMobile && (
                  <BreadcrumbItem>
                    <BreadcrumbLink href={middleItems[0].href} asChild>
                      <Link href={middleItems[0].href}>
                        {middleItems[0].label}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                )}
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-auto p-0 font-normal"
                      >
                        <ChevronDown className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {middleItems.slice(isMobile ? 0 : 1, -1).map((item) => (
                        <DropdownMenuItem key={item.href} asChild>
                          <Link href={item.href}>{item.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                {!isMobile && middleItems.length > 1 && (
                  <>
                    <BreadcrumbSeparator>
                      <ChevronRight className="h-4 w-4" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href={middleItems[middleItems.length - 1].href}
                        asChild
                      >
                        <Link href={middleItems[middleItems.length - 1].href}>
                          {middleItems[middleItems.length - 1].label}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                )}
              </>
            ) : (
              middleItems.map((item) => (
                <React.Fragment key={item.href}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={item.href} asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                </React.Fragment>
              ))
            )}

            <BreadcrumbItem>
              <BreadcrumbPage>{lastItem.label}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
