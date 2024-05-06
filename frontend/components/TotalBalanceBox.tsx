import React from "react";
import { Card } from "./ui/card";
import AnimatedBalance from "./AnimatedBalance";
import DoughnutChart from "./DoughnutChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceProps) => {
  return (
    <Card className="px-3 py-4 flex items-center gap-3 mt-[1rem]">
      <div className="flex">
        <DoughnutChart accounts={[]} />
      </div>
      <div>{/* render chart */}</div>
      <div className="flex justify-between flex-1 ">
        <div className="flex-col flex gap-2">
          <h2 className="text-base font-bold">Bank Accounts: {totalBanks} </h2>
          <div className="flex flex-col gap-2">
            <p className="muted-foreground text-sm">Total Current Balance</p>
            <div className="text-2xl font-bold">
              <AnimatedBalance amount={totalCurrentBalance} />
            </div>
          </div>
        </div>

        <p className="text-primary font-medium font-sans cursor-pointer">
          + Add Bank
        </p>
      </div>
    </Card>
  );
};

export default TotalBalanceBox;
