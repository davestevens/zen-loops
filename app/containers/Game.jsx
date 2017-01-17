"use strict";

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Tile from "../components/Tile.jsx";
import GameCompleted from "../components/GameCompleted.jsx";
import "./Game.scss";

class Game extends Component {
  render() {
    const { completed } = this.props;

    return (
      <div className="game">
        { completed && <GameCompleted /> }
        { this.renderLayout() }
      </div>
    );
  }

  renderLayout() {
    return (
      <div className="layout"
           style={ this._style() } >
        { this._renderTiles() }
      </div>
    );
  }

  _color() {
    const { color } = this.props;
    return `hsl(${ color }, 80%, 70%)`
  }

  _style() {
    const { height, tileSize, width } = this.props;

    return {
      width: width * tileSize,
      height: height * tileSize,
      borderColor: this._color()
    };
  }

  _renderTiles() {
    const { seed, tileSize, tiles } = this.props;

    return tiles.map(tile => {
      return <Tile key={ `tile-${ tile.x }-${ tile.y }-${ seed }` }
                   size={ tileSize }
                   { ...tile } />;
    });
  }
}

Game.propTypes = {
  color: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  seed: PropTypes.string.isRequired,
  tiles: PropTypes.array.isRequired,
  tileSize: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  color: state.game.color,
  completed: state.game.completed,
  height: state.game.height,
  seed: state.game.seed,
  tiles: state.game.tiles,
  width: state.game.width
});

export default connect(
  mapStateToProps
)(Game);
