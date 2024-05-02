import { useEffect, useState } from 'react'
import { useDebounce } from '../lib/use-debounce'

const fetchData = async ({ query = '', page = 0, tag = '' }) => {
	return fetch(
		`https://hn.algolia.com/api/v1/search?query=${query}&tags=${encodeURIComponent(
			tag,
		)}&page=${page}`,
	)
		.then(response => response.json())
		.then(json => ({
			results: json.hits || [],
			pages: json.nbPages || 0,
			resultsPerPage: json.hitsPerPage || 20,
		}))
}

export default function HackerNewsSearch() {
	const [query, setQuery] = useState('')
	const [results, setResults] = useState([])
	const [tag, setTag] = useState('story')
	const [page, setPage] = useState(0)
	const [resultsPerPage, setResultsPerPage] = useState(0)
	const [totalPages, setTotalPages] = useState(50)
	const [loading, setLoading] = useState(false)
	const debounced = useDebounce(query, 500)

	useEffect(() => {
		let ignored = false
		async function handleFetchData() {
			setLoading(true)
			// setResults([])

			const { results, pages, resultsPerPage } = await fetchData({
				query: debounced,
				page,
				tag,
			})
			if (ignored) return
			setTotalPages(pages)
			setResults(results)
			setLoading(false)
			setResultsPerPage(resultsPerPage)
		}

		handleFetchData()
		return () => {
			ignored = true
		}
	}, [debounced, page, tag])

	const handleSearch = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setQuery(e.target.value)
		setPage(0)
	}

	const handleTag = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setTag(e.target.value)
		setPage(0)
	}

	const handleNextPage = () => {
		setPage(page + 1)
	}

	const handlePrevPage = () => {
		setPage(page - 1)
	}

	return (
		<section>
			<h1>Hacker News Search</h1>
			<form
				style={{
					display: 'flex',
					gap: 16,
				}}
				onSubmit={e => e.preventDefault()}
			>
				<div
					style={{
						display: 'flex',
						gap: 8,
					}}
				>
					<label htmlFor="query">Search</label>
					<input
						type="text"
						id="query"
						name="query"
						value={query}
						onChange={handleSearch}
						placeholder="Search Hacker News..."
					/>
				</div>
				<div
					style={{
						display: 'flex',
						gap: 8,
					}}
				>
					<label htmlFor="tag">Tag</label>
					<select id="tag" name="tag" onChange={handleTag} value={tag}>
						<option value="story">Story</option>
						<option value="ask_hn">Ask HN</option>
						<option value="show_hn">Show HN</option>
						<option value="poll">Poll</option>
					</select>
				</div>
			</form>
			<section>
				<header>
					<h2>
						<span>
							{totalPages === 0
								? 'No Results'
								: `Page ${page + 1} of ${totalPages}`}
						</span>
						<RotatingLines
							strokeColor="grey"
							strokeWidth="5"
							animationDuration="0.75"
							width="20"
							visible={loading}
						/>
					</h2>
					<div>
						<button onClick={handlePrevPage} disabled={page === 0}>
							Previous
						</button>
						<button onClick={handleNextPage} disabled={page + 1 === totalPages}>
							Next
						</button>
					</div>
				</header>
				<ul>
					{results.map(({ url, objectID, title }, index) => {
						const href =
							url || `https://news.ycombinator.com/item?id=${objectID}`

						return (
							<li
								style={{
									listStyleType: 'none',
								}}
								key={null}
							>
								<span>{page * resultsPerPage + (index + 1)}. </span>
								<a href={href} target="_blank" rel="noreferrer">
									{title}
								</a>
							</li>
						)
					})}
				</ul>
			</section>
		</section>
	)
}

function RotatingLines({
	width = 20,
	strokeWidth = 5,
	strokeColor = 'black',
	animationDuration = 1,
	visible = false,
}: {
	width?: number | string
	strokeWidth?: number | string
	strokeColor?: string
	animationDuration?: number | string
	visible?: boolean
}) {
	return (
		<svg
			style={{
				visibility: visible ? 'visible' : 'hidden',
				marginLeft: 8,
			}}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			width={width}
			height={width}
		>
			<circle
				cx="50"
				cy="50"
				r="45"
				fill="none"
				stroke={strokeColor}
				strokeWidth={strokeWidth}
				strokeDasharray="1,200"
				strokeDashoffset="0"
			>
				<animate
					attributeName="stroke-dasharray"
					values="1 200;89 200;89 200"
					dur={`${animationDuration}s`}
					repeatCount="indefinite"
				/>
				<animate
					attributeName="stroke-dashoffset"
					values="0;-105;-124"
					dur={`${animationDuration}s`}
					repeatCount="indefinite"
				/>
			</circle>
		</svg>
	)
}
