"use strict";

const randomFromArray = (array, rng) => {
  rng = rng || Math.random;
  return array[Math.floor(rng()*array.length)];
}

export default randomFromArray;
