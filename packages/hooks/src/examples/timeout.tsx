import { useState } from 'react'
import { useTimeout } from '../lib/use-timeout'
import './timeout.css'

function Bomb({
	hasExploded,
	hasDefused,
	handleClick,
}: {
	hasExploded: boolean
	hasDefused: boolean
	handleClick: () => void
}) {
	if (hasExploded) {
		return (
			<figure>
				<span role="img" aria-label="Explosion Emoji">
					💥
				</span>
				<figcaption>You lose</figcaption>
			</figure>
		)
	}

	if (hasDefused) {
		return (
			<figure>
				<span role="img" aria-label="Explosion Emoji">
					🎉
				</span>
				<figcaption>You Win</figcaption>
			</figure>
		)
	}

	return (
		<button className="bomb" onClick={handleClick}>
			<span role="img" aria-label="Dynamite Emoji">
				🧨
			</span>
		</button>
	)
}

export default function Timeout() {
	const [hasDefused, setHasDefused] = useState(false)
	const [hasExploded, setHasExploded] = useState(false)

	const clear = useTimeout(() => {
		setHasExploded(!hasExploded)
	}, 4000)

	const handleClick = () => {
		clear()
		setHasDefused(true)
	}

	return (
		<section>
			<h1>useTimeout</h1>
			<p>You have 1s to defuse (click) the bomb or it will explode </p>
			<button
				className="link"
				onClick={() => {
					window.location.reload()
				}}
			>
				Reload
			</button>
			<Bomb
				hasDefused={hasDefused}
				hasExploded={hasExploded}
				handleClick={handleClick}
			/>
		</section>
	)
}
