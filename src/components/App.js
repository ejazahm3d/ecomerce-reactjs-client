import React from "react";
import { Typography } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Typography variant="h1">Hello World</Typography>;
    </div>
  );
}

export default App;
