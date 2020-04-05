import "babel-polyfill";
import "./baseStyles/index.scss";
import "./fonts/sultan-nahia.ttf";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(<App />, document.getElementById("app"));
