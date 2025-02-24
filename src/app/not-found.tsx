import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-svh w-full grid place-items-center">
      <div className="flex flex-col items-center text-center max-w-md">
        <span className="text-5xl font-bold">404</span>
        <h1 className="text-xl">Page not found</h1>
        <p className="text-muted-foreground">
          The page you&lsquo;re looking for doesn't exist. It might have been
          removed or deleted.
        </p>

        <Button className="w-fit mt-8 rounded-full" asChild>
          <Link href={"/"}>Back to home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
