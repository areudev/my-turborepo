import {useState} from 'react'
import {Button} from 'yolui'

export function App() {
	const [count, setCount] = useState(0)
	return (
		<div>
			<h1>{count}</h1>
			<Button onClick={() => setCount(c => c + 1)} type="button" violet>
				Add
			</Button>
			<Button onClick={() => setCount(c => c - 1)} type="button" violet>
				Minus
			</Button>
		</div>
	)
}
