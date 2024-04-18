import { useState } from 'react'
import { useCountdown } from '../lib/use-countdown'
import './countdown.css'

export default function CountDown() {
	const [endTime, setEndTime] = useState(new Date(Date.now() + 10000))
	const [complete, setComplete] = useState(false)

	const count = useCountdown(endTime, {
		interval: 1000,
		onTick: () => console.log('tick'),
		onComplete: () => {
			console.log('complete')
			setComplete(true)
		},
	})

	const handleClick = (time: number) => {
		if (complete === true) return
		const nextTime = endTime.getTime() + time
		setEndTime(new Date(nextTime))
	}

	return (
		<section>
			<header>
				<h1>useCountdown</h1>
			</header>
			<span className="countdown">{count}</span>
			{complete === false && (
				<div className="button-row">
					<button onClick={() => handleClick(5000)}>+5s</button>
					<button onClick={() => handleClick(10000)}>+10s</button>
					<button onClick={() => handleClick(15000)}>+15s</button>
				</div>
			)}
		</section>
	)
}
