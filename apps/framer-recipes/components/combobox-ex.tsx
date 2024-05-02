// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/consistent-type-definitions */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/label-has-associated-control */
'use client'
import { useState } from 'react'
import { useCombobox } from '@/utils/use-combobox'

export type Book = {
	id: string
	author: string
	title: string
}

export const books = [
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
	{
		id: 'book-10',
		author: 'Fyodor Dostoevsky',
		title: 'Crime and Punishment',
	},
]

export function getBooksFilter(inputValue: string) {
	const lowerCasedInputValue = inputValue.toLowerCase()

	return function booksFilter(book: { author: string; title: string }) {
		return (
			!inputValue ||
			book.title.toLowerCase().includes(lowerCasedInputValue) ||
			book.author.toLowerCase().includes(lowerCasedInputValue)
		)
	}
}

export function ComboboxExample() {
	const [items, setItems] = useState(books)
	const {
		isOpen,
		getToggleButtonProps,
		getLabelProps,
		getMenuProps,
		getInputProps,
		highlightedIndex,
		getItemProps,
		selectedItem,
	} = useCombobox({
		onInputValueChange({ inputValue }) {
			setItems(books.filter(getBooksFilter(inputValue)))
		},
		items,
		itemToString(item) {
			return item ? item.title : ''
		},
	})

	return (
		<div className="">
			<div className="flex w-72 flex-col gap-1">
				<label className="w-fit" {...getLabelProps()}>
					Choose your favorite book:
				</label>
				<div className="flex gap-0.5 bg-white shadow-sm">
					<input
						placeholder="Best book ever"
						className="w-full p-1.5"
						{...getInputProps()}
					/>
					<button
						aria-label="toggle menu"
						className="px-2"
						type="button"
						{...getToggleButtonProps()}
					>
						{isOpen ? <>&#8593;</> : <>&#8595;</>}
					</button>
				</div>
			</div>
			<ul
				className={`absolute z-10 mt-1 max-h-80 w-72 overflow-scroll bg-white p-0 shadow-md ${
					!(isOpen && items.length) ? 'hidden' : ''
				}`}
				{...getMenuProps()}
			>
				{isOpen
					? items.map((item, index) => (
							<li
								className={`flex flex-col px-3 py-2 shadow-sm ${
									highlightedIndex === index ? 'bg-blue-300' : ''
								} ${selectedItem === item ? 'font-bold' : ''}`}
								key={item.id}
								{...getItemProps({ item, index })}
							>
								<span>{item.title}</span>
								<span>{item.author}</span>
								<span className="text-sm text-gray-700">{item.author}</span>
							</li>
						))
					: null}
			</ul>
		</div>
	)
}
