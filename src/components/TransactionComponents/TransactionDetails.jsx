"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import OkayButton from "../OkayButton";
import { useRestaurant } from "@/app/context/RestaurantContext";

export default function TransactionDetails() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const transactionDate = searchParams.get("transactionDate");
  const { selectedRestaurant, addTransaction } = useRestaurant();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [transactionAdded, setTransactionAdded] = useState(false);

  useEffect(() => {
    if (amount && transactionDate && selectedRestaurant && !transactionAdded) {
      const parsedAmount = parseFloat(amount);
      const parsedDate = new Date(transactionDate);

      if (isNaN(parsedAmount) || isNaN(parsedDate.getTime())) {
        setError("Invalid amount or transaction date.");
        return;
      }

      addTransaction({
        amount: parsedAmount.toFixed(2),
        transactionDate: parsedDate.toISOString(),
        restaurantName: selectedRestaurant,
      });

      setTransactionAdded(true);
    }
  }, [amount, transactionDate, selectedRestaurant, addTransaction, transactionAdded]);

  const handleValidate = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!amount || !transactionDate || !selectedRestaurant) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-900 text-white">
        <p className="text-xl font-medium">Transaction details are incomplete.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-indigo-900 text-white p-4">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white text-black p-6 rounded-2xl font-medium shadow-lg w-full max-w-sm">
          <h1 className="text-xl font-medium text-center mb-6">Transaction Details</h1>
          <hr className="mb-4 bg-gray-300" />
          <div className="space-y-3 text-sm">
            <p className="flex flex-col gap-1">
              <span className="font-medium">Transaction ID</span>
              <span className="text-gray-600">#{Math.random().toString(36).substring(2, 15)}</span>
            </p>
            <p className="flex flex-col gap-1">
              <span className="font-medium">Transaction Date</span>
              <span className="text-gray-600">
                {new Date(transactionDate).toLocaleString("en-US", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false,
                })}
              </span>
            </p>
            <p className="flex flex-col gap-1">
              <span className="font-medium">Transaction Status</span>
              <span className="text-green-600 font-medium">Success</span>
            </p>
            <p className="flex flex-col">
              <span className="font-medium">To</span>
              <span className="text-gray-600 text-xl">{selectedRestaurant}</span>
            </p>
            <p className="flex flex-col">
              <span className="font-medium">Amount</span>
              <span className="text-indigo-900 font-bold text-xl">₦{parseFloat(amount).toFixed(2).toLocaleString()}</span>
            </p>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
      <div className="w-full">
        <button
          onClick={handleValidate}
          className="w-full py-3 mb-8 bg-white text-purple-700 border border-white rounded-full text-center font-medium transition"
        >
          Validate
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-xl">
            <h2 className="text-lg font-semibold text-black">Success</h2>
            <p className="text-black text-base">The transaction receipt is valid.</p>
            <hr className="w-full mt-2 bg-gray-200" />
            <OkayButton closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}
