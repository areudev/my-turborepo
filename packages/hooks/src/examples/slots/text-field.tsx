import { useId } from 'react'
import { SlotContext, useSlotProps } from '../../lib/use-slots'

export function TextField({
	id,
	children,
}: {
	id?: string
	children: React.ReactNode
}) {
	const generatedId = useId()
	id ??= generatedId

	const slots = {
		label: { htmlFor: id },
		input: { id },
	}

	return <SlotContext.Provider value={slots}>{children}</SlotContext.Provider>
}

export function Label(props: React.ComponentProps<'label'>) {
	props = useSlotProps(props, 'label')
	return <label {...props} />
}

export function Input(props: React.ComponentProps<'input'>) {
	props = useSlotProps(props, 'input')
	return <input {...props} />
}
