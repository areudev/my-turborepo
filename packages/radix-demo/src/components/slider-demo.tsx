import { Slider } from '../lib/slider'
import { SpeakerWave, SpeakerXMark } from './icons'

export function SliderDemo() {
	return (
		<div className="mx-auto w-full max-w-xs">
			<form
				className="space-y-8 rounded"
				onSubmit={event => {
					event.preventDefault()
					const formData = new FormData(event.currentTarget)
					const json = JSON.stringify(Object.fromEntries(formData))
					alert(json)
				}}
			>
				<p className="text-sm  font-medium text-white/60">Settings</p>
				<div className="flex items-center gap-3">
					<SpeakerWave className="h-5 w-5" />
					<Slider name="what" defaultValue={[25]} className="grow" />
					<SpeakerXMark className="h-5 w-5" />
				</div>
				<input className="w-full" name="native" type="range" />
				<div className="mt-5 flex items-center justify-between">
					<button
						className="rounded bg-white/[.15] px-3 py-1 font-medium text-white"
						type="submit"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	)
}
