import { useState } from 'react'
import { Button } from '../lib/button'
import {
	Toast,
	ToastClose,
	ToastDescription,
	ToastProvider,
	ToastViewport,
} from '../lib/toast'

export function ToastDemo() {
	const [toasts, setToasts] = useState<{ id: string; message: string }[]>([])
	return (
		<div className="flex self-start p-4">
			<div>
				<Button
					onClick={() => {
						setToasts([
							...toasts,
							{ message: getRandomMessage(), id: crypto.randomUUID() },
						])
					}}
				>
					Notify
				</Button>
			</div>
			<ToastProvider>
				{toasts.map(toast => (
					<Toast
						duration={10000}
						onOpenChange={() => {
							setToasts(toasts.filter(t => t.id !== toast.id))
						}}
						forceMount
						key={toast.id}
					>
						<ToastDescription>{toast.message}</ToastDescription>
						<ToastClose />
					</Toast>
				))}
				<ToastViewport />
			</ToastProvider>
		</div>
	)
}

function getRandomMessage() {
	const notifications = [
		'New message received!',
		'Update successful!',
		'Download complete.',
		'Profile updated.',
		'Payment processed.',
		'New friend request.',
		'Meeting rescheduled.',
		'Password changed.',
		'Item added to cart.',
		'Subscription expired.',
		'File uploaded successfully.',
		'Error processing request.',
		'Reminder: Appointment today.',
		'System maintenance soon.',
		'New comment on post.',
		'Weather alert: Heavy rain.',
		'Task deadline approaching.',
		'Discount code applied!',
		'Travel itinerary confirmed.',
		'Battery low: 10% remaining.',
	]

	const randomIndex = Math.floor(Math.random() * notifications.length)

	return notifications[randomIndex]
}
