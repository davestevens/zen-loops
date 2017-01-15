"use strict";

export const NEW_GAME = "NEW_GAME";
export const ROTATE_TILE = "ROTATE_TILE";

export const newGame = ({ seed }) => {
  return {
    type: NEW_GAME,
    seed: seed
  }
}

export const rotateTile = (x, y, direction) => {
  return {
    type: ROTATE_TILE,
    x: x,
    y: y,
    direction: direction
  }
}
