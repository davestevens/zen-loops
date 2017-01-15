"use strict";

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { newGame } from "../actions/game";

class NewGame extends Component {
  constructor(props) {
    super(props);

    this._new = this._new.bind(this);
  }

  render() {
    return(
      <button onClick={ this._new }>
        New Game
      </button>
    );
  }

  _new() {
    const { dispatch } = this.props;
    const seed = Math.random().toString(36).substring(16);
    window.location.hash = seed;
    dispatch(newGame({ seed }));
  }
}

NewGame.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(NewGame);
