"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { IoChatbubbleEllipses } from "react-icons/io5";

export default function Title() {
  const pathname = usePathname();
  let title = "";

  switch (pathname) {
    case "/":
      title = "Dashboard";
      break;
    case "/ac-control":
      title = "Automatic Climate Control";
      break;
    default:
      break;
  }

  return (
    <div className="flex items-center justify-between h-20">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex gap-4 items-center">
        <button className="p-2 rounded-lg border border-slate-600 text-black text-xl">
          <IoChatbubbleEllipses />
        </button>
        <button className="p-2 rounded-lg border border-slate-600 text-black text-xl">
          <IoIosNotifications />
        </button>
      </div>
    </div>
  );
}
