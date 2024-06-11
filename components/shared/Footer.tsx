import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className=" flex-center wrapper  flex-col gap-3 p-5 text-center justify-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            width={134}
            height={34}
            alt="logoimg"
          />
        </Link>
        <p>2024 Evently. All rights are reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
