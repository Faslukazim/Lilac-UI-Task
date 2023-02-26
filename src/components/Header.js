import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="./images/logo.svg" alt="Brand Logo" />
      </div>
      <div className="classifieds-dropdown">
        <select>
          <option value="abc">Classifieds</option>
          <option value="abc">abc</option>
          <option value="abc">abc</option>
        </select>
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Search here..." />
        <img src="./images/search.svg" alt="Search Icon" />
      </div>
      <div className="wishlist-icon">
        <img src="./images/wishlist.svg" alt="Wishlist Icon" />
      </div>
      <div className="cart-icon">
        <img src="./images/basket.svg" alt="Cart Icon" />
      </div>
      <div className="user-icon">
        <img src="./images/user.svg" alt="User Icon" />
      </div>
      <button className="classifieds-button">Classifieds</button>
    </header>
  );
}

export default Header;
