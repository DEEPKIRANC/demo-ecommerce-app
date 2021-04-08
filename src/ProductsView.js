import React, { useContext } from "react";
import "./ProductView.css";
import { ProductContext } from "./ProductContext";
import { ACTIONS } from "./ProductContext";

export default function ProductsView() {
  const [List, setList, cartList, dispatch] = useContext(ProductContext);

  return (
    <div className="mainview">
      <h3>Products</h3>
      <hr />
      <div className="product-card-view">
        {List.map((listItem) => (
          <div className="product-card">
            <img src={listItem.image} alt="noimage" />
            <div className="product-details">
              <span style={{ fontWeight: "bold" }} key={listItem.id}>
                {listItem.title.substring(0, 15)}...
              </span>
              <span style={{ fontSize: "0.75rem" }}>{listItem.category}</span>
              <span style={{ fontWeight: "bold" }}>
                &#8377; {listItem.price}
              </span>
              <p style={{ color: "#05fc47" }}>In Stock</p>
              <button
                onClick={() =>
                  dispatch({ type: ACTIONS.UPDATE_CART, List, id: listItem.id })
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
