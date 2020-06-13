import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import MyContext from "./context/MyContext";

ReactDOM.render(
  <MyContext>
    <App />
  </MyContext>,
  document.getElementById("root")
);

serviceWorker.unregister();
