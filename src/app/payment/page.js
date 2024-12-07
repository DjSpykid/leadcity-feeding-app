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
        {/* Font Awesome spinner */}
        <i className="fas fa-ellipsis-h fa-spin text-indigo-900 text-7xl"></i>
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

