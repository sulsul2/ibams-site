import React from "react";
import SideMenu, { MenuProps } from "./SideMenu";
import {
  FaThermometerHalf,
  FaLightbulb,
  FaCar,
  FaWater,
  FaVideo,
  FaFire,
} from "react-icons/fa";

import Image from "next/image";
import { IoIosLogOut, IoIosSettings } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { FaElevator } from "react-icons/fa6";

const menus: MenuProps[] = [
  { menu: "Dashboard", url: "/", icon: <MdSpaceDashboard /> },
  { menu: "AC Control", url: "/ac-control", icon: <FaThermometerHalf /> },
  { menu: "Lighting", url: "/lighting", icon: <FaLightbulb /> },
  { menu: "Parking", url: "/parking", icon: <FaCar /> },
  { menu: "Video", url: "/video", icon: <FaVideo /> },
  { menu: "Water", url: "/water", icon: <FaWater /> },
  { menu: "Fire Safety", url: "/fire", icon: <FaFire /> },
  { menu: "Elevator", url: "/elevator", icon: <FaElevator /> },
];

export default function SideBar() {
  return (
    <div className="fixed w-60 flex flex-col h-screen justify-between p-10 bg-black rounded-r-lg">
      <div className="flex gap-8 flex-col">
        <Image
          className="mb-2"
          src="/logo.svg"
          alt="logo"
          width={120}
          height={80}
        />
        {menus.map((menu) => (
          <SideMenu
            key={menu.url}
            menu={menu.menu}
            url={menu.url}
            icon={menu.icon}
          />
        ))}
      </div>
      <div className="flex items-center flex-col">
        <Image
          className="mb-2"
          src="/avatar.png"
          alt="avatar"
          width={60}
          height={60}
        />
        <p className="text-white font-medium">Eren Yeger</p>
        <p className="text-slate-600 text-sm">Manager</p>
        <div className="flex gap-4 mt-8">
          <button className="p-2 rounded-lg border border-white text-white text-xl">
            <IoIosSettings />
          </button>
          <button className="p-2 rounded-lg border border-white text-white text-xl">
            <IoIosLogOut />
          </button>
        </div>
      </div>
    </div>
  );
}
