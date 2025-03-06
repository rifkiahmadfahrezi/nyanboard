import React from "react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const CTA = () => {
  return (
    <Card 
      className="px-8 isolate py-20 relative max-w-screen-lg mx-auto my-10 flex flex-wrap gap-3 items-center justify-between overflow-hidden after:content-[''] after:size-[500px] after:absolute after:-bottom-[100%] after:left-2/4 after:-translate-x-2/4 after:translate-y-6 after:z-10 after:bg-radial after:from-primary/30 after:to-transparent after:from-10% after:to-60% after:rounded-full">

      <div className="space-y-3 z-20">
        <h1 className="font-bold text-2xl">
          Start Building with the template now!
        </h1>
        <p className="max-w-md text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim exercitationem dignissimos tenetur quos placeat.</p>

        <Button asChild size={"lg"} className="rounded-full">
          <a
            href="https://github.com/rifkiahmadfahrezi/nyanboard"
            target="_blank"
          >
            Get started now
            <ArrowUpRight />
          </a>
        </Button>
      </div>
      
      <figure className="absolute -bottom-1/4 z-20 -right-[10%] border rounded">
        <Image 
          src={'/hero-light.png'}
          width={600}
          height={500}
          alt=""
          priority
          className="dark:hidden block"
          />
        <Image 
          src={'/hero-dark.png'}
          width={600}
          height={500}
          alt=""
          priority
          className="hidden dark:block"
          />
      </figure>
    </Card>
  );
};
