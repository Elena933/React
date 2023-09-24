
import './App.css';
import {useEffect, useState} from "react";
import Board from "./Board";

function App() {

  const [oIsNext, setOIsNext] = useState(false);
  const [board, setBoard] = useState(
    Array(9).fill(null),
  )

    const makeMove = (i) => {
    const whoIsNext = oIsNext ? 'O' : 'X';
    const newBoard = board.map((el, index) => index === i ? whoIsNext : el)
      setBoard(newBoard)
      setOIsNext(!oIsNext)
  }
  const [winner, setWinner] = useState('')

  const whoIsWinner = () => {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (board[a] === board[b] && board[b] === board[c]) {
        setWinner(board[a])
      }
    }
  }
  const [openRestartBtt, setOpenRestartBtt] = useState(false)
useEffect(() => {
    whoIsWinner()
}, [board])

    function resetGame() {
        setBoard(Array(9).fill(null))
        setWinner('')

    }
    useEffect(() => {
        setTimeout(() => {setOpenRestartBtt(!openRestartBtt) }, 100)
    }, [winner])

  return (
    <div className="App">
      <Board board={board}
             makeMove={makeMove}
             winner={winner}/>
        { winner && <h4>Winner is: {winner}</h4>}
        {openRestartBtt &&  <button onClick={()=>resetGame()}>Reset</button>}
    </div>
  );
}

export default App;
