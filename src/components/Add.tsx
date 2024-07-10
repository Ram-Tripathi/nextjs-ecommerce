"use client";

import { useState } from "react";

function Add() {
  const [quantity, setQuantity] = useState(1);
  const STOCK = 4;
  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }

    if (type === "i" && quantity < STOCK) {
      setQuantity((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quntity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4 ">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:text-gray-300"
              onClick={() => handleQuantity("d")}
              disabled={quantity <= 1}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:text-gray-300"
              onClick={() => handleQuantity("i")}
              disabled={quantity >= STOCK}
            >
              +
            </button>
          </div>
          <div className="text-sm">
            Only <span className="text-orange-500">{STOCK} items</span> left!
            <br /> {"don't"} miss it.
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-primary text-primary py-2 px-4 hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Add;
