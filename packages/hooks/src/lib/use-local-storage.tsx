import * as React from 'react'

type StorageValue = string | number | boolean | object | null

const dispatchStorageEvent = (key: string, newValue: string | null): void => {
	window.dispatchEvent(new StorageEvent('storage', { key, newValue }))
}

const setItem = (key: string, value: StorageValue): void => {
	const stringifiedValue = JSON.stringify(value)
	window.localStorage.setItem(key, stringifiedValue)
	dispatchStorageEvent(key, stringifiedValue)
}

const removeItem = (key: string): void => {
	window.localStorage.removeItem(key)
	dispatchStorageEvent(key, null)
}

const getItem = (key: string): string | null => {
	return window.localStorage.getItem(key)
}

const subscribe = (callback: () => void): (() => void) => {
	window.addEventListener('storage', callback)

	return () => {
		window.removeEventListener('storage', callback)
	}
}

const getServerSnapshot = (): never => {
	throw Error('useLocalStorage is a client-only hook')
}

export function useLocalStorage<T extends StorageValue>(
	key: string,
	initialValue: T,
): [T, (value: T) => void] {
	const getSnapshot = (): string | null => {
		return getItem(key)
	}

	const store = React.useSyncExternalStore(
		subscribe,
		getSnapshot,
		getServerSnapshot,
	)

	const setState = React.useCallback(
		(v: T | ((prevState: T) => T)) => {
			try {
				const nextState =
					typeof v === 'function'
						? (v as (prevState: T) => T)(
								store ? JSON.parse(store) : initialValue,
							)
						: v

				if (nextState === undefined || nextState === null) {
					removeItem(key)
				} else {
					setItem(key, nextState)
				}
			} catch (e) {
				console.warn(e)
			}
		},
		[key, store, initialValue],
	)

	React.useEffect(() => {
		if (getItem(key) === null && typeof initialValue !== 'undefined') {
			setItem(key, initialValue)
		}
	}, [key, initialValue])

	return [store ? JSON.parse(store) : initialValue, setState]
}
