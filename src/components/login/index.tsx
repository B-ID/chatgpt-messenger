"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React, { FC } from "react";
import logo from "../../../public/chatgpt-logo.png";

type Props = {};

const Login: FC<Props> = (props) => {
  return (
    <div>
      Login
      <div>
        {/* <Image src={logo} alt="logo" fill /> */}
      </div>
    </div>
  );
};

export default Login;
