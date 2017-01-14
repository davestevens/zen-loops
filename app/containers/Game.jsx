"use strict";

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Space from "../components/Space.jsx";
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
    const { tileSize, spaces } = this.props;

    return spaces.map(space => {
      return <Space key={ `space-${ space.x }-${ space.y }` }
                    size={ tileSize }
                    { ...space } />;
    });
  }
}

Game.propTypes = {
  height: PropTypes.number.isRequired,
  spaces: PropTypes.array.isRequired,
  tileSize: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  width: state.game.width,
  height: state.game.height,
  spaces: state.game.spaces
});

export default connect(
  mapStateToProps
)(Game);
