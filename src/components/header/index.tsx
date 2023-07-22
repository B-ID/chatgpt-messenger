"use client";
import { useSidebar } from "@/contexts/sidebar-context";
import { Bars3Icon } from "@heroicons/react/24/solid";
import React, { FC } from "react";

type Props = {};

const Header: FC<Props> = (props) => {
  const { closeMenu, openMenu, mobileMenu } = useSidebar();
  return (
    <div className="sticky top-0 z-30 flex items-center justify-between px-2 py-3 shadow md:z-40 backdrop-blur">
      <div className="text-3xl text-white">Logo</div>

      {/* Menu */}
      <div>
        {!mobileMenu ? (
          <Bars3Icon onClick={openMenu} className="h-10 text-white md:hidden" />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
