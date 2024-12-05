import Image from 'next/image';
import React from 'react';
import Logo from '../../images/lcu-logo.png';

function ProfileHeader() {
  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-6xl mx-auto bg-white rounded-lg ">
      {/* Logo */}
      <Image src={Logo} alt="Leadcity Logo" className="w-36 mb-2" />
      
      {/* Name */}
      <h1 className="text-xl font-sans font-medium text-black">SpyKid FRONTEND</h1>
      
      {/* ID */}
      <h2 className="text-lg font-sans text-gray-600">LCU/UG/23/22245</h2>
      
      {/* Sign Out */}
      <button className="font-sans font-medium mt-2  text-purple-900  hover:bg-purple-600 transition duration-300">
        Sign Out
      </button>
    </div>
  );
}

export default ProfileHeader;
