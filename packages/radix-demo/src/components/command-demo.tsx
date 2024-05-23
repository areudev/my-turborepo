import { useState } from 'react'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '../lib/commando'

export function CommandDemo() {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState('')

	return (
		<div className="flex w-96 flex-col items-center justify-center gap-2">
			<Command loop open={open} setOpen={setOpen}>
				<CommandInput
					onClick={() => {
						console.log('you clicked by i closed :(')
					}}
					value={value}
					onValueChange={setValue}
					placeholder="Type a command or search..."
				/>
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="books">
						{books.map(book => (
							<CommandItem
								value={`${book.title}`}
								onSelect={current => {
									console.log('selected', book.title)
									setValue(book.title)
								}}
								key={book.id}
							>
								{book.title}
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</Command>

			<div>
				<p>Selected: {value}</p>
			</div>
		</div>
	)
}

const books = [
	{ id: 'book-1', author: 'Harper Lee', title: 'To Kill a Mockingbird' },
	{ id: 'book-2', author: 'Lev Tolstoy', title: 'War and Peace' },
	{ id: 'book-3', author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
	{ id: 'book-4', author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
	{ id: 'book-5', author: 'George Orwell', title: '1984' },
	{ id: 'book-6', author: 'Jane Austen', title: 'Pride and Prejudice' },
	{ id: 'book-7', author: 'Marcus Aurelius', title: 'Meditations' },
	{
		id: 'book-8',
		author: 'Fyodor Dostoevsky',
		title: 'The Brothers Karamazov',
	},
	{ id: 'book-9', author: 'Lev Tolstoy', title: 'Anna Karenina' },
	{ id: 'book-10', author: 'Fyodor Dostoevsky', title: 'Crime and Punishment' },
]
