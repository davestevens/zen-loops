"use strict";

import calculatePossibleTiles from "../../src/lib/calculatePossibleTiles";
import { OUT_OF_BOUNDS } from "../../src/Grid";

describe("calculatePossibleTiles", () => {
  it("returns a filtered list of Tiles which could fit", () => {
    const all = [
      { top: 0, right: 0, bottom: 0, left: 0 }, // empty
      { top: 1, right: 1, bottom: 1, left: 1 }, // cross
      { top: 1, right: 1, bottom: 0, left: 0 }, // corner
      { top: 1, right: 0, bottom: 0, left: 1 }, // corner
      { top: 0, right: 1, bottom: 1, left: 0 }, // corner
      { top: 0, right: 0, bottom: 1, left: 1 }, // corner
      { top: 0, right: 1, bottom: 0, left: 1 } // straight
    ];
    const surrounding = {
      above: OUT_OF_BOUNDS,
      right: null,
      below: { top: 0, right: 0, bottom: 0, left: 0 },
      left: null
    };

    const actual = calculatePossibleTiles({ all, surrounding });

    expect(actual).to.have.length(2);
    expect(actual).to.include({ top: 0, right: 0, bottom: 0, left: 0 });
    expect(actual).to.include({ top: 0, right: 1, bottom: 0, left: 1 });
  });
});
