import { useRef, useState } from 'react'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	openReducer,
} from '../lib/commando'

// const reducer: typeof openReducer = (state, action) => {
// 	switch (action.type) {
// 		case 'open': {
// 			return { open: true }
// 		}
// 		case 'close':
// 			return { open: false }
// 		case 'toggle':
// 			return { open: !state.open }
// 		default:
// 			return state
// 	}
// }

export function CommandDemo() {
	const [timesClicked, setTimesClicked] = useState(0)
	// const [open, setOpen] = useState(false)
	const [value, setValue] = useState('')
	const inputRef = useRef<HTMLInputElement>(null)
	const divRef = useRef<HTMLDivElement>(null)

	return (
		<div className="flex w-96 flex-col items-center justify-center gap-2">
			<Command
				// initialOpen={true}
				loop
				onClick={() => {
					setTimesClicked(prev => prev + 1)
				}}
				reducer={(state, action) => {
					if (action.type === 'open' && timesClicked >= 4) {
						return { open: false }
					}
					return openReducer(state, action)
				}}
				// open={open}
				// onOpenChange={o => {
				// 	console.log('open', o)
				// 	setOpen(o)
				// }}
				ref={divRef}
			>
				<CommandInput
					name="command-input"
					ref={inputRef}
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
								onSelect={() => {
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
				<p>Selected: {value} </p>
				<p>Times Clicked: {timesClicked}</p>
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
