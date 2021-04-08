<<<<<<< Codesandbox
import React, { useContext } from "react";
=======
import React from "react";
>>>>>>> GitHub
import "./Nav.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ProductContext } from "./ProductContext";
<<<<<<< Codesandbox
export default function Nav() {
  const [List, setList] = useContext(ProductContext);

=======
import { useContext } from "react";
export default function Nav() {
  const [list] = useContext(ProductContext);
>>>>>>> GitHub
  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <ShoppingBasketIcon style={{ color: "white" }} />
        <h3>Demo Shop</h3>
      </div>
      <div className="Navbar__Categories">
<<<<<<< Codesandbox
        <span>Men's Clothing</span>
        <span>Jewelery</span>
        <span>Electronics</span>
        <span>Women's Clothing</span>
=======
        <button>Men's Clothing</button>
        <button>Jewelery</button>
        <button>Electronics</button>
        <button>Women's Clothing</button>
>>>>>>> GitHub
      </div>
      <div className="Navbar__Cart">
<<<<<<< Codesandbox
        <label>{List.length}</label>
=======
        <label>{list.length}</label>
>>>>>>> GitHub

        <ShoppingCartIcon style={{ color: "whitesmoke" }} />
      </div>
    </div>
  );
}
