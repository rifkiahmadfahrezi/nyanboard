import React from "react";

import { cn } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { DynamicBreadcrumb } from "./dynamic-breadcrumb";
import { NotificationDropdown } from "@/features/notification/notification-dropdown";
import { SearchDialog } from "@/features/search-bar/search-dialog";

export const TopNav = ({
  className,
  ...props
}: React.ComponentProps<"header">) => {
  return (
    <header
      className={cn(
        "flex h-16 sticky top-0 bg-background/10 backdrop-blur-sm shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between w-full gap-2 px-4">
        <div className="flex items-center">
          <SidebarTrigger className="-ml-1" />

          <Separator orientation="vertical" className="mr-2 h-4" />
          <DynamicBreadcrumb />
        </div>
        <div className="flex items-center gap-1">
          <SearchDialog />
          <NotificationDropdown />
        </div>
      </div>
    </header>
  );
};
