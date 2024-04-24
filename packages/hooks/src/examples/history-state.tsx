import { useState } from 'react'
import { useHistoryState } from '../lib/use-history-state'
import './history-state.css'

export default function HistoryState() {
	const { state, set, undo, redo, clear, canUndo, canRedo } = useHistoryState<{
		items: { id: string; name: string }[]
	}>({
		items: [],
	})

	console.log(state)
	const addTodo = (val: string) => {
		set({
			...state,
			items: state.items.concat({ id: crypto.randomUUID(), name: val }),
		})
	}
	// const addTodo = () => {}

	const removeTodo = (id: string) => {
		set({
			...state,
			items: state.items.filter(item => item.id !== id),
		})
	}

	return (
		<section>
			<header>
				<h1>useHistoryState</h1>
				<div>
					<button disabled={!canUndo} className="link" onClick={undo}>
						Undo
					</button>
					<button disabled={!canRedo} className="link" onClick={redo}>
						Redo
					</button>

					<button
						disabled={!state.items.length}
						className="link"
						onClick={clear}
					>
						Clear
					</button>
				</div>
				<Form addItem={addTodo} />
			</header>

			<ul>
				{state.items.map((item, index) => {
					return (
						<li key={index}>
							<span>{item.name}</span>
							<button className="link" onClick={() => removeTodo(item.id)}>
								Delete
							</button>
						</li>
					)
				})}
			</ul>
		</section>
	)
}

function Form({ addItem }: { addItem: (val: string) => void }) {
	const [value, setValue] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		addItem(value)
		setValue('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder="Add a todo"
			/>
			<button type="submit">Add</button>
		</form>
	)
}
