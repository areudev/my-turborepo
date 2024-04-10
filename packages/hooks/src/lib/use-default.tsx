import { useState } from 'react'

export function useDefault<T>(
	initialState: T,
	defaultState: T,
): [T, (state: T | null) => void] {
	const [state, setState] = useState<T | null>(initialState)
	if (typeof state === 'undefined' || state === null)
		return [defaultState, setState]

	return [state, setState]
}
