export function singleton<Value>(name: string, value: () => Value): Value {
	const yolo = global as unknown as {__singletons?: Record<string, Value>}
	yolo.__singletons ??= {}
	yolo.__singletons[name] ??= value()
	return yolo.__singletons[name]
}
