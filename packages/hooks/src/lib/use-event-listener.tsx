import {
	RefObject,
	useEffect,
	// useRef,
	experimental_useEffectEvent as useEffectEvent,
} from 'react'
function useEventListener<K extends keyof MediaQueryListEventMap>(
	eventName: K,
	handler: (event: MediaQueryListEventMap[K]) => void,
	element: RefObject<MediaQueryList>,
	options?: boolean | AddEventListenerOptions,
): void
function useEventListener<K extends keyof WindowEventMap>(
	eventName: K,
	handler: (event: WindowEventMap[K]) => void,
	element?: undefined,
	options?: boolean | AddEventListenerOptions,
): void
function useEventListener<
	K extends keyof HTMLElementEventMap,
	T extends HTMLElement = HTMLDivElement,
>(
	eventName: K,
	handler: (event: HTMLElementEventMap[K]) => void,
	element: RefObject<T>,
	options?: boolean | AddEventListenerOptions,
): void
function useEventListener<K extends keyof DocumentEventMap>(
	eventName: K,
	handler: (event: DocumentEventMap[K]) => void,
	element: RefObject<Document>,
	options?: boolean | AddEventListenerOptions,
): void
function useEventListener<
	KW extends keyof WindowEventMap,
	KH extends keyof HTMLElementEventMap,
	KM extends keyof MediaQueryListEventMap,
	T extends HTMLElement | MediaQueryList | void = void,
>(
	eventName: KW | KH | KM,
	handler: (
		event:
			| WindowEventMap[KW]
			| HTMLElementEventMap[KH]
			| MediaQueryListEventMap[KM]
			| Event,
	) => void,
	element?: RefObject<T>,
	options?: boolean | AddEventListenerOptions,
) {
	// const savedHandler = useRef(handler)
	// useEffect(() => {
	// 	savedHandler.current = handler
	// }, [handler])
	const onHandle = useEffectEvent(handler)
	useEffect(() => {
		const targetElement: T | Window | Document = element?.current ?? window
		if (!targetElement?.addEventListener) return
		// const listener: typeof handler = event => savedHandler.current(event)
		targetElement.addEventListener(eventName, onHandle, options)
		return () => {
			targetElement.removeEventListener(eventName, onHandle, options)
		}
	}, [eventName, element, options])
}

export { useEventListener }
