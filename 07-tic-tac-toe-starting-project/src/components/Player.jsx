import { useState } from "react";

export default function Player({ initialName, symbol }) {

  const [ playerName, setPlayerName ] = useState(initialName)

  const [ isEditing, setIsEditing ] = useState(false);


  function handleChange(event) {
    setPlayerName(event.target.value);
  }


  function handleClick() {
    // setIsEditing(!isEditing) this should not be use. Instead we should do the following as best practice:
    setIsEditing((editing) => !editing)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>

  if (isEditing) {
    editablePlayerName = (<input type="text" required value={playerName} onChange={handleChange}/>);
  }

  return(
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
