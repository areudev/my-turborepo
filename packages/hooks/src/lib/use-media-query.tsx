import { useCallback, useSyncExternalStore } from 'react'

export function useMediaQuery(query: string) {
	const subscribe = useCallback(
		(callback: () => void) => {
			const mql = window.matchMedia(query)
			mql.addEventListener('change', callback)

			return () => mql.removeEventListener('change', callback)
		},
		[query],
	)
	const getSnapshot = () => {
		return window.matchMedia(query).matches
	}
	const getServerSnapshot = () => {
		throw Error('useMediaQuery is a client-only hook')
	}

	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
