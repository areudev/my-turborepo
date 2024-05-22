import { useEffect, useState } from 'react'
const events = [
	'mousemove',
	'mousedown',
	'resize',
	'keydown',
	'touchstart',
	'wheel',
] as const

function throttle(cb: () => void, ms: number) {
	let lastTime = 0

	return () => {
		const now = Date.now()
		if (now - lastTime >= ms) {
			cb()
			lastTime = now
		}
	}
}

export function useIdle(ms = 1000 * 20) {
	const [idle, setIdle] = useState(false)

	useEffect(() => {
		let timeoutId: NodeJS.Timeout

		const handleTimeout = () => {
			setIdle(true)
		}
		const handleEvent = throttle(() => {
			setIdle(false)
			if (timeoutId) clearTimeout(timeoutId)
			timeoutId = setTimeout(handleTimeout, ms)
		}, 500)
		const handleVisibilityChange = () => {
			if (!document.hidden) handleEvent()
		}
		timeoutId = setTimeout(handleTimeout, ms)
		events.forEach(event => {
			window.addEventListener(event, handleEvent)
		})
		document.addEventListener('visibilitychange', handleVisibilityChange)

		return () => {
			clearTimeout(timeoutId)
			events.forEach(event => {
				window.removeEventListener(event, handleEvent)
			})
			document.removeEventListener('visibilitychange', handleVisibilityChange)
		}
	}, [ms])

	return idle
}
