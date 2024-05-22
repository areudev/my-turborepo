import { Command } from 'cmdk'
import React from 'react'
import {
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from '../lib/command'
import { SpeakerXMark } from './icons'

// export const CommandDemo = () => {
// 	const [value, setValue] = React.useState('apple')

// 	return (
// 		<Command value={value} onValueChange={setValue}>
// 			<Command.Input />
// 			<Command.List>
// 				<Command.Item>Orange</Command.Item>
// 				<Command.Item>Apple</Command.Item>
// 			</Command.List>
// 		</Command>
// 	)
// }

export function CommandDemo() {
	return (
		<Command className="rounded-lg border shadow-md">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
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
			</CommandList>
		</Command>
	)
}
