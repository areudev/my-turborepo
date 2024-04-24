import React from 'react'
import { useEventListener } from '../lib/use-event-listener'
import './event-listener.css'

export default function EventListener() {
	const ref = React.useRef<HTMLDialogElement>(null)
	const documentRef = React.useRef<Document>(document)

	const [isOpen, setIsOpen] = React.useState(false)

	const handleClick = (
		e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent,
	) => {
		const element = ref.current
		if (element && !element.contains(e.target as Node)) {
			setIsOpen(false)
		}
	}

	useEventListener('mousedown', handleClick, documentRef)

	return (
		<section>
			<h1>useEventListener</h1>
			<div style={{ minHeight: '200vh' }}>
				<button className="link" onClick={() => setIsOpen(true)}>
					Click me
				</button>
			</div>
			{isOpen && (
				<dialog ref={ref}>
					<button onClick={() => setIsOpen(false)}>X</button>
					<h2>Modal</h2>
					<p>
						Click outside the modal to close (or use the button) whatever you
						prefer.
					</p>
				</dialog>
			)}
		</section>
	)
}
