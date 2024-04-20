import { useCallback, useState } from 'react'

export function useQueue<T>(initialValue: T[] = []) {
	const [queue, setQueue] = useState(initialValue)

	const add = useCallback((item: T) => {
		setQueue(q => [...q, item])
	}, [])

	const remove = useCallback(() => {
		let removedItem

		setQueue(([first, ...q]) => {
			removedItem = first
			return q
		})

		return removedItem
	}, [])

	const clear = useCallback(() => {
		setQueue([])
	}, [])

	return {
		add,
		remove,
		clear,
		first: queue[0],
		last: queue[queue.length - 1],
		size: queue.length,
		queue,
	}
}
