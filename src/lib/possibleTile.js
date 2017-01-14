"use strict";

import { AVAILABLE, BLOCKED, REQUIRED } from "./calculateSides";

const possibleSide = (side, tile) => {
  switch(side) {
  case AVAILABLE:
    return true;
  case BLOCKED:
    return (tile != 1);
  case REQUIRED:
    return (tile != 0);
  default:
    return false;
  }
}

const possibleTile = ({ sides, tile }) => {
  return possibleSide(sides.top, tile.top)
    && possibleSide(sides.right, tile.right)
    && possibleSide(sides.bottom, tile.bottom)
    && possibleSide(sides.left, tile.left);
}

export default possibleTile;
