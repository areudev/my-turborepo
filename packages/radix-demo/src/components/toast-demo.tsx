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
						{ message: 'Hello world', id: crypto.randomUUID() },
					])
				}}
			>
				Notify
			</Button>
			<ToastProvider>
				{toasts.map(toast => (
					<Toast key={toast.id}>
						{toast.message} {toast.id}
					</Toast>
				))}
			</ToastProvider>
		</div>
	)
}
