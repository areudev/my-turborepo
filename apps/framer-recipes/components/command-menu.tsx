'use client'
import { Command } from 'cmdk'

export function CommandMenu() {
	return (
		<Command label="Command Menu">
			<Command.Input className="border p-2" />
			<Command.List>
				<Command.Empty>No results found.</Command.Empty>

				<Command.Group heading="Letters">
					<Command.Item>aaaa</Command.Item>
					<Command.Item>bbbb</Command.Item>
					<Command.Separator />
					<Command.Item>cccc</Command.Item>
				</Command.Group>

				<Command.Item>Apple</Command.Item>
			</Command.List>
		</Command>
	)
}
