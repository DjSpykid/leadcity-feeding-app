"use client";

function FeedingBalanceCard() {
  return (
    <div className="relative flex items-center justify-center p-6 text-white rounded-lg max-w-sm shadow-lg bg-indigo-900 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute w-52 h-48 bg-white opacity-10 rounded-full top-2 -left-20"></div>
      <div className="absolute w-40 h-40 bg-white opacity-10 rounded-lg bottom-20 -right-9"></div>
      <div className="absolute w-40 h-48 bg-white opacity-10 rounded-full bottom-20 right-32"></div>
      <div className="absolute w-40 h-5 bg-white opacity-10 rounded-full top-12 -right-6"></div>
      <div className="absolute w-20 h-20 bg-white opacity-10 rounded-lg -bottom-10 -right-5"></div>

      {/* Content */}
      <div className="relative text-center">
        <p className="text-lg font-medium opacity-100">Feeding Balance</p>
        <p className="text-3xl font-bold mt-2">₦36,750.00</p>
      </div>
    </div>
  );
}

export default FeedingBalanceCard;
