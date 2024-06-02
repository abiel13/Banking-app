import { Toaster } from "@/components/ui/toaster";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      {children}
      <Toaster />
    </main>
  );
}
