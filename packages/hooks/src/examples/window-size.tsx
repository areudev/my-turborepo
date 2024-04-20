import { useWindowSize } from '../lib/use-window-size'
import './window-size.css'

function Browser({
	size,
}: {
	size: { width: number | null; height: number | null }
}) {
	return (
		<div
			style={{
				width: size.width! / 4,
				height: size.height! / 4,
				border: '1px solid white',
			}}
		/>
	)
}

export default function WindowSize() {
	const size = useWindowSize()

	return (
		<section>
			<h1>useWindowSize</h1>
			<p>Resize the window</p>
			<table>
				<tbody>
					<tr>
						<th>width</th>
						<td>{size.width}</td>
					</tr>
					<tr>
						<th>height</th>
						<td>{size.height}</td>
					</tr>
				</tbody>
			</table>
			<Browser size={size} />
		</section>
	)
}
