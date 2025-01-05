"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RoomDropdown } from "./components/RoomDropdown";
import { IoIosCloseCircle } from "react-icons/io";

export default function page() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Meeting Room");
  const [seletedRoom, setSelectedRoom] = useState<string | null>();
  const rooms: { [key: string]: number[] } = {
    "Meeting Room": [1, 2, 3],
    "Working Space": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    Mushola: [1, 2],
    "Smoke Room": [1, 2],
  };

  return (
    <>
      <div className="absolute top-0 pt-20 left-0 w-full h-screen -z-10">
        <div className="bg-[url('/building.svg')] w-full h-full bg-cover bg-center"></div>
      </div>
      <div className="pt-10 flex gap-4 h-[calc(100vh-120px)] items-center">
        {seletedRoom ? (
          <div className="relative w-2/3 h-fit">
            <p className="absolute bottom-8 right-7 text-white font-bold">
              {seletedRoom}
            </p>
            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-8 right-7 text-white text-4xl"
            >
              <IoIosCloseCircle />
            </button>
            <Image
              src="/cctv.png"
              width={1080}
              height={1080}
              alt={`${seletedRoom}`}
            />
          </div>
        ) : (
          <div className="w-2/3 grid grid-cols-2 gap-2 overflow-y-scroll h-fit max-h-full">
            {rooms[selectedCategory].map((room, index) => (
              <button
                onClick={() => setSelectedRoom(`${selectedCategory} ${room}`)}
                key={index}
                className="relative cursor-pointer"
              >
                <p className="absolute bottom-4 right-3 text-white text-sm font-bold">{`${selectedCategory} ${room}`}</p>
                <Image
                  src="/cctv.png"
                  width={500}
                  height={500}
                  alt={`${selectedCategory} ${room}`}
                />
              </button>
            ))}
          </div>
        )}
        <div className="w-1/3 flex flex-col gap-3 bg-white rounded-lg p-5 shadow-md overflow-y-scroll h-full">
          <h1 className="font-bold text-2xl">CCTV Angle</h1>
          {Object.entries(rooms).map(([category, roomNumbers], index) => (
            <RoomDropdown
              key={index}
              rooms={roomNumbers}
              category={category}
              onSelect={() => {
                setSelectedRoom(null);
                setSelectedCategory(category);
              }}
              onSelectRoom={(room) => setSelectedRoom(room)}
              isActive={selectedCategory === category}
              selectedRoom={seletedRoom}
            />
          ))}
        </div>
      </div>
    </>
  );
}
