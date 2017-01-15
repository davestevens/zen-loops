"use strict";

import correctTile from "../../src/lib/correctTile";

describe("correctTile", () => {
  context("when all of the Tile's ends are joined", () => {
    const correctTilePositions = [
      {
        tile: { top: 0, right: 0, bottom: 0, left: 0 },
        surrounding: { }
      },
      {
        tile: { top: 0, right: 1, bottom: 0, left: 0 },
        surrounding: { right: { left: 1 } }
      },
      {
        tile: { top: 1, right: 1, bottom: 1, left: 1 },
        surrounding: {
          above: { bottom: 1 },
          right: { left: 1 },
          below: { top: 1 },
          left: { right: 1 }
        }
      }
    ];

    correctTilePositions.forEach(ut => {
      it("returns true", () => {
        const actual = correctTile(ut);

        expect(actual).to.equal(true);
      });
    });
  });

  context("when any of the Tile's ends are not joined", () => {
    const incorrectTilePositions = [
      {
        tile: { top: 0, right: 0, bottom: 0, left: 0 },
        surrounding: { above: { bottom: 1 } }
      },
      {
        tile: { top: 0, right: 1, bottom: 0, left: 0 },
        surrounding: { right: { left: 0 } }
      },
      {
        tile: { top: 1, right: 1, bottom: 1, left: 1 },
        surrounding: {
          above: { bottom: 0 },
          right: { left: 1 },
          below: { top: 1 },
          left: { right: 0 }
        }
      }
    ];

    incorrectTilePositions.forEach(ut => {
      it("returns false", () => {
        const actual = correctTile(ut);

        expect(actual).to.equal(false);
      });
    });
  });
});
