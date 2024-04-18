import {
	useState,
	experimental_useEffectEvent as useEffectEvent,
	useEffect,
	useRef,
	useCallback,
} from 'react'

export function useCountdown(
	endTime: Date,
	options: {
		interval: number
		onTick: () => void
		onComplete: (time?: number) => void
	},
) {
	const id = useRef<NodeJS.Timeout | null>(null)
	const [count, setCount] = useState<number | null>(null)

	const handleClearInterval = useCallback(() => {
		if (!id.current) return
		clearInterval(id.current)
	}, [])

	const onTick = useEffectEvent(() => {
		if (count === null) return
		if (count <= 0) {
			handleClearInterval()
			options.onComplete()
		} else {
			setCount(count - 1)
			options.onTick()
		}
	})

	useEffect(() => {
		setCount(Math.round((endTime.getTime() - Date.now()) / options.interval))
	}, [endTime, options.interval])

	useEffect(() => {
		id.current = setInterval(onTick, options.interval)

		return handleClearInterval
	}, [options.interval, handleClearInterval])

	return count
}
