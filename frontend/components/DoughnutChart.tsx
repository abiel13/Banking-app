"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const accountNames = accounts.map((account) => account.name);
  const accountBalance = accounts.map((account) => account.currentBalance);
  console.log(accountNames, accountBalance);

  const data = {
    datasets: [
      {
        label: "Banks",
        data: accountBalance,
        backgroundColor: ["#07b647", "#22d856", "#2ffa34"],
      },
    ],
    labels: accountNames,
  };

  const options = {
    cutout: "60%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={options} width={110} />;
};

export default DoughnutChart;
