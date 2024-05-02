import { useCallback, useState } from 'react'

export function useList<T>(initial: T[] = []) {
	const [list, setList] = useState(initial)

	const set = useCallback((list: T[]) => setList(list), [])
	const push = useCallback((element: T) => {
		setList(l => [...l, element])
	}, [])
	const removeAt = useCallback(
		(index: number) => setList(l => l.filter((_, i) => i !== index)),
		[],
	)
	const updateAt = useCallback(
		(index: number, element: T) =>
			setList(l => l.map((e, i) => (i === index ? element : e))),
		[],
	)
	const insertAt = useCallback(
		(index: number, element: T) =>
			setList(l => [...l.slice(0, index), element, ...l.slice(index)]),
		[],
	)
	const clear = useCallback(() => setList([]), [])

	return { list, set, push, removeAt, updateAt, insertAt, clear }
}
