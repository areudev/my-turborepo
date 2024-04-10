import { useReducer } from 'react'

export function useToggle(
	initialState: unknown,
): [boolean, (v: unknown) => void] {
	return useReducer(
		(acc: boolean, curr: unknown) => (typeof curr === 'boolean' ? curr : !acc),
		Boolean(initialState),
	)
}
