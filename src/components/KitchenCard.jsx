import React from "react";
import kitchenLogo from "../images/restaurant.png";
import Image from "next/image";

function KitchenCard({ name, onClick }) {
  return (
    <div
      onClick={() => onClick(name)}
      className="flex font-serif flex-col items-center justify-center p-5 mb-4 bg-gray-100 rounded-lg shadow-md max-w-xs cursor-pointer"
    >
      <div className="mb-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 bg-white">
          <Image
            src={kitchenLogo}
            alt="Food Restaurant Icon"
            className="w-10 h-10 -mt-1"
          />
        </div>
        
      </div>
      <p className="text-sm font-sans font-medium">{name}</p>
    </div>
  );
}

export default KitchenCard;
