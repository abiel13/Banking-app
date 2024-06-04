import React from "react";
import BankCard from "./BankCard";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="min-w-[300px] 2xl:min-w-[355px] h-screen max-h-screen  overflow-y-auto hidden md:block">
      <div className="max-h-[100px] h-full bg-primary " />
      <section className="px-3">
        <div className="flex w-[100px] h-[100px] rounded-full bg-white  items-center justify-center shadow-lg -mt-[10%] ">
          <div className="flex items-center justify-center w-[80px] h-[80px] bg-gray-300 rounded-full">
            <p className="font-bold text-3xl font-sans text-primary">
              {user.firstName![0]}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          <p className="font-sans text-xl font-bold">{`${user?.firstName}  ${user?.lastName}`}</p>
          <p className="font-sans text-muted-foreground">{user?.email}</p>
        </div>
      </section>

      <section className="w-full px-3 mt-[2rem]">
        <div className="flex items-center justify-between mb-3  ">
          <h1 className="font-bold text-lg">My Banks</h1>
          <p className="text-muted-foreground text-base">+ Add banks</p>
        </div>

        {banks.length > 0 && (
          <div className="relative flex flex-col items-center  w-full">
            <div className="relative z-10 w-full">
              <BankCard
                account={banks[0]}
                userName={`${user?.firstName}  ${user?.lastName}`}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute top-8 right-0 w-[100%] shadow-lg">
                <BankCard
                  account={banks[1]}
                  userName={`${user?.firstName}  ${user?.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;
