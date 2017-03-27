function Header(props) {
	return (
		<div className="header">
			<h1>{props.title}</h1>
		</div>		
	);
}

Header.propTypes = {
	title: React.PropTypes.string.isRequired,
};

function Player(props) {
	return (
		<div className="player">
			<div className="player-name">
				{props.name}
			</div>
			<div className="player-score">
				<div className="counter">
					<button className="counter-action decrement"> - </button>
					<div className="counter-score"> {props.score} </div>
					<button className="counter-action increment"> + </button>
				</div>
			</div>
		</div>
	);
}

Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	score: React.PropTypes.number.isRequired,
};

// React Component returing JSX
function Application(props) {
	return (
		<div className="scoreboard">
			<Header title={props.title} />
			<div className="players">
				<Player name="Alex Simonian" score={31} />
				<div className="player">
					<div className="player-name">
						Andrew Chakley
					</div>
					<div className="player-score">
						<div className="counter">
							<button className="counter-action decrement"> - </button>
							<div className="counter-score"> 50 </div>
							<button className="counter-action increment"> + </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Application.propTypes = {
	title: React.PropTypes.string,
}

Application.defaultProps = {
	title: "Scoreboard",
}

// Rendering the React component to the Virtual DOM
ReactDOM.render(<Application />, document.getElementById('container'));