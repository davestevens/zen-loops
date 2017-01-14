"use strict";

import { OUT_OF_BOUNDS } from "../Grid";

export const REQUIRED = "REQUIRED";
export const BLOCKED = "BLOCKED";
export const AVAILABLE = "AVAILABLE";

const calculateSide = (side, position) => {
  if ((side == OUT_OF_BOUNDS) || (side && !side[position])) return BLOCKED;
  if (side && side[position]) return REQUIRED;
  return AVAILABLE;
}

const calculateSides = ({ above, right, below, left }) => {
  return {
    top: calculateSide(above, "bottom"),
    right: calculateSide(right, "left"),
    bottom: calculateSide(below, "top"),
    left: calculateSide(left, "right")
  };
}
export default calculateSides;
