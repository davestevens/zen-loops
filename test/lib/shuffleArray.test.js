"use strict";

import shuffleArray from "../../src/lib/shuffleArray";
import seedrandom from "seedrandom";

describe("shuffle", () => {
  it("returns a shuffled instance of the array", () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const actual = shuffleArray(array);

    expect(array).to.have.length(10);
    expect(array).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(actual).to.have.length(10);
  });

  context("with a defined random number generator", () => {
    it("returns a shuffled instance of the array", () => {
      const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const rng = seedrandom("test");

      const actual = shuffleArray(array, rng);

      expect(array).to.have.length(10);
      expect(array).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(actual).to.have.length(10);
      expect(actual).to.deep.equal([7, 5, 6, 9, 2, 8, 0, 3, 4, 1]);
    });
  });
});
