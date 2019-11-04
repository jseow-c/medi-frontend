import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./main.css";
import ScreensRoot from "./screens/ScreensRoot";
// import UIWebex from "./components/UI/Webex";
import * as serviceWorker from "./serviceWorker";
import StoreProvider from "./context";

require("dotenv").config();

ReactDOM.render(
  <StoreProvider>
    <Router>
      <ScreensRoot />
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
