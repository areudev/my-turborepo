import * as Switch from '@radix-ui/react-switch'

export function SwitchDemo() {
	return (
		<Switch.Root className="w-11 rounded-full bg-gray-700 p-px shadow-inner shadow-black/50 transition duration-700 active:bg-gray-600  data-[state=checked]:bg-sky-500 active:data-[state=checked]:bg-sky-400">
			<Switch.Thumb className="block h-6 w-6 rounded-full bg-gray-200 shadow-sm transition duration-700 data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-white" />
		</Switch.Root>
	)
}
