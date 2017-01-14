"use strict";

import possibleTile from "../../src/lib/possibleTile";
import { AVAILABLE, BLOCKED, REQUIRED } from "../../src/lib/calculateSides";

describe("possibleTile", () => {
  context("when all sides are 'AVAILABLE'", () => {
    it("returns true", () => {
      const sides = {
        top: AVAILABLE,
        right: AVAILABLE,
        bottom: AVAILABLE,
        left: AVAILABLE
      };
      const tile = { top: 0, right: 0, bottom: 0, left: 0 };

      const actual = possibleTile({ sides, tile });

      expect(actual).to.equal(true);
    });
  });

  context("when a side is 'BLOCKED'", () => {
    context("when the tile uses that side", () => {
      it("returns false", () => {
        const sides = {
          top: BLOCKED,
          right: AVAILABLE,
          bottom: AVAILABLE,
          left: AVAILABLE
        };
        const tile = { top: 1, right: 0, bottom: 0, left: 0 };

        const actual = possibleTile({ sides, tile });

        expect(actual).to.equal(false);
      });
    });

    context("when the tile does not use that side", () => {
      it("returns true", () => {
        const sides = {
          top: BLOCKED,
          right: AVAILABLE,
          bottom: AVAILABLE,
          left: AVAILABLE
        };
        const tile = { top: 0, right: 0, bottom: 0, left: 0 };

        const actual = possibleTile({ sides, tile });

        expect(actual).to.equal(true);
      });
    });
  });

  context("when a side is 'REQUIRED'", () => {
    context("when the tile uses that side", () => {
      it("returns false", () => {
        const sides = {
          top: REQUIRED,
          right: AVAILABLE,
          bottom: AVAILABLE,
          left: AVAILABLE
        };
        const tile = { top: 1, right: 0, bottom: 0, left: 0 };

        const actual = possibleTile({ sides, tile });

        expect(actual).to.equal(true);
      });
    });

    context("when the tile does not use that side", () => {
      it("returns false", () => {
        const sides = {
          top: REQUIRED,
          right: AVAILABLE,
          bottom: AVAILABLE,
          left: AVAILABLE
        };
        const tile = { top: 0, right: 0, bottom: 0, left: 0 };

        const actual = possibleTile({ sides, tile });

        expect(actual).to.equal(false);
      });
    });
  });
});
