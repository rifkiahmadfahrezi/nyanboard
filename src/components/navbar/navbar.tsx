import { Button } from "@/components/ui/button";
import { Logo } from "../logo";
import { NavMenu } from "./nav-menu";
import Link from "next/link";
import { NavigationSheet } from "./navigation-sheet";
import { cn } from "@/lib/utils";

export const Navbar = ({
  className,
  ...props
}: React.ComponentProps<"header">) => {
  return (
    <header className={cn("top-0 sticky z-50", className)} {...props}>
      <nav className="h-16 bg-background/30 backdrop-blur-sm">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link href={"/sign-in"}>Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
