import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const user = await getLoggedInUser();

  if (!user) redirect("/sign-in");

  return (
    <main className="flex gap-4">
      <Sidebar user={user!} />
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
          <MobileNav user={user!} />
        </div>
        {children}
      </div>
    </main>
  );
}
