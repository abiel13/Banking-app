"use client";
import { Navlinks } from "@/constants/sidenavlinks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 h-screen left-0 w-fit  xl:w-[15%]  border-r border-muted px-3 py-4 hidden md:flex flex-col">
      <div className="flex items-center">
        <div className="relative w-[70px] h-[70px] lg:w-[80px] lg:h-[80px]">
          <Image src={"/logo.png"} alt="logo " fill />
        </div>{" "}
        <span className="font-bold xl:block hidden">A-bank</span>
      </div>

      <div className="flex-col flex gap-3 mt-4">
        {Navlinks.map((item, i) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              key={i}
              href={item.route}
              className={cn("flex items-center gap-3 justify-center xl:justify-normal px-2 py-2 rounded-lg", {
                "bg-primary": isActive,
              })}
            >
              <item.Icon
                fontSize={23}
                fontWeight={"bold"}
                className={cn("text-muted-foreground", {
                  "text-white": isActive,
                })}
              />
              <p
                className={cn("text-muted-foreground hidden xl:block", {
                  "text-white": isActive,
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
