//import './Scores.css';
import ScoreItem from './ScoreItem.js'

function Scores(props) {
	let score_list = [
		<ScoreItem player_name="Jacinto" player_score="9" key="0" />,
		<ScoreItem player_name="Biden" player_score="12" key="1" />,
		<ScoreItem player_name="Pedro el sanchez" player_score="21" key="2" />,
		<ScoreItem player_name="Elon Nazi" player_score="25" key="3" />,
		<ScoreItem player_name="El Barbas" player_score="18" key="4" />
	];

	return(    
		<section className="Scores">
			<h2>Scores</h2>
			<ol>
				{score_list}
			</ol>
		</section>
  );
}

export default Scores;
