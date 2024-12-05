'use client';

import Image from "next/image";
import React from "react";
import gridIcon from "../images/layout.png";
import userIcon from "../images/user.png";
import { AiOutlineInbox } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname(); 

  const isActive = (path) => pathname === path;   
  return (
    <div className="fixed bottom-0 z-50 flex items-center justify-between gap-4 px-6 py-3 w-full max-w-6xl mx-auto bg-white border-t-2 border-gray-200">
      {/* Home Icon */}
      <div
        className={`flex items-center cursor-pointer justify-center w-10 h-10 p-1 border-4 rounded-full ${
          isActive("/") ? "bg-purple-200" : "bg-gray-100"
        }`}
      >
        <Link href={"/"}>
          <Image src={gridIcon} alt="User Icon" className={`w-5 h-5 `}/>
        </Link>
      </div>
       <div
        className={`flex items-center cursor-pointer justify-center w-10 h-10 p-1 border-4 rounded-full ${
          isActive("/history") ? "bg-purple-200" : "bg-gray-100"
        }`}
      >
        <Link href={"/history"}>
        <AiOutlineInbox className="w-7 h-7" />
        </Link>
      </div>
      

      {/* Profile Icon */}
      <div
        className={`flex items-center cursor-pointer justify-center w-10 h-10 p-1 border-4 rounded-full ${
          isActive("/profile") ? "bg-purple-200" : "bg-gray-100"
        }`}
      >
        <Link href={"/profile"}>
          <Image src={userIcon} alt="User Icon" className={`w-6 h-6 `}/>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
