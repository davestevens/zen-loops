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
    const { game } = this.props;
    const { inProgress } = game;

    return (
      <div className="app">
        { inProgress && this._game() }
        { inProgress || <NewGame /> }
      </div>
    );
  }

  _game() {
    return (
      <Game tileSize={ 40 } />
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  game: state.game
});

export default connect(
  mapStateToProps
)(App);
