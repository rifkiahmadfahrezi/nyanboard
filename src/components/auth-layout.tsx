import React from "react";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

import Image from "next/image";

export interface AuthLayout extends React.ComponentProps<"div"> {
  title: string;
}
export const AuthLayout = ({
  title,
  className,
  children,
  ...props
}: AuthLayout) => {
  return (
    <div className={cn("h-screen flex items-center justify-center", className)} {...props}>
      <div className="w-full h-full grid lg:grid-cols-2 p-4">
        <div className="max-w-xs m-auto w-full flex flex-col items-center">
          <div className="mb-10 flex items-center flex-col">
            <Logo className="h-9 w-9" />
            <p className="mt-4 text-xl font-bold tracking-tight">{title}</p>
          </div>

          {children}
        </div>
        <div className="bg-muted hidden lg:block rounded-lg overflow-hidden">
          <Image
            priority
            src={"https://images.unsplash.com/photo-1633810274315-be2e27a63d62"}
            className="w-full h-full object-cover"
            width={500}
            height={700}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
