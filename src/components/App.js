import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./layout/navbar";
import Register from "./auth/register";
import SignIn from "./auth/login";
import HomePage from "../pages/homepage/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={SignIn} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
