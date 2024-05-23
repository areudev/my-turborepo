import { useRef, useState } from 'react'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '../lib/my-command'
import { useEventListener } from '../hooks/event'

export function CommandDemo() {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState('')
	const ref = useRef<HTMLDivElement | null>(null)

	const handleClick = (e: MouseEvent | TouchEvent) => {
		const element = ref.current
		if (!element || element.contains(e.target as Node)) return
		if (open) {
			setOpen(false)
		}
	}
	useEventListener('mousedown', handleClick)
	useEventListener('touchstart', handleClick)

	return (
		<div className="flex w-96 items-center justify-center">
			<Command ref={ref}>
				<CommandInput
					onClick={() => {
						if (!open) setOpen(open => !open)
					}}
					value={value}
					onValueChange={setValue}
					placeholder="Type a command or search..."
				/>
				{open ? (
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="books">
							{books.map(book => (
								<CommandItem
									value={book.title}
									onSelect={() => {
										console.log('selected', book.title)
										// setOpen(false)
										setValue(book.title)
									}}
									key={book.id}
								>
									{book.title}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				) : null}
			</Command>
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
