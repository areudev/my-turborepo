import { useSyncExternalStore } from 'react'

const subscribe = (cb: () => void) => {
	window.addEventListener('languagechange', cb)

	return () => window.removeEventListener('languagechange', cb)
}
const getSnapsot = () => navigator.language

export function usePreferredLanguage() {
	return useSyncExternalStore(subscribe, getSnapsot)
}
