import React, { useState } from "react";
import "./board.css";
import Square from "../square/Square";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);

  const handleClick = (index) => {
    if (board[index] !== null) return;

    if (isWinner) return;

    const copyState = [...board];
    copyState[index] = isXturn ? "X" : "O";
    setBoard(copyState);
    setIsXturn(!isXturn);
  };

  const checkWinner = () => {
    const winningLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let num of winningLogic) {
      const [a, b, c] = num;
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const isWinner = checkWinner();
  console.log(isWinner);

  const isDraw = () => {
    console.log("hello");
    return board.every((square) => square !== null && !isWinner);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="container">
      <h2>Now {isXturn ? `X` : `O`}'s turn</h2>

      <div className="row">
        <div className="row-one">
          <Square onClick={() => handleClick(0)} value={board[0]} />
          <Square onClick={() => handleClick(1)} value={board[1]} />
          <Square onClick={() => handleClick(2)} value={board[2]} />
        </div>
        <div className="row-two">
          <Square onClick={() => handleClick(3)} value={board[3]} />
          <Square onClick={() => handleClick(4)} value={board[4]} />
          <Square onClick={() => handleClick(5)} value={board[5]} />
        </div>
        <div className="row-three">
          <Square onClick={() => handleClick(6)} value={board[6]} />
          <Square onClick={() => handleClick(7)} value={board[7]} />
          <Square onClick={() => handleClick(8)} value={board[8]} />
        </div>
      </div>
      {isWinner ? (
        <div>
          <h3>Winner is {isWinner}</h3>
          <button onClick={handleReset}>New Game</button>
        </div>
      ) : isDraw() ? (
        <div className="reset-winner">
          <h3>The game is draw </h3>
          <button onClick={handleReset}>New Game</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Board;
