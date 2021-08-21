import "./App.css";
import React, { useState } from "react";
// import Square from "./Square";

function App() {
  let [turn, setTurn] = useState("X");
  let [winner, setWinner] = useState(false);
  let [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  let winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const squareClicked = (index) => {
    board[index] = turn;

    for (const lines of winLines) {
      let c1 = lines[0];
      let c2 = lines[1];
      let c3 = lines[2];
      if (board[c1] && board[c1] === board[c2] && board[c2] === board[c3]) {
        setWinner(true);
        console.log(turn, "winn");
        // setBoard(["", "", "", "", "", "", "", "", ""]);
      }
    }
    turn === "X" ? setTurn("0") : setTurn("X");
    let drawCheck = board.every((s) => s !== "");
    if (drawCheck) {
      alert("draw!!");
      setBoard(["", "", "", "", "", "", "", "", ""]);
      setTurn("X");
    }
  };

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <h2 id="result">{winner ? `${turn === "X" ? "0" : "X"} won` : null}</h2>
      <div className="game">
        <div className="box">
          {board.map((square, index) => {
            return (
              <div
                key={index}
                onClick={() => squareClicked(index)}
                className="square"
              >
                {square}
              </div>
            );
          })}
        </div>
        {/* {winner ? <h1>{`${turn === "X" ? "0" : "X"} won`}</h1> : null} */}
      </div>
    </div>
  );
}

export default App;
