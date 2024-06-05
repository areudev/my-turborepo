import {
	useReducer,
	experimental_useEffectEvent as useEffectEvent,
	useEffect,
	useRef,
} from 'react'

const initialState = {
	data: undefined,
	error: undefined,
}

type State<T> = {
	data: T | undefined
	error: Error | undefined
}

type Action<T> =
	| { type: 'loading' }
	| { type: 'fetched'; payload: T }
	| { type: 'error'; payload: Error }

function reducer<T>(state: State<T>, action: Action<T>): State<T> {
	switch (action.type) {
		case 'loading':
			return { ...initialState }
		case 'fetched':
			return { ...initialState, data: action.payload }
		case 'error':
			return { ...initialState, error: action.payload }
		default:
			return state
	}
}

export function useFetch<T>(url: string, options?: RequestInit) {
	const cacheRef = useRef<Map<string, T>>(new Map())
	const [state, dispatch] = useReducer(reducer<T>, initialState)
	const onFetch = useEffectEvent((url: string) => {
		return fetch(url, options)
	})

	useEffect(() => {
		let ignore = false

		async function fetchData() {
			const cachedRes = cacheRef.current.get(url)

			if (cachedRes) {
				dispatch({ type: 'fetched', payload: cachedRes })
				return
			}
			dispatch({ type: 'loading' })

			try {
				const res = await onFetch(url)
				await new Promise(resolve => setTimeout(resolve, 1000))
				if (!res.ok) {
					throw new Error(res.statusText)
				}

				const json = await res.json()
				cacheRef.current.set(url, json)

				if (ignore === false) {
					dispatch({ type: 'fetched', payload: json })
				}
			} catch (error) {
				if (ignore === false) {
					dispatch({ type: 'error', payload: error as Error })
				}
			}
		}

		fetchData()

		return () => {
			ignore = true
		}
	}, [url])

	return state
}
