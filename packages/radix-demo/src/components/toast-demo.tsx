import { Button } from '../lib/button'
import { Toast } from '../lib/toast'

export function ToastDemo() {
	return (
		<div className="flex self-start p-4">
			<Button>Notify</Button>
			<Toast />
		</div>
	)
}
