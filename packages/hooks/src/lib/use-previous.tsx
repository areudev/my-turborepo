import { useState } from 'react'

// export function usePrevious<T>(value: T): T | null {
// 	const ref = useRef<T | null>(null)

// 	useEffect(() => {
// 		ref.current = value
// 	}, [value])

// 	return ref.current
// }

export function usePrevious<T>(value: T): T | null {
	const [current, setCurrent] = useState(value)
	const [prev, setPrev] = useState<T | null>(null)

	if (current !== value) {
		setPrev(current)
		setCurrent(value)
	}

	return prev
}
