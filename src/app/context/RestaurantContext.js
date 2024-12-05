"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid

const RestaurantContext = createContext();

export const useRestaurant = () => {
  return useContext(RestaurantContext);
};

export const RestaurantProvider = ({ children }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState("Default Restaurant");
  const [transactions, setTransactions] = useState([]);
  const [transactionIndex, setTransactionIndex] = useState(15);
  const transactionsPerPage = 5;

  // Fetch data from localStorage on mount
  useEffect(() => {
    const savedRestaurant = localStorage.getItem("selectedRestaurant");
    if (savedRestaurant) setSelectedRestaurant(savedRestaurant);

    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      const parsedTransactions = JSON.parse(savedTransactions);

      // Ensure all transactions have valid fields
      const sanitizedTransactions = parsedTransactions.map((t) => ({
        ...t,
        restaurantName: t.restaurantName || "Unknown Restaurant",
        transactionDate: t.transactionDate || new Date().toISOString(),
        amount: t.amount || 0,
      }));

      setTransactions(sanitizedTransactions);
    }
  }, []);

  // Sync selected restaurant to localStorage
  useEffect(() => {
    localStorage.setItem("selectedRestaurant", selectedRestaurant);
  }, [selectedRestaurant]);

  // Sync transactions to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Function to add a new transaction
  const addTransaction = (transaction) => {
    const sanitizedTransaction = {
      ...transaction,
      restaurantName: transaction.restaurantName || selectedRestaurant,
      transactionDate: transaction.transactionDate || new Date().toISOString(),
      amount: transaction.amount || 0,
      transactionId: uuidv4(), // Generate a unique ID using uuid
    };

    setTransactions((prev) => {
      const updatedTransactions = [...prev, sanitizedTransaction];
      localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
      return updatedTransactions;
    });
  };

  
  // Load more transactions
  const loadMoreTransactions = () => {
    setTransactionIndex((prev) => Math.min(prev + transactionsPerPage, transactions.length));
  };

  return (
    <RestaurantContext.Provider
      value={{
        selectedRestaurant,
        setSelectedRestaurant,
        transactions,
        setTransactions,
        loadMoreTransactions,
        transactionIndex,
        addTransaction,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
