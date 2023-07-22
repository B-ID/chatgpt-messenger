"use client";

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  session: Session | null
};

const SessionProvider: FC<Props> = (props) => {
  const { children } = props;
  return <Provider>{children}</Provider>;
};

export default SessionProvider;
