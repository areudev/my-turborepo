import { useState } from 'react'
import { Button } from '../lib/button'
import { Toast } from '../lib/toast'

export function ToastDemo() {
	const [toast, setToast] = useState<{ message: string }>()
	return (
		<div className="flex self-start p-4">
			<Button
				onClick={() => {
					setToast({ message: 'All changes saved!' })
				}}
			>
				Notify
			</Button>
			{toast && <Toast duration={100000}>{toast.message}</Toast>}
		</div>
	)
}
