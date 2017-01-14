"use strict";

import calculateSides, {
  AVAILABLE, REQUIRED, BLOCKED
} from "../../src/lib/calculateSides";
import { OUT_OF_BOUNDS } from "../../src/Grid";

describe("calculateSides", () => {
  it("returns the state of the sides", () => {
    const above = null;
    const right = OUT_OF_BOUNDS;
    const below = { top: 0 };
    const left = { right: 1 };
    const actual = calculateSides({ above, right, below, left });

    expect(actual.top).to.equal(AVAILABLE);
    expect(actual.right).to.equal(BLOCKED);
    expect(actual.bottom).to.equal(BLOCKED);
    expect(actual.left).to.equal(REQUIRED);
  });
});
