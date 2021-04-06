import "./styles.css";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import ProductsView from "./ProductsView";
import { ProductList } from "./ProductContext";
export default function App() {
  return (
    <ProductList>
      <div className="App">
        <Nav />
        <div className="main-content">
          <Sidebar />
          <ProductsView />
        </div>
      </div>
    </ProductList>
  );
}
