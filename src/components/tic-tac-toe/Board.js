import Square from "./Square";
import classes from "./Board.module.css";
import { useState } from "react";

function Board() {
  let [currMove, setNextMove] = useState(null);
  function switchPlayer() {
    currMove === "O" || currMove == null ? setNextMove("X") : setNextMove("O");
    return currMove;
  }
  return (
    <div className={classes.board}>
      <div className={classes.boardRow}>
        <Square currMove={currMove} switchPlayer={switchPlayer} />
        <Square currMove={currMove} switchPlayer={switchPlayer} />
        <Square currMove={currMove} switchPlayer={switchPlayer} />
      </div>
      <div className={classes.boardRow}>
        <Square currMove={currMove} switchPlayer={switchPlayer} />
        <Square currMove={currMove} switchPlayer={switchPlayer} />
        <Square currMove={currMove} switchPlayer={switchPlayer} />
      </div>
      <div className={classes.boardRow}>
        <Square currMove={currMove} switchPlayer={switchPlayer} />
        <Square currMove={currMove} switchPlayer={switchPlayer} />
        <Square currMove={currMove} switchPlayer={switchPlayer} />
      </div>
    </div>
  );
}

export default Board;
