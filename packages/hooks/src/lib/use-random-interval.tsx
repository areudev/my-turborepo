import {
	useRef,
	experimental_useEffectEvent as useEffectEvent,
	useEffect,
	useCallback,
} from 'react'

function getRandomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function useRandomInterval(
	callback: () => void,
	minDelay: number,
	maxDelay: number,
) {
	const timeoutId = useRef<NodeJS.Timeout | null>(null)
	const onInterval = useEffectEvent(callback)
	const handleClearTimeout = useCallback(() => {
		if (!timeoutId.current) return
		clearTimeout(timeoutId.current)
	}, [])

	useEffect(() => {
		function setRandomTimeout() {
			const delay = getRandomNumber(minDelay, maxDelay)
			timeoutId.current = setTimeout(() => {
				onInterval()
				setRandomTimeout()
			}, delay)
		}

		setRandomTimeout()
		return handleClearTimeout
	}, [minDelay, maxDelay, handleClearTimeout])
}
