import { Input, Label, TextField } from './text-field'
import { Toggle, ToggleButton, ToggleOff, ToggleOn } from './toggle'

export default function SlotsExample() {
	return (
		<div>
			<div>
				<Toggle>
					<Label>Party mode</Label>
					<ToggleButton />
					<ToggleOn>Let's party 🥳</ToggleOn>
					<ToggleOff>Sad town 😭</ToggleOff>
				</Toggle>
			</div>
			<hr />
			<div>
				<TextField>
					<Label>Venue</Label>
					<Input />
				</TextField>
			</div>
		</div>
	)
}
