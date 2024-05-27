import { useState } from 'react'
import { useClickAway } from '../lib/use-click-away'

export default function ClickAway() {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useClickAway(() => {
		setIsOpen(false)
	}) as React.RefObject<HTMLDivElement>

	const handleOpenModal = () => {
		if (isOpen === false) {
			setIsOpen(true)
		}
	}

	return (
		<>
			<section>
				<h1>useClickAway</h1>
				<button className="link" onClick={handleOpenModal}>
					Open Modal
				</button>
			</section>
			{isOpen && (
				<div ref={ref}>
					<button onClick={() => setIsOpen(false)}>x</button>
					<h2>Modal</h2>
					<p>
						Click outside the modal to close (or use the button) whatever you
						prefer.
					</p>
				</div>
			)}
		</>
	)
}
