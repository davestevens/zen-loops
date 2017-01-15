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
    const { height, tileSize, width } = this.props;

    return (
      <div className="layout"
           style={ { width: width * tileSize, height: height * tileSize, borderColor: "gray" } } >
        { this._renderTiles() }
      </div>
    );
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
  completed: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  seed: PropTypes.string.isRequired,
  tiles: PropTypes.array.isRequired,
  tileSize: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  width: state.game.width,
  height: state.game.height,
  completed: state.game.completed,
  seed: state.game.seed,
  tiles: state.game.tiles
});

export default connect(
  mapStateToProps
)(Game);
