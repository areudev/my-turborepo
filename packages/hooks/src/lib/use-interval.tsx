/// <reference types="react/experimental" />

import {
	useRef,
	experimental_useEffectEvent as useEffectEvent,
	useEffect,
	useCallback,
} from 'react'

export function useInterval(cb: () => void, ms: number) {
	const id = useRef<NodeJS.Timeout | null>(null)

	const handleClearInterval = useCallback(() => {
		if (!id.current) return
		clearInterval(id.current)
	}, [])

	const onInterval = useEffectEvent(cb)

	useEffect(() => {
		id.current = setInterval(onInterval, ms)
		return handleClearInterval
	}, [ms, handleClearInterval])

	return handleClearInterval
}
