"use strict";

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { newGame } from "../actions/game";
import Game from "./Game.jsx";
import NewGame from "../components/NewGame.jsx";
import "./App.scss";

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;

    if (window.location && window.location.hash) {
      dispatch(newGame({ seed: window.location.hash.substr(1) }));
    }
  }

  render() {
    const { inProgress } = this.props;

    return (
      <div className="app" style={ { backgroundColor: this._backgroundColor() } }>
        { inProgress && this._game() }
        { inProgress || <NewGame /> }
      </div>
    );
  }

  _backgroundColor() {
    const { color } = this.props;
    const altColor = (color + 180) % 360;
    return `hsla(${ altColor }, 70%, 60%, 0.8)`
  }

  _game() {
    return (
      <Game tileSize={ 40 } />
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
  color: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  const game = state.game || {};
  return {
    inProgress: !!game.inProgress,
    color: game.color || 0
  }
};

export default connect(
  mapStateToProps
)(App);
