import React, { useId, useState } from 'react'
import { SlotContext } from '../../lib/use-slots'
// import { Switch } from './slot-components'

// type ToggleValue = { on: boolean; id: string; toggle: () => void }
// const ToggleContext = createContext<ToggleValue | null>(null)

export function Toggle({
	id,
	children,
}: {
	id?: string
	children: React.ReactNode
}) {
	const [on, setOn] = useState(false)
	const toggle = () => setOn(!on)
	const generatedId = useId()
	id ??= generatedId
	const slots = {
		label: { htmlFor: id },
		onText: { hidden: !on },
		offText: { hidden: on },
		switch: { id, on, onClick: toggle },
	}

	return (
		<SlotContext.Provider value={slots}>
			{/* <ToggleContext.Provider value={{ on, id, toggle }}>
				{children}
			</ToggleContext.Provider> */}
			{children}
		</SlotContext.Provider>
	)
}

// function useToggle() {
// 	const context = use(ToggleContext)
// 	if (!context) {
// 		throw new Error(
// 			'Cannot find ToggleContext. All Toggle components must be rendered within <Toggle />',
// 		)
// 	}
// 	return context
// }

// export function ToggleOn({ children }: { children: React.ReactNode }) {
// 	const { on } = useToggle()
// 	return on ? <>{children}</> : null
// }

// export function ToggleOff({ children }: { children: React.ReactNode }) {
// 	const { on } = useToggle()
// 	return on ? null : <>{children}</>
// }

// type ToggleButtonProps = Omit<React.ComponentProps<typeof Switch>, 'on'> & {
// 	on?: boolean
// }

// export function ToggleButton({ ...props }: ToggleButtonProps) {
// 	const { on, toggle, id } = useToggle()

// 	return <Switch id={id} {...props} on={on} onClick={toggle} />
// }
