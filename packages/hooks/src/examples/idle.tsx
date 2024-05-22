import { useIdle } from '../lib/use-idle'
import './idle.css'
export default function Idle() {
	const idle = useIdle(1200)

	return (
		<section>
			<h1>useIdle</h1>
			<div>
				<span className={idle ? 'idle' : ''} />
				<label>Status: {idle ? 'Idle' : 'Active'}</label>
			</div>
			{idle ? <p>Time to move your mouse</p> : <p>Hold still and wait</p>}
		</section>
	)
}
