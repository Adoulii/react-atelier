import React from "react";
import { useSelector } from "react-redux";
import { selectWishlistItems } from "../redux/slices/whishlistSlice";
import { Link } from "react-router-dom";

function WhishListItems() {
  const wishlistItems = useSelector(selectWishlistItems);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((item) => (
            <li key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <Link to={`/event/${item.id}`}>
                <img
                  src={`images/${item.img}`}
                  alt={`Event: ${item.name}`}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <Link to={`/event/${item.id}`} className="text-xl font-semibold text-blue-600 hover:underline mb-2 block">
                  {item.name}
                </Link>
                <p className="text-gray-700">${item.price}</p>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WhishListItems;
