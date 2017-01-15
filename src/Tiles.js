"use strict";

import Tile from "./Tile";

class Tiles {
  constructor({ tiles, tileClass = Tile }) {
    this.tileClass = tileClass;
    this.list = tiles;
  }

  get list() { return this._list; }
  set list(value) {
    this._list = value.map(tile => new this.tileClass({
      name: tile.name,
      sides: tile.sides
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
