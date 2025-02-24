import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SearchDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center px-2.5 py-2.5 md:py-2 md:min-w-54 justify-between border gap-5 text-muted-foreground bg-background">
          <span className="hidden text-xs md:block">Search...</span>{" "}
          <Search className="size-4 text-foreground" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <form className="mt-10 relative">
          <Input className="pr-10" placeholder="Search..." type="search" />
          <Button
            className="absolute right-0 top-0"
            size={"icon"}
            variant={"ghost"}
          >
            <ArrowRight />
          </Button>
        </form>
        <div className="text-muted-foreground">Search result</div>
      </DialogContent>
    </Dialog>
  );
};
