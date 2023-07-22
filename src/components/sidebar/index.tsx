"use client";

import React, { FC } from "react";
import NewChat from "../new-chat";
import { useSidebar } from "@/contexts/sidebar-context";
import clsx from "clsx";
import Image from "next/image";
import logo from "../../../public/chatgpt-logo.png";
import { XCircleIcon } from "@heroicons/react/24/solid";

type Props = {};

const SideBar: FC<Props> = (props) => {
  const { mobileMenu, closeMenu } = useSidebar();
  return (
    <div
      className={clsx(
        "flex flex-col absolute z-40 scrollbar-hide w-[80vw] overflow-y-scroll md:w-[20rem] md:relative md:translate-x-0 transition duration-300 h-screen p-2 bg-[#202123]",
        mobileMenu ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex-1">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-10 h-10">
            <Image src={logo.src} alt="logo" fill />
          </div>

          {/* Sidebar Close button */}
        <XCircleIcon onClick={closeMenu} className="h-10 cursor-pointer hover:fill-green-400 md:hidden fill-gray-400" />
        </div>

        <div>
          {/* New Chat */}
          <NewChat />

          <div>{/* Model Selection */}</div>

          {/* Map through the chat rows */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
