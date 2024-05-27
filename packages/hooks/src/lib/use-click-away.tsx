import {
	useRef,
	experimental_useEffectEvent as useEffectEvent,
	useEffect,
} from 'react'

export function useClickAway(cb: () => void) {
	const ref = useRef<HTMLElement | null>(null)

	const handleClick = useEffectEvent((e: MouseEvent | TouchEvent) => {
		const element = ref.current
		if (!element || element.contains(e.target as Node)) return
		cb()
	})
	useEffect(() => {
		document.addEventListener('mousedown', handleClick)
		document.addEventListener('touchstart', handleClick)
		return () => {
			document.removeEventListener('mousedown', handleClick)
			document.removeEventListener('touchstart', handleClick)
		}
	}, [])
	return ref
}
