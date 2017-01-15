"use strict";

import possibleTile from "../../src/lib/possibleTile";
import { AVAILABLE, BLOCKED, REQUIRED } from "../../src/lib/calculateSides";

describe("possibleTile", () => {
  context("when all sides are 'AVAILABLE'", () => {
    it("returns true", () => {
      const sides = [AVAILABLE, AVAILABLE, AVAILABLE, AVAILABLE];
      const tile = { sides: [0, 0, 0, 0] };

      const actual = possibleTile({ sides, tile });

      expect(actual).to.equal(true);
    });
  });

  context("when a side is 'BLOCKED'", () => {
    context("when the tile uses that side", () => {
      it("returns false", () => {
        const sides = [BLOCKED, AVAILABLE, AVAILABLE, AVAILABLE];
        const tile = { sides: [1, 0, 0, 0] };

        const actual = possibleTile({ sides, tile });

        expect(actual).to.equal(false);
      });
    });

    context("when the tile does not use that side", () => {
      it("returns true", () => {
        const sides = [BLOCKED, AVAILABLE, AVAILABLE, AVAILABLE];
        const tile = { sides: [0, 0, 0, 0] };

        const actual = possibleTile({ sides, tile });

        expect(actual).to.equal(true);
      });
    });
  });

  context("when a side is 'REQUIRED'", () => {
    context("when the tile uses that side", () => {
      it("returns false", () => {
        const sides = [REQUIRED, AVAILABLE, AVAILABLE, AVAILABLE];
        const tile = { sides: [1, 0, 0, 0] };

        const actual = possibleTile({ sides, tile });

        expect(actual).to.equal(true);
      });
    });

    context("when the tile does not use that side", () => {
      it("returns false", () => {
        const sides = [REQUIRED, AVAILABLE, AVAILABLE, AVAILABLE];
        const tile = { sides: [0, 0, 0, 0] };

        const actual = possibleTile({ sides, tile });

        expect(actual).to.equal(false);
      });
    });
  });
});
