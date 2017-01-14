"use strict";

import React, { PropTypes } from "react";
import Tile from "./Tile.jsx";
import "./Space.scss";

const Space = ({ size, tile, x, y }) => (
  <div className="space"
       style={ { top: size * y, left: size * x, width: size, height: size } }>
    <Tile { ...tile } />
  </div>
);

Space.propTypes = {
  size: PropTypes.number.isRequired,
  tile: PropTypes.object.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default Space;
