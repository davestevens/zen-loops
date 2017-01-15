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
  return sides.reduce((memo, side, index) => {
    return memo && possibleSide(side, tile.sides[index]);
  }, true);
}

export default possibleTile;
