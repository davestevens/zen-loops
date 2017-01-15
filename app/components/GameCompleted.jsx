"use strict";

import React from "react";
import NewGame from "./NewGame.jsx";

const GameCompleted = () => (
  <div className="gamecompleted">
    <div className="gamecompleted__inner">
      Completed
      <br/>
      <NewGame />
    </div>
  </div>
);

export default GameCompleted;
