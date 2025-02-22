import React from "react";

import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface OverviewCardProps extends React.ComponentProps<typeof Card> {
  icon: LucideIcon;
  title: string;
  value: string;
}
export const OverviewCard = ({
  icon,
  title,
  value,
  className,
  children,
  ...props
}: OverviewCardProps) => {
  return (
    <Card
      className={cn("p-5 flex gap-2 items-center flex-grow", className)}
      {...props}
    >
      <IconWrapper icon={icon} />
      <div className="flex flex-col gap-1 items-start">
        <h1 className="text-muted-foreground">{title}</h1>
        <span className="font-bold text-xl">{value}</span>
        {children}
      </div>
    </Card>
  );
};

export interface IconWrapperProps
  extends React.ComponentPropsWithoutRef<"div"> {
  icon: LucideIcon;
}
export const IconWrapper = ({
  icon,
  className,
  ...props
}: IconWrapperProps) => {
  return (
    <div
      className={cn(
        "size-12 bg-primary/30 rounded-full grid place-items-center text-primary-content",
        className,
      )}
      {...props}
    >
      {React.createElement(icon)}
    </div>
  );
};
