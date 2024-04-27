import { Input, Label, Switch, TextField, Text } from './slot-components'
import { Toggle } from './toggle'

export default function SlotsExample() {
	return (
		<div>
			<div>
				<Toggle>
					<Label>Party mode</Label>
					<Switch />
					<Text slot="onText">Let's party 🥳</Text>
					<Text slot="offText">Sad town 😭</Text>
				</Toggle>
			</div>
			<hr />
			<div>
				<TextField>
					<Label>Venue</Label>
					<Input />
				</TextField>
			</div>
			<Label htmlFor="yo">what</Label>
		</div>
	)
}
