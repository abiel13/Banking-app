import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Abiel" , lastName:'Asimiea' , email:'dbestabi28@gmail.com'};

  return (
    <div className="w-full min-h-screen flex   ">
      <div className="home-content flex flex-col gap-5 w-full px-2 py-4">
        <header className="w-full flex flex-col gap-3">
          <HeaderBox
            type="greeting"
            title="Welcome"
            subtext="Access and manage your account and  transactions effectively"
            user={loggedIn?.firstName || "Guest"}
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2394.33}
          />
        </header>
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{}, {}]}  />
    </div>
  );
};

export default Home;
