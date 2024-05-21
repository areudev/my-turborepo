import { useState } from 'react'
import { usePageLeave } from '../lib/use-page-leave'

export default function PageLeave() {
	const [distractions, setDistractions] = useState(0)

	usePageLeave(() => {
		setDistractions(d => d + 1)
	})

	return (
		<section>
			<h1>usePageLeave</h1>
			<p>(Mouse out of the page)</p>
			<h3>
				You've been distracted {distractions}{' '}
				{distractions === 1 ? 'time' : 'times'}.
			</h3>
		</section>
	)
}
