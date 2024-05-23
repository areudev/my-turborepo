import {
	useRef,
	// experimental_useEffectEvent as useEffectEvent,
	useEffect,
} from 'react'

export function useClickAway(cb: () => void) {
	const ref = useRef<HTMLElement | null>(null)
	const savedHandler = useRef(cb)

	useEffect(() => {
		savedHandler.current = cb
	}, [cb])
	// const handleClick = useEffectEvent((e: MouseEvent | TouchEvent) => {
	// 	const element = ref.current
	// 	if (!element || element.contains(e.target as Node)) return
	// 	cb()
	// })

	const handleClick = (e: MouseEvent | TouchEvent) => {
		const element = ref.current
		if (!element || element.contains(e.target as Node)) return
		savedHandler.current()
	}
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
