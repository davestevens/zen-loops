"use strict";

import Grid, { OUT_OF_BOUNDS } from "../src/Grid";

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
        expect(actual).to.equal("value");
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
    it("fills the Grid's spaces with random tiles");
  });
});
