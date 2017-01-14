"use strict";

import React, { Component, PropTypes } from "react";
import seedrandom from "seedrandom";
import Grid from "../../src/Grid";
import Tiles from "../../src/Tiles";
import Space from "../components/Space.jsx";
import "./Game.scss";

const TILES = [
  { name: "empty",    sides: [0, 0, 0, 0] },
  { name: "end",      sides: [1, 0, 0, 0] },
  { name: "corner",   sides: [1, 1, 0, 0] },
  { name: "straight", sides: [1, 0, 1, 0] },
  { name: "fork",     sides: [1, 1, 1, 0] },
  { name: "cross",    sides: [1, 1, 1, 1] }
];

class Game extends Component {
  componentWillMount() {
    if (window.location && window.location.hash) {
      console.info("Seeding with", window.location.hash);
      this.rng = seedrandom(window.location.hash);
    }
    else {
      this.rng = seedrandom();
    }

    const { height, width } = this.props;
    this.grid = new Grid({
      width, height
    });
    this.tiles = new Tiles({ tiles: TILES });
    this.grid.fill({
      tiles: this.tiles.all(),
      rng: this.rng
    });
  }

  render() {
    return (
      <div className="game">
        { this.renderLayout() }
      </div>
    );
  }

  renderLayout() {
    const { height, tileSize, width } = this.props;

    return (
      <div className="layout"
           style={ { width: width * tileSize, height: height * tileSize } } >
        { this._renderTiles() }
      </div>
    );
  }

  _renderTiles() {
    const spaces = this._getSpaces();
    const { tileSize } = this.props;

    return spaces.map(space => {
      return <Space key={ `space-${ space.x }-${ space.y }` }
                    size={ tileSize }
                    { ...space } />
    });
  }

  _getSpaces() {
    return this.grid.spaces.map(space => ({
      x: space.x,
      y: space.y,
      tile: {
        kind: space.value.name,
        rotation: space.value.rotation
      }
    }));
  }
}

Game.propTypes = {
  height: PropTypes.number.isRequired,
  tileSize: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default Game;
