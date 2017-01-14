"use strict";

import randomFromArray from "../../src/lib/randomFromArray";
import seedrandom from "seedrandom";

describe("randomFromArray", () => {
  it("returns an item from the passed array", () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const actual = randomFromArray(array);

    expect(array).to.include(actual);
  });

  context("with a defined random number generator", () => {
    it("returns an item from the passed array", () => {
      const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const rng = seedrandom("test");

      const actual = randomFromArray(array, rng);

      expect(array).to.include(actual);
      expect(actual).to.equal(8);
    });
  });
});
