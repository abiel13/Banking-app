'use client'
import React from "react";
import { Separator } from "./ui/separator";
import { CiLogout } from "react-icons/ci";
import { logoutUser } from "@/lib/actions/user.actions";

const Footer = ({ user }: FooterProps) => {
  return (
    <div className="flex flex-col py-2 gap-2 ">
      <Separator />
      <div className="flex items-center">
        <div className="flex-1 flex gap-2 ">
          <div className="w-[20px] md:w-[40px] h-[20px] md:h-[40px] rounded-full text-blue-950 bg-gray-300 flex items-center justify-center font-bold ">
            {user?.name[0]}
          </div>
          <div>
            <h1 className="text-sm">{user?.name}</h1>
            <p className='text-sm'>{user?.email}</p>
          </div>
        </div>
        <div>
          <CiLogout onClick={() => logoutUser()} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
