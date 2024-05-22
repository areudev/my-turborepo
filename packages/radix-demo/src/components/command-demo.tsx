import React from 'react'
import {
	Command,
	CommandListDialoged,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandSeparator,
	CommandShortcut,
} from '../lib/command'
import { SpeakerXMark } from './icons'

export function CommandDemo() {
	const [open, setOpen] = React.useState(false)
	return (
		<div className="w-80">
			<Command className="rounded-lg border shadow-md">
				<CommandInput placeholder="Type a command or search..." />
				<CommandListDialoged
					// modal={false}
					modal={false}
					open={open}
				>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Suggestions">
						<CommandItem>
							<SpeakerXMark className="mr-2 h-4 w-4" />
							<span>Calendar</span>
						</CommandItem>
						<CommandItem>
							<SpeakerXMark className="mr-2 h-4 w-4" />
							<span>Search Emoji</span>
						</CommandItem>
						<CommandItem>
							<SpeakerXMark className="mr-2 h-4 w-4" />
							<span>Launch</span>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Settings">
						<CommandItem>
							<SpeakerXMark className="mr-2 h-4 w-4" />
							<span>Profile</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<SpeakerXMark className="mr-2 h-4 w-4" />
							<span>Mail</span>
							<CommandShortcut>⌘B</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<SpeakerXMark className="mr-2 h-4 w-4" />
							<span>Settings</span>
							<CommandShortcut>⌘S</CommandShortcut>
						</CommandItem>
					</CommandGroup>
				</CommandListDialoged>
			</Command>
			<button
				onClick={() => {
					setOpen(!open)
				}}
			>
				What
			</button>
		</div>
	)
}
