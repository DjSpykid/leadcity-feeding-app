import React from "react";
import kitchenLogo from "../images/restaurant.png";
import Image from "next/image";

function KitchenCard({ name, onClick }) {
  return (
    <div
      onClick={() => onClick(name)}
      className="flex font-serif flex-col items-center justify-center p-5 mb-3 bg-gray-100 rounded-lg shadow-md max-w-xs cursor-pointer"
    >
      <div className="mb-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-200 bg-white">
          <Image
            src={kitchenLogo}
            alt="Food Restaurant Icon"
            className="w-10 h-10 mt-1"
          />
        </div>
        
      </div>
      <p className="text-base text-gray-900 font-sans font-normal whitespace-nowrap overflow-hidden text-ellipsis">{name}</p>

    </div>
  );
}

export default KitchenCard;
