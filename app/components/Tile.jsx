"use strict";

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { rotateTile } from "../actions/game";
import classNames from "classnames";
import "./Tile.scss";

class Tile extends Component {
  render() {
    const { kind, rotation, size, x, y } = this.props;

    const classnames = classNames(
      "tile",
      `tile--${ kind }`,
      `tile--rotation-${ rotation }`
    );

    return (
      <div className={ classnames }
           style={ { top: size * y, left: size * x, width: size, height: size } }
           onClick={ this._rotate.bind(this) }>
      </div>
    );
  }

  _rotate() {
    const { dispatch, x, y } = this.props;
    dispatch(rotateTile(x, y));
  }
}

Tile.defaultProps = {
  kind: "empty",
  rotation: 0
}

Tile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  rotation: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default connect()(Tile);
