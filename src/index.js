import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ProductList } from "./ProductContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ProductList>
      <App />
    </ProductList>
  </StrictMode>,
  rootElement
);
