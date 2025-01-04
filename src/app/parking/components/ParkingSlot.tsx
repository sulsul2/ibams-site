import clsx from "clsx";
import React from "react";
import { FaBus } from "react-icons/fa";

interface ParkingSlotProps {
  data: Array<boolean>;
  floor: number;
}

export default function ParkingSlot({ data, floor }: ParkingSlotProps) {
  return (
    <div className="w-full my-5">
      <p className="p-1 rounded-md text-sm bg-blue-100 text-blue-400 w-fit mb-2">{`Floor ${floor}`}</p>
      <div className="flex">
        <div className="flex gap-2">
          {data.map((item, index) => (
            <div
              key={index}
              className={clsx(
                "text-2xl",
                item ? "text-blue-600" : "text-slate-400"
              )}
            >
              <FaBus />
            </div>
          ))}
        </div>
        <div className="flex gap-1 items-center font-bold mx-auto">
          <p className="text-slate-400">
            {data.filter((item) => item === true).length}
          </p>
          <p>/</p>
          <p className="text-blue-600">{data.length}</p>
        </div>
      </div>
    </div>
  );
}
