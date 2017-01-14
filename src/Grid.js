"use strict";

import shuffleArray from "./lib/shuffleArray";
import calculatePossibleTiles from "./lib/calculatePossibleTiles";
import randomFromArray from "./lib/randomFromArray";

export const OUT_OF_BOUNDS = "OUT_OF_BOUNDS";

class Grid {
  constructor({ width, height } = {}) {
    this.spaces = [];
    this.dimensions = { width, height };
  }

  get dimensions() { return { width: this._width, height: this._height } }
  set dimensions({ width, height }) {
    if (!width || !height) throw new Error("Width and Height are required");
    this._width = width;
    this._height = height;

    for (let y = 0; y < this._height; ++y) {
      for (let x = 0; x < this._width; ++x) {
        this.spaces.push({ x: x, y: y, value: null });
      }
    }
  }

  get(x, y) {
    if (this._isOutOfBounds(x, y)) return OUT_OF_BOUNDS;
    return this.spaces[(y * this._width) + x];
  }

  set(x, y, value) {
    if (this._isOutOfBounds(x, y)) return OUT_OF_BOUNDS;
    return this.spaces[(y * this._width) + x].value = value;
  }

  _isOutOfBounds(x, y) {
    return (x < 0) || (x >= this._width) || (y < 0) || (y >= this._height);
  }

  fill({ tiles, rng }) {
    let shuffledSpaces = shuffleArray(this.spaces, rng);

    while(shuffledSpaces.length) {
      const space = shuffledSpaces.shift();
      const surrounding = this._surroundingSpaces(space);
      const possibilities = calculatePossibleTiles({ all: tiles, surrounding });
      this.set(space.x, space.y, randomFromArray(possibilities, rng));
    }
  }

  _surroundingSpaces({ x, y }) {
    return [
      this.get(x,     y - 1),
      this.get(x + 1, y    ),
      this.get(x,     y + 1),
      this.get(x - 1, y    )
    ];
  }
}

export default Grid;
