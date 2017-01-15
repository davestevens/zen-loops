"use strict";

import calculatePossibleTiles from "../../src/lib/calculatePossibleTiles";
import { OUT_OF_BOUNDS } from "../../src/lib/surroundingSpaces";

describe("calculatePossibleTiles", () => {
  it("returns a filtered list of Tiles which could fit", () => {
    const all = [
      { sides: [0, 0, 0, 0] }, // empty
      { sides: [1, 1, 1, 1] }, // cross
      { sides: [1, 1, 0, 0] }, // corner
      { sides: [1, 0, 0, 1] }, // corner
      { sides: [0, 1, 1, 0] }, // corner
      { sides: [0, 0, 1, 1] }, // corner
      { sides: [0, 1, 0, 1] } // straight
    ];
    const surrounding = [
      OUT_OF_BOUNDS,
      null,
      { sides: [0, 0, 0, 0] },
      null
    ];

    const actual = calculatePossibleTiles({ all, surrounding });

    expect(actual).to.have.length(2);
    expect(actual).to.include({ sides: [0, 0, 0, 0] });
    expect(actual).to.include({ sides: [0, 1, 0, 1] });
  });
});
