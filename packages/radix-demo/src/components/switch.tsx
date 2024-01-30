import * as Switch from '@radix-ui/react-switch'
import { useId } from 'react'

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
					<Switch.Root
						// checked={airplaneMode}
						className="w-11 rounded-full bg-gray-700 p-px shadow-inner shadow-black/50 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 active:bg-gray-600 data-[state=checked]:bg-sky-500 active:data-[state=checked]:bg-sky-400"
						id={switchId}
						name="airplaneMode"
						// onCheckedChange={setAirplaneMode}
					>
						<Switch.Thumb className="block h-6 w-6 rounded-full bg-gray-200 shadow-sm transition  data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-white" />
					</Switch.Root>
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
