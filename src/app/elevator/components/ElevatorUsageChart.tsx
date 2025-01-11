"use client";

import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

export default function ElevatorUsageChart() {
  const options: ApexOptions = {
    chart: {
      type: "line",
      height: 100,
    },
    colors: ["#28A745", "#007BFF", "#FFC107"],
    xaxis: {
      categories: Array.from({ length: 49 }, (_, i) => i * 1800), // Waktu dalam detik
      labels: {
        style: {
          fontSize: "12px",
        },
        formatter: (value) => `${value}s`, // Menambahkan "s" untuk detik
      },
      title: {
        text: "Time (seconds)",
        style: {
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value} People`, // Menambahkan "People"
      },
      title: {
        text: "Passengers Count",
        style: {
          fontSize: "14px",
        },
      },
    },
    tooltip: {
      shared: false,
      intersect: false,
    },
    fill: {
      opacity: 0.8,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
  };

  const series = [
    {
      name: "Elevator A",
      data: Array.from({ length: 49 }, (_, i) => {
        // Beban tinggi pada pagi hari (08:00 - 10:00) dan sore hari (17:00 - 19:00)
        if ((i >= 16 && i <= 20) || (i >= 34 && i <= 38))
          return 15 + Math.random() * 5; // Puncak beban
        return 5 + Math.random() * 3; // Beban normal
      }),
    },
    {
      name: "Elevator B",
      data: Array.from({ length: 49 }, (_, i) => {
        // Beban tinggi saat jam makan siang (12:00 - 14:00)
        if (i >= 24 && i <= 28) return 12 + Math.random() * 4; // Puncak beban
        return 4 + Math.random() * 2; // Beban normal
      }),
    },
    {
      name: "Elevator C",
      data: Array.from({ length: 49 }, () => {
        // Operasi konstan dengan sedikit variasi
        return 3 + Math.random() * 1;
      }),
    },
  ];

  return (
    <div>
      <h2 className="font-bold text-lg">Elevator Usage Over Time</h2>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
}
