// function isPlainObject(
// 	value: unknown,
// ): value is Record<string | number | symbol, unknown> {
// 	return Object.prototype.toString.call(value) === '[object Object]'

import { useState } from 'react'

function isPlainObject(
	value: unknown,
): value is Record<string | number | symbol, unknown> {
	return (
		typeof value === 'object' &&
		value !== null &&
		Object.prototype.toString.call(value) === '[object Object]' &&
		value.constructor === Object
	)
}

export function useObjectState<T extends Record<string, unknown>>(initial: T) {
	const [state, setState] = useState(initial)

	const updateState = (newState: Partial<T> | ((state: T) => Partial<T>)) => {
		setState(prevState => {
			let nextState: Partial<T>
			if (typeof newState === 'function') {
				nextState = newState(prevState)
			} else {
				nextState = newState
			}
			nextState = isPlainObject(nextState) ? nextState : {}

			return { ...prevState, ...nextState }
		})
	}

	return [state, updateState] as const
}
