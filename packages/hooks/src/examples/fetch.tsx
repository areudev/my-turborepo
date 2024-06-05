import { useState } from 'react'
import { useFetch } from '../lib/use-fetch'

export default function App() {
	const [count, setCount] = useState(1)
	const { error, data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${count}`)

	return (
		<section>
			<h1>Pokemon</h1>
			<button
				disabled={count < 2}
				className="link"
				onClick={() => setCount(c => c - 1)}
			>
				Prev
			</button>
			<button className="link" onClick={() => setCount(c => c + 1)}>
				Next
			</button>
			{/* @ts-expect-error wtf */}
			<PokemonCard loading={!data} error={error} pokemon={data} />
		</section>
	)
}

function PokemonCard({
	loading,
	error,
	pokemon,
}: {
	loading: boolean
	pokemon?: {
		name: string
		sprites: {
			front_default: string
		}
	}
	error?: Error
}) {
	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error.message}</p>
	return (
		<div>
			<h2>{pokemon!.name}</h2>
			<img
				style={{
					width: 200,
					height: 200,
				}}
				src={pokemon!.sprites.front_default}
				alt={pokemon!.name}
			/>
		</div>
	)
}
