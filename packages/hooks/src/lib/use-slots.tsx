/* eslint-disable react-refresh/only-export-components */
import { createContext, use } from 'react'

type Slots = Record<string, Record<string, unknown>>
export const SlotContext = createContext<Slots>({})

export function useSlotProps<Props>(props: Props, slot: string): Props {
	const slots = use(SlotContext)
	// const slotProps = slots[slot] || {}
	// return { ...props, ...slotProps } as Props
	return { ...slots[slot], slot, ...props } as Props
}
