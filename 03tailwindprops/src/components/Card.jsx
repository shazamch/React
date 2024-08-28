import React, { useState } from "react";
import { HeartIcon as HeartIconOutline, HeartIcon as HeartIconSolid } from '@heroicons/react/24/outline';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

function Card(props) {

  // State to track if the meal is a favorite
  const [isFavorite, setIsFavorite] = useState(false);
  // Toggle favorite status
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // State to track if the meal is a favorite
  const [inCart, setInCart] = useState(false);
  // Toggle favorite status
  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <div className="relative h-[400px] w-[300px] rounded-md shadow-lg overflow-hidden">
      <img
        src={props.imgPath}
        alt={props.name}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleFavorite}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none">
          {isFavorite ? (
            <HeartIconSolid className="h-6 w-6 text-red-500" />
          ) : (
            <HeartIconOutline className="h-6 w-6 text-gray-300" />
          )}
        </button>
      </div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{props.name}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {props.desText}
        </p>
        <button
        onClick={toggleCart}
          className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-blue-500 p-2 rounded-full hover:bg-blue-600">
          {inCart ? (
            <ShoppingCartIcon className="h-6 w-6 text-red-500" />
          ) : (
            <ShoppingCartIcon className="h-6 w-6 text-gray-300" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Card;
