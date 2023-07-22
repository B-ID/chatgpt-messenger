"use client";
import { useSidebar } from "@/contexts/sidebar-context";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { FC } from "react";
import logo from "../../../public/gpt.png";

type Props = {};

const Header: FC<Props> = (props) => {
  const { openMenu, mobileMenu } = useSidebar();
  return (
    <div className="sticky top-0 z-30 flex items-center justify-between px-2 py-3 shadow md:z-40 backdrop-blur">
      <div className="relative w-10 h-10">
        <Image className="cursor-pointer" src={logo} alt="logo" fill />
      </div>

      {/* Menu */}
      <div>
        {!mobileMenu ? (
          <Bars3Icon
            onClick={openMenu}
            className="h-10 text-white cursor-pointer md:hidden"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
