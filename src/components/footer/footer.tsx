import { Separator } from "@/components/ui/separator";
import {
  ArrowUpRight,
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "../logo";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

import { footerSections } from "@/config/navigation-menu/footer";
import { ThemeChange } from "../theme-change";

export const Footer = ({
  className,
  ...props
}: React.ComponentProps<"footer">) => {
  return (
    <footer className={cn("border-t px-2", className)} {...props}>
      <div className="max-w-screen-xl mx-auto">
        <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
          <div className="col-span-full xl:col-span-2">
            <Logo />

            <p className="mt-4 text-muted-foreground">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>

          {footerSections.map(({ title, links }) => (
            <div key={title}>
              <h6 className="font-semibold">{title}</h6>
              <ul className="mt-6 space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    {href.startsWith("http") ? (
                      <a
                        target="_blank"
                        href={href}
                        className="text-muted-foreground hover:text-foreground hover:underline flex items-center gap-1"
                      >
                        {label}
                        <ArrowUpRight className="size-3" />
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="text-muted-foreground hover:text-foreground hover:underline"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/">{siteConfig.name}</Link>. All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <ThemeChange />
          </div>
        </div>
      </div>
    </footer>
  );
};
