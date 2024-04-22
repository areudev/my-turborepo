import { useState } from 'react'
import { useContinuousRetry } from '../lib/use-continuous-retry'

export default function ContinuousRetry() {
	const [count, setCount] = useState(0)
	const hasResolved = useContinuousRetry(() => {
		console.log('retrying')
		return count > 10
	}, 1000)

	return (
		<section>
			<h1>useContinuousRetry</h1>
			<button className="primary" onClick={() => setCount(count + 1)}>
				{count}
			</button>
			<pre>{JSON.stringify({ hasResolved, count }, null, 2)}</pre>
		</section>
	)
}
