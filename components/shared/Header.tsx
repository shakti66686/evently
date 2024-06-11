import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Navitem from "./Navitem";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className=" w-full border-b">
      <div className=" wrapper flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            height={38}
            width={128}
            alt="logoimg"
          />
        </Link>
        <SignedIn>
          <nav className="md:flex justify-center hidden w-full max-w-xs">
            <Navitem />
          </nav>
        </SignedIn>
        <div className=" flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <MobileNav />
          <SignedOut>
            <Button asChild className=" bg-blue-600 rounded-full " size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
