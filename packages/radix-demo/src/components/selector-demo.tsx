import {
	AppleSelectorGroupRoot,
	AppleSelectorGroupItem,
} from './apple-selector-group'

const options = [
	{ size: '1TB' },
	{ size: '2TB' },
	{ size: '4TB' },
	{ size: '8TB' },
]

export function SelectorDemo() {
	return (
		<AppleSelectorGroupRoot>
			{options.map(option => (
				<AppleSelectorGroupItem key={option.size} value={option.size}>
					{option.size}
				</AppleSelectorGroupItem>
			))}
		</AppleSelectorGroupRoot>
	)
}
