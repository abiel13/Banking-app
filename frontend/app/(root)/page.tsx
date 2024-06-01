import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
 const user = await getLoggedInUser()

  return (
    <div className="w-full min-h-screen flex   ">
      <div className="home-content flex flex-col gap-5 w-full px-2 py-4">
        <header className="w-full flex flex-col gap-3">
          <HeaderBox
            type="greeting"
            title="Welcome"
            subtext="Access and manage your account and  transactions effectively"
            user={user?.name || "Guest"}
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2394.33}
          />
        </header>
      </div>
      <RightSidebar user={user} transactions={[]} banks={[{}, {}]}  />
    </div>
  );
};

export default Home;
