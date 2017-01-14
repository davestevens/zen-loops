"use strict";

import Tile from "./Tile";

class Tiles {
  constructor({ tiles }) {
    this.list = tiles.map(tile => {
      return new Tile({
        name: tile.name,
        top: tile.sides[0],
        right: tile.sides[1],
        bottom: tile.sides[2],
        left: tile.sides[3]
      });
    });
  }

  get list() { return this._list; }
  set list(value) {
    this._list = value.map(tile => new Tile({
      name: tile.name,
      top: tile.sides[0],
      right: tile.sides[1],
      bottom: tile.sides[2],
      left: tile.sides[3]
    }));
  }

  // TODO: memoize this?
  all() {
    let all = [];
    this.list.forEach(tile => {
      for (var i = 0; i < tile.sides.length; ++i) {
        const clonedTile = tile.clone();
        clonedTile.rotation = i;
        all.push(clonedTile);
      }
    });
    return all;
  }
}

export default Tiles;
