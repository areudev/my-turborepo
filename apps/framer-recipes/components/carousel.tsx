'use client'

import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

import { useState } from 'react'

const images = [
	'/1.jpeg',
	'/2.jpeg',
	'/3.jpeg',
	'/4.jpeg',
	'/5.jpeg',
	'/6.jpeg',
]

export function Carousel() {
	const [index, setIndex] = useState(2)

	return (
		<div className="h-full bg-black">
			<div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
				<div className="relative">
					<img
						src={images[index]}
						alt="carousel"
						className="aspect-[3/2] object-cover"
					/>
					{index > 0 && (
						<button
							className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/60 transition hover:bg-white/80"
							onClick={() => setIndex(index - 1)}
						>
							<ArrowLeftIcon className="h-6 w-6" />
						</button>
					)}

					{index + 1 < images.length && (
						<button
							className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/60 transition hover:bg-white/80"
							onClick={() => setIndex(index + 1)}
						>
							<ArrowRightIcon className="h-6 w-6" />
						</button>
					)}
				</div>
			</div>
		</div>
	)
}
