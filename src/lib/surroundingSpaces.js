"use strict";

export const OUT_OF_BOUNDS = "OUT_OF_BOUNDS";

const surroundingSpaces = ({ x, y, get }) => {
  const value = (x, y) => {
    const space = get(x, y);
    return space == OUT_OF_BOUNDS ? OUT_OF_BOUNDS : space.value;
  }

  return [
    value(x,     y - 1),
    value(x + 1, y    ),
    value(x,     y + 1),
    value(x - 1, y    )
  ];
}

export default surroundingSpaces;
