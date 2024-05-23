import { useEffect, useState } from 'react'
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandListDialoged,
} from '../lib/command-dialoged'

export function CommandDemo() {
	const [open, setOpen] = useState(false)

	return (
		<div className="flex items-center justify-center">
			<Command>
				<CommandInput
					onClick={() => {
						setOpen(open => !open)
					}}
					placeholder="Type a command or search..."
				/>
				{open ? (
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Suggestions">
							<CommandItem>Calendar</CommandItem>
							<CommandItem>Search Emoji</CommandItem>
							<CommandItem>Calculator</CommandItem>
						</CommandGroup>
					</CommandList>
				) : null}
			</Command>
			<button
				onClick={() => {
					setOpen(open => !open)
				}}
			>
				Click me
			</button>
		</div>
	)
}
