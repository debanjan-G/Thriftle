"use client";

import React from "react";
import { Button } from "@heroui/react";

const Hero = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Personal Finance Tracker</h1>
      <Button color="primary" variant="bordered">
        Click Me
      </Button>
    </div>
  );
};

export default Hero;
