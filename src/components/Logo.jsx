import React from 'react';
import lcuLogo from "../images/lcu-logo.png";
import Image from 'next/image';

function Logo() {
  return (
    <div>
      {/* Logo Container */}
      <div>
        <Image 
          src={lcuLogo} 
          alt="Logo Image"
          width={80}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default Logo;
