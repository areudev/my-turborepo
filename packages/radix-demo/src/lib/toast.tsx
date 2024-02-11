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

const ToastClose = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Close>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Close
		ref={ref}
		className={cn('', className)}
		toast-close=""
		{...props}
	>
		{/* <Cross2Icon className="h-4 w-4" /> */}X
	</ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastDescription = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Description>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Description
		ref={ref}
		className={cn('', className)}
		{...props}
	/>
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

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
				<ToastDescription>Changes saved!</ToastDescription>
				<ToastClose />
			</ToastPrimitives.Root>

			<ToastViewport />
		</ToastProvider>
	)
})

Toast.displayName = ToastPrimitives.Root.displayName
