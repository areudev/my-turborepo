'use client'

import { useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'

const images = [
	'/1.jpeg',
	'/2.jpeg',
	'/3.jpeg',
	'/4.jpeg',
	'/5.jpeg',
	'/6.jpeg',
]

export function Carousel() {
	const [index, setIndex] = useState(1)

	return (
		<MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
			<div className="h-full bg-black">
				<div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
					<div className="relative">
						<div className="relative overflow-hidden">
							<motion.div animate={{ x: `-${index * 100}%` }} className="flex">
								{images.map(image => (
									<img
										key={image}
										src={image}
										className="aspect-[3/2] object-cover"
									/>
								))}
							</motion.div>
						</div>

						<AnimatePresence>
							{index > 0 && (
								<motion.button
									initial={{ opacity: 0 }}
									animate={{ opacity: 0.7 }}
									exit={{ opacity: 0, pointerEvents: 'none' }}
									whileHover={{ scale: 1.1, opacity: 1 }}
									className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
									onClick={() => setIndex(index - 1)}
								>
									<CaretLeftIcon className="h-8 w-8" />
								</motion.button>
							)}
						</AnimatePresence>

						<AnimatePresence>
							{index + 1 < images.length && (
								<motion.button
									initial={{ opacity: 0 }}
									animate={{ opacity: 0.7 }}
									exit={{ opacity: 0, pointerEvents: 'none' }}
									whileHover={{ scale: 1.1, opacity: 1 }}
									className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
									onClick={() => setIndex(index + 1)}
								>
									<CaretRightIcon className="h-6 w-6" />
								</motion.button>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</MotionConfig>
	)
}
