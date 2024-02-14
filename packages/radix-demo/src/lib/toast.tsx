import React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cn } from '../utils/misc'
import { XMark } from '../components/icons'

export const ToastProvider = ToastPrimitives.ToastProvider

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
		className={cn('text-gray-500 hover:text-gray-200', className)}
		toast-close=""
		{...props}
	>
		<XMark className="size-5 " />
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
>(({ children, ...props }, ref) => {
	return (
		<>
			<ToastPrimitives.Root
				className="flex items-center justify-between rounded border border-gray-500 bg-gray-700 px-6 py-4 text-sm font-medium"
				{...props}
				ref={ref}
			>
				<ToastDescription>{children}</ToastDescription>
				<ToastClose />
			</ToastPrimitives.Root>

			<ToastViewport className="fixed right-4 top-4 flex w-80 flex-col" />
		</>
	)
})

Toast.displayName = ToastPrimitives.Root.displayName
