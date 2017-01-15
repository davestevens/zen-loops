"use strict";

import React, { Component, PropTypes } from "react";
import { findDOMNode } from "react-dom";
import { connect } from "react-redux";
import { rotateTile } from "../actions/game";
import classNames from "classnames";
import "./Tile.scss";

const ROTATIONS = {
  "0-1": { from: "0", to: "90" },
  "1-2": { from: "90", to: "180" },
  "2-3": { from: "180", to: "270" },
  "3-0": { from: "270", to: "360" }
};

class Tile extends Component {
  componentWillUpdate(nextProps) {
    const { rotation } = this.props;
    const nextRotation = nextProps.rotation
    const rotationAnimation = ROTATIONS[`${ rotation }-${ nextRotation }`];
    const node = findDOMNode(this);

    node.style.transform = `rotate(${ rotationAnimation.from }deg)`;
    node.style.transition = 'transform 0s';

    requestAnimationFrame(() => {
      node.style.transform = `rotate(${ rotationAnimation.to }deg)`;
      node.style.transition = 'transform 0.3s';
    });
  }

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
