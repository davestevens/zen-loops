"use strict";

import Grid from "../src/Grid";
import Tile from "../src/Tile";
import { OUT_OF_BOUNDS } from "../src/lib/surroundingSpaces";
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
      const { grid, tiles, rng } = gridSetup();

      grid.fill({ tiles, rng });

      const x0y0 = grid.get(0, 0);
      expect(x0y0.value).to.deep.equal(tiles[1]);
      const x1y0 = grid.get(1, 0);
      expect(x1y0.value).to.deep.equal(tiles[1]);
      const x0y1 = grid.get(0, 1);
      expect(x0y1.value).to.deep.equal(tiles[0]);
      const x1y1 = grid.get(1, 1);
      expect(x1y1.value).to.deep.equal(tiles[0]);
    });
  });

  describe("#shuffle", () => {
    it("randomly rotates all of the Tiles", () => {
      const { grid, tiles, rng } = gridSetup();
      grid.fill({ tiles, rng });

      grid.shuffle({ rng })

      const x0y0 = grid.get(0, 0);
      expect(x0y0.value.rotation).to.equal(2);
      const x1y0 = grid.get(1, 0);
      expect(x1y0.value.rotation).to.equal(1);
      const x0y1 = grid.get(0, 1);
      expect(x0y1.value.rotation).to.equal(1);
      const x1y1 = grid.get(1, 1);
      expect(x1y1.value.rotation).to.equal(3);
    });
  });

  describe("Completed", () => {
    context("when all Tiles are correctly placed", () => {
      it("is true", () => {
        const { grid, tiles, rng } = gridSetup();
        grid.fill({ tiles, rng });

        const actual = grid.completed;

        expect(actual).to.equal(true);
      });
    });

    context("when any Tiles are not correctly placed", () => {
      it("is false", () => {
        const { grid, tiles, rng } = gridSetup();
        grid.fill({ tiles, rng });
        grid.shuffle({ rng });

        const actual = grid.completed;

        expect(actual).to.equal(false);
      });
    });
  });
});

const gridSetup = () => {
  const grid = new Grid({ width: 2, height: 2 });
  const tiles = [
    new Tile({ name: "a", sides: [1, 0, 0, 0] }),
    new Tile({ name: "b", sides: [0, 0, 1, 0] }),
    new Tile({ name: "c", sides: [0, 0, 0, 0] })
  ]
  const rng = seedrandom("test");

  return { grid, tiles, rng };
}
