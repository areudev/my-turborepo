/// <reference types="react/experimental" />

import {
	experimental_useEffectEvent as useEffectEvent,
	useRef,
	useEffect,
	useCallback,
} from 'react'

export function useTimeout(cb: () => void, ms: number) {
	const id = useRef<NodeJS.Timeout | null>(null)
	const onTimeout = useEffectEvent(cb)
	const handleClearTimeout = useCallback(() => {
		if (!id.current) return
		clearTimeout(id.current)
	}, [])

	useEffect(() => {
		id.current = setTimeout(onTimeout, ms)
		return handleClearTimeout
	}, [ms, handleClearTimeout])

	return handleClearTimeout
}
