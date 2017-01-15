"use strict";

import surroundingSpaces, {
  OUT_OF_BOUNDS
} from "../../src/lib/surroundingSpaces";

describe("surroundingSpaces", () => {
  it("returns an array of the surrounding Tiles", () => {
    const x = 0;
    const y = 0;
    const get = (x, y) => {
      if (x == 0 && y == -1) return OUT_OF_BOUNDS;
      if (x == 1 && y == 0) return { value: "right" };
      if (x == 0 && y == 1) return OUT_OF_BOUNDS;
      if (x == -1 && y == 0) return { value: "left" };
    }
    const actual = surroundingSpaces({ x, y, get });

    expect(actual).to.have.length(4);
    expect(actual)
      .to.deep.equal([OUT_OF_BOUNDS, "right", OUT_OF_BOUNDS, "left"]);
  });
});
