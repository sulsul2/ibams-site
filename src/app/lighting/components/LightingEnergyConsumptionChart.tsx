"use client";

import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

export default function LightingEnergyConsumptionChart() {
  const options: ApexOptions = {
    chart: {
      type: "line",
      height: 100,
    },
    colors: ["#FF5733", "#33FF57", "#337BFF"],
    xaxis: {
      categories: [
        "00:00",
        "00:30",
        "01:00",
        "01:30",
        "02:00",
        "02:30",
        "03:00",
        "03:30",
        "04:00",
        "04:30",
        "05:00",
        "05:30",
        "06:00",
        "06:30",
        "07:00",
        "07:30",
        "08:00",
        "08:30",
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
        "23:00",
        "23:30",
        "24:00",
      ],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value} kWh`, // Tambahkan "kWh" ke nilai
      },
    },
    tooltip: {
      shared: false,
      intersect: false,
    },
    fill: {
      opacity: 0.8,
    },
    markers: {
      size: 0,
      colors: ["#FF5733"],
      strokeColors: "#fff",
      strokeWidth: 2,
      shape: "circle",
      hover: {
        size: 2,
      },
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
      name: "Peak Energy Consumption",
      data: Array.from({ length: 49 }, (_, i) => {
        // Konsumsi energi puncak pada malam hari (18:00 hingga 21:00)
        if (i >= 36 && i <= 42) return 60 + Math.random() * 10; // Puncak konsumsi
        return 20 + Math.random() * 10; // Fluktuasi normal
      }),
    },
    {
      name: "Average Energy Consumption",
      data: Array.from({ length: 49 }, (_, i) => {
        // Konsumsi lebih stabil sepanjang hari
        if (i >= 36 && i <= 42) return 50 + Math.random() * 5; // Puncak lebih rendah
        return 15 + Math.random() * 5; // Stabil dengan variasi kecil
      }),
    },
    {
      name: "Base Load Consumption",
      data: Array.from({ length: 49 }, () => {
        // Beban dasar tetap dengan sedikit noise
        return 10 + Math.random() * 2;
      }),
    },
  ];

  return (
    <div>
      <h2 className="font-bold text-lg">Lighting Energy Consumption Profile</h2>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
}
