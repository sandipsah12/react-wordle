import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'

function App() {
	const [solution, setSolution] = useState(null)

	useEffect(() => {
		fetch('http://localhost:3001/solutions')
			.then(res => res.json())
			.then(data => {
				// rendom int between 0 & 14
				const randomSolution = data[Math.floor(Math.random() * data.length)]
				setSolution(randomSolution.word)
			})
			.catch(e => console.log(e.message))
	}, [setSolution])
	return (
		<div className="App">
			<h1>Wordle (Lingo)</h1>
			{solution && <Wordle solution={solution} />}
		</div>
	)
}

export default App
