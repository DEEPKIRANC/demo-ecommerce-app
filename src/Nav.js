import React, { useContext } from "react";
import "./Nav.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ProductContext } from "./ProductContext";
import { Link } from "react-router-dom";

export default function Nav() {
  const [list, cartlist, dispatch] = useContext(ProductContext);

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
        <label>{cartlist.length}</label>

        <Link to="/cart">
          <ShoppingCartIcon style={{ color: "whitesmoke" }} />
        </Link>
      </div>
    </div>
  );
}
