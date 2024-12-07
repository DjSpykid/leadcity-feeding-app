"use client";

import { useSearchParams } from "next/navigation";
import { useRestaurant } from "@/app/context/RestaurantContext";
import Link from "next/link";

export default function Used() {
  const searchParams = useSearchParams();
  const restaurantName = searchParams.get("restaurantName");
  const amount = searchParams.get("amount");
  const transactionDate = searchParams.get("transactionDate");

  const { selectedRestaurant } = useRestaurant();

  return (
    <div className="min-h-screen flex flex-col   bg-indigo-900 text-white p-4">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white text-black p-6 rounded-2xl font-medium shadow-lg w-full max-w-sm space-y-5">
          <h1 className="text-lg font-bold text-center mb-4">
            Transaction Details <span className="text-red-400">(Used)</span>
          </h1>
          <hr className="mb-3 bg-gray-400 " />
          <div className="space-y-4 text-sm">
            <p className="flex flex-col">
              <span className="font-medium">Transaction ID</span>
              <span className="text-gray-700">
                #{Math.random().toString(36).substring(2, 15)}
              </span>
            </p>
            <p className="flex flex-col">
              <span className="font-medium">Transaction Date</span>
              <span className="text-gray-600">
                {transactionDate
                  ? new Date(transactionDate).toLocaleString("en-US", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: false,
                    })
                  : "No date available"}
              </span>
            </p>
            <p className="flex flex-col">
              <span className="font-medium">To</span>
              <span className="text-gray-600 text-lg">
                {restaurantName || selectedRestaurant}
              </span>
            </p>
            <p className="flex flex-col">
              <span className="font-medium">Amount</span>
              <span className="text-indigo-900 font-semibold text-xl">
                ₦{amount ? parseFloat(amount).toFixed(2).toLocaleString() : "0.00"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 space-y-2">
        <Link href={'/history'}>
        <button
          className="w-full py-3 bg-white text-indigo-900 border border-white rounded-full text-center font-medium transition"
          aria-label="Complete Transaction"
        >
          Done
        </button>
        </Link>
        <button
          className="w-full py-3 bg-white text-indigo-900 border border-white rounded-full text-center font-medium transition"
          aria-label="Save Transaction to Phone"
        >
          Save to Phone
        </button>
      </div>
    </div>
  );
}
