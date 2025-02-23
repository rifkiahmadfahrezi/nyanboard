"use client";

import React from "react";
import { ThemeProvider } from "./theme-provider";
import { TanstackProvider } from "./tanstack-provider";
import { ProgressbarProvider } from "./progressbar-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ProgressbarProvider>
          <TanstackProvider>{children}</TanstackProvider>
        </ProgressbarProvider>
      </ThemeProvider>
    </>
  );
};

export default Providers;
