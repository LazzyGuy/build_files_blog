import React from "react";
import ReactDOM from "react-dom";
import Root from "./pages/Root";
import * as serviceWorker from "./serviceWorker";
import "./styles/global.css";
import "./styles/types";

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
