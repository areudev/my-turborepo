import {Input, Button, PopoverDemo, ProgressDemo} from './components'

export function App() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1 className="hello">This is my Yolo UI Yall</h1>
			<Lorem />
			<Button violet>Hello</Button>
			<div
				style={{
					width: '500px',
				}}
			>
				<Input />
			</div>
			<ProgressDemo />
			<PopoverDemo />
		</div>
	)
}

export function Lorem() {
	return (
		<div className="yo">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente error
				veniam provident perferendis at, magni impedit ut. Reiciendis nobis, non
				praesentium at est incidunt, corrupti nisi molestiae modi nulla
				sapiente.
			</p>
		</div>
	)
}
