import { useState } from 'react'
import { useIntervalWhen } from '../lib/use-interval-when'
import './interval-when.css'

export default function IntervalWhen() {
	const [count, setCount] = useState(0)
	const [when, setWhen] = useState(false)

	useIntervalWhen(
		() => {
			setCount(c => c + 0.1)
		},
		{ ms: 100, when, startImmediately: true },
	)

	return (
		<section>
			<h1>useIntervalWhen</h1>
			<button title="Click to toggle the timer" onClick={() => setWhen(!when)}>
				{count.toLocaleString('en-US', {
					maximumFractionDigits: 2,
					minimumFractionDigits: 2,
				})}
				<span className="btn link">{when ? 'stop' : 'start'}</span>
			</button>
			{/* <button onClick={() => clear()}></button> */}
		</section>
	)
}
