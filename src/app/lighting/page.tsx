import React from "react";
import LightingIntensityChart from "./components/LightingIntensityChart";
import LightingEnergyConsumptionChart from "./components/LightingEnergyConsumptionChart";
import { BiSolidCalendar, BiSolidChart, BiSolidTimeFive } from "react-icons/bi";

export default function page() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        <div className="flex border border-slate-300 p-5 gap-5 rounded-xl">
          <div className="w-14 h-14 text-blue-500 text-3xl flex items-center justify-center bg-blue-100 rounded-xl">
            <BiSolidTimeFive />
          </div>
          <div>
            <p className="font-medium text-slate-400 text-xs">
              Energy Consumption Now
            </p>
            <p className="font-bold text-2xl">1.2 kWh</p>
          </div>
        </div>
        <div className="flex border border-slate-300 p-5 gap-5 rounded-xl">
          <div className="w-14 h-14 text-green-500 text-3xl flex items-center justify-center bg-green-100 rounded-xl">
            <BiSolidChart />
          </div>
          <div>
            <p className="font-medium text-slate-400 text-xs">
              Energy Consumption Today
            </p>
            <p className="font-bold text-2xl">50 kWh</p>
          </div>
        </div>
        <div className="flex border border-slate-300 p-5 gap-5 rounded-xl">
          <div className="w-14 h-14 text-orange-500 text-3xl flex items-center justify-center bg-orange-100 rounded-xl">
            <BiSolidCalendar />
          </div>
          <div>
            <p className="font-medium text-slate-400 text-xs">
              Energy Consumption Monthly
            </p>
            <p className="font-bold text-2xl">500 kWh</p>
          </div>
        </div>
      </div>
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
        <button className="px-4 rounded-lg text-white text-sm bg-black">
          Query Data
        </button>
        <button className="px-4 rounded-lg text-white text-sm bg-green-600">
          Export Excel
        </button>
      </div>
      <LightingIntensityChart />
      <LightingEnergyConsumptionChart />
    </div>
  );
}
