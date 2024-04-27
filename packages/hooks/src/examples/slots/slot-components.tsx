import React, { useId } from 'react'
import { SlotContext, useSlotProps } from '../../lib/use-slots'
import { Switch as BaseSwitch } from './switch'

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

export function Label(
	props: React.ComponentProps<'label'> & { slot?: string },
) {
	props = useSlotProps(props, 'label')
	return <label {...props} />
}

export function Input(
	props: React.ComponentProps<'input'> & { slot?: string },
) {
	props = useSlotProps(props, 'input')
	return <input {...props} />
}

export function Text(props: React.ComponentProps<'p'> & { slot?: string }) {
	props = useSlotProps(props, 'text')
	return <p {...props} />
}

type SwitchProps = React.ComponentProps<'button'> & { slot?: string }

export function Switch(props: SwitchProps) {
	props = useSlotProps(props, 'switch')
	return <BaseSwitch {...(props as React.ComponentProps<typeof BaseSwitch>)} />
}
