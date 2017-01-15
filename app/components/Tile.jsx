"use strict";

import React, { Component, PropTypes } from "react";
import { findDOMNode } from "react-dom";
import { connect } from "react-redux";
import { rotateTile } from "../actions/game";
import classNames from "classnames";
import "./Tile.scss";

const ROTATIONS = [0, 90, 180, 270];

class Tile extends Component {
  componentWillUpdate(nextProps) {
    const { rotation } = this.props;
    const nextRotation = nextProps.rotation

    let from = ROTATIONS[rotation];
    let to = ROTATIONS[nextRotation];
    if ((rotation > nextRotation) && (rotation == ROTATIONS.length - 1)) {
      to = 360 - to;
    }
    else if ((rotation < nextRotation) && (nextRotation == ROTATIONS.length - 1)) {
      from = 360 - from;
    }

    const node = findDOMNode(this);
    node.style.transform = `rotate(${ from }deg)`;
    node.style.transition = 'transform 0s';

    requestAnimationFrame(() => {
      node.style.transform = `rotate(${ to }deg)`;
      node.style.transition = 'transform 0.2s';
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
           onClick={ this._rotate.bind(this, 1) }
           onContextMenu={ this._rotate.bind(this, -1) }>
      </div>
    );
  }

  _rotate(direction, event) {
    event.preventDefault();
    const { dispatch, x, y } = this.props;
    dispatch(rotateTile(x, y, direction));
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
