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
	// const [visible, setVisible] = useState(true)
	// useEffect(() => {
	// 	const handle = () => setVisible(document.visibilityState === 'visible')
	// 	handle()
	// 	document.addEventListener('visibilitychange', handle)
	// 	return () => document.removeEventListener('visibilitychange', handle)
	// }, [])
	// return visible
}
