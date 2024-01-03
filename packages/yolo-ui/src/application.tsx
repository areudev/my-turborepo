import {Button} from './components/button'

export function App() {
	return (
		<>
			<h1 className="hello">This is my Yolo UI Yall</h1>
			<Lorem />
		</>
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
			<Button>Hello</Button>
		</div>
	)
}
