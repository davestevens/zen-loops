"use strict";

import calculateSides, { REQUIRED } from "./calculateSides";

const correctSide = (side, tile) => {
  switch(tile) {
  case 1:
    return side == REQUIRED;
  case 0:
    return side != REQUIRED;
  default:
    return false;
  }
}

const correctTile = ({ tile, surrounding }) => {
  const sides = calculateSides(surrounding);
  return correctSide(sides.top, tile.top)
    && correctSide(sides.right, tile.right)
    && correctSide(sides.bottom, tile.bottom)
    && correctSide(sides.left, tile.left);
}

export default correctTile;
