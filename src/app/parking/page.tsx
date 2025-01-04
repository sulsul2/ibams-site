import React from "react";
import { BiSolidChart } from "react-icons/bi";
import ParkingSlot from "./components/ParkingSlot";

export default function page() {
  const parkingData = generateParkingData(8, 30);

  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="flex border border-slate-300 p-5 gap-5 rounded-xl">
        <div className="w-14 h-14 text-green-500 text-3xl flex items-center justify-center bg-green-100 rounded-xl">
          <BiSolidChart />
        </div>
        <div>
          <p className="font-medium text-slate-400 text-xs">
            Parking Lots Occupied
          </p>
          <div className="flex gap-1">
            <p className="font-bold text-2xl text-slate-400">
              {parkingData.flat().filter((item) => item === true).length}
            </p>
            <p className="font-bold text-2xl">/</p>
            <p className="font-bold text-2xl text-blue-600">
              {parkingData.flat().length}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full border border-slate-300 p-5 rounded-xl">
        <h1 className="text-slate-400 text-center font-bold text-lg">
          Parking Occupancy
        </h1>
        <hr className="w-1/2 mx-auto my-5" />
        {parkingData.map((data, index) => (
          <ParkingSlot key={index} data={data} floor={index + 1} />
        ))}
      </div>
    </div>
  );
}

function generateParkingData(
  floors: number,
  slotsPerFloor: number
): boolean[][] {
  return Array.from({ length: floors }, () =>
    Array.from({ length: slotsPerFloor }, () => Math.random() < 0.5)
  );
}
