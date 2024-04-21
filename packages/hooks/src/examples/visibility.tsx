import { useEffect, useState } from 'react'
import { useVisibilityChange } from '../lib/use-visibility-change'

export default function Visibility() {
	const documentVisible = useVisibilityChange()
	const [tabAwayCount, setTabAwayCount] = useState(0)

	useEffect(() => {
		if (documentVisible === false) {
			setTabAwayCount(c => c + 1)
		}
	}, [documentVisible])

	return (
		<section>
			<div
				style={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<h1>Tab Away Count: {tabAwayCount}</h1>
			</div>
		</section>
	)
}
