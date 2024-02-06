'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '../utils/misc'

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
	<SliderPrimitive.Root className={cn('', className)} ref={ref} {...props}>
		<SliderPrimitive.Track>
			<SliderPrimitive.Range />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb />
	</SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
