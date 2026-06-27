"use client";

import { Navbar } from "@/components/Navbar";
import { ViewModeProvider } from "@/components/mode/ViewModeProvider";

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <ViewModeProvider>
      <Navbar />
      {children}
    </ViewModeProvider>
  );
}
