import "./styles.css";
import Nav from "./Nav";
import Home from "./component/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartComponent from "./CartComponent";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/cart" exact component={CartComponent} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
