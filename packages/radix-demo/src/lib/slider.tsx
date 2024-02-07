'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '../utils/misc'

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
	const [usingPointer, setUsingPointer] = React.useState(false)

	return (
		<SliderPrimitive.Root
			className={cn('relative flex h-1.5 items-center rounded-full', className)}
			ref={ref}
			{...props}
		>
			<SliderPrimitive.Track
				onPointerDown={() => setUsingPointer(true)}
				onBlur={() => setUsingPointer(false)}
				className={`${
					usingPointer
						? ''
						: 'group-has-[:focus-visible]:outline group-has-[:focus-visible]:outline-2 group-has-[:focus-visible]:outline-offset-2 group-has-[:focus-visible]:outline-sky-500'
				}
  relative h-full grow overflow-hidden rounded-full bg-gray-700`}
			>
				<SliderPrimitive.Range className="group-has-[:focus-visible]:bg-white absolute h-full bg-gray-300 duration-300 hover:bg-white">
					<div className="group-has-[:focus-visible]:bg-white absolute  inset-0" />
				</SliderPrimitive.Range>
			</SliderPrimitive.Track>
			<SliderPrimitive.Thumb />
		</SliderPrimitive.Root>
	)
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
