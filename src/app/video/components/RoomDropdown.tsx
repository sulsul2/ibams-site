"use client";
import clsx from "clsx";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

interface RoomDropdownProps {
  rooms: number[];
  category: string;
  isActive: boolean;
  selectedRoom: string | null | undefined;
  onSelect: (category: string) => void;
  onSelectRoom: (room: string) => void;
}

export function RoomDropdown({
  rooms,
  category,
  isActive,
  onSelect,
  onSelectRoom,
  selectedRoom,
}: RoomDropdownProps) {
  return (
    <div className="w-full">
      {/* Dropdown header */}
      <button
        onClick={() => onSelect(category)}
        className="flex justify-between items-center w-full px-4 py-2 border border-gray-200 rounded-lg text-black font-bold text-sm"
      >
        <span>{category}</span>
        <AiOutlineDown
          className={clsx(
            "transition-transform",
            isActive ? "rotate-180" : "rotate-0"
          )}
        />
      </button>

      {/* Dropdown items */}
      <ul
        className={clsx(
          "mt-1 border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden",
          isActive ? "h-auto" : "h-0 hidden"
        )}
      >
        {rooms.map((room, index) => (
          <li
            onClick={() => onSelectRoom(`${category} ${room}`)}
            key={index}
            className={clsx(
              "px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer",
              selectedRoom == `${category} ${room}` &&
                "bg-black text-white hover:bg-black"
            )}
          >
            {`${category} ${room}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
