import React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cn } from '../utils/misc'

const ToastProvider = ToastPrimitives.ToastProvider

const ToastViewport = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.ToastViewport>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.ToastViewport>
>(({ className, ...props }, ref) => {
	return (
		<ToastPrimitives.ToastViewport
			{...props}
			ref={ref}
			className={cn(
				// 'pointer-events-none fixed inset-0 flex items-end justify-center p-4',
				'fixed right-4 top-4',
				className,
			)}
		/>
	)
})

ToastViewport.displayName = ToastPrimitives.ToastViewport.displayName

export const Toast = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>
>((props, ref) => {
	return (
		<ToastProvider>
			<ToastPrimitives.Root
				className="rounded border border-gray-500 bg-gray-700 px-6 py-4 text-sm font-medium"
				{...props}
				ref={ref}
			>
				<ToastPrimitives.Description>
					Changes saved!
				</ToastPrimitives.Description>
			</ToastPrimitives.Root>

			<ToastViewport />
		</ToastProvider>
	)
})

Toast.displayName = ToastPrimitives.Root.displayName
