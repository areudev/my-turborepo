import type { RefObject } from 'react'
import {
	useEffect,
	useRef,
	// experimental_useEffectEvent as useEffectEvent,
} from 'react'

function useEventListener<K extends keyof MediaQueryListEventMap>(
	eventName: K,
	handler: (event: MediaQueryListEventMap[K]) => void,
	element: RefObject<MediaQueryList>,
	options?: AddEventListenerOptions | boolean,
): void
function useEventListener<K extends keyof WindowEventMap>(
	eventName: K,
	handler: (event: WindowEventMap[K]) => void,
	element?: undefined,
	options?: AddEventListenerOptions | boolean,
): void
function useEventListener<
	K extends keyof HTMLElementEventMap,
	T extends HTMLElement = HTMLDivElement,
>(
	eventName: K,
	handler: (event: HTMLElementEventMap[K]) => void,
	element: RefObject<T>,
	options?: AddEventListenerOptions | boolean,
): void
function useEventListener<K extends keyof DocumentEventMap>(
	eventName: K,
	handler: (event: DocumentEventMap[K]) => void,
	element: RefObject<Document>,
	options?: AddEventListenerOptions | boolean,
): void
function useEventListener<
	KW extends keyof WindowEventMap,
	KH extends keyof HTMLElementEventMap,
	KM extends keyof MediaQueryListEventMap,
	T extends HTMLElement | MediaQueryList | void = void,
>(
	eventName: KH | KM | KW,
	handler: (
		event:
			| Event
			| HTMLElementEventMap[KH]
			| MediaQueryListEventMap[KM]
			| WindowEventMap[KW],
	) => void,
	element?: RefObject<T>,
	options?: AddEventListenerOptions | boolean,
) {
	const savedHandler = useRef(handler)
	useEffect(() => {
		savedHandler.current = handler
	}, [handler])
	// const onHandle = useEffectEvent(handler)
	useEffect(() => {
		const targetElement: Document | T | Window = element?.current ?? window
		if (!targetElement?.addEventListener) return
		// const listener: typeof handler = event => savedHandler.current(event)
		// targetElement.addEventListener(eventName, onHandle, options)
		const onHandle = (event: Event) => savedHandler.current(event)
		targetElement.addEventListener(eventName, onHandle, options)
		return () => {
			targetElement.removeEventListener(eventName, onHandle, options)
		}
	}, [eventName, element, options])
}

export { useEventListener }
