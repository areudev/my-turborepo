import { useId } from 'react'
import { Switch } from '../lib/switch'

export function SwitchDemo() {
	const switchId = useId()
	// const [airplaneMode, setAirplaneMode] = useState(false)

	return (
		<div>
			{/* <p>Airplane mode is {airplaneMode ? 'on' : 'off'}</p> */}
			<form
				onSubmit={event => {
					event.preventDefault()
					const formData = new FormData(event.currentTarget)
					const json = JSON.stringify(Object.fromEntries(formData))
					alert(json)
				}}
			>
				<label className="flex space-x-4" htmlFor={switchId}>
					<span className="font-medium">Airplane mode</span>
					<Switch
						// checked={airplaneMode}
						id={switchId}
						name="airplaneMode"
						// onCheckedChange={setAirplaneMode}
					/>
				</label>
				<label className="mt-2 flex items-center  space-x-4" htmlFor="terms">
					<span>Agree to terms</span>
					<input id="terms" name="terms" type="checkbox" />
				</label>
				<div className="mt-4">
					<button
						className="rounded bg-white px-2 py-px text-gray-900"
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}
