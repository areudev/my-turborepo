import { useState } from 'react'
import { ToastProvider } from '@radix-ui/react-toast'
import { Button } from '../lib/button'
import { Toast } from '../lib/toast'

export function ToastDemo() {
	const [toasts, setToasts] = useState<{ id: string; message: string }[]>([])
	return (
		<div className="flex self-start p-4">
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
			<ToastProvider>
				{toasts.map(toast => (
					<Toast key={toast.id}>{toast.message}</Toast>
				))}
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
