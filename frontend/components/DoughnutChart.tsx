"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750],
        backgroundColor: ["#07b647", "#22d856", "#2ffa34"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
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
