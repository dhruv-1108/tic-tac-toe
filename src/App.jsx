import React, {useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import { calculateWinner } from "./WinnerCalculator";
import StatusMessage from "./components/StatusMessage";

import './styles/root.scss'

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);

  const [ currentMove, setCurrentMove ] = useState(0);
 
  const current = history[currentMove];

  const winner = calculateWinner(current.board);
  // console.log(winner)

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1]; // it will store the last move in the array!


      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({ board: newBoard , isXNext: !last.isXNext})
    });

    setCurrentMove(prev => prev + 1)
  };

  const moveTo = (move) => {
     setCurrentMove(move); 
  }

  return (
    <div className="app">
      <h2>
        TIC-TAC-TOE
      </h2>
      <StatusMessage winner={winner} current= {current} />
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <br></br>
      <History history={history} moveTo = { moveTo } currentMove = { currentMove } />
    </div>
  )
}

export default App;