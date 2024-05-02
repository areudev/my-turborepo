type UseIntervalWhenOptions = {
	ms: number
	when: boolean
	startImmediately?: boolean
}
type UseIntervalWhen = (cb: () => void, options: UseIntervalWhenOptions) => void
export const useIntervalWhen: UseIntervalWhen = (
	cb,
	{ ms, when, startImmediately },
) => {}
