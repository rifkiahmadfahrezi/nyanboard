import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-10 items-center justify-center px-6 py-16">
      <div className="text-center max-w-3xl">
        <Badge className="rounded-full bg-primary/10 text-primary">
          Just released
        </Badge>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
          A free and open-source Shadcn dashboard template
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Discover a free and open-source dashboard template built with Shadcn
          UI, Next.js, and Tailwind CSS. Effortlessly customize, and integrate
          them into your projects.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full text-base">
            <a
              href="https://github.com/rifkiahmadfahrezi/nyanboard"
              target="_blank"
            >
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-full text-base shadow-none"
          >
            <Link href={"/dashboard"}>View dashboard</Link>
          </Button>
        </div>
      </div>
      <figure className="w-full max-w-screen-xl mx-auto aspect-video relative">
        <div className="absolute w-full h-64 bg-gradient-to-t from-primary/30 to-transparent -top-24 left-0 -z-10"></div>
        <div className="overflow-hidden border-2 rounded-xl z-20">
          <Image
            priority
            src={"/hero.png"}
            width={600}
            height={300}
            className="w-full h-full object-contain z-20"
            alt="hero image"
          />
        </div>
      </figure>
    </div>
  );
};
