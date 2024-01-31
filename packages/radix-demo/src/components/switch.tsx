import * as SwitchPrimitives from '@radix-ui/react-switch'
import React from 'react'
import { cn } from '../utils/misc'

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cn(
			'w-11 rounded-full bg-gray-700 p-px shadow-inner shadow-black/50 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 active:bg-gray-600 data-[state=checked]:bg-sky-500 active:data-[state=checked]:bg-sky-400',
			className,
		)}
		ref={ref}
		{...props}
	>
		<SwitchPrimitives.Thumb className="block h-6 w-6 rounded-full bg-gray-200 shadow-sm transition  data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-white" />
	</SwitchPrimitives.Root>
))

Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
