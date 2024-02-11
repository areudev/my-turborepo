import React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cn } from '../utils/misc'

const ToastProvider = ToastPrimitives.ToastProvider

const ToastViewport = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.ToastViewport>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.ToastViewport>
>(({ className, ...props }, forwardedRef) => {
	return (
		<ToastPrimitives.ToastViewport
			{...props}
			ref={forwardedRef}
			className={cn(
				// 'pointer-events-none fixed inset-0 flex items-end justify-center p-4',
				'',
				className,
			)}
		/>
	)
})

ToastViewport.displayName = ToastPrimitives.ToastViewport.displayName

export function Toast() {
	return (
		<div>
			<h1>Toast</h1>
			<p>Toast content</p>
		</div>
	)
}
