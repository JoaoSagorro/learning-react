export default function Log({ logTurns }) {
  return(
    <ol id="log">
      {logTurns.map(logTurn =>
        <li key={`${logTurn.square.row}${logTurn.square.col}`}>
          {logTurn.player} selected {logTurn.square.row}, {logTurn.square.col}
        </li>
      )}
    </ol>
  );
}
