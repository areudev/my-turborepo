import * as Switch from '@radix-ui/react-switch'

export function SwitchDemo() {
	return (
		<Switch.Root className="h-5 w-5 rounded-full bg-gray-200 data-[state=checked]:bg-green-500">
			<Switch.Thumb />
		</Switch.Root>
	)
}
