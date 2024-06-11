"use client";
import React from "react";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navitem = () => {
  const pathName = usePathname();
  return (
    <ul className=" md:flex-between flex w-full items-start gap-5 text-gray-500 flex-col md:flex-row">
      {headerLinks.map((links) => {
        const isActive = pathName === links.route;
        return (
          <li
            key={links.route}
            className={`${
              isActive && " text-blue-600"
            } flex-center whitespace-nowrap font-medium `}
          >
            <Link href={links.route}>{links.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navitem;
