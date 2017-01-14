"use strict";

import React from "react";
import { render } from "react-dom";
import Game from "./containers/Game.jsx";

render(
  <div>
    <h1>Zen Loops</h1>
    <Game width={ 8 }
          height={ 8 }
          tileSize={ 40 } />
  </div>,
  document.getElementById("app")
);
