import { useState } from 'react'
import { Button } from '../lib/button'
import {
	AppleSelectorGroupRoot,
	AppleSelectorGroupItem,
} from '../lib/apple-selector-group'

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
		<form
			className="space-y-4"
			onSubmit={event => {
				event.preventDefault()
				const formData = new FormData(event.currentTarget)
				const json = JSON.stringify(Object.fromEntries(formData))
				alert(json)
			}}
		>
			<p>Storage</p>
			<AppleSelectorGroupRoot
				name="storage-new"
				onValueChange={v => setSelectedSize(v)}
				value={selectedSize}
			>
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
			{/* <div>
				{options.map(option => (
					<label className="block" key={option.value}>
						<input name="storage" type="radio" value={option.value} />
						{option.label}
					</label>
				))}
			</div> */}
			<div className="text-right">
				<Button type="submit">Continue</Button>
			</div>
		</form>
	)
}
