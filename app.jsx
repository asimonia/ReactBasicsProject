// React Component returing JSX
function Application(props) {
	return (
		<div className="scoreboard">
			<div className="header">
				<h1>{props.title}</h1>
			</div>

			<div className="players">
				<div className="player">
					<div className="player-name">
						Alex Simonian
					</div>
					<div className="player-score">
						<div className="counter">
							<button className="counter-action decrement"> - </button>
							<div className="counter-score"> 42 </div>
							<button className="counter-action increment"> + </button>
						</div>
					</div>
				</div>
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
