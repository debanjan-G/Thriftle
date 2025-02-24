"use client";

import { HeroUIProvider } from "@heroui/react";

interface HerouiProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: HerouiProviderProps) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};
