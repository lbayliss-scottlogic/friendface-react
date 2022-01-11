import Square from "./Square";
import Backdrop from '../elements/Backdrop';
import Modal from '../elements/Modal';
import classes from "./Board.module.css";
import { useState } from "react";

function Board(props) {
  let [currMove, setNextMove] = useState('X');
  let [gameState, setGameState] = useState('Current move is: ');
  let [winnerSet, setWinner] = useState(false);

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

  function announceWinner() {
    setNextMove(switchPlayer());
    setGameState('Winner is: ');
    setWinner(true);
  }

  function closeBackdrop() {
    setWinner(false);
    // TODO: React version of this JS implementation
    window.location.reload(false);
  }

  return (
    <div className={classes.board}> 
      {winnerSet && <Modal onCancel={closeBackdrop} winner={currMove}/>}
      {winnerSet && <Backdrop onCancel={closeBackdrop} winner={currMove}/>}
      <h3>{gameState} {currMove}</h3>
      <div className={classes.boardRow}>
        <Square position={'topLeft'} currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={0} />
        <Square position={'topMiddle'} currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={1} />
        <Square position={'topRight'} currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={2} />
      </div>
      <div className={classes.boardRow}>
        <Square position={'middleLeft'} currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={3} />
        <Square currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={4} />
        <Square position={'middleRight'} currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={5} />
      </div>
      <div className={classes.boardRow}>
        <Square position={'bottomLeft'} currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={6} />
        <Square position={'bottomMiddle'} currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={7} />
        <Square position={'bottomRight'} currMove={currMove} switchPlayer={switchPlayer} logProgress={logProgress} square={8} />
      </div>
      <span className={classes.howTo}>Left-click to move<br/>Try to win</span>
    </div>
  );
}

export default Board;
