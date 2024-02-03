import {
	AppleSelectorGroupRoot,
	AppleSelectorGroupItem,
} from './apple-selector-group'
import { Button } from './button'

const options = [
	{ size: '1TB' },
	{ size: '2TB' },
	{ size: '4TB' },
	{ size: '8TB' },
]

export function SelectorDemo() {
	return (
		<div className="space-y-4">
			<p>Storage</p>
			<AppleSelectorGroupRoot>
				{options.map(option => (
					<AppleSelectorGroupItem
						className="w-80"
						key={option.size}
						value={option.size}
					>
						{option.size} SSD Storage
					</AppleSelectorGroupItem>
				))}
			</AppleSelectorGroupRoot>
			<div className="text-right">
				<Button>Continue</Button>
			</div>
		</div>
	)
}
