import React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '../utils/misc'
import { XMark } from '../components/icons'

export function ToastProvider({
	children,
	...props
}: ToastPrimitives.ToastProviderProps) {
	return (
		<ToastPrimitives.Provider {...props}>
			<AnimatePresence mode="popLayout">{children}</AnimatePresence>
		</ToastPrimitives.Provider>
	)
}

export const ToastViewport = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.ToastViewport>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.ToastViewport>
>(({ className, ...props }, ref) => {
	return (
		<ToastPrimitives.ToastViewport
			{...props}
			ref={ref}
			className={cn(
				'fixed right-4 top-4 flex w-80 flex-col-reverse gap-3 rounded-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400',
				className,
			)}
		/>
	)
})

ToastViewport.displayName = ToastPrimitives.ToastViewport.displayName

export const ToastClose = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Close>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Close
		ref={ref}
		className={cn(
			'rounded text-gray-500 hover:text-gray-200 focus-visible:text-gray-200 focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400',
			className,
		)}
		toast-close=""
		{...props}
	>
		<XMark className="size-5 " />
	</ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

export const ToastDescription = React.forwardRef<
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
		<ToastPrimitives.Root ref={ref} asChild {...props}>
			<motion.li
				initial={{ x: 'calc(100% + 16px)' }}
				animate={{ x: 0 }}
				exit={{ opacity: 0, zIndex: -1, transition: { duration: 0.2 } }}
				transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
				layout
				className="flex items-center justify-between rounded-lg border border-gray-500 bg-gray-700 px-6 py-4 text-sm font-medium focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
			>
				{children}
			</motion.li>
		</ToastPrimitives.Root>
	)
})

Toast.displayName = ToastPrimitives.Root.displayName
