"use strict";

import Tiles from "../src/Tiles";

describe("Tiles", () => {
  it("builds the Tiles passed at construction", () => {
    const TS = [ { name: "example", sides: [0, 1, 2, 3] } ];
    const tiles = new Tiles({ tiles: TS });

    expect(tiles.list).to.have.length(1);
    const tile = tiles.list[0];
    expect(tile.name).to.equal("example");
    expect(tile.sides).to.deep.equal([0, 1, 2, 3]);
  });

  describe("#all", () => {
    it("lists all possible Tile possibilities", () => {
      const TILES = [ { name: "example", sides: [0, 1, 2, 3] } ];
      const tiles = new Tiles({ tiles: TILES });

      const actual = tiles.all();

      expect(actual).to.have.length(4);
      expect(actual[0].rotation).to.equal(0);
      expect(actual[1].rotation).to.equal(1);
      expect(actual[2].rotation).to.equal(2);
      expect(actual[3].rotation).to.equal(3);
    });

    it("filters any Tiles which are similar", () => {
      const TILES = [
        { name: "example", sides: [0, 1, 2, 3] },
        { name: "example-same", sides: [0, 0, 0, 0] }
      ];
      const tiles = new Tiles({ tiles: TILES });

      const actual = tiles.all();

      expect(actual).to.have.length(5);
      expect(actual[0].rotation).to.equal(0);
      expect(actual[1].rotation).to.equal(1);
      expect(actual[2].rotation).to.equal(2);
      expect(actual[3].rotation).to.equal(3);
      expect(actual[4].rotation).to.equal(0);
    });
  });
});
