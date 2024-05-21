import { useEffect, experimental_useEffectEvent as useEffectEvent } from 'react'

export function useKeyPress(key, cb, options = {}) {
	const { event = 'keydown', target = window ?? null, eventOptions } = options

	const onKeyPress = useEffectEvent(e => {
		if (e.key === key) {
			cb(e)
		}
	})

	useEffect(() => {
		target.addEventListener(event, onKeyPress)

		return () => {
			target.removeEventListener(event, onKeyPress)
		}
	}, [event, target])
}
