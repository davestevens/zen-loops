"use strict";

class Tile {
  constructor({ name, sides, rotation = 0 }) {
    this.name = name;
    this.sides = sides;
    this._rotation = rotation;
  }

  get name() { return this._name; }
  set name(value) { this._name = value; }

  get sides() { return this._sides; }
  set sides(value) { this._sides = value; }

  get rotation() { return this._rotation || 0; }
  set rotation(value) {
    const absMod = (value) => {
      const max = this.sides.length;
      return ((value % max) + max) % max;
    }
    const rotationBefore = this.rotation;
    this._rotation = absMod(this.rotation + value);
    const rotationAfter = this.rotation;
    // TODO: do this before the absolute?
    const rotationDiff = rotationAfter - rotationBefore;
    const start = this.sides.slice(-rotationDiff);
    const end = this.sides.slice(0, this.sides.length - start.length);
    this.sides = start.concat(end);
  }

  clone() {
    return new Tile({
      name: this.name,
      sides: this.sides,
      rotation: this.rotation
    });
  }
}

export default Tile;
