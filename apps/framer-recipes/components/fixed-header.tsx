'use client'

import { useMotionValue, useScroll, motion, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export function FixedHeader() {
	const { scrollY } = useScroll()
	const height = useTransform(scrollY, v => Math.max(80 - 0.1 * v, 50))

	useEffect(() => {
		return scrollY.on('change', current => {
			console.log(current)
		})
	}, [scrollY])
	console.log(scrollY.get())

	return (
		<div className="mx-auto flex w-full max-w-3xl flex-1 overflow-hidden text-slate-600">
			<div className="z-0 flex-1 overflow-y-scroll">
				<motion.header
					style={{
						height,
					}}
					className="fixed inset-x-0 flex h-20 bg-white shadow"
				>
					<div className="mx-auto flex w-full max-w-3xl items-center justify-between px-8">
						<p className="flex origin-left items-center text-xl font-semibold uppercase">
							<span className="-ml-1.5 inline-block -rotate-90 text-[10px] leading-[0]">
								The
							</span>
							<span className="-ml-1 text-2xl tracking-[-.075em]">
								Daily Bugle
							</span>
						</p>
						<nav className="flex space-x-4 text-xs font-medium text-slate-400">
							<a href="#">News</a>
							<a href="#">Sports</a>
							<a href="#">Culture</a>
						</nav>
					</div>
				</motion.header>

				<main className="px-8 pt-28">
					<h1 className="h-10 w-4/5 rounded bg-slate-200 text-2xl font-bold" />
					<div className="mt-8 space-y-6">
						{[...Array(2)].map((_, i) => (
							<div key={i} className="space-y-2 text-sm">
								<p className="h-4 w-5/6 rounded bg-slate-200" />
								<p className="h-4 rounded bg-slate-200" />
								<p className="h-4 w-4/6 rounded bg-slate-200" />
							</div>
						))}
						<div className="h-64 rounded bg-slate-200"></div>
						{[...Array(90)].map((_, i) => (
							<div key={i} className="space-y-2 text-sm">
								<p className="h-4 w-5/6 rounded bg-slate-200" />
								<p className="h-4 rounded bg-slate-200" />
								<p className="h-4 w-4/6 rounded bg-slate-200" />
							</div>
						))}
					</div>
				</main>
			</div>
		</div>
	)
}

// const { scrollY } = useScroll()
// const height = useMotionValue(80)

// useEffect(() => {
// 	return scrollY.on('change', current => {
// 		const previous = scrollY.getPrevious()
// 		const diff = current - (previous ?? current)
// 		const newHeight = height.get() - diff

// 		height.set(Math.max(0, Math.min(80, newHeight)))
// 	})
// }, [height, scrollY])
