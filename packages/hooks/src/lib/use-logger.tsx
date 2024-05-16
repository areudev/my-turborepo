import {
	useEffect,
	experimental_useEffectEvent as useEffectEvent,
	useRef,
} from 'react'

export function useLogger(name: string, rest: unknown) {
	const initialRef = useRef(true)
	const handleLog = useEffectEvent((event: string) => {
		console.log(`${name} ${event} ${rest}`)
	})

	useEffect(() => {
		if (!initialRef.current) {
			handleLog('updated')
		}
	})

	useEffect(() => {
		handleLog('mounted')
		initialRef.current = false
		return () => {
			handleLog('unmounted')
			initialRef.current = true
		}
	}, [])
}
