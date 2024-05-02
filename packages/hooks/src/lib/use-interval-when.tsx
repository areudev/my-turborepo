import {
	useRef,
	experimental_useEffectEvent as useEffectEvent,
	useEffect,
	useCallback,
} from 'react'

type UseIntervalWhenOptions = {
	ms: number
	when: boolean
	startImmediately?: boolean
}
type UseIntervalWhen = (cb: () => void, options: UseIntervalWhenOptions) => void
export const useIntervalWhen: UseIntervalWhen = (
	cb,
	{ ms, when, startImmediately },
) => {
	const intervalId = useRef<number | null>(null)
	const immediatelyCalled = useRef(startImmediately === true ? false : null)
	const onTick = useEffectEvent(cb)

	const clear = useCallback(() => {
		if (intervalId.current) {
			window.clearInterval(intervalId.current)
		}
	}, [])

	useEffect(() => {
		if (!when) return clear
		intervalId.current = window.setInterval(onTick, ms)

		if (startImmediately === true && immediatelyCalled.current === false) {
			onTick()
			immediatelyCalled.current = true
		}
		return clear
	}, [ms, when, clear, startImmediately])

	return clear
}
