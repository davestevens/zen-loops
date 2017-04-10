"use strict";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./stores/configureStore";
import App from "./containers/App.jsx";
import "offline-plugin/runtime";
import "./manifest.json";

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById("root")
);
