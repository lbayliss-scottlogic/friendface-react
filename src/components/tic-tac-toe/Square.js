import { useState } from "react";
import classes from "./Square.module.css";

function Square(props) {
  let [move, setMove] = useState();

  function renderMove() {
    const nextMove = props.switchPlayer(props.square);
    setMove(nextMove);
    props.logProgress(props.square);
  }

  return (
    <button className={`${classes.square} ${classes[props.position]}`} onClick={renderMove}>
      {move}
    </button>
  );
}

export default Square;
