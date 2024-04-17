import { useState } from "react";

export default function Player({ name, symbol }) {

  const [ isEditing, setIsEditing ] = useState(false);


  function handleClick() {
    setIsEditing(!isEditing)
  }

  const playerInput = isEditing ? <input></input> : (<span className="player-name">
  {name}
</span>)

  return(
    <li>
      <span className="player">
        {playerInput}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
