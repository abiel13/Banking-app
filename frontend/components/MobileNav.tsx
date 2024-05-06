"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { RiMenuAddFill } from "react-icons/ri";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navlinks } from "@/constants/sidenavlinks";
import Image from "next/image";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <RiMenuAddFill fontSize={24} />
      </SheetTrigger>
      <SheetContent>
        <SheetClose asChild>
          <div>
            <div>
              <div className="relative w-[70px] h-[70px] ">
                <Image src={"/logo.png"} alt="logo " fill />
              </div>{" "}
              <span className="font-bold ">A-bank</span>
            </div>

            <div className="flex-col flex gap-3 mt-4">
              {Navlinks.map((item, i) => {
                const isActive =
                  pathname === item.route ||
                  pathname.startsWith(`${item.route}/`);
                return (
                  <SheetClose key={i} asChild>
                    <Link
                      href={item.route}
                      className={cn(
                        "flex items-center gap-3 justify-normal px-2 py-2 rounded-lg",
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
                        className={cn("text-muted-foreground", {
                          "text-white": isActive,
                        })}
                      >
                        {item.label}
                      </p>
                    </Link>
                  </SheetClose>
                );
              })}
            </div>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
