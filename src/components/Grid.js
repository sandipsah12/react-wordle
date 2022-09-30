import Row from './Row'

const Grid = ({ currentGuess, guesses, turn }) => {
	return (
		<div>
			{guesses.map((guess, i) => {
				return turn === i ? (
					<Row key={i} guess={guess} currentGuess={currentGuess} />
				) : (
					<Row key={i} guess={guess} />
				)
			})}
		</div>
	)
}

export default Grid
