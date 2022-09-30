const Modal = ({ isCorrect, turn, solution }) => {
	return (
		<div className="modal">
			{isCorrect && (
				<div className="">
					<h1>You win!</h1>
					<p className="solution">{solution}</p>
					<p>You found the solution in {turn} guesses :)</p>
				</div>
			)}

			{!isCorrect && (
				<div className="">
					<h1>Nevemind</h1>
					<p className="solution">{solution}</p>
					<p>Better luck next time :)</p>
				</div>
			)}
		</div>
	)
}

export default Modal
