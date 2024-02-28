'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

const images = [
	'/1.jpeg',
	'/2.jpeg',
	'/3.jpeg',
	'/4.jpeg',
	'/5.jpeg',
	'/6.jpeg',
]

export function Carousel() {
	const [index, setIndex] = useState(0)

	return (
		<div className="h-full bg-black">
			<div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
				<div className="relative">
					<div className="relative overflow-hidden">
						<motion.div
							animate={{ x: `-${index * 100}%` }}
							transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
							className="flex"
						>
							{images.map(image => (
								<img
									key={image}
									src={image}
									className="aspect-[3/2] object-cover"
								/>
							))}
						</motion.div>
					</div>
					{/* <img
						src={images[index]}
						alt="carousel"
						className="aspect-[3/2] object-cover"
					/> */}
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
