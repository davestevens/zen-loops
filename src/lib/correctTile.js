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
  return sides.reduce((memo, side, index) => {
    return memo && correctSide(side, tile.sides[index]);
  }, true);
}

export default correctTile;
