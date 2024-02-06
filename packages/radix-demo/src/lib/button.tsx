import React from 'react'
import { cn } from '../utils/misc'

export function Button({
	className,
	children,
	...props
}: React.ComponentPropsWithoutRef<'button'>) {
	return (
		<button
			className={cn(
				'rounded bg-blue-500 px-3 py-1 text-sm font-semibold text-white hover:bg-blue-400 focus:outline-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500',
				className,
			)}
			type="button"
			{...props}
		>
			{children}
		</button>
	)
}
