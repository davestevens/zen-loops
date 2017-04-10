"use strict";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./stores/configureStore";
import App from "./containers/App.jsx";
import "./manifest.json";
import * as OfflinePluginRuntime from "offline-plugin/runtime";
OfflinePluginRuntime.install();

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById("root")
);
