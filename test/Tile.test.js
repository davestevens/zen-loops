"use strict";

import Tile from "../src/Tile";

describe("Tile", () => {
  describe("Rotation", () => {
    context("when rotating clockwise", () => {
      it("updates the Tile's sides", () => {
        const tile = new Tile({
          top: 0,
          right: 1,
          bottom: 2,
          left: 3
        });

        tile.rotation = 1;

        expect(tile.top).to.equal(3);
        expect(tile.right).to.equal(0);
        expect(tile.bottom).to.equal(1);
        expect(tile.left).to.equal(2);
      });
    });

    context("when rotating counterclockwise", () => {
      it("updates the Tile's sides", () => {
        const tile = new Tile({
          top: 0,
          right: 1,
          bottom: 2,
          left: 3
        });

        tile.rotation = -1;

        expect(tile.top).to.equal(1);
        expect(tile.right).to.equal(2);
        expect(tile.bottom).to.equal(3);
        expect(tile.left).to.equal(0);
      });
    });

    context("when rotating multiple times", () => {
      it("updates the Tile's sides", () => {
        const tile = new Tile({
          top: 0,
          right: 1,
          bottom: 2,
          left: 3
        });

        tile.rotation = 3;
        tile.rotation = -1;

        expect(tile.top).to.equal(2);
        expect(tile.right).to.equal(3);
        expect(tile.bottom).to.equal(0);
        expect(tile.left).to.equal(1);
      });
    });

    context("when rotating all the way round", () => {
      it("resets to zero", () => {
        const tile = new Tile({
          top: 0,
          right: 1,
          bottom: 2,
          left: 3
        });

        tile.rotation = 4;

        expect(tile.rotation).to.equal(0);
        expect(tile.top).to.equal(0);
        expect(tile.right).to.equal(1);
        expect(tile.bottom).to.equal(2);
        expect(tile.left).to.equal(3);
      });
    });
  });

  describe("#clone", () => {
    it("return a new instance of the Tile", () => {
      const tile = new Tile({
        top: 0,
        right: 1,
        bottom: 2,
        left: 3
      });

      const actual = tile.clone();

      expect(actual).not.to.equal(tile);
      expect(actual.top).to.equal(0);
      expect(actual.right).to.equal(1);
      expect(actual.bottom).to.equal(2);
      expect(actual.left).to.equal(3);
    });
  });
});
