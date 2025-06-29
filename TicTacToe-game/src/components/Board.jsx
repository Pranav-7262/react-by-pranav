import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setstate] = useState(Array(9).fill(null));
  const [isXTurn, setisXTurn] = useState(true);

  console.log("state =>", state);

  const handleOnclick = (index) => {
    if (state[index] !== null) {
      return;
    }
    console.log("index is:", index);
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setstate(copyState);
    setisXTurn(!isXTurn);
  };

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const login of winnerLogic) {
      const [a, b, c] = login;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        console.log("won");
        return state[a];
      }
    }
    if (state.every((cell) => cell !== null)) {
      return "draw";
    }
    return false;
  };

  const isWinnerOrDraw = checkWinner();

  const handleReset = () => {
    setstate(Array(9).fill(null));
  };
  return (
    <div className="board-container">
      {isWinnerOrDraw ? (
        <>
          {isWinnerOrDraw === "draw" ? (
            <h4 style={{ color: "orange", backgroundColor: "gray" }}>
              It's a Draw!
            </h4>
          ) : (
            <h4 style={{ color: "skyblue", backgroundColor: "gray" }}>
              Winner is {isWinnerOrDraw}
            </h4>
          )}
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
          <h4 style={{ color: "black" }}>
            Starts with Player {isXTurn ? "X" : "O"}
          </h4>
          {/* Your board rows with squares remain unchanged */}
          <div className="board-row">
            <Square onClick={() => handleOnclick(0)} value={state[0]} />
            <Square onClick={() => handleOnclick(1)} value={state[1]} />
            <Square onClick={() => handleOnclick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleOnclick(3)} value={state[3]} />
            <Square onClick={() => handleOnclick(4)} value={state[4]} />
            <Square onClick={() => handleOnclick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleOnclick(6)} value={state[6]} />
            <Square onClick={() => handleOnclick(7)} value={state[7]} />
            <Square onClick={() => handleOnclick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
