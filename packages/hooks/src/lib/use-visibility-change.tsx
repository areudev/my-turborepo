import { useSyncExternalStore } from 'react'

function subscribe(cb: () => void) {
	document.addEventListener('visibilitychange', cb)
	return () => document.removeEventListener('visibilitychange', cb)
}
function getSnapshot() {
	return document.visibilityState === 'visible'
}
function getServerSnapshot() {
	return false
}
export function useVisibilityChange() {
	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
