import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(application, document.getElementById("root"));
serviceWorker.register('production');
