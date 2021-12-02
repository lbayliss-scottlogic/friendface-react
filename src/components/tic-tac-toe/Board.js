import Square from "./Square";
import classes from "./Board.module.css";
import { useState, useRef } from "react";

function Board(props) {
  let [currMove, setNextMove] = useState('X');
  let [gameState, setGameState] = useState('Current move is: ');

  function switchPlayer() {
    currMove === "O" || currMove == null ? setNextMove("X") : setNextMove("O");
    return currMove;
  }

  function logProgress(square) {
    props.gameProgress[square] = currMove;
    if (props.calculateWinner(props.gameProgress)) {
      announceWinner(currMove);
    }
  }

  function announceWinner(winner) {
    setNextMove(switchPlayer());
    setGameState('Winner is: ');
  }

  return (
    <div className={classes.board}>
      <h3>{gameState} {currMove}</h3>
      <div className={classes.boardRow}>
        <Square currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={0} />
        <Square currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={1} />
        <Square currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={2} />
      </div>
      <div className={classes.boardRow}>
        <Square currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={3} />
        <Square currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={4} />
        <Square currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={5} />
      </div>
      <div className={classes.boardRow}>
        <Square currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={6} />
        <Square currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={7} />
        <Square currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={8} />
      </div>
    </div>
  );
}

export default Board;
