import { formatNumberToUSD } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="w-full h-[200px] rounded-lg bg-primary px-2 py-2 shadow-lg">
      <Link className="flex flex-col justify-between  min-h-full " href={"/"}>
        <div>
          <h1 className="font-bold text-23">{userName}</h1>
          <p>{formatNumberToUSD(account.currentBalance)} </p>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-23 flex items-center justify-between">
            {userName}

            <span className="font-bold text-lg">
              {/* mask */}
              **/**
            </span>
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg">**** **** **** **** 1234</p>
            <div className="w-[40px] h-[30px] relative">
              <Image fill src="/mast.png" alt="mast" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BankCard;
