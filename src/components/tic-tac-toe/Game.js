import Board from "./Board";

function Game() {
  const emptyGame = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  let gameProgress = emptyGame;

  function calculateWinner(gameProgress) {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        gameProgress[a] !== " " &&
        gameProgress[a] &&
        gameProgress[a] === gameProgress[b] &&
        gameProgress[a] === gameProgress[c]
      ) {
        return true;
      }
    }
    return false;
  }

  return (
    <Board gameProgress={gameProgress} calculateWinner={calculateWinner} />
  );
}

export default Game;
