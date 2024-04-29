import { createContext, useContext, useState } from 'react'
import type { UseComboboxReturnValue } from 'downshift'
import { useCombobox } from 'downshift'
import { Book, books, getBooksFilter } from './combobox-ex'

type MyComboboxType = Pick<
	UseComboboxReturnValue<unknown>,
	| 'getInputProps'
	| 'getItemProps'
	| 'getLabelProps'
	| 'getMenuProps'
	| 'getToggleButtonProps'
	| 'highlightedIndex'
	| 'isOpen'
	| 'selectedItem'
> & {
	items: Book[]
}

const ComboboxContext = createContext<MyComboboxType | null>(null)

export function ComboboxProvider<T extends unknown[]>({
	children,
	initialItems,
	filterFn = getBooksFilter,
}: {
	children: React.ReactNode
	initialItems: T
	filterFn: (inputValue: string) => boolean
}) {
	const [items, setItems] = useState(initialItems)
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
			// setItems(initialItems.filter(getBooksFilter(inputValue)))
			setItems(initialItems.filter(filterFn(inputValue)))
		},
		items,
		itemToString(item) {
			return item ? item.title : ''
		},
	})
	const value = {
		isOpen,
		getToggleButtonProps,
		getLabelProps,
		getMenuProps,
		getInputProps,
		highlightedIndex,
		getItemProps,
		selectedItem,
		items,
	} satisfies MyComboboxType

	return (
		<ComboboxContext.Provider value={value}>
			<div className="flex w-72 flex-col gap-1">{children}</div>
		</ComboboxContext.Provider>
	)
}

export function useComboboxContext() {
	const context = useContext(ComboboxContext)
	if (context === null) {
		throw new Error('useComboboxContext must be used within a ComboboxProvider')
	}

	return context
}

export function ComboboxLabel({ children }: { children: React.ReactNode }) {
	const { getLabelProps } = useComboboxContext()

	return (
		<label className="w-fit" {...getLabelProps()}>
			{children}
		</label>
	)
}

export function ComboboxInput() {
	const { getInputProps } = useComboboxContext()

	return (
		<input
			placeholder="Best book ever"
			className="w-full p-1.5"
			{...getInputProps()}
		/>
	)
}

export function ComboboxToggleButton() {
	const { getToggleButtonProps, isOpen } = useComboboxContext()

	return (
		<button
			aria-label="toggle menu"
			className="px-2"
			type="button"
			{...getToggleButtonProps()}
		>
			{isOpen ? <>&#8593;</> : <>&#8595;</>}
		</button>
	)
}

export function ComboboxMenu() {
	const { getMenuProps, getItemProps, items, isOpen } = useComboboxContext()

	if (!isOpen) {
		return null
	}
	return (
		<ul className="bg-white shadow-sm" {...getMenuProps()}>
			{items.map((item, index) => (
				<li key={item.id} className="p-1" {...getItemProps({ item, index })}>
					{item.title}
				</li>
			))}
		</ul>
	)
}

export function Combooo() {
	return (
		<>
			<ComboboxProvider initialItems={books}>
				<ComboboxLabel>Choose your favorite book:</ComboboxLabel>
				<div className="flex gap-0.5 bg-white shadow-sm">
					<ComboboxInput />
					<ComboboxToggleButton />
				</div>
				<ComboboxMenu />
			</ComboboxProvider>
			<p>hello</p>
		</>
	)
}
