import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const notifs = [
  {
    title: "New Comment on Your Post",
    description: "John Doe commented: 'Great article! Learned a lot from it.'",
    unread: true,
  },
  {
    title: "System Update",
    description: "Your system was successfully updated to version 1.2.3.",
    unread: true,
  },
  {
    title: "New Follower",
    description: "Alice started following you.",
    unread: false,
  },
  {
    title: "Scheduled Maintenance",
    description:
      "Server maintenance is scheduled for Feb 25, 2:00 AM - 4:00 AM UTC.",
  },
  {
    title: "Password Changed",
    description: "Your password was changed successfully.",
    unread: false,
  },
  {
    title: "New Message",
    description: "You have a new message from Mark.",
    unread: true,
  },
  {
    title: "Subscription Expiring",
    description: "Your premium subscription expires in 3 days. Renew now!",
    unread: true,
  },
  {
    title: "Blog Post Published",
    description: "Your article 'Mastering Next.js' has been published.",
    unread: false,
  },
  {
    title: "Security Alert",
    description: "A new login was detected from an unknown device.",
    unread: true,
  },
  {
    title: "New Course Available",
    description:
      "Check out our latest course on JavaScript performance optimization.",
    unread: false,
  },
];

export interface NotificationDropdownProps
  extends React.ComponentProps<typeof DropdownMenu> {
  withBadge?: boolean;
}
export const NotificationDropdown = ({
  withBadge = false,
  ...props
}: NotificationDropdownProps) => {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger className="relative" asChild>
        <Button size={"icon"} variant={"outline"}>
          <Bell />
          {withBadge && (
            <span className="absolute size-3 rounded-full bg-destructive -top-1 -right-1" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" className="w-full max-w-[400px]">
        <DropdownMenuLabel>Notification</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifs.map((notif) => (
          <NotificationItem
            key={notif.title}
            title={notif.title}
            description={notif.description}
            unread={notif.unread}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export interface NotificationItemProps
  extends React.ComponentProps<typeof DropdownMenuItem> {
  title: string;
  description?: string;
  unread?: boolean;
}
export const NotificationItem = ({
  title,
  description,
  unread = true,
  className,
  ...props
}: NotificationItemProps) => {
  return (
    <DropdownMenuItem
      className={cn("flex flex-col gap-2 items-start relative", className)}
      {...props}
    >
      {unread && (
        <Badge variant={"warning"} className="text-xs py-[.5px] px-[1px]">
          unread
        </Badge>
      )}
      <h1 className="font-semibold">{title}</h1>
      {description && (
        <p className="text-muted-foreground line-clamp-1">{description}</p>
      )}
    </DropdownMenuItem>
  );
};
