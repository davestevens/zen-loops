"use strict";

import React, { Component, PropTypes } from "react";
import classNames from "classnames";
import "./Tile.scss";

class Tile extends Component {
  render() {
    const { kind, rotation } = this.props;

    const classnames = classNames(
      "tile",
      `tile--${ kind }`,
      `tile--rotation-${ rotation }`
    );

    return (
      <div className={ classnames }
           onClick={ this._rotate.bind(this) }>
      </div>
    );
  }

  _rotate() {
    console.log("ROTATE");
  }
}

Tile.defaultProps = {
  kind: "empty",
  rotation: 0
}

Tile.propTypes = {
  kind: PropTypes.string.isRequired,
  rotation: PropTypes.number.isRequired
}

export default Tile;
