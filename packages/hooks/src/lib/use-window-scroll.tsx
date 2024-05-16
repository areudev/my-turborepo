import { useLayoutEffect, useState } from 'react'

export function useWindowScroll() {
	const [scroll, setScroll] = useState<{
		x: number | null
		y: number | null
	} | null>({
		x: null,
		y: null,
	})
	function scrollTo(x: number, y: number): void
	function scrollTo(options: ScrollToOptions): void

	function scrollTo(arg1: number | ScrollToOptions, arg2?: number): void {
		if (typeof arg1 === 'number' && typeof arg2 === 'number') {
			window.scrollTo(arg1, arg2)
		} else if (typeof arg1 === 'object') {
			window.scrollTo(arg1)
		} else {
			throw new Error('Invalid arguments for scrollTo function')
		}
	}

	useLayoutEffect(() => {
		const handleScroll = () => {
			setScroll({ x: window.scrollX, y: window.scrollY })
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return [scroll, scrollTo]
}
