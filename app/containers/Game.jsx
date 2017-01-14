"use strict";

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Tile from "../components/Tile.jsx";
import "./Game.scss";

class Game extends Component {
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
    const { tileSize, tiles } = this.props;

    return tiles.map(tile => {
      return <Tile key={ `tile-${ tile.x }-${ tile.y }` }
                   size={ tileSize }
                   { ...tile } />;
    });
  }
}

Game.propTypes = {
  height: PropTypes.number.isRequired,
  tiles: PropTypes.array.isRequired,
  tileSize: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  width: state.game.width,
  height: state.game.height,
  tiles: state.game.tiles
});

export default connect(
  mapStateToProps
)(Game);
