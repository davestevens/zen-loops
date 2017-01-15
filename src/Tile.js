"use strict";

class Tile {
  constructor({ name, top, right, bottom, left, sides, rotation = 0 }) {
    this.name = name;
    this.sides = sides || [top, right, bottom, left];
    this.rotation = rotation;
  }

  get name() { return this._name; }
  set name(value) { this._name = value; }

  get rotation() { return this._rotation || 0; }
  set rotation(value) {
    const absMod = (value) => {
      const max = this.sides.length;
      return ((value % max) + max) % max;
    }
    this._rotation = absMod(this.rotation + value);
    this.top = this.sides[ absMod(0 - this.rotation) ];
    this.right = this.sides[ absMod(1 - this.rotation) ];
    this.bottom = this.sides[ absMod(2 - this.rotation) ];
    this.left = this.sides[ absMod(3 - this.rotation) ];
  }

  get top() { return this._top; }
  set top(value) { this._top = value; }

  get right() { return this._right; }
  set right(value) { this._right = value; }

  get bottom() { return this._bottom; }
  set bottom(value) { this._bottom = value; }

  get left() { return this._left; }
  set left(value) { this._left = value; }

  clone() {
    return new Tile({
      name: this.name,
      sides: this.sides,
      rotation: this.rotation
    });
  }
}

export default Tile;
