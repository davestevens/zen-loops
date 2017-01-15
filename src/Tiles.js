"use strict";

import Tile from "./Tile";
import _ from "lodash";

class Tiles {
  constructor({ tiles }) {
    this.list = tiles;
  }

  get list() { return this._list; }
  set list(value) {
    this._list = value.map(tile => new Tile({
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
    return _.uniqWith(all, (a, b) => _.isEqual(a.sides, b.sides));
  }
}

export default Tiles;
