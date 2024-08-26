import * as React from 'react'

const dispatchStorageEvent = (key: string, newValue: string | null): void => {
	window.dispatchEvent(new StorageEvent('storage', { key, newValue }))
}

const setItem = (key: string, value: unknown): void => {
	const stringifiedValue = JSON.stringify(value)
	window.sessionStorage.setItem(key, stringifiedValue)
	dispatchStorageEvent(key, stringifiedValue)
}

const removeItem = (key: string): void => {
	window.sessionStorage.removeItem(key)
	dispatchStorageEvent(key, null)
}

const getItem = (key: string): string | null => {
	return window.sessionStorage.getItem(key)
}

const subscribe = (callback: () => void): (() => void) => {
	window.addEventListener('storage', callback)
	return () => {
		window.removeEventListener('storage', callback)
	}
}

const getServerSnapshot = (): never => {
	throw Error('useSessionStorage is a client-only hook')
}

export function useSessionStorage<T>(
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
		(value: T | ((prevState: T) => T) | undefined | null): void => {
			let nextState: T | undefined | null

			if (typeof value === 'function') {
				nextState = (value as (prevState: T) => T)(
					store ? JSON.parse(store) : initialValue,
				)
			} else {
				nextState = value
			}

			if (nextState == null || typeof nextState === 'undefined') {
				removeItem(key)
			} else {
				setItem(key, nextState)
			}
		},
		[store, initialValue, key],
	)

	React.useEffect(() => {
		if (getItem(key) === null && typeof initialValue !== 'undefined') {
			setItem(key, initialValue)
		}
	}, [key, initialValue])

	return [store ? (JSON.parse(store) as T) : initialValue, setState]
}
