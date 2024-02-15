import { Button } from '../lib/button'
import { useToast } from '../lib/toast'

export function ToastDemo() {
	const { showToast } = useToast()
	return (
		<div className="flex self-start p-4">
			<div>
				<Button
					onClick={() => {
						showToast(getRandomMessage())
					}}
				>
					Notify
				</Button>
			</div>
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
