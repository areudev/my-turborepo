/* eslint-disable react-refresh/only-export-components */
import { createContext, use } from 'react'

type Slots = Record<string, Record<string, unknown>>
export const SlotContext = createContext<Slots>({})

export function useSlotProps<Props>(
	props: Props & { slot?: string },
	defaultSlot?: string,
): Props {
	const slot = props.slot ?? defaultSlot
	if (!slot) return props

	const slots = use(SlotContext)
	console.log(slots)
	return { ...slots[slot], slot, ...props } as Props
}
