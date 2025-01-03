import React from "react";
import CoolingLoadChart from "./components/CoolingLoadChart";
import AcTable from "./components/AcTable";

export default function page() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-end gap-5">
        <div className="flex gap-2 items-center">
          <p className="font-bold">From</p>
          <input
            type="date"
            className="border border-slate-600 rounded-lg p-1"
          />
        </div>
        <div className="flex gap-2 items-center">
          <p className="font-bold">To</p>
          <input
            type="date"
            className="border border-slate-600 rounded-lg p-1"
          />
        </div>
        <button className="py-1 px-4 rounded-lg text-white text-sm bg-black">
          Query Data
        </button>
        <button className="py-1 px-4 rounded-lg text-white text-sm bg-green-600">
          Export Excel
        </button>
      </div>
      <CoolingLoadChart />
      <AcTable />
    </div>
  );
}
