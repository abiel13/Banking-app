"use client";
import { Navlinks } from "@/constants/sidenavlinks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "./Footer";

const Sidebar = ({user} : SiderbarProps) => {
  const pathname = usePathname();


  return (
    <div className="sticky top-0 h-screen left-0 w-fit  xl:w-[15%]  border-r border-muted px-3 py-4 hidden md:flex flex-col">
      <Link className="flex items-center" href={"/"}>
        <div className="relative w-[70px] h-[70px] ">
          <Image src={"/logo.png"} alt="logo " fill />
        </div>{" "}
        <span className="font-bold ">A-bank</span>
      </Link>

      <div className="flex-col flex gap-3 mt-4 flex-1">
        {Navlinks.map((item, i) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              key={i}
              href={item.route}
              className={cn(
                "flex items-center gap-3 justify-center lg:justify-normal px-2 py-2 rounded-lg",
                {
                  "bg-primary": isActive,
                }
              )}
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

     <Footer user={user} />
    </div>
  );
};

export default Sidebar;
