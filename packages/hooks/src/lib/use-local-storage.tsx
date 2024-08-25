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
	// Implementation needed
	return () => {}
}

const getServerSnapshot = (): never => {
	throw Error('useLocalStorage is a client-only hook')
}

export function useLocalStorage<T extends StorageValue>(
	key: string,
	initialValue: T,
): [T, (value: T) => void] {
	const getSnapshot = (): string | null => {
		// Implementation needed
		return null
	}

	const store = React.useSyncExternalStore(
		subscribe,
		getSnapshot,
		getServerSnapshot,
	)

	const setState = (value: T): void => {
		// Implementation needed
	}

	return [store ? JSON.parse(store) : initialValue, setState]
}
