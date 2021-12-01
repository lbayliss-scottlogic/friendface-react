import { useState } from "react";
import classes from "./Square.module.css";

function Square(props) {
    let [move, setMove] = useState();

    function renderMove() {
        const nextMove = props.switchPlayer();
        setMove(nextMove);
    }

  return (
    <button
      className={classes.square}
      onClick={renderMove}
    >
      {move}
    </button>
  );
}

export default Square;
