"use strict";

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Tile from "../components/Tile.jsx";
import "./Game.scss";

const GameCompleted = () => (
  <div className="gamecompleted">
    <div className="gamecompleted__inner">Completed</div>
  </div>
);

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
           style={ { width: width * tileSize, height: height * tileSize } } >
        { this._renderTiles() }
      </div>
    );
  }

  _renderTiles() {
    const { tileSize, tiles } = this.props;

    return tiles.map(tile => {
      return <Tile key={ `tile-${ tile.x }-${ tile.y }` }
                   size={ tileSize }
                   { ...tile } />;
    });
  }
}

Game.propTypes = {
  completed: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  tiles: PropTypes.array.isRequired,
  tileSize: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  width: state.game.width,
  height: state.game.height,
  completed: state.game.completed,
  tiles: state.game.tiles
});

export default connect(
  mapStateToProps
)(Game);
