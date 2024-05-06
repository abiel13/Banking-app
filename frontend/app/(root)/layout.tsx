import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex gap-4">
      <Sidebar />
      <div className="flex-1">
        <div className="flex items-center justify-between md:hidden shadow-md py-2 px-2">
          <div className="relative w-[40px] h-[40px] ">
            <Image
              src={"/logo.png"}
              alt="logo"
              fill
              className="size-full object-cover"
            />
          </div>
          <MobileNav />   
        </div>
        {children}
      </div>
    </main>
  );
}
