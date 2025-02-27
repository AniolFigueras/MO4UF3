import './App.css';
import Title from './Title.js';
import Die from './Die.js';
import Dice from './Dice.js';
import RollButton from './RollButton.js';
import { useState } from 'react';
import PlayerName from './PlayerName.js';

function App(){

	let [roll, setRoll] = useState(false);

	function roll_dice(){
		setRoll(true);
	}

  	return (
		
		<div className="rollmania">
			<Title title_text="Rollmania!!!" />
    		<PlayerName />
				<main className="App">
					<Dice cantidad="5" roll={roll} />
    		</main>
				<RollButton roll_func={roll_dice}/>
			</div>
  	);
}

export default App;
