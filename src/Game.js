"use strict";

import seedrandom from "seedrandom";
import Grid from "./Grid";
import Tiles from "./Tiles";

const TILES = [
  { name: "empty",    sides: [0, 0, 0, 0] },
  { name: "end",      sides: [1, 0, 0, 0] },
  { name: "corner",   sides: [1, 1, 0, 0] },
  { name: "straight", sides: [1, 0, 1, 0] },
  { name: "fork",     sides: [1, 1, 1, 0] },
  { name: "cross",    sides: [1, 1, 1, 1] }
];

class Game {
  get seed() { return this._seed; }
  set seed(value) {
    this._seed = value;
    this.rng = seedrandom(this.seed);
  }

  get rng() { return this._rng; }
  set rng(value) { this._rng = value; }

  setup(seed) {
    this.seed = seed;
    this.width = Math.floor(this.rng() * 6) + 6;
    this.height = Math.floor(this.rng() * 10) + 6;
    this.grid = new Grid({ width: this.width, height: this.height });
    this.tiles = new Tiles({ tiles: TILES });

    this.grid.fill({ tiles: this.tiles.all(), rng: this.rng });
    this.grid.shuffle({ rng: this.rng });
  }

  rotate(x, y) {
    const space = this.grid.get(x, y);
    const tile = space.value;
    tile.rotation = 1;
  }

  toJSON() {
    return {
      width: this.width,
      height: this.height,
      tiles: this.grid.spaces.map(space => ({
        x: space.x,
        y: space.y,
        kind: space.value.name,
        rotation: space.value.rotation
      }))
    }
  }
}

export default Game;
