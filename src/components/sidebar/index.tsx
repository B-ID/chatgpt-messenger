import React, { FC } from "react";
import NewChat from "../new-chat";

type Props = {};

const SideBar: FC<Props> = (props) => {
  return (
    <div className="flex flex-col h-screen p-2 bg-[#202123]">
      <div className="flex-1">
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
