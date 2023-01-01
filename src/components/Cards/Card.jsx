import React from "react";
import {Link} from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`./Product/${item.id}`}>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={item.image} alt="Product Image" />
        <img class="w-full" src={item.image2} alt="Product Image" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{item.name}</div>
          <p class="text-gray-700 text-base">{item.discription}</p>
        </div>
        <div class="px-6 py-4 flex justify-between items-center">
          <span class="text-gray-700 font-bold">{item.price}</span>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
