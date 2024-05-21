import { useEffect, experimental_useEffectEvent as useEffectEvent } from 'react'
type KeyPressOptions = {
	event?: keyof WindowEventMap
	target?: EventTarget | null
	eventOptions?: boolean | AddEventListenerOptions
}
export function useKeyPress(
	key: string,
	cb: (event: KeyboardEvent) => void,
	options: KeyPressOptions = {},
) {
	const { event = 'keydown', target = window ?? null, eventOptions } = options

	const onKeyPress = useEffectEvent(cb)

	useEffect(() => {
		const handler = (event: Event) => {
			if (event instanceof KeyboardEvent && event.key === key) {
				onKeyPress(event)
			}
		}
		if (!target) return
		target.addEventListener(event, handler, eventOptions)

		return () => {
			target.removeEventListener(event, handler, eventOptions)
		}
	}, [event, target, eventOptions, key])
}
