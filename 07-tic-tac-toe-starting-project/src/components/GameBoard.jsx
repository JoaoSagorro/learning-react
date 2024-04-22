const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {

  let playingBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    playingBoard[row][col] = player;
  }

  return(
    <ol id="game-board">
      {playingBoard.map((row, rowIndex) => (<li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => (<li key={colIndex}>
            <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
          </li>))}
        </ol>
      </li>))}
    </ol>
  );
}



  // const [ playingBoard, setPlayingBoard ] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setPlayingBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // };
