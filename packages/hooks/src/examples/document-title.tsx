import { useState } from 'react'
import { useDocumentTitle } from '../lib/use-document-title'

export default function DocumentTitle() {
	const [count, setCount] = useState(0)

	const handleClick = () => setCount(count + 1)

	useDocumentTitle(`Clicked ${count} times.`)

	return (
		<section>
			<h1>useDocumentTitle</h1>
			<button onClick={handleClick}>Increment Count: {count}</button>

			<p>
				You won't be able to see the changes if you're in a sandbox environment.
				Instead, you'll want to open up the app{' '}
				<a
					href="https://codesandbox.io/s/usedocumenttitle-challenge-qqt4zt?file=/src/useDocumentTitle.js"
					target="_blank"
					rel="noreferrer"
				>
					in a new tab and paste your code into it.
				</a>
				.
			</p>
		</section>
	)
}
