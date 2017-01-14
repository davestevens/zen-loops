"use strict";

class Tile {
  constructor({ name, top, right, bottom, left }) {
    this.name = name;
    this.sides = [top, right, bottom, left];
    this.rotation = 0;
  }

  get name() { return this._name; }
  set name(value) { this._name = value; }

  get rotation() { return this._rotation; }
  set rotation(value) {
    this._rotation = (this._rotation || 0) + value;
    const side = (current) => (((current - this.rotation) % 4) + 4) % 4;
    this.top = this.sides[ side(0) ];
    this.right = this.sides[ side(1) ];
    this.bottom = this.sides[ side(2) ];
    this.left = this.sides[ side(3) ];
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
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      left: this.left
    });
  }
}

export default Tile;
