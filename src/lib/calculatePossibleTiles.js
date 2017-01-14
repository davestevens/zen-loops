"use strict";

import calculateSides from "./calculateSides";
import possibleTile from "./possibleTile";

const calculatePossibleTiles = ({ all, surrounding }) => {
  const sides = calculateSides(surrounding);
  return all.filter(tile => possibleTile({ sides, tile }));
}

export default calculatePossibleTiles;
