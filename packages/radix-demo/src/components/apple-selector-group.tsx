import * as RadioGroup from '@radix-ui/react-radio-group'

export function AppleSelectorGroup() {
	return (
		<RadioGroup.Root>
			<RadioGroup.Item value="fuji">Fuji</RadioGroup.Item>
			<RadioGroup.Item value="jonathan">Jonathan</RadioGroup.Item>
			<RadioGroup.Item value="honeycrisp">Honeycrisp</RadioGroup.Item>
		</RadioGroup.Root>
	)
}
