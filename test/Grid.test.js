"use strict";

import Grid, { OUT_OF_BOUNDS } from "../src/Grid";
import seedrandom from "seedrandom";

describe("Grid", () => {
  describe("Dimensions", () => {
    context("when not defined", () => {
      it("throws an error", () => {
        expect(() => new Grid()).to.throw("Width and Height are required");
      });
    });

    context("when defined", () => {
      it("creates a list of spaces", () => {
        const grid = new Grid({ width: 2, height: 2 });

        expect(grid.spaces).to.have.length(4);
      });
    });
  });

  describe("#get", () => {
    context("when the space is available", () => {
      it("returns the value of the space", () => {
        const grid = new Grid({ width: 2, height: 2 });

        const actual = grid.get(1, 1);

        expect(actual).not.to.equal(OUT_OF_BOUNDS);
      });
    });

    context("when the space is not available", () => {
      it("returns Out Of Bounds", () => {
        const grid = new Grid({ width: 2, height: 2 });

        const actual = grid.get(-1, -1);

        expect(actual).to.equal(OUT_OF_BOUNDS);
      });
    });
  });

  describe("#set", () => {
    context("when the space is available", () => {
      it("sets the value in the space", () => {
        const grid = new Grid({ width: 2, height: 2 });

        grid.set(1, 1, "value");

        const actual = grid.get(1, 1);
        expect(actual.value).to.equal("value");
      });
    });

    context("when the space is not available", () => {
      it("returns Out Of Bounds", () => {
        const grid = new Grid({ width: 2, height: 2 });

        const actual = grid.set(-1, -1, "value");

        expect(actual).to.equal(OUT_OF_BOUNDS);
      });
    });
  });

  describe("#fill", () => {
    it("fills the Grid's spaces with random tiles", () => {
      const grid = new Grid({ width: 2, height: 2 });
      const tiles = [
        { name: "a", top: 0, right: 0, bottom: 0, left: 0 },
        { name: "b", top: 0, right: 0, bottom: 0, left: 0 },
        { name: "c", top: 0, right: 0, bottom: 0, left: 0 }
      ]
      const rng = seedrandom("test");

      grid.fill({ tiles: tiles, rng: rng });

      const x0y0 = grid.get(0, 0);
      expect(x0y0.value).to.deep.equal(tiles[1]);
      const x1y0 = grid.get(1, 0);
      expect(x1y0.value).to.deep.equal(tiles[0]);
      const x0y1 = grid.get(0, 1);
      expect(x0y1.value).to.deep.equal(tiles[0]);
      const x1y1 = grid.get(1, 1);
      expect(x1y1.value).to.deep.equal(tiles[1]);
    });
  });
});
