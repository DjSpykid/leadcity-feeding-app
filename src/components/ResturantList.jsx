"use client";

import React from "react";
import { useRouter } from "next/navigation";
import KitchenCard from "./KitchenCard";
import { useRestaurant } from "@/app/context/RestaurantContext";


function ResturantList() {
  const router = useRouter();
  const { selectedRestaurant, setSelectedRestaurant } = useRestaurant();

  const Restaurants = [
    { id: 1, name: "Your Choice Kitchen" },
    { id: 2, name: "Tasty Vine Kitchen" },
    { id: 3, name: "Cresta" },
    { id: 4, name: "Marigold Kitchen" },
    { id: 5, name: "Tasty Delight" },
    { id: 6, name: "Burger & Bread" },
    { id: 7, name: "Main Royal Cafeteria" },
    { id: 8, name: "Citrus Food" },
  ];

  const handleCardClick = (name) => {
    setSelectedRestaurant(name); // Update the context
    router.push(`/payment?restaurant=${encodeURIComponent(name)}`);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-6 bg-gray-50">
        {Restaurants.map((restaurant) => (
          <KitchenCard
            key={restaurant.id}
            name={restaurant.name}
            onClick={() => handleCardClick(restaurant.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default ResturantList;
