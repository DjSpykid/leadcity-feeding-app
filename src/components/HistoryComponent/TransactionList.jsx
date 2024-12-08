"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import kitchenLogo from "../../images/restaurant.png";
import { useRestaurant } from "../../app/context/RestaurantContext";

const TransactionsList = () => {
  const {
    transactions,
    setTransactions,
    transactionIndex,
    loadMoreTransactions,
    setSelectedRestaurant,
  } = useRestaurant();
  const router = useRouter();

  const handleTransactionClick = (transaction) => {
    const { restaurantName, amount, transactionDate } = transaction;
    setSelectedRestaurant(restaurantName);

    router.push(
      `/used?restaurantName=${encodeURIComponent(restaurantName)}&amount=${encodeURIComponent(amount)}&transactionDate=${encodeURIComponent(transactionDate)}`
    );
  };

  const deleteTransaction = (transactionToDelete) => {
    const updatedTransactions = transactions.filter(
      (t) =>
        !(
          t.restaurantName === transactionToDelete.restaurantName &&
          t.transactionDate === transactionToDelete.transactionDate &&
          t.amount === transactionToDelete.amount
        )
    );
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  };

  const uniqueTransactions = Array.from(
    new Map(
      transactions.map((t) => [`${t.restaurantName}-${t.transactionDate}`, t])
    ).values()
  ).reverse();

  return (
    <div className="min-h-screen -p-3 mx-2 bg-white">
      <div className="max-w-xl mx-auto p-1 space-y-3">
        {uniqueTransactions.slice(0, transactionIndex).map((transaction, index) => (
          <div
            key={index}
            className="relative group flex items-center justify-between rounded-lg bg-gray-100 p-3 transition-transform duration-300 hover:bg-gray-200"
          >
            {/* Delete Button */}
            <div
              className="absolute right-0 bottom-0 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 cursor-pointer"
              onClick={() => deleteTransaction(transaction)}
            >
              <span className="text-sm text-white">X</span>
            </div>

            {/* Transaction Info */}
            <div
              className="flex items-center gap-3 w-full"
              onClick={() => handleTransactionClick(transaction)}
            >
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                <Image
                  src={kitchenLogo}
                  alt="Food Restaurant Icon"
                  className="w-11 h-11"
                />
              </div>
              <div>
                <h2 className="font-medium font-sans">{transaction.restaurantName}</h2>
                <p className="text-sm text-gray-600">
                  {transaction.transactionDate
                    ? new Date(transaction.transactionDate).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: false,
                      })
                    : "No date yet"}
                </p>
              </div>
            </div>
            <div className="text-lg font-bold text-indigo-900">
              ₦{transaction.amount || "0"}
            </div>
          </div>
        ))}

        {transactionIndex < uniqueTransactions.length && (
          <button
            onClick={loadMoreTransactions}
            className="w-full py-5 text-white border border-idigo-800 bg-indigo-900 rounded-full text-center font-medium transition"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default TransactionsList;
