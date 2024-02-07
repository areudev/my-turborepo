'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '../utils/misc'

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
	<SliderPrimitive.Root
		className={cn('relative flex h-1.5 items-center rounded-full', className)}
		ref={ref}
		{...props}
	>
		<SliderPrimitive.Track className="relative h-full grow overflow-hidden rounded-full bg-gray-700">
			<SliderPrimitive.Range className="absolute h-full bg-gray-300 duration-300 hover:bg-white" />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb />
	</SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
