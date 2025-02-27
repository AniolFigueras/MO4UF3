//import './PlayerName.css';
import { useState } from 'react';

function PlayerName(props) {
	let [player_name, setPlayerName] = useState("");

	return(    
		<form className="PlayerName">
			<p><input type="text" name="player_name" placeholder="Nombre del jugador" /> <button>Guardar</button></p>
		</form>
  );
}

export default PlayerName;
