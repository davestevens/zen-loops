"use strict";

import correctTile from "../../src/lib/correctTile";

describe("correctTile", () => {
  context("when all of the Tile's ends are joined", () => {
    const correctTilePositions = [
      {
        tile: { sides: [0, 0, 0, 0] },
        surrounding: [null, null, null, null]
      },
      {
        tile: { sides: [0, 1, 0, 0] },
        surrounding: [
          null,
          { sides: [0, 0, 0, 1] },
          null,
          null
        ]
      },
      {
        tile: { sides: [1, 1, 1, 1] },
        surrounding: [
          { sides: [0, 0, 1, 0] },
          { sides: [0, 0, 0, 1] },
          { sides: [1, 0, 0, 0] },
          { sides: [0, 1, 0, 0] }
        ]
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
        tile: { sides: [0, 0, 0, 0] },
        surrounding: [
          { sides: [0, 0, 1, 0] },
          null,
          null,
          null
        ]
      },
      {
        tile: { sides: [0, 1, 0, 0] },
        surrounding: [
          null,
          { sides: [0, 0, 0, 0] },
          null,
          null
        ]
      },
      {
        tile: { sides: [1, 1, 1, 1] },
        surrounding: [
          { sides: [0, 0, 0, 0] },
          { sides: [0, 0, 0, 1] },
          { sides: [1, 0, 0, 0] },
          { sides: [0, 0, 0, 0] }
        ]
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
