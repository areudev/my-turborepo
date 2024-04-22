import {
	useState,
	experimental_useEffectEvent as useEffectEvent,
	useEffect,
} from 'react'

export function useContinuousRetry(
	callback: () => boolean,
	interval: number = 100,
	options: { maxRetries?: number } = { maxRetries: Infinity },
) {
	const [hasResolved, setHasResolved] = useState(false)
	const onCallback = useEffectEvent(callback)

	useEffect(() => {
		let retries = 0

		const id = setInterval(() => {
			if (onCallback()) {
				setHasResolved(true)
				clearInterval(id)
			} else if (options.maxRetries && retries >= options.maxRetries) {
				clearInterval(id)
			} else {
				retries++
			}
		}, interval)
		return () => {
			clearInterval(id)
		}
	}, [interval, options.maxRetries])

	return hasResolved
}
