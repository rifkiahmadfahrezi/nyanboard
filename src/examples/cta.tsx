import React from "react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const CTA = () => {
  return (
    <Card className="p-5 max-w-screen-lg mx-auto my-10 flex flex-wrap gap-3 items-center justify-between">
      <h1 className="font-bold text-2xl">
        Start Building with the template now!
      </h1>

      <Button asChild size={"lg"} className="rounded-full">
        <a
          href="https://github.com/rifkiahmadfahrezi/nyanboard"
          target="_blank"
        >
          Get started now
          <ArrowUpRight />
        </a>
      </Button>
    </Card>
  );
};
