"use strict";

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

    for (var i = 0; i < (this._width * this._height); ++i) {
      this.spaces.push(null);
    }
  }

  get(x, y) {
    if (this._isOutOfBounds(x, y)) return OUT_OF_BOUNDS;
    return this.spaces[(y * this._width) + x];
  }

  set(x, y, value) {
    if (this._isOutOfBounds(x, y)) return OUT_OF_BOUNDS;
    return this.spaces[(y * this._width) + x] = value;
  }

  _isOutOfBounds(x, y) {
    return (x < 0) || (x >= this._width) || (y < 0) || (y >= this._height);
  }

  fill() {
    // TODO: randomly fill with tiles
  }
}

export default Grid;
