"use strict";

import shuffleArray from "./lib/shuffleArray";
import calculatePossibleTiles from "./lib/calculatePossibleTiles";
import randomFromArray from "./lib/randomFromArray";
import correctTile from "./lib/correctTile";
import surroundingSpaces, { OUT_OF_BOUNDS } from "./lib/surroundingSpaces";

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
      const surrounding = this.surroundingSpaces(space);
      const possibilities = calculatePossibleTiles({ all: tiles, surrounding });
      const tile = randomFromArray(possibilities, rng);

      this.set(space.x, space.y, tile.clone());
    }
  }

  shuffle({ rng }) {
    this.spaces.forEach(space => {
      if (!space.value) return;
      const tile = space.value;
      tile.rotation = Math.floor(rng() * tile.sides.length);
    });
  }

  get completed() {
    return this.spaces.reduce((memo, space) => {
      const surrounding = this.surroundingSpaces(space);
      return memo && correctTile({ tile: space.value, surrounding });
    }, true);
  }

  surroundingSpaces({ x, y }) {
    return surroundingSpaces({ x, y, get: this.get.bind(this) });
  }
}

export default Grid;
