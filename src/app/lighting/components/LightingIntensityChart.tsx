"use client";

import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

export default function LightingIntensityChart() {
  const options: ApexOptions = {
    chart: {
      type: "line",
      height: 100,
    },
    colors: ["#FFD700", "#FF4500", "#1E90FF"],
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
        formatter: (value) => `${value} Cd`, // Tambahkan "Cd" ke nilai
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
      colors: ["#FFD700"],
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
      name: "Peak Lighting Intensity",
      data: Array.from({ length: 49 }, (_, i) => {
        // Intensitas tinggi pada siang hari (12:00 hingga 14:00)
        if (i >= 24 && i <= 28) return 1200 + Math.random() * 50; // Puncak intensitas
        return 800 + Math.random() * 100; // Fluktuasi normal
      }),
    },
    {
      name: "Average Lighting Intensity",
      data: Array.from({ length: 49 }, (_, i) => {
        // Lebih stabil dengan fluktuasi kecil
        if (i >= 24 && i <= 28) return 1000 + Math.random() * 20; // Puncak lebih rendah
        return 700 + Math.random() * 50; // Stabil dengan variasi kecil
      }),
    },
    {
      name: "Base Intensity",
      data: Array.from({ length: 49 }, () => {
        // Konstan tetapi dengan sedikit noise
        return 500 + Math.random() * 10;
      }),
    },
  ];

  return (
    <div>
      <h2 className="font-bold text-lg">Lighting Intensity Profile</h2>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
}
