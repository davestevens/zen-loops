"use strict";

import { NEW_GAME, ROTATE_TILE } from "../actions/game";
import Game from "../../src/Game";

const defaultState = {
  inProgress: false
};

const game = new Game();

const newGame = (seed) => {
  game.setup(seed);
  return Object.assign({ inProgress: true }, game.toJSON());
}

const rotateTile = (x, y, direction) => {
  game.rotate(x, y, direction);
  return Object.assign({ inProgress: true }, game.toJSON());
}

export default (state = defaultState, action) => {
  switch(action.type) {
  case NEW_GAME:
    return newGame(action.seed);
  case ROTATE_TILE:
    return rotateTile(action.x, action.y, action.direction);
  default:
    return state;
  }
}
