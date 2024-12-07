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
    <div className={`fixed bottom-0 z-50 flex items-center  justify-between gap-2  w-full px-4 py-5 max-w-6xl mx-auto bg-white border-t border-gray-200`}>
    <div
      className={`flex items-center justify-center cursor-pointer w-12 h-12 p-1 -border-2 border-gray-100 rounded-full ${
        isActive("/") ? "bg-purple-50" : "bg-gray-50"
      }`}
    >
      <Link href={"/"}>
        <Image src={gridIcon} alt="User Icon" className="w-6 h-6" />
      </Link>
    </div>
  
    <div
      className={`flex items-center justify-center cursor-pointer w-11 h-11 p-1 -border-2 border-gray-100 rounded-full ${
        isActive("/history") ? "bg-purple-50" : "bg-gray-50"
      }`}
    >
      <Link href={"/history"}>
        <AiOutlineInbox className="w-9 h-9" />
      </Link>
    </div>
  
    <div
      className={`flex items-center justify-center cursor-pointer w-11 h-11  -border-2 border-gray-100 rounded-full ${
        isActive("/profile") ? "bg-purple-50" : "bg-gray-50"
      }`}
    >
      <Link href={"/profile"}>
        <Image src={userIcon} alt="User Icon" className="w-8 h-8" />
      </Link>
    </div>
  </div>
  
  );
}

export default Footer;
