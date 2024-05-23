import { useEffect, useRef, useState } from 'react'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	// CommandInput,
	CommandItem,
	CommandList,
	CommandProvider,
} from '../lib/my-command'

export function CommandDemo() {
	const [value, setValue] = useState('')
	const ref = useRef<HTMLInputElement | null>(null)
	const whatref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const element = whatref.current
		if (!element) return
		element.onmouseleave = () => {
			console.log('you left the container')
		}
	}, [])

	useEffect(() => {
		const element = ref.current
		if (!element) return
		element.onmouseleave = () => {
			console.log('you left the input')
		}
	}, [])

	return (
		<div className="flex w-96 flex-col items-center justify-center gap-2">
			{/* <Command ref={ref}> */}
			<CommandProvider>
				<Command
					filter={(value, search) => {
						console.log('filtering', value, search)
						if (value.includes(search)) return 1
						return 0
					}}
					ref={whatref}
				>
					<CommandInput
						ref={ref}
						onClick={() => {
							console.log('you clicked by i closed :(')
						}}
						value={value}
						onValueChange={setValue}
						placeholder="Type a command or search..."
					/>
					{/* {open ? ( */}
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="books">
							{books.map(book => (
								<CommandItem
									value={`${book.title} ${book.author} ${book.id}`}
									onSelect={() => {
										console.log('selected', book.title)
										// setOpen(false)
										setValue(book.author)
									}}
									key={book.id}
								>
									{book.title}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
					{/* ) : null} */}
				</Command>
			</CommandProvider>
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
