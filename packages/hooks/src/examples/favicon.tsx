import { useState } from 'react'
import { useFavicon } from '../lib/use-favicon'

const faviconMap = {
	uidotdev: 'https://ui.dev/favicon/favicon-32x32.png',
	bytes: 'https://bytes.dev/favicon/favicon-32x32.png',
	react_newsletter: 'https://reactnewsletter.com/favicon/favicon-32x32.png',
}

export default function App() {
	const [id, setId] = useState<keyof typeof faviconMap>('uidotdev')

	useFavicon(faviconMap[id])

	return (
		<section>
			<h1
				style={{
					textAlign: 'center',
				}}
			>
				useFavicon
			</h1>
			<button
				title="Set the favicon to uidotdev's logo"
				onClick={() => setId('uidotdev')}
			>
				ui.dev
			</button>
			<button
				title="Set the favicon to Bytes' logo"
				className={`link ${id === 'bytes' && 'active'}`}
				onClick={() => setId('bytes')}
			>
				bytes
			</button>
			<button
				title="Set the favicon to React Newsletter's logo"
				className={`link ${id === 'react_newsletter' && 'active'}`}
				onClick={() => setId('react_newsletter')}
			>
				react newsletter
			</button>
		</section>
	)
}
