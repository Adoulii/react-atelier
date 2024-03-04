import React from "react";
import { useSelector } from "react-redux";
import { selectWishlistItems } from "../redux/slices/whishlistSlice";
import { Link } from "react-router-dom";
function WhishListItems() {
  const wishlistItems = useSelector(selectWishlistItems);

  return (
    <div>
      <h1>Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlistItems.map((item) => (
            <li key={item.id}>
              <Link to={`/event/${item.name}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WhishListItems;
