import React, { useState } from "react";
import Board from "../Board";

/**
 * A game of tic-tac-toe.
 */
const Game = () => {
  const [gameHistory, setGameHistory] = useState([
    { squares: Array(9).fill(null) },
  ]); // Start of game
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  let winningPositions = [];
  let [player1, setPlayer1] = useState("");
  let [player2, setPlayer2] = useState("");
  let [player1ScoreCount, setPlayer1ScoreCount] = useState(0);
  let [player2ScoreCount, setPlayer2ScoreCount] = useState(0);
  const [winnerFound, setWinnerFound] = useState(false);

  let playerMapping = {
    X: { name: player1, score: player1ScoreCount },
    O: { name: player2, score: player2ScoreCount },
  };
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        winningPositions.push(a, b, c);
        return squares[a];
      }
    }

    return null;
  };

  const handleClick = (i) => {
    const history = gameHistory.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";

    setGameHistory([...history, { squares }]);
    setStepNumber(history.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
    setWinnerFound(false);
  };

  const current = gameHistory[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = gameHistory.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner && !winnerFound) {
    status = "Winner: " + playerMapping[winner].name;
    if (winner === "X") {
      setPlayer1ScoreCount(player1ScoreCount + 1);
    } else {
      setPlayer2ScoreCount(player2ScoreCount + 1);
    }
    setWinnerFound(true);
  } else {
    status = "Next player: " + playerMapping[xIsNext ? "X" : "O"].name;
  }

  return (
    <>
      Player 1:
      <input
        type="text"
        name="name"
        onChange={(event) => {
          setPlayer1(event.target.value);
          playerMapping.X = player1;
        }}
      />
      <br></br>
      <br></br>
      Player 2:
      <input
        type="text"
        name="name"
        onChange={(event) => {
          setPlayer2(event.target.value);
          playerMapping.O = player2;
        }}
      />
      <br></br>
      <br></br>
      {player1 && player2 && (
        <>
          <h3>
            {player1} : {player1ScoreCount}
          </h3>
          <h3>
            {player2} : {player2ScoreCount}
          </h3>
        </>
      )}
      <div className="game">
        <div className="game-board">
          <Board
            winningPositions={winningPositions}
            squares={current.squares}
            onClick={(i) => handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
};

export default Game;
