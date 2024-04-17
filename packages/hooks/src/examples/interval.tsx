import { useState } from 'react'
import { useInterval } from '../lib/use-interval'
import './interval.css'

const colors = ['green', 'blue', 'purple', 'red', 'pink', 'beige', 'yellow']

export default function App() {
	const [running, setIsRunning] = useState(true)
	const [index, setIndex] = useState(0)

	const clear = useInterval(() => {
		setIndex(index + 1)
	}, 1000)

	const handleStop = () => {
		clear()
		setIsRunning(false)
	}

	const color = colors[index % colors.length]
	return (
		<section>
			<h1>useInterval</h1>
			<button disabled={!running} onClick={handleStop}>
				{running ? 'Stop' : 'Stopped'}
			</button>
			<div style={{ backgroundColor: color }} />
		</section>
	)
}
