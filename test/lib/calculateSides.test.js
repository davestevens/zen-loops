"use strict";

import calculateSides, {
  AVAILABLE, REQUIRED, BLOCKED
} from "../../src/lib/calculateSides";
import { OUT_OF_BOUNDS } from "../../src/lib/surroundingSpaces";

describe("calculateSides", () => {
  it("returns the state of the sides", () => {
    const above = null;
    const right = OUT_OF_BOUNDS;
    const below = { sides: [0, null, null, null] };
    const left = { sides: [null, 1, null, null] };
    const actual = calculateSides([ above, right, below, left ]);

    expect(actual).to.have.length(4);
    expect(actual).to.deep.equal([AVAILABLE, BLOCKED, BLOCKED, REQUIRED]);
  });
});
