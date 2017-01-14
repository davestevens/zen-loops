"use strict";

const shuffleArray = (array, rng) => {
  rng = rng || Math.random;
  const clone = array.slice(0);
  for (let i = 0; i < clone.length; ++i) {
    const randomIndex = Math.floor(rng() * i);
    [clone[i], clone[randomIndex]] = [clone[randomIndex], clone[i]];
  }
  return clone;
}

export default shuffleArray;
