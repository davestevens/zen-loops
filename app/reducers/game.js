"use strict";

import seedrandom from "seedrandom";
import { NEW_GAME, ROTATE_TILE } from "../actions/game";
import Grid from "../../src/Grid";
import Tiles from "../../src/Tiles";

const defaultState = {
  inProgress: false
};

const TILES = [
  { name: "empty",    sides: [0, 0, 0, 0] },
  { name: "end",      sides: [1, 0, 0, 0] },
  { name: "corner",   sides: [1, 1, 0, 0] },
  { name: "straight", sides: [1, 0, 1, 0] },
  { name: "fork",     sides: [1, 1, 1, 0] },
  { name: "cross",    sides: [1, 1, 1, 1] }
];
const WIDTH = 4;
const HEIGHT = 4;

const newGame = (seed) => {
  const rng = seedrandom(seed);
  const grid = new Grid({ width: WIDTH, height: HEIGHT });
  const tiles = new Tiles({ tiles: TILES });

  grid.fill({ tiles: tiles.all(), rng: rng });
  grid.shuffle({ rng });

  return {
    inProgress: true,
    width: WIDTH,
    height: HEIGHT,
    grid: grid,
    spaces: grid.spaces.map(space => ({
      x: space.x,
      y: space.y,
      tile: {
        kind: space.value.name,
        rotation: space.value.rotation
      }
    }))
  }
}

const rotateTile = (x, y, grid) => {
  const space = grid.get(x, y);
  space.value.rotation = 1;

  return {
    inProgress: true,
    width: WIDTH,
    height: HEIGHT,
    grid: grid,
    spaces: grid.spaces.map(space => ({
      x: space.x,
      y: space.y,
      tile: {
        kind: space.value.name,
        rotation: space.value.rotation
      }
    }))
  }
}

const game = (state = defaultState, action) => {
  switch(action.type) {
  case NEW_GAME:
    return newGame(action.seed);
  case ROTATE_TILE:
    return rotateTile(action.x, action.y, state.grid);
  default:
    return state;
  }
}

export default game;
