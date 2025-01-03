"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface MenuProps {
  menu: string;
  url: string;
  icon: React.ReactNode;
}

export default function SideMenu({ menu, url, icon }: MenuProps) {
  const pathname = usePathname();
  return (
    <Link
      className={clsx(
        "w-40 flex gap-4 text-xl items-center",
        pathname === url ? "text-white" : "text-slate-600"
      )}
      href={url}
    >
      <div>{icon}</div>
      <p className={"font-bold"}>{menu}</p>
    </Link>
  );
}
