import React, { useContext } from "react";

import "./Nav.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ProductContext } from "./ProductContext";

export default function Nav() {
  const [list, setList, cartList] = useContext(ProductContext);

  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <ShoppingBasketIcon style={{ color: "white" }} />
        <h3>Demo Shop</h3>
      </div>
      <div className="Navbar__Categories">
        <button>Men's Clothing</button>
        <button>Jewelery</button>
        <button>Electronics</button>
        <button>Women's Clothing</button>
      </div>
      <div className="Navbar__Cart">
        <label>{cartList.length}</label>

        <ShoppingCartIcon style={{ color: "whitesmoke" }} />
      </div>
    </div>
  );
}
