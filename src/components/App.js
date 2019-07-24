import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./layout/navbar";
import Register from "./auth/register";
import SignIn from "./auth/login";
import HomePage from "../pages/homepage/HomePage";
import setAuthToken from "../utils/setAuthToken";
import Alert from "./layout/alert";
import ProductPage from "../pages/productpage/ProductPage";
import Cart from "../pages/cart/Cart";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <div>
      <Navbar />
      <Alert />
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={SignIn} />
          <Route path="/product/:id" exact component={ProductPage} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
