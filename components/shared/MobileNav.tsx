"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Navitem from "./Navitem";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";
const MobileNav = () => {
  return (
    <nav className=" md:hidden">
      <Sheet>
        <SheetTrigger className=" align-middle">
          <Image
            src="/assets/icons/menu.svg"
            width={26}
            height={26}
            alt="menuimg"
            className=" cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className=" flex flex-col gap-6 md:hidden bg-white">
          <Image
            src="/assets/images/logo.svg"
            width={120}
            height={38}
            alt="logoimg"
          />
          <Separator className=" border border-gray-100" />
          <Navitem />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
