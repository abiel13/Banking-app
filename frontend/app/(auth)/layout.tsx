import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full h-full">
      <div className="flex flex-row w-full h-full">
        <div className="flex-1 w-full">{children}</div>{" "}
        <div className="w-[50%] h-screen   flex-1 relative">
          <Image
            src={"/demo.png"}
            className="object-cover "
            alt="demo"
            fill
          />{" "}
        </div>
      </div>
      <Toaster />
    </main>
  );
}
