"use strict";

import { OUT_OF_BOUNDS } from "./surroundingSpaces";

export const REQUIRED = "REQUIRED";
export const BLOCKED = "BLOCKED";
export const AVAILABLE = "AVAILABLE";

const calculateSide = (side, index) => {
  if ((side == OUT_OF_BOUNDS) || (side && !side.sides[index])) return BLOCKED;
  if (side && side.sides[index]) return REQUIRED;
  return AVAILABLE;
}

const calculateSides = ([ above, right, below, left ]) => {
  return [
    calculateSide(above, 2),
    calculateSide(right, 3),
    calculateSide(below, 0),
    calculateSide(left, 1)
  ];
}
export default calculateSides;
