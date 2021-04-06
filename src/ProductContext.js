import React, { useEffect, useState, createContext, useReducer } from "react";
import axios from "axios";
import "./loading.css";
export const ProductContext = createContext();

export function ProductList(props) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then(function (res) {
          let list = res.data;
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
    <ProductContext.Provider value={[list, setList]}>
      {props.children}
    </ProductContext.Provider>
  );
}
