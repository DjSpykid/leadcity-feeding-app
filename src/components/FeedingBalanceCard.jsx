"use client";

function FeedingBalanceCard() {
  return (
    <div className="relative flex items-center justify-center p-6 text-white rounded-lg max-w-sm shadow-lg bg-indigo-900 overflow-hidden">
      {/* Background Shapes */}
      {/* Large Circle */}
      <div className="absolute w-60 h-60 bg-white opacity-10 rounded-full top-7 -left-24"></div>

      {/* Thin Horizontal Line */}
      <div className="absolute w-48 h-4 bg-white opacity-10 rounded-lg top-14 -right-4"></div>

      {/* Medium Circle */}
      <div className="absolute w-44 h-36 bg-white opacity-10 rounded-full bottom-32 right-32"></div>

      {/* Short Rounded Rectangle */}
      <div className="absolute w-40 h-10 bg-white opacity-10 rounded-full -top-4 -right-6"></div>

      {/* Small Rounded Rectangle */}
      <div className="absolute w-36 h-20 bg-white opacity-10 rounded-xl -bottom-10 -right-6"></div>
      {/* Content */}
      <div className="relative text-center">
        <p className="text-xl font-normal opacity-90">Feeding Balance</p>
        <p className="text-4xl font-bold mt-3">₦36,250.00</p>
      </div>
    </div>
  );
}

export default FeedingBalanceCard;