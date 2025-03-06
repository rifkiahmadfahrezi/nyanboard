"use client";

import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { siteConfig } from "@/config/site";

const { color, height, spinner } = siteConfig.progressbar;
export const ProgressbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <ProgressBar
        height={'3px'}
        color={'red'}
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};
