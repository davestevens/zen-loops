"use strict";

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { rotateTile } from "../actions/game";
import classNames from "classnames";
import "./Tile.scss";

const isForward = (current, next) => {
  const diff = current - next;
  return (diff == -1 || diff > 1);
}

class Tile extends Component {
  componentWillUpdate(nextProps) {
    const { rotation } = this.props;
    const nextRotation = nextProps.rotation

    this.forward = isForward(rotation, nextRotation);
  }

  render() {
    const { kind, rotation, size, x, y } = this.props;

    let obj = {};
    obj[`tile--rotation-${ rotation }-reverse`] = !this.forward;
    const classnames = classNames(
      "tile",
      `tile--${ kind }`,
      `tile--rotation-${ rotation }`,
      obj
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
