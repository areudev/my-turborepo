import * as React from 'react'
import { useLocalStorage } from '../../lib/use-local-storage'
import './styles.css'

interface Point {
	x: number
	y: number
}

export default function App() {
	const [drawing, saveDrawing] = useLocalStorage<string | null>('drawing', null)
	const ref = React.useRef(null)
	React.useEffect(() => {
		createDrawing(ref.current, drawing, saveDrawing)
	}, [drawing, saveDrawing])

	return (
		<section>
			<header>
				<h1>useLocalStorage</h1>

				<button className="link" onClick={() => window.location.reload()}>
					Reload Window
				</button>
				<button
					className="link"
					onClick={() => {
						window.localStorage.clear()
						window.location.reload()
					}}
				>
					Clear Local Storage
				</button>
			</header>
			<figure>
				<canvas ref={ref} width={800} height={800} />
				<figcaption>(draw something)</figcaption>
			</figure>
		</section>
	)
}

function createDrawing(
	canvas: HTMLCanvasElement | null,
	savedDrawing: string | null,
	saveDrawing: (drawing: string | null) => void,
) {
	if (!canvas) return

	const ctx = canvas.getContext('2d')
	if (!ctx) return

	let isDrawing = false
	let lastPoint: Point | null = null

	// Load saved drawing
	if (savedDrawing) {
		const img = new Image()
		img.onload = () => {
			ctx.drawImage(img, 0, 0)
		}
		img.src = savedDrawing
	}

	function startDrawing(e: MouseEvent) {
		isDrawing = true
		draw(e)
	}

	function stopDrawing() {
		isDrawing = false
		lastPoint = null
		if (canvas) saveDrawing(canvas.toDataURL())
	}

	function draw(e: MouseEvent) {
		if (!isDrawing || !canvas || !ctx) return

		const rect = canvas.getBoundingClientRect()
		const scaleX = canvas.width / rect.width
		const scaleY = canvas.height / rect.height
		const point: Point = {
			x: (e.clientX - rect.left) * scaleX,
			y: (e.clientY - rect.top) * scaleY,
		}

		ctx.strokeStyle = '#ffffff'
		ctx.lineWidth = 5
		ctx.lineCap = 'round'
		ctx.lineJoin = 'round'

		if (lastPoint) {
			ctx.beginPath()
			ctx.moveTo(lastPoint.x, lastPoint.y)
			ctx.lineTo(point.x, point.y)
			ctx.stroke()
		}

		lastPoint = point
	}

	canvas.addEventListener('mousedown', startDrawing)
	canvas.addEventListener('mousemove', draw)
	canvas.addEventListener('mouseup', stopDrawing)
	canvas.addEventListener('mouseout', stopDrawing)

	// Clean up function
	return () => {
		canvas?.removeEventListener('mousedown', startDrawing)
		canvas?.removeEventListener('mousemove', draw)
		canvas?.removeEventListener('mouseup', stopDrawing)
		canvas?.removeEventListener('mouseout', stopDrawing)
	}
}
