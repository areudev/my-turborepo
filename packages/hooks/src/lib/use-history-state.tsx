import { useCallback, useReducer } from 'react'

type State<T> = { past: T[]; present: T; future: T[] }

const initialState = { past: [], present: null, future: [] }

type UndoAction = { type: 'UNDO' }
type RedoAction = { type: 'REDO' }
type SetAction<T> = { type: 'SET'; newPresent: T }
type ClearAction<T> = { type: 'CLEAR'; initialPresent: T }

type Action<T> = UndoAction | RedoAction | SetAction<T> | ClearAction<T>

function reducer<T>(state: State<T>, action: Action<T>) {
	const { past, present, future } = state

	if (action.type === 'UNDO') {
		return {
			past: past.slice(0, past.length - 1),
			present: past[past.length - 1],
			future: [present, ...future],
		}
	} else if (action.type === 'REDO') {
		return {
			past: [...past, present],
			present: future[0],
			future: future.slice(1),
		}
	} else if (action.type === 'SET') {
		const { newPresent } = action

		if (action.newPresent === present) {
			return state
		}

		return {
			past: [...past, present],
			present: newPresent,
			future: [],
		}
	} else if (action.type === 'CLEAR') {
		return {
			...initialState,
			present: action.initialPresent,
		}
	} else {
		throw new Error('Unsupported action type')
	}
}

export function useHistoryState<T>(initialPresent = {} as T) {
	const [state, dispatch] = useReducer(reducer, {
		...initialState,
		present: initialPresent,
	})

	const canUndo = state.past.length > 0
	const canRedo = state.future.length > 0
	const set = useCallback((value: T) => {
		dispatch({
			type: 'SET',
			newPresent: value,
		})
	}, [])
	const undo = useCallback(() => {
		if (!canUndo) return
		dispatch({
			type: 'UNDO',
		})
	}, [canUndo])
	const redo = useCallback(() => {
		if (!canRedo) return
		dispatch({
			type: 'REDO',
		})
	}, [canRedo])
	const clear = useCallback(() => {
		dispatch({
			type: 'CLEAR',
			initialPresent,
		})
	}, [initialPresent])

	return {
		state: state.present as typeof initialPresent,
		canUndo,
		canRedo,
		set,
		undo,
		redo,
		clear,
	}
}
