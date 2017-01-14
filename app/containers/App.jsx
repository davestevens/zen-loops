"use strict";

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { newGame } from "../actions/game";
import Game from "./Game.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this._newGame = this._newGame.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;

    if (window.location && window.location.hash) {
      dispatch(newGame(window.location.hash));
    }
  }

  render() {
    const { game } = this.props;
    const { inProgress } = game;

    return (
      <div>
        <h1>Zen Loops</h1>
        { inProgress && this._game() }
        { inProgress || this._newGameButton() }
      </div>
    );
  }

  _newGameButton() {
    return (
      <button onClick={ this._newGame }>
        New Game
      </button>
    );
  }

  _game() {
    return (
      <Game width={ 4 }
            height={ 4 }
            tileSize={ 80 } />
    );
  }

  _newGame() {
    const { dispatch } = this.props;
    dispatch(newGame());
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
