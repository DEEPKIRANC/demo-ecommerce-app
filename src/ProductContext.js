import React, { useEffect, useState, createContext, useReducer } from "react";
import axios from "axios";
import "./loading.css";
export const ProductContext = createContext();

export const ACTIONS = {
  UPDATE_CART: "update-cart"
};

const reducer = (cartlist, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_CART:
      return [
        ...cartlist,
        action.List.filter((item) => item.id === action.id).map((item) => ({
          ...item,
          inCart: true,
          quantity: item.quantity + 1
        }))
      ];

    default:
      return cartlist;
  }
};

export function ProductList(props) {
  const [list, setList] = useState([]);
  const [cartlist, dispatch] = useReducer(reducer, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then(function (res) {
          let list = res.data;
          list.map((obj) => ({ ...obj, inCart: false, quantity: 0 }));
          setList(list);
          console.log(list.length);
        })
        .then(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <ProductContext.Provider value={[list, cartlist, dispatch]}>
      {props.children}
    </ProductContext.Provider>
  );
}
