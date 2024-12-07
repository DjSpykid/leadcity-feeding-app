'use client';
import React, { Suspense, useState } from "react";
import ProceedToPay from "@/components/paymentComponent/ProceedToPay";
import Cancelicon from "@/components/paymentComponent/Cancelicon";
import '@fortawesome/fontawesome-free/css/all.min.css';



function ScanQRCode({ onClose }) {
  const [slideClass, setSlideClass] = useState("slide-up");

  const handleClose = () => {
    setSlideClass("slide-down");
    setTimeout(onClose, 500); // Wait for the animation to complete
  };

  return (
    <Suspense
    fallback={
      <div className="flex justify-center items-center h-screen">
      {/* Horizontal moving Font Awesome spinner */}
      <div className="flex space-x-4">
        <i className="fas fa-circle text-indigo-700 text-2xl animate-horizontal-move"></i>
        <i className="fas fa-circle text-indigo-700 text-2xl animate-horizontal-move [animation-delay:200ms]"></i>
        <i className="fas fa-circle text-indigo-700 text-2xl animate-horizontal-move [animation-delay:400ms]"></i>
      </div>
    </div>
    }
    >

    <div
      className={`fixed inset-0 flex flex-col justify-center items-center bg-white shadow-lg transition-transform transform ${slideClass}`}
    >
      {/* Cancel Button */}
      <div className="absolute top-5 left-5">
        <Cancelicon onClick={handleClose} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center w-full">
        <ProceedToPay />
      </div>
      
    </div>
          
    </Suspense>
  );
}

export default ScanQRCode;

