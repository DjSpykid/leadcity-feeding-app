import React from 'react';
import Logo from "@/components/Logo";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex flex-row items-center p-3 mx-full  max-w-6xl bg-white border-b-0 w-full border-gray-100 ">
      {/* Logo */}
      <div className="-ml-7 flex-shrink-0">
        <Logo />
      </div>

      {/* Text */}
      <p className="text-2xl font-sans font-medium text-black text-center -ml-2">
        SpyKid FRONTEND
      </p>
    </div>
  );
}

export default Header;
