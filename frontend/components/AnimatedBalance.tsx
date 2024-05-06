"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedBalance = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp prefix="$" duration={1} end={amount} />
    </div>
  );
};

export default AnimatedBalance;
