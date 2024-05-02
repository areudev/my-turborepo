import { useToggle } from '../lib/use-toggle'
import './toggle.css'
function ToggleDemo({
	on,
	toggle,
}: {
	on: boolean
	toggle: (v: unknown) => void
}) {
	return (
		<div>
			<label className="toggle">
				<input
					onChange={toggle}
					className="toggle-checkbox"
					type="checkbox"
					checked={on}
				/>
				<div className="toggle-switch"></div>
				<span className="toggle-label">{on ? 'On' : 'Off'}</span>
			</label>
		</div>
	)
}

export default function Toggle() {
	const [on, toggle] = useToggle(true)

	return (
		<section>
			<h1>UseToggle</h1>
			<button disabled={on} className="link" onClick={() => toggle(true)}>
				Turn On
			</button>
			<button disabled={!on} className="link" onClick={() => toggle(false)}>
				Turn Off
			</button>
			<button className="link" onClick={toggle}>
				Toggle
			</button>
			<button className="link" onClick={() => toggle('nope')}>
				(Also toggles)
			</button>
			<ToggleDemo toggle={toggle} on={on} />
		</section>
	)
}
