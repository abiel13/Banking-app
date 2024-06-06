import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BankTabItem } from "./BankTabItem";
import BankInfo from "./BankInfo";
import TransactionsTable from "./TransactionsTable";

const RecentTransactions = ({
  accounts,
  transactions,
  appwriteItemId,
  page = 1,
}: RecentTransactionsProps) => {
  return (
    <section className="">
      <header className="flex items-center justify-between">
        <h2 className="font-bold text-lg font-sans ">Recent Transactions</h2>
        <Link
          className="px-3 py-2 rounded-lg border-[1px]"
          href={`/transaction/history/?id=${appwriteItemId}`}
        >
          See all
        </Link>
      </header>
      <div className="mt-[2rem]">
        <Tabs defaultValue="account" className="w-full ">
          <TabsList className="w-full flex items-center justify-center gap-4">
            {accounts.map((account: Account, i) => (
              <TabsTrigger key={account.id} value={account.appwriteItemId}>
                <BankTabItem
                  key={account.id}
                  appwriteItemId={appwriteItemId}
                  account={account}
                />
              </TabsTrigger>
            ))}
          </TabsList>
          {accounts.map((item:Account, i) => (
            <TabsContent
              value={item.appwriteItemId}
              key={item.id}
              className="space-y-5"
            >
              <BankInfo
                type="full"
                account={item}
                appwriteItemId={appwriteItemId}
              />

              <TransactionsTable transactions={transactions} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default RecentTransactions;
