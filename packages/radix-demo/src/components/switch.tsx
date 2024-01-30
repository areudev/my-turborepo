import * as Switch from '@radix-ui/react-switch'
import { useId } from 'react'

export function SwitchDemo() {
	const switchId = useId()
	return (
		<label className="flex space-x-4" htmlFor={switchId}>
			<span className="font-medium">Airplane mode</span>
			<Switch.Root
				className="w-11 rounded-full bg-gray-700 p-px shadow-inner shadow-black/50 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 active:bg-gray-600 data-[state=checked]:bg-sky-500 active:data-[state=checked]:bg-sky-400"
				id={switchId}
			>
				<Switch.Thumb className="block h-6 w-6 rounded-full bg-gray-200 shadow-sm transition  data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-white" />
			</Switch.Root>
		</label>
	)
}
