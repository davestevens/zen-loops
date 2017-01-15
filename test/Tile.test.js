"use strict";

import Tile from "../src/Tile";

describe("Tile", () => {
  describe("Rotation", () => {
    context("when rotating clockwise", () => {
      it("updates the Tile's sides", () => {
        const tile = new Tile({ sides: [0, 1, 2, 3] });

        tile.rotation = 1;

        expect(tile.sides).to.deep.equal([3, 0, 1, 2]);
      });
    });

    context("when rotating counterclockwise", () => {
      it("updates the Tile's sides", () => {
        const tile = new Tile({ sides: [0, 1, 2, 3] });

        tile.rotation = -1;

        expect(tile.sides).to.deep.equal([1, 2, 3, 0]);
      });
    });

    context("when rotating multiple times", () => {
      it("updates the Tile's sides", () => {
        const tile = new Tile({ sides: [0, 1, 2, 3] });

        tile.rotation = 3;
        tile.rotation = -1;

        expect(tile.sides).to.deep.equal([2, 3, 0, 1]);
      });
    });

    context("when rotating all the way round", () => {
      it("resets to zero", () => {
        const tile = new Tile({ sides: [0, 1, 2, 3] });

        tile.rotation = 4;

        expect(tile.rotation).to.equal(0);
        expect(tile.sides).to.deep.equal([0, 1, 2, 3]);
      });
    });
  });

  describe("#clone", () => {
    it("return a new instance of the Tile", () => {
      const tile = new Tile({ sides: [0, 1, 2, 3] });

      const actual = tile.clone();

      expect(actual).not.to.equal(tile);
      expect(actual.sides).to.deep.equal([0, 1, 2, 3]);
      expect(actual.rotation).to.equal(0);
    });
  });
});
