import { useState } from 'react'

export function useToggle(
	initialState: boolean,
): [boolean, (v: unknown) => void] {
	const [state, setState] = useState(initialState)

	const toggle = (v: unknown) =>
		setState(prev =>
			typeof v === 'boolean' ? v : typeof prev === 'boolean' ? !prev : prev,
		)

	return [state, toggle]
}
