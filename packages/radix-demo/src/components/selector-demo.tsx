import { useState } from 'react'
import {
	AppleSelectorGroupRoot,
	AppleSelectorGroupItem,
} from './apple-selector-group'
import { Button } from './button'

const options = [
	{ value: '1tb', label: '1TB SSD Storage', price: 0 },
	{ value: '2tb', label: '2TB SSD Storage', price: 400 },
	{ value: '4tb', label: '4TB SSD Storage', price: 1000 },
	{ value: '8tb', label: '8TB SSD Storage', price: 2200 },
]

export function SelectorDemo() {
	const [selectedSize, setSelectedSize] = useState(options[0].value)
	const selectedOption = options.find(option => option.value === selectedSize)

	return (
		<div className="space-y-4">
			<p>Storage</p>
			<AppleSelectorGroupRoot onValueChange={v => setSelectedSize(v)}>
				{options.map(option => (
					<AppleSelectorGroupItem
						className="w-80 items-center justify-between"
						key={option.value}
						value={option.value}
					>
						<span className="flex-shrink truncate font-semibold text-white">
							{option.label}
						</span>
						{selectedSize !== option.value ? (
							<span className="font-thin">
								{option.price > (selectedOption?.price ?? 0) ? '+ ' : '- '}
								{new Intl.NumberFormat('eu-GR', {
									style: 'currency',
									currency: 'EUR',
									signDisplay: 'never',
								}).format(option.price - (selectedOption?.price ?? 0))}
							</span>
						) : null}
					</AppleSelectorGroupItem>
				))}
			</AppleSelectorGroupRoot>
			<div className="text-right">
				<Button>Continue</Button>
			</div>
		</div>
	)
}
