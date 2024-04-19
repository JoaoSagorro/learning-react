import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {

  // const [ playingBoard, setPlayingBoard ] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setPlayingBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // };

  return(
    <ol id="game-board">
      {playingBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, columnsIndex) => <li key={columnsIndex}>
            <button onClick={() => handleSelectSquare(rowIndex, columnsIndex)}>{playerSymbol}</button>
          </li>)}
        </ol>
      </li>)}
    </ol>
  );
}
