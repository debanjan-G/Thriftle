"use client";

import { HeroUIProvider } from "@heroui/react";
import { SessionProvider } from "next-auth/react";

interface HerouiProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: HerouiProviderProps) => {
  return (
    <SessionProvider>
      <HeroUIProvider>{children}</HeroUIProvider>;
    </SessionProvider>
  );
};
