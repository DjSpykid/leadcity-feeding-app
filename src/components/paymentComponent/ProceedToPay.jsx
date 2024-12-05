"use client";

import Link from "next/link";
import { useState } from "react";

function ProceedToPay() {
  const [amount, setAmount] = useState("");

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full px-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <Link href={`/transaction?amount=${amount}&transactionDate=${encodeURIComponent(new Date().toISOString())}`}>
        <button
          className="w-full mt-8 py-3 text-white border border-purple-900 rounded-full text-center font-medium hover:bg-purple-500 hover:text-black hover:border-purple-500 transition duration-200 bg-purple-950"
        >
          Scan QR code
        </button>
      </Link>
    </div>
  );
}

export default ProceedToPay;


