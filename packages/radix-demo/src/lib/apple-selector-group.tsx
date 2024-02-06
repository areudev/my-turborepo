import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import React from 'react'
import { cn } from '../utils/misc'

export const AppleSelectorGroupRoot = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Root
			className={cn('mt-8 space-y-4', className)}
			{...props}
			ref={ref}
		/>
	)
})

AppleSelectorGroupRoot.displayName = RadioGroupPrimitive.Root.displayName

export const AppleSelectorGroupItem = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Item
			className={cn(
				'flex w-full rounded-lg border border-gray-500 p-4 ring-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 data-[state=checked]:border-sky-500 data-[state=checked]:ring-1 data-[state=checked]:ring-inset',
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</RadioGroupPrimitive.Item>
	)
})
AppleSelectorGroupItem.displayName = RadioGroupPrimitive.Item.displayName
