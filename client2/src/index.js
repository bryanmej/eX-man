import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
