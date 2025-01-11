import Image from "next/image";
import React from "react";
import ElevatorUsageChart from "./components/ElevatorUsageChart";

export default function page() {
  return (
    <div className="flex flex-col">
      <ElevatorUsageChart />
    </div>
  );
}
