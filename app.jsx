var PLAYERS = [
	{
		name: "Alex Simonian",
		score: 42,
		id: 1,
	},
	{
		name: "Darth Vader",
		score: 50,
		id: 2,
	},
	{
		name: "Bill Simmons",
		score: 30,
		id: 3,
	},
]

// Header component has property, which must be a string
Header.propTypes = {
	title: React.PropTypes.string.isRequired,
};

// Header component returns jsx with a title
function Header(props) {
	return (
		<div className="header">
			<h1>{props.title}</h1>
		</div>		
	);
}

// Counter component has property, which must be a number
Counter.propTypes = {
	score: React.PropTypes.number.isRequired,
};

// Counter component keeps track of score
function Counter(props) {
	return (
		<div className="counter">
			<button className="counter-action decrement"> - </button>
			<div className="counter-score"> {props.score} </div>
			<button className="counter-action increment"> + </button>
		</div>	
	);
}

// Player properties are name (string) and score (number)
Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	score: React.PropTypes.number.isRequired,
};

// Player component
function Player(props) {
	return (
		<div className="player">
			<div className="player-name">
				{props.name}
			</div>
			<div className="player-score">
				<Counter score={props.score} />
			</div>
		</div>
	);
}

Application.propTypes = {
	title: React.PropTypes.string,
	players: React.PropTypes.arrayOf(React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		score: React.PropTypes.number.isRequired,
	})).isRequired,
};

Application.defaultProps = {
	title: "Scoreboard",
};

// React Component returning JSX
function Application(props) {
	return (
		<div className="scoreboard">
			<Header title={props.title} />

			<div className="players">
				{props.players.map(function(player) {
					return <Player name={player.name} score={player.score} key={player.id}/>
				})}
			</div>
		</div>
	);
}



// Rendering the React component to the Virtual DOM
ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('container'));
