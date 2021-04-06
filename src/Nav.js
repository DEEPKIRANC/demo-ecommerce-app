import React from "react";
import "./Nav.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
export default function Nav() {
  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <ShoppingBasketIcon style={{ color: "white" }} />
        <h3>Demo Shop</h3>
      </div>
      <div className="Navbar__Categories">
        <span>Men's Clothing</span>
        <span>Jewelery</span>
        <span>Electronics</span>
        <span>Women's Clothing</span>
      </div>
      <div className="Navbar__Cart">
        <label>0</label>

        <ShoppingCartIcon style={{ color: "whitesmoke" }} />
      </div>
    </div>
  );
}
