'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import {
	addMonths,
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	isSameMonth,
	parse,
	startOfMonth,
	startOfWeek,
	subMonths,
} from 'date-fns'
import { useState } from 'react'
import type { Variants } from 'framer-motion'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { Resisable } from '@/utils/resisable'

export function Calendar() {
	const [monthString, setMonthString] = useState(format(new Date(), 'yyyy-MM'))
	const [direction, setDirection] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)
	const month = parse(monthString, 'yyyy-MM', new Date())

	function nextMonth() {
		if (isAnimating) return
		const next = addMonths(month, 1)
		setMonthString(format(next, 'yyyy-MM'))
		setDirection(1)
		setIsAnimating(true)
	}

	function previousMonth() {
		if (isAnimating) return

		const previous = subMonths(month, 1)
		setMonthString(format(previous, 'yyyy-MM'))
		setDirection(-1)
		setIsAnimating(true)
	}

	const days = eachDayOfInterval({
		start: startOfWeek(startOfMonth(month)),
		end: endOfWeek(endOfMonth(month)),
	})

	return (
		<MotionConfig transition={{ duration: 0.4 }}>
			<div className="flex min-h-screen items-start bg-stone-800 pt-16 text-stone-900">
				<div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-white">
					<div className="py-8">
						<div className="flex flex-col justify-center rounded text-center">
							<Resisable>
								<AnimatePresence
									onExitComplete={() => setIsAnimating(false)}
									mode="popLayout"
									initial={false}
									custom={direction}
								>
									<motion.div
										initial="enter"
										animate="middle"
										exit="exit"
										key={monthString}
									>
										<header className="relative flex justify-between px-8">
											<motion.button
												variants={removeImmediate}
												className="z-10 rounded-full p-1.5 hover:bg-stone-100"
												onClick={previousMonth}
											>
												<ChevronLeftIcon className="h-4 w-4" />
											</motion.button>

											<motion.p
												custom={direction}
												variants={variants}
												className="absolute inset-0 flex items-center justify-center font-semibold"
											>
												{format(month, 'MMMM yyyy')}
											</motion.p>
											<motion.button
												variants={removeImmediate}
												className="z-10 rounded-full p-1.5 hover:bg-stone-100"
												onClick={nextMonth}
											>
												<ChevronRightIcon className="h-4 w-4" />
											</motion.button>
											<div
												className="absolute inset-0 "
												style={{
													backgroundImage:
														'linear-gradient(to right, white 15%, transparent 30%,transparent 70%, white 85%)',
												}}
											/>
										</header>
										<motion.div
											variants={removeImmediate}
											className="mt-6 grid grid-cols-7 gap-y-6 px-8"
										>
											<span className="font-medium text-stone-500">Su</span>
											<span className="font-medium text-stone-500">Mo</span>
											<span className="font-medium text-stone-500">Tu</span>
											<span className="font-medium text-stone-500">We</span>
											<span className="font-medium text-stone-500">Th</span>
											<span className="font-medium text-stone-500">Fr</span>
											<span className="font-medium text-stone-500">Sa</span>
										</motion.div>
										<motion.div
											custom={direction}
											variants={variants}
											className="mt-6 grid grid-cols-7 gap-y-6 px-8"
										>
											{days.map(day => (
												<span
													className={`${
														isSameMonth(day, month) ? '' : 'text-stone-300'
													} font-semibold `}
													key={format(day, 'yyyy-MM-dd')}
												>
													{format(day, 'd')}
												</span>
											))}
										</motion.div>
									</motion.div>
								</AnimatePresence>
							</Resisable>
						</div>
					</div>
				</div>
			</div>
		</MotionConfig>
	)
}

const variants: Variants = {
	enter: (direction: number) => ({ x: `${100 * direction}%`, opacity: 0 }),
	middle: { x: '0%', opacity: 1 },
	exit: (direction: number) => ({ x: `${-100 * direction}%`, opacity: 0 }),
}

const removeImmediate: Variants = {
	exit: { visibility: 'hidden' },
}
