import React from "react";

import { Hero, Features, CTA } from "@/examples";

const HomePage = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl">
        <Hero />
        <Features />
        <CTA />
      </div>
    </>
  );
};

export default HomePage;
