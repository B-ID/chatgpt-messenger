import React, { FC } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

type Props = {};

const NewChat: FC<Props> = (props) => {
  return (
    <div className="border border-gray-700 chat-row">
      <PlusIcon className="w-4 h-4" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
