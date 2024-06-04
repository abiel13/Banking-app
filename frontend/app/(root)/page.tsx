import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";
import { MdAccountBalance } from "react-icons/md";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const user = await getLoggedInUser();
  const accounts = await getAccounts({ userId: user!.$id });

  if (!accounts) return;

  const accountData = accounts?.data;

  const appwriteItemId = (id as string) || accountData[0].appwriteItemId;

  return (
    <div className="w-full min-h-screen flex   ">
      <div className="home-content flex flex-col gap-5 w-full px-2 py-4">
        <header className="w-full flex flex-col gap-3">
          <HeaderBox
            type="greeting"
            title="Welcome"
            subtext="Access and manage your account and  transactions effectively"
            user={`${user?.firstName}  ${user?.lastName}` || "Guest"}
          />
 
          <TotalBalanceBox
            accounts={accountData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
      </div>
      <RightSidebar
        user={user}
        transactions={accounts?.transactions}
        banks={accountData.slice(0, 2)}
      />
    </div>
  );
};

export default Home;
