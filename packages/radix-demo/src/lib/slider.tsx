import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

// import { cn } from '../utils/misc'

export const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>((props, ref) => {
	return (
		<ProgressPrimitive.Root ref={ref} {...props}>
			<ProgressPrimitive.Indicator />
		</ProgressPrimitive.Root>
	)
})

Progress.displayName = ProgressPrimitive.Root.displayName
