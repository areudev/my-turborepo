import {useState} from 'react'

export function App() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount(c => c + 1)} type="button">
				Add
			</button>
			<button onClick={() => setCount(c => c - 1)} type="button">
				Minus
			</button>
		</div>
	)
}
